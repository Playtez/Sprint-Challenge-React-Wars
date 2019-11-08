import React from "react";
import StarWarsCard from "./StarWarsCard";
import axios from "axios";
import "./StarWars.css";

function StarWarsData() {
  const [stateSWData, setStateSWData] = React.useState([]);
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  React.useEffect(() => {
    axios
      .get("https://swapi.co/api/people")
      .then(res => {
        setStateSWData(res.data.results);
        console.log(res.data.results);
      })
      .catch(err => {
        console.log("yo dis thing is jacked up look here", err);
      });
  }, []);
  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="users">
      {stateSWData.map((user, index) => {
        return <StarWarsCard user={user} key={index} />;
      })}
    </div>
  );
}

export default StarWarsData;

// birth_year: "19BBY"
// created: "2014-12-09T13:50:51.644000Z"
// edited: "2014-12-20T21:17:56.891000Z"
// eye_color: "blue"
// films: (5) ["https://swapi.co/api/films/2/", "https://swapi.co/api/films/6/", "https://swapi.co/api/films/3/", "https://swapi.co/api/films/1/", "https://swapi.co/api/films/7/"]
// gender: "male"
// hair_color: "blond"
// height: "172"
// homeworld: "https://swapi.co/api/planets/1/"
// mass: "77"
// name: "Luke Skywalker"
// skin_color: "fair"
// species: ["https://swapi.co/api/species/1/"]
// starships: (2) ["https://swapi.co/api/starships/12/", "https://swapi.co/api/starships/22/"]
// url: "https://swapi.co/api/people/1/"
// vehicles: (2) ["https://swapi.co/api/vehicles/14/", "https://swapi.co/api/vehicles/30/"]
