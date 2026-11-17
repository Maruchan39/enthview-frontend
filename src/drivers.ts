export type Driver = {
  id: string;
  username: string;
  car: string;
  lng: number;
  lat: number;
};

/** Mock drivers scattered around Vilnius. Positions are stationary for now. */
export const DRIVERS: Driver[] = [
  { id: "d1", username: "ruta.k", car: "Mazda MX-5 NA", lng: 25.2799, lat: 54.6872 },
  { id: "d2", username: "tomasb", car: "Nissan Skyline R34 GT-R", lng: 25.2892, lat: 54.6801 },
  { id: "d3", username: "ieva_st", car: "Honda Civic Type R EK9", lng: 25.2782, lat: 54.696 },
  { id: "d4", username: "mpetrauskas", car: "BMW E30 M3", lng: 25.2466, lat: 54.6905 },
  { id: "d5", username: "gabija.n", car: "Toyota AE86 Trueno", lng: 25.2965, lat: 54.6812 },
  { id: "d6", username: "andriusj", car: "Subaru Impreza 22B", lng: 25.317, lat: 54.6947 },
  { id: "d7", username: "lina_v", car: "Porsche 911 964", lng: 25.2684, lat: 54.677 },
];
