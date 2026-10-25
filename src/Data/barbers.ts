export type Service = { id: number; name: string; price: number; duration: number };
export type Barber = { id: number; name: string; location: string; services: Service[] };

// Illustrative catalog only. Replace with verified business data before real bookings.
export const barbers: Barber[] = [
  { id: 1, name: "Example barber A", location: "Example central area",
    services: [
      { id: 1, name: "Classic Cut", price: 25, duration: 30 },
      { id: 2, name: "Skin Fade", price: 30, duration: 40 },
    ] },
  { id: 2, name: "Example barber B", location: "Example north area",
    services: [{ id: 3, name: "Classic Cut", price: 20, duration: 30 }] },
  { id: 3, name: "Example barber C", location: "Example central area",
    services: [{ id: 4, name: "Hair + Beard", price: 35, duration: 50 }] },
];
