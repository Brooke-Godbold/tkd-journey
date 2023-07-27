import { useState, useCallback } from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";

import "./how-to-find.styles.css";

const center = {
  lat: 51.5,
  lng: -0.037,
};

export default function HowToFindUs() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyC-t5WQLQ4kvH2dg4sPqQzt9wJC6hCEYYg",
  });

  const [map, setMap] = useState(null);

  const onLoad = useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = useCallback(function callback(map) {
    setMap(null);
  }, []);

  return (
    <section className="section-location">
      <div className="container">
        <h2 className="heading-secondary margin-bottom-md">How To Find Us</h2>
        <div className="grid">
          <div className="location">
            <div className="location-map-container">
              {isLoaded ? (
                <GoogleMap
                  mapContainerClassName="location-map"
                  center={center}
                  zoom={10}
                  onLoad={onLoad}
                  onUnmount={onUnmount}
                >
                  <Marker position={center} />
                </GoogleMap>
              ) : (
                <></>
              )}
            </div>
            <div className="location-text-box">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                sagittis ut nisi sed convallis. Aliquam sed arcu convallis ipsum
                consectetur placerat. Nunc ligula quam, commodo vitae magna at,
                pretium efficitur magna. Aenean porta sit amet ex sit amet
                rutrum. Vivamus vel malesuada orci. Fusce molestie a erat at
                luctus. Mauris a fringilla est. Nunc lobortis sollicitudin
                mauris et tempus.
              </p>
              <p>
                Donec at bibendum enim. Curabitur in eros quis lectus laoreet
                consectetur. Integer elementum rhoncus urna, vehicula ultrices
                nunc elementum eget. Donec vitae lorem id neque tincidunt
                aliquam rutrum eu nisi. Sed non egestas quam. Etiam tincidunt,
                justo in malesuada interdum, nulla nunc suscipit ligula, eu
                gravida felis tellus ac sapien. Nullam eget dui at velit
                imperdiet venenatis vel ullamcorper ante. Nullam at posuere mi.
                Mauris lacinia velit vel sodales pretium.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
