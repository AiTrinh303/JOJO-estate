import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "./map.scss";
import "leaflet/dist/leaflet.css";
import Pin from "../pin/Pin";

function Map ({ items }){
  return (
    <MapContainer
      center={[48.1357045322373, 11.592585240306903]}
      zoom={7}
      scrollWheelZoom={false}
      className="map"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">
          OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[48.1357045322373, 11.592585240306903]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
}


// function Map({ items }) {
//   return (
//     <MapContainer
//       center={
//         items.length === 1
//           ? [items[0].latitude, items[0].longitude]
//           : [52.4797, -1.90269]
//       }
//       zoom={7}
//       scrollWheelZoom={false}
//       className="map"
//     >
//       <TileLayer
//         attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//       />
//       {items.map((item) => (
//         <Pin item={item} key={item.id} />
//       ))}
//     </MapContainer>
//   );
// }

export default Map;
