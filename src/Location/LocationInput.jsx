import React from "react";
import useGetLocation from "./useGetLocation";

const LocationInput = () => {
  const [locationInput, setLocationInput] = React.useState({
    city: "",
    state: "",
    country: "US",
  });
  const [zip, setZip] = React.useState("");
  const { getLocation, location } = useGetLocation();
  const locationString = `${locationInput.city},${locationInput.state},${locationInput.country}`;
  return (
    <div className="location-input">
      <label>Enter Location:</label>
      <input
        value={locationInput.city}
        onChange={(e) => {
          setZip("");
          setLocationInput((prev) => ({ ...prev, city: e.target.value }));
        }}
        type="text"
        placeholder="City"
      />
      <input
        value={locationInput.state}
        onChange={(e) => {
          setZip("");
          setLocationInput((prev) => ({ ...prev, state: e.target.value }));
        }}
        type="text"
        placeholder="State"
      />
      <input
        value={locationInput.country}
        onChange={(e) => {
          setZip("");
          setLocationInput((prev) => ({ ...prev, country: e.target.value }));
        }}
        type="text"
        placeholder="Country"
      />
      <label>Or</label>
      <input
        value={zip}
        onChange={(e) => {
          setLocationInput({ city: "", state: "", country: "US" });
          setZip(e.target.value);
        }}
        type="text"
        placeholder="ZIP"
      />
      <button
        onClick={() => (zip ? getLocation(zip) : getLocation(locationString))}
      >
        Get Weather
      </button>
      <ul>
        {location.lat &&
          location.lon &&
          Object.entries(location).map(([key, value]) => (
            <li key={key}>
              {key.toUpperCase()}: {value}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default LocationInput;
