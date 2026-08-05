// PLACEHOLDER DATA — replace each location's `metrics` with real model
// output before removing the "Illustrative" label in ClimateRiskSnapshot.
// Shape to preserve when swapping in a real export: one object per location,
// each metric with { label, unit, baseline, ssp126, ssp370 }.

export type ClimateMetric = {
  label: string;
  unit: string;
  baseline: number;
  ssp126: number;
  ssp370: number;
};

export type ClimateLocation = {
  id: string;
  location: string;
  coordinates: string;
  metrics: ClimateMetric[];
};

export const CLIMATE_LOCATIONS: ClimateLocation[] = [
  {
    id: "kota-kinabalu",
    location: "Kota Kinabalu, Sabah",
    coordinates: "5.97°N, 116.07°E",
    metrics: [
      { label: "Hot days (>35°C)", unit: "days / year", baseline: 4, ssp126: 18, ssp370: 46 },
      { label: "Heavy rainfall days (>50mm)", unit: "days / year", baseline: 12, ssp126: 15, ssp370: 21 },
    ],
  },
  {
    id: "kuching",
    location: "Kuching, Sarawak",
    coordinates: "1.55°N, 110.36°E",
    metrics: [
      { label: "Hot days (>35°C)", unit: "days / year", baseline: 5, ssp126: 17, ssp370: 42 },
      { label: "Heavy rainfall days (>50mm)", unit: "days / year", baseline: 16, ssp126: 20, ssp370: 27 },
    ],
  },
  {
    id: "kuala-lumpur",
    location: "Kuala Lumpur",
    coordinates: "3.14°N, 101.69°E",
    metrics: [
      { label: "Hot days (>35°C)", unit: "days / year", baseline: 8, ssp126: 25, ssp370: 60 },
      { label: "Heavy rainfall days (>50mm)", unit: "days / year", baseline: 18, ssp126: 22, ssp370: 30 },
    ],
  },
  {
    id: "george-town",
    location: "George Town, Penang",
    coordinates: "5.41°N, 100.33°E",
    metrics: [
      { label: "Hot days (>35°C)", unit: "days / year", baseline: 7, ssp126: 22, ssp370: 55 },
      { label: "Heavy rainfall days (>50mm)", unit: "days / year", baseline: 15, ssp126: 19, ssp370: 26 },
    ],
  },
  {
    id: "johor-bahru",
    location: "Johor Bahru, Johor",
    coordinates: "1.49°N, 103.74°E",
    metrics: [
      { label: "Hot days (>35°C)", unit: "days / year", baseline: 10, ssp126: 28, ssp370: 65 },
      { label: "Heavy rainfall days (>50mm)", unit: "days / year", baseline: 20, ssp126: 25, ssp370: 35 },
    ],
  },
  {
    id: "kuantan",
    location: "Kuantan, Pahang",
    coordinates: "3.82°N, 103.33°E",
    metrics: [
      { label: "Hot days (>35°C)", unit: "days / year", baseline: 6, ssp126: 20, ssp370: 50 },
      { label: "Heavy rainfall days (>50mm)", unit: "days / year", baseline: 22, ssp126: 28, ssp370: 38 },
    ],
  },
];
