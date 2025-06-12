import Link from 'next/link';
import itinerary from './data/itinerary';
import styles from './styles/home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Itinerario Bari (mare, cibo e pompini)</h1>
      <ul className={styles.list}>
        {itinerary.map((day) => (
          <li key={day.id} className={styles.listItem}>
            <Link href={`/giorni/${day.id}`} className={styles.link}>
              {day.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
