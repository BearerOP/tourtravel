import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Tourist.css";

const Tourist = () => {
  const indiaid = "1269750";
  const tr = "1278647";
  const raj = "";

  const [states, setStates] = useState([]);
  const [district, setDistrict] = useState([]);
  const [city, setCity] = useState([]);
  const [place, setPlace] = useState([]);

  const [selectedState, setSelectedState] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedPlace, setSelectedPlace] = useState("");

  useEffect(() => {
    const api = "http://www.geonames.org/childrenJSON?geonameId=" + indiaid;
    fetch(api).then((response) => {
      response.json().then((data) => {
        // data.geonames[28].name
        // console.log(data);
        // console.log(data.geonames[28].name);
        setStates(Object.values(data.geonames));
      });
    });
  }, []);

  useEffect(() => {
    if (selectedState) {
      const api = `http://www.geonames.org/childrenJSON?geonameId=${selectedState}`;
      fetch(api).then((response) => {
        response.json().then((data) => {
          // data.geonames[28].name
          console.log(data);
          // console.log(data.geonames[28].name);
          setDistrict(Object.values(data.geonames));
        });
      });
    }
  }, [selectedState]);

  useEffect(() => {
    if (selectedDistrict) {
      const api = `http://www.geonames.org/childrenJSON?geonameId=${selectedDistrict}`;
      fetch(api).then((response) => {
        response.json().then((data) => {
          // data.geonames[28].name
          console.log(data);
          // console.log(data.geonames[28].name);
          setCity(Object.values(data.geonames));
        });
      });
    }
  }, [selectedDistrict]);

  useEffect(() => {
    if (selectedCity) {
      const encodedCityName = encodeURIComponent(selectedCity);
      console.log(encodedCityName);

      const api = `https://api.geoapify.com/v2/places?categories=tourism&location=${encodedCityName}&limit=20&apiKey=7d59d5bc6aa844f5a90dee669ace7744`;

      fetch(api).then((response) => {
        response.json().then((data) => {
          console.log(data);
          // setPlace(Object.values(data.geonames));
        });
      });
    }
  }, [selectedCity]);

  // console.warn(data);

  const handleStateChange = (event) => {
    setSelectedState(event.target.value);
  };

  const handleDistrictChange = (event) => {
    setSelectedDistrict(event.target.value);
  };

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
  };
  const handlePlaceChange = (event) => {
    setSelectedPlace(event.target.value);
  };

  return (
    <>
      <div>
        <div className="tourist-background">
          <div className="tourist-frame">
            <div className="tourist-nav">
              <img className="logo" src="/img/logo.png" alt="" />
              <ul className="tourist-links">
                <Link to="/">Home</Link>
                <Link to="/support">Support</Link>
                <Link to="/contact">Contact</Link>
              </ul>
            </div>
            <h1>
              YOUR <span>TOUR PLAN</span>
            </h1>
            <form className="tourist-form" action="" method="post">
              <ul className="tourist-form-ul">
                <li>
                  <label htmlFor="states">state name</label>
                  <select
                    name="states"
                    id="states"
                    onChange={handleStateChange}
                  >
                    <option value="">Select State</option>
                    {states.map((state) => (
                      <option key={state.geonameId} value={state.geonameId}>
                        {state.name}
                      </option>
                    ))}
                  </select>
                </li>
                <li>
                  <label htmlFor="district">district name</label>
                  <select
                    name="districts"
                    id="district"
                    onChange={handleDistrictChange}
                  >
                    <option value="">Select District</option>
                    {district.map((district) => (
                      <option
                        key={district.geonameId}
                        value={district.geonameId}
                      >
                        {district.name}
                      </option>
                    ))}
                  </select>
                </li>
                <li>
                  <label htmlFor="city">city name</label>
                  <select name="cities" id="cities" onChange={handleCityChange}>
                    <option value="">Select City</option>
                    {city.map((city) => (
                      <option key={city.geonameId} value={city.name}>
                        {city.name}
                      </option>
                    ))}
                  </select>
                </li>
              </ul>
              <ul className="tourist-form-ul">
                <li>
                  <label htmlFor="place">place name</label>
                  <select
                    name="places"
                    id="places"
                    onChange={handlePlaceChange}
                  >
                    <option value="">Select Place</option>
                    {place.map((place) => (
                      <option key={place.geonameId} value={place.geonameId}>
                        {place.name}
                      </option>
                    ))}
                  </select>
                </li>
                <li>
                  <label htmlFor="">time</label>
                  <input type="date" name="" id="" />
                </li>
                <li>
                  <label htmlFor="">time</label>
                  <input type="time" name="" id="" />
                </li>
              </ul>
            </form>
            <button className="findguide">FIND GUIDE</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Tourist;
