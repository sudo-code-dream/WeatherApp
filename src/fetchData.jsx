import { useEffect, useState } from "react";

    const FetchData = () => {
    const [weather,setWeather] = useState(false);
    
        
  const search = async (city) => {
    try {

      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${
        import.meta.env.VITE_APP_ID
      }`;
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      setWeather({
        windspeed: data.wind.speed
      })

    } catch (error) {
      console.log(error);
    }
  };
  useEffect(()=> {
    search("London")
  },[])

  return(
    <div>
        <h1 className="text-2xl text-black">{weather.windspeed}</h1>
    </div>
  );
};

export default FetchData;
