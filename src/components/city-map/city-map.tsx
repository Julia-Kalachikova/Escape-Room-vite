import 'leaflet/dist/leaflet.css';
import { Marker } from 'leaflet';
import { Map, TileLayer, Icon } from 'leaflet';
import { useEffect, useRef } from 'react';

type LocationType = {
  latitude: number;
  longitude: number;
  zoom: number;
};

const location: LocationType = {
  latitude: 59.968299,
  longitude: 30.317271,
  zoom: 13,
};

const customIcon = new Icon({
  iconUrl: 'markup/img/svg/pin.svg',
  iconSize: [30, 40],
  iconAnchor: [20, 40],
});

export default function CityMap(): JSX.Element {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (mapRef.current) {
      const map = new Map('map').setView([location.latitude, location.longitude], location.zoom);

      const layer = new TileLayer(
        'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
        {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy;<a href="https://carto.com/attributions">CARTO</a>'
        }
      );
      map.addLayer(layer);

      const marker = new Marker([location.latitude, location.longitude]);
      marker.setIcon(customIcon).addTo(map);

      return () => {
        map.remove();
      };
    }
  }, []);

  return <div style={{ height: '100%' }} id='map' ref={mapRef}></div>;
}


