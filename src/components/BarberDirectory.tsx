"use client";
import { useState } from "react";
import Link from "next/link";
import { barbers } from "@/Data/barbers";

export default function BarberDirectory() {
  const [location, setLocation] = useState("All");
  const locations = [...new Set(barbers.map(barber => barber.location))];
  const visible = barbers.filter(barber => location === "All" || barber.location === location);
  return <>
    <div className="field prose">
      <label htmlFor="location">Example area</label>
      <select id="location" value={location} onChange={event => setLocation(event.target.value)}>
        <option value="All">All areas</option>
        {locations.map(value => <option key={value}>{value}</option>)}
      </select>
    </div>
    <p role="status">{visible.length} example {visible.length === 1 ? "barber" : "barbers"}</p>
    <div className="grid">{visible.map(barber => <article key={barber.id} className="card">
      <p className="eyebrow">Example listing</p>
      <h2>{barber.name}</h2>
      <p>{barber.location}</p>
      <ul>{barber.services.map(service => <li key={service.id}>
        {service.name} — {service.price} GEL · {service.duration} minutes
      </li>)}</ul>
      <p className="muted">Sample prices only. No reviews or ratings are claimed.</p>
      <Link className="button" href={`/book?barber=${barber.id}`}>
        Preview services for {barber.name}
      </Link>
    </article>)}</div>
  </>;
}
