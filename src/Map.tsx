import MapGL, {
  AttributionControl,
  NavigationControl,
} from "react-map-gl/maplibre";
import { setWorkerUrl } from "maplibre-gl";
import workerUrl from "maplibre-gl/dist/maplibre-gl-worker.mjs?worker&url";
import "maplibre-gl/dist/maplibre-gl.css";
import "./Map.css";

setWorkerUrl(workerUrl);

const STYLE_URL = "https://tiles.openfreemap.org/styles/liberty";

export const Map = () => (
  <section id="map">
    <MapGL
      initialViewState={{ longitude: 25.2797, latitude: 54.6872, zoom: 11 }} // Vilnius
      mapStyle={STYLE_URL}
      attributionControl={false}
    >
      <NavigationControl position="top-right" />
      <AttributionControl compact />
    </MapGL>
  </section>
);
