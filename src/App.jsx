import { useEffect, useRef, useState } from 'react'
import './App.css'
import UseFetch from './hooks/UseFetch'
import getRandomNumber from './utils/getRandomNumber'
import LocationCard from './components/LocationCard'
import ResidentsCard from './components/ResidentsCard'

function App() {
  const locationId = getRandomNumber(126)
  const [inputValue, setInputValue] = useState(locationId)
  const url = `https://rickandmortyapi.com/api/location/${inputValue}`
  const [location, getLocation, hasError] = UseFetch(url)

  useEffect(() => {
    getLocation()
  }, [inputValue])

  const inputLocation = useRef()

  const handleSubmit = e => {
    e.preventDefault()
    setInputValue(inputLocation.current.value)
  }

  return (
    <body>
      <div>
        <img className='image_header' src="images/intento3.png" alt=""/>
        <div className='container'>
          <form className='form_header' onSubmit={handleSubmit}>
            <input className='input_header' ref={inputLocation} type="text" />
            <button className='button_header'>Search</button>
          </form>
        </div>

        {
          hasError
            ? <h2>hey! you must provide an id from 1 to 126</h2>
            : (
              <>
                <LocationCard
                  location={location}
                />
                <div className='resident_container'>
                  {
                    location?.residents.map(url => (
                      <ResidentsCard
                        key={url}
                        url={url}
                      />
                    ))
                  }
                </div>
              </>

            )
        }

      </div>
    </body>

  )
}

export default App
