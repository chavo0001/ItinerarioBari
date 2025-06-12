import Link from "next/link";
import itinerary from "../app/data/itinerary";

export default function Home() {
  return (
    <div style={{ maxWidth: 700, margin: "auto", padding: 20, fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ textAlign: "center", marginBottom: 30 }}>Itinerario di Viaggio - Bari & Dintorni</h1>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {itinerary.map(day => (
          <li key={day.id} style={{ marginBottom: 25, borderBottom: "1px solid #ddd", paddingBottom: 15 }}>
            <Link href={`/day/${day.id}`} legacyBehavior>
              <a style={{ fontSize: 20, fontWeight: "bold", color: "#0070f3", textDecoration: "none" }}>
                {day.title}
              </a>
            </Link>
            <p style={{ marginTop: 5 }}>{day.distanceFromHome}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
