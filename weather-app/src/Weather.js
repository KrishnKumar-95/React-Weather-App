import { useState } from "react";
import React from 'react';
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";
import { Implinks } from "./Implinks";

// WEATHER LOGO
import sun from './svg/wi-day-sunny.svg'
import cloud from './svg/wi-day-cloudy.svg'
import brcloud from "./svg/wi-cloudy.svg"
import haze from "./svg/wi-day-haze.svg"
import oCloud from "./svg/wi-day-sunny-overcast.svg"
import mist from "./svg/wi-day-fog.svg"
import smog from "./svg/wi-smog.svg"
import snow from "./svg/wi-snow.svg"
import defimg from "./svg/wi-day-sunny.svg"

export const Weather = () => {

  let [date, setDate] = useState("1 January 2022");
  const [city, setCity]= useState('')
  const [temp, setTemp]= useState(0)
  const [desc, setDesc] = useState('');

  const iconStyle = {
    filter:"invert(1)"
  }
  // 'clear sky 800', 'haze 721' , 'Broken Clouds 803', 'Overcast clouds 804', 'few clouds 801', 'Mist 701','scattered clouds 802','smoke 711','snow 601'

  const fetchData = async () => {
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=341b8db31951216a51f145e3acc51a45`;
    const response = await fetch(url);
    const data = await response.json();
    const tempStat = data.weather[0].id;
    console.log(data);
    if(data.cod===200){
      switch (tempStat) {
        case 800:
          setDesc(<div><img style={iconStyle} src={sun} alt="Clear Sky" /><div>clear sky</div></div>)
          break;
        case 801:
          setDesc(<div><img style={iconStyle} src={cloud} alt="Clouds" /><span>cloud</span></div>)
          break;
        case 803:
          setDesc(<div><img style={iconStyle} src={brcloud} alt="Broken Clouds" /><span>broken clouds</span></div>)
          break;
        case 721:
          setDesc(<div><img style={iconStyle} src={haze} alt="Haze" /><span>haze</span></div>)
          break;
        case 804:
          setDesc(<div><img style={iconStyle} src={oCloud} alt="Overcast Clouds" /><span>overcast cloud</span></div>)
          break;
        case 701:
          setDesc(<div><img style={iconStyle} src={mist} alt="Mist" /><span>Mist</span></div>)
          break;
        case 711:
          setDesc(<div><img style={iconStyle} src={smog} alt="Smog" /><span>smog</span></div>)
          break;
        case 601:
          setDesc(<div><img style={iconStyle} src={snow} alt="Snow" /><span>Snow</span></div>)
          break;
        default:
          setDesc(<div><img style={iconStyle} src={defimg} alt="Clear Sky" /><span>clear sky</span></div>)
          break;
      }
      setCity(data.name)
      setTemp(data.main.temp)
    }else{
      setCity("Incorrect City Name")
    }
    
  }
  const frmSubmit = (e) => {
    e.preventDefault()
    fetchData()
  }

  setInterval(()=>{
    let newdate = new Date()
    setDate(newdate.toLocaleTimeString())
  },1000)

  const TimeCss = {
    fontSize:"25px",
    fontWeight: "bold"
  }

  return (
    <div>
        <Implinks/>
        <Navbar/>
    <h1>Weather Project using ReactJS</h1>
    <div className='search_content'>
      <form className="temp_form" onSubmit={frmSubmit}>
        <input type="text" value={city} onChange={(e) => setCity(e.target.value)} name="cityname" id="cityname" placeholder='Enter city name' />
        <input type="submit" value="Search" id='submitbtn' />
      </form>
    </div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  

    <div className="tempinfo">
      <div style={TimeCss} className="top_layer">
        Time : <p id="today_data">{date}</p>
      </div>
      <div className="main_layer">
        <p id="city_name">{city}</p>
        <div className="middle_layer">
          <span id="temp"><span id="temp_val">{temp}°C</span></span>
          <span id="temp_status">{desc}</span>
        </div>
      </div>
    </div>
    <Footer/>
    </div>
)
};