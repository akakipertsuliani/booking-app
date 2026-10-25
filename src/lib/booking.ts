import { barbers } from "../Data/barbers";

export const businessTimeZone = "Asia/Tbilisi";
export function businessDate(now = new Date()) {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: businessTimeZone, year: "numeric", month: "2-digit", day: "2-digit",
  }).formatToParts(now);
  const get = (type: string) => parts.find(part => part.type === type)!.value;
  return `${get("year")}-${get("month")}-${get("day")}`;
}
export function dateAfter(value: string, days: number) {
  const date = new Date(`${value}T12:00:00Z`);
  date.setUTCDate(date.getUTCDate() + days);
  return date.toISOString().slice(0, 10);
}
export function validPreference(date: string, time: string, now = new Date()) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date) || !/^(?:[01]\d|2[0-3]):[0-5]\d$/.test(time)) return false;
  const parsed = new Date(`${date}T12:00:00Z`);
  if (Number.isNaN(parsed.getTime()) || parsed.toISOString().slice(0, 10) !== date) return false;
  const today = businessDate(now);
  return date >= dateAfter(today, 1) && date <= dateAfter(today, 90);
}
export function findSelection(barberId: number, serviceId: number) {
  const barber = barbers.find(item => item.id === barberId);
  const service = barber?.services.find(item => item.id === serviceId);
  return barber && service ? { barber, service } : null;
}
