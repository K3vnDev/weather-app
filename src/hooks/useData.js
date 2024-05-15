import { useState, useRef } from "react"


const API_KEY = '77999a9d11104ca5982161150240305'

export function useData(){
  const [data, setData] = useState(null)
  const dataHasBeenSet = useRef(false)
  const [error, setError] = useState(false)

  const getData = async (input) => {

    if (input === '') return

    try{
      const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${input}&aqi=no`)
      const res = await response.json()
      
      const getDay = () => {
        const currentDate = new Date
        const days = ['Sunday', 'Monday', 'Tuesday', 
        'Wednesday', 'Thursday', 'Friday', 'Saturday']
        return days[currentDate.getDay()]
      }
      const time = (res.location.localtime).split(' ')[1]
      dataHasBeenSet.current = true
      setError(false)

      setData(
        {
          location: `${res.location.name}, ${res.location.region}`,
          dateAndTime: `${getDay()}, ${time}`,
          wind: `${res.current.wind_kph} km/h`,
          humidity: `${res.current.humidity}%`,
          condition: res.current.condition.text,
          icon: res.current.condition.icon,
          temp: Math.round(res.current.temp_c),
          isDay: res.current.is_day? true : false
        }
      )
    }catch(e){
      setError(true)
    }
  }
  
  return ({ data, getData, dataHasBeenSet, error })
}