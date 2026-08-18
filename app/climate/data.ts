// REAL DATA — Heat category. Outdoor WBGT (Kong-Huber method, daily mean),
// 11-model CMIP6 ensemble median, from wbgt_ensemble_summary.csv
// (baseline_1995_2014, mid_century_2041_2060). 
//
// All other hazard categories (Rainfall & Water, Wind, Coastal, Flood &
// Landslide) are "coming soon" — see HAZARD_CATEGORIES below — and
// deliberately carry no placeholder numbers here. 

export type ClimateMetric = {
  label: string;
  unit: string;
  baseline: number;
  ssp126: number;
  ssp245: number;
  ssp585: number;
};

export type ClimateLocation = {
  id: string;
  location: string;
  coordinates: string;
  metrics: ClimateMetric[];
};

export const HEAT_LOCATIONS: ClimateLocation[] = [
  {
    id: "kota-kinabalu",
    location: "Kota Kinabalu, Sabah",
    coordinates: "5.97°N, 116.07°E",
    metrics: [
      { label: "Outdoor WBGT (Kong-Huber, daily mean)", unit: "°C", baseline: 31.8, ssp126: 33.1, ssp245: 33.3, ssp585: 33.9 },
    ],
  },
  {
    id: "sepanggar-bay-port",
    location: "Sepanggar Bay Port, Sabah",
    coordinates: "6.01°N, 116.09°E",
    metrics: [
      { label: "Outdoor WBGT (Kong-Huber, daily mean)", unit: "°C", baseline: 31.7, ssp126: 33.0, ssp245: 33.2, ssp585: 33.8 },
    ],
  },
  {
    id: "kimanis",
    location: "Kimanis, Sabah",
    coordinates: "5.64°N, 115.89°E",
    metrics: [
      { label: "Outdoor WBGT (Kong-Huber, daily mean)", unit: "°C", baseline: 32.4, ssp126: 33.7, ssp245: 33.9, ssp585: 34.4 },
    ],
  },
  {
    id: "semporna-sipadan",
    location: "Sipadan, Sabah",
    coordinates: "4.30°N, 118.60°E",
    metrics: [
      { label: "Outdoor WBGT (Kong-Huber, daily mean)", unit: "°C", baseline: 33.7, ssp126: 34.7, ssp245: 35.0, ssp585: 35.3 },
    ],
  },
  {
    id: "kinabatangan",
    location: "Kinabatangan, Sabah",
    coordinates: "5.50°N, 118.35°E",
    metrics: [
      { label: "Outdoor WBGT (Kong-Huber, daily mean)", unit: "°C", baseline: 33.0, ssp126: 34.1, ssp245: 34.3, ssp585: 34.7 },
    ],
  },
];

export type HazardCategoryStatus = "live" | "coming-soon";

export interface HazardCategory {
  id: string;
  label: string;
  status: HazardCategoryStatus;
}

export const HAZARD_CATEGORIES: HazardCategory[] = [
  { id: "heat", label: "Heat", status: "live" },
  { id: "water", label: "Rainfall & Water", status: "coming-soon" },
  { id: "wind", label: "Wind", status: "coming-soon" },
  { id: "coastal", label: "Coastal", status: "coming-soon" },
  { id: "flood", label: "Flood & Landslide", status: "coming-soon" },
];
