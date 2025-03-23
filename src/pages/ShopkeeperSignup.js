import React, { useState, useEffect } from "react";

function ShopkeeperSignup() {
  const [location, setLocation] = useState({ lat: null, lng: null });
  const [mapLoaded, setMapLoaded] = useState(false);

  useEffect(() => {
    loadGoogleMapsScript();
  }, []);

  const loadGoogleMapsScript = () => {
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap`;
    script.async = true;
    window.initMap = initMap;
    document.body.appendChild(script);
  };

  const initMap = () => {
    const map = new window.google.maps.Map(document.getElementById("map"), {
      center: { lat: 19.076, lng: 72.8777 }, // Default center (Mumbai)
      zoom: 12,
    });

    const marker = new window.google.maps.Marker({
      position: { lat: 19.076, lng: 72.8777 },
      map: map,
      draggable: true,
    });

    map.addListener("click", (event) => {
      const lat = event.latLng.lat();
      const lng = event.latLng.lng();
      setLocation({ lat, lng });
      marker.setPosition({ lat, lng });
    });

    setMapLoaded(true);
  };

  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        setLocation({ lat: latitude, lng: longitude });

        const map = new window.google.maps.Map(document.getElementById("map"), {
          center: { lat: latitude, lng: longitude },
          zoom: 15,
        });

        new window.google.maps.Marker({
          position: { lat: latitude, lng: longitude },
          map: map,
        });
      });
    } else {
      alert("Geolocation is not supported by your browser.");
    }
  };

  return (
    <div className="container mt-5">
      <h1> Shopkeeper Signup </h1>{" "}
      <form>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            {" "}
            Full Name{" "}
          </label>{" "}
          <input type="text" className="form-control" id="name" required />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            {" "}
            Email address{" "}
          </label>{" "}
          <input type="email" className="form-control" id="email" required />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            {" "}
            Password{" "}
          </label>{" "}
          <input
            type="password"
            className="form-control"
            id="password"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="shopname" className="form-label">
            {" "}
            Shop Name{" "}
          </label>{" "}
          <input type="text" className="form-control" id="shopname" required />
        </div>
        <div className="mb-3">
          <label className="form-label"> Select Location </label>{" "}
          <div
            id="map"
            style={{ height: "400px", width: "100%", marginBottom: "20px" }}
          >
            {" "}
          </div>
          <button
            type="button"
            className="btn btn-primary mb-3"
            onClick={getCurrentLocation}
          >
            Use Current Location{" "}
          </button>
          {location.lat && location.lng && (
            <p>
              Selected Location: Latitude: {location.lat.toFixed(4)}, Longitude:{" "}
              {location.lng.toFixed(4)}{" "}
            </p>
          )}{" "}
        </div>
        <button type="submit" className="btn btn-success">
          {" "}
          Register as Shopkeeper{" "}
        </button>{" "}
      </form>{" "}
    </div>
  );
}

export default ShopkeeperSignup;
