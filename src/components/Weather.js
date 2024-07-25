import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Container, Input, Label } from "reactstrap";
import "./weather.css"

export default function Weather() {
  const [data, setData] = useState(null);
  const [city, setCity] = useState("Ho Chi Minh");
  const [text, setText] = useState("");
  const [err, setErr] = useState(null);
  const APIkey = "b9d39bbb51dead6d34218aa55ea56cf5";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIkey}`;
  const fetchData = () => {
    axios
      .get(url)
      .then(function (res) {
        console.log(res);
        setData(res.data);
      })
      .catch(function (error) {
        if (error.response.data.cod == "404") {
          setErr("Invalid city name");
        }
        console.log(error);
      });
  };
  useEffect(() => {
    fetchData();
  }, [city]);

  const convertTime = (value) => {
    const date = new Date(value * 1000);
    return date.toLocaleString();
  };
  const converCToF=(value)=>{
    return (value * 1.8 + 32).toFixed(1)
  }
  const convertDateWeek = (value) => {
    const day = new Date(value * 1000);
    const d = day.getDay();
    switch (d) {
        case 0:
          return "Sunday";
        
        case 1:
          return "Monday";
        
        case 2:
          return "Tuesday";
          
        case 3:
          return "Wednesday";
          
        case 4:
          return "Thursday";
          
        case 5:
          return "Friday";
        
        case  6:
          return "Saturday";
  }
}
  return (
    <>
      <Container className="w-75 border d-flex flex-row location justify-content-center">
        <Input
        className="w-50 my-2 me-2"
          value={text}
          placeholder="Enter Location"
          type="text"
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <Button className="my-2" onClick={()=>{
            setCity(text);
            setErr(null);
            setText("");
        }}><i className="fa-solid fa-magnifying-glass"></i></Button>
    </Container>

    <Container className="w-75 border mt-5 p-3 weather">
        
        {err ? <h1>{err}</h1> : <></>}

        {data && (
          <>
          
            <h1 className="text-center">{data.name}</h1>
            

            
            <h1><i className="fa-solid fa-location-dot"></i><span>{data.name}</span></h1>
            <h1>DayTime | {convertDateWeek(data.sys.sunrise)}</h1>

            <h1>{data.main.temp} C | {converCToF(data.main.temp)} F</h1>
            <h1>Country {data.sys?.country}</h1>
            <h1><img
              src={`https://openweathermap.org/img/w/${data.weather[0].icon}.png`}
            /> <span>{data.weather[0].description}</span></h1>
            
            <h1>Sunrise: {convertTime(data.sys.sunrise)}</h1>
            <h1>Sunset: {convertTime(data.sys.sunset)}</h1>
          </>
        )}
      </Container>
    </>
  );
}
