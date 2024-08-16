import React, { useCallback } from "react";
const WEATHER_API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

const useGetLocation = () => {
  const [location, setLocation] = React.useState({
    country: null,
    lat: null,
    lon: null,
    name: null,
    state: null,
    zip: null,
  });

  const getLocation = useCallback((input) => {
    const fetchURL = input.includes(",")
      ? `http://api.openweathermap.org/geo/1.0/direct?q=${input}&limit=1&appid=${WEATHER_API_KEY}`
      : `http://api.openweathermap.org/geo/1.0/zip?zip=${input}&appid=${WEATHER_API_KEY}`;
    try {
      fetch(fetchURL).then((response) => {
        if (response.ok) {
          response.json().then((data) => {
            if (data.length) {
              setLocation(data[0]);
            } else {
              setLocation(data);
            }
          });
        } else {
          throw new Error("Failed to get location");
        }
      });
    } catch (error) {
      console.error(error);
    }
  }, []);

  return { getLocation, location };
};

export default useGetLocation;
