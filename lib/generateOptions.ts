import { countries, Country } from "./countries";
import { shuffleArray } from "./shuffle";

export function generateOptions(currentCountry: Country): Country[] {
  // 1. Same subregion
  let pool = countries.filter(
    (country) =>
      country.subregion === currentCountry.subregion &&
      country.name !== currentCountry.name
  );

  // 2. If not enough, add same region
  if (pool.length < 7) {
    const sameRegion = countries.filter(
      (country) =>
        country.region === currentCountry.region &&
        country.subregion !== currentCountry.subregion &&
        country.name !== currentCountry.name
    );

    pool = [...pool, ...sameRegion];
  }

  // 3. If still not enough, add remaining countries
  if (pool.length < 7) {
    const remaining = countries.filter(
      (country) =>
        country.region !== currentCountry.region &&
        country.name !== currentCountry.name
    );

    pool = [...pool, ...remaining];
  }

  // 4. Remove duplicates
  pool = pool.filter(
    (country, index, self) =>
      index === self.findIndex((c) => c.name === country.name)
  );

  // 5. Shuffle
  pool = shuffleArray(pool);

  // 6. Take first 9
  const options = pool.slice(0, 7);

  // 7. Add correct answer
  options.push(currentCountry);

  // 8. Shuffle again
  return shuffleArray(options);
}