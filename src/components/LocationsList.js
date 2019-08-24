import React, { useEffect, useState } from "react";
import Axios from "axios";
import LocationCard from "./LocationCard";

export default function LocationsList() {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    Axios.get("https://rickandmortyapi.com/api/location/")
      .then(res => {
        setLocations(res.data.results);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <div>Location</div>
      {locations.map(location => {
        return (
          <LocationCard
            name={location.name}
            type={location.type}
            key={location.id}
          />
        );
      })}
    </>
  );
}
