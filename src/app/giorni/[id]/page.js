import Link from "next/link";
import itinerary from "../../data/itinerary";
import styles from "../../styles/day.module.css";

export default function DayPage({ params }) {
  const { id } = params;
  const day = itinerary.find((d) => d.id === Number(id));

  if (!day) {
    return (
      <div className={styles.container}>
        <Link href="/" className={styles.backLink}>← Torna alla lista</Link>
        <p className={styles.error}>🛑 Giorno non trovato.</p>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <Link href="/" className={styles.backLink}>
        ← Torna alla lista
      </Link>

      <h1 className={styles.title}>{day.title}</h1>
      <p className={styles.description}>{day.description}</p>

      {day.image && (
        <img
          src={day.image}
          alt={day.title}
          className={styles.image}
        />
      )}

      <h3 className={styles.subtitle}>Punti Salienti</h3>
      <ul className={styles.list}>
        {day.highlights?.map((point, i) => (
          <li key={i} className={styles.listItem}>
            {point}
          </li>
        ))}
      </ul>

      {day.links?.length > 0 && (
        <>
          <h3 className={styles.subtitle}>Link vari</h3>
          <ul className={styles.linkList}>
            {day.links.map((link, i) => (
              <li key={i}>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

export async function generateStaticParams() {
  return Array.from({ length: 8 }, (_, i) => ({
    id: (i + 1).toString(),
  }));
}
