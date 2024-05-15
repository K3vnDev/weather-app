import WeatherCard from './WeatherCard/WeatherCard.jsx'
import { useState } from "react"
import { useData } from './hooks/useData.js'



function App() {

  const { data, getData, error } = useData()
  const [ input, setInput ] = useState('')

  const handleSearch = (e) => {
    e.preventDefault()
    getData(input)
    setInput('')
  }

  const handleChange = (e) => {
    setInput(e.target.value)
  }

  return (
    <>
      <header className="header">
        <h1>Weather App</h1>
        <form onSubmit={handleSearch}>
          <input value={input} 
          onChange={handleChange} 
          placeholder="City..."/>
          <button type="submit">Search</button>
        </form>
      </header>
      <WeatherCard data={data} error={error} />
    </>
  )
}

export default App
