// import { Text } from "@simplybusiness/mobius";
import styles from "./Planets.module.css";

const getPlanets = async () => {
  const response = await fetch("https://swapi.dev/api/planets");
  const jsonData = await response.json();
  return jsonData.results as Planet[];
};

type Planet = {
  name: string;
  rotation_period: number;
  diameter: number;
};

export const Planets = async () => {
  const planets: Planet[] = await getPlanets();

  return (
    <>
      <h2>Example Planets API data</h2>
      <div className={styles.grid}>
        <div className={styles.header}>Name</div>
        <div className={styles.header}>Rotation Period</div>
        <div className={styles.header}>Diameter (miles)</div>
        {planets.map((planet: Planet) => (
          <>
            <div>{planet.name}</div>
            <div>{planet.rotation_period}</div>
            <div>{planet.diameter}</div>
          </>
        ))}
      </div>
    </>
  );
};
