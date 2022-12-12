import React, { useEffect, useState } from "react"

// Import Components
import LoadingMask from "./components/LoadingMask.jsx"
import Character from "./components/Character.jsx"


// API URL
const apiUrl = "https://demoapi.com/api/series/howimetyourmother"

const App = () => {

  // App state
  const [characters, setCharacters] = useState([])

  // GET data fom API
  const getData = async () => {

    try {
      const responseJson = await fetch(apiUrl)
      const responseObject = responseJson.json()
      console.log(responseJson)
      console.log(responseObject)
      return responseObject
    }
    catch (error) {
      console.error(error)
      return error
    }
  }

  // Call Fetch function and set App state
  const initPage = async () => {
    const apiData = await getData()
    setCharacters(apiData)
    console.log(apiData)
    // console.log(characters)
  }

  // Kick in window:onLoad
  useEffect(() => {
    initPage()
  }, [])

  return (
    <div>
      <h1>Series Api</h1>
      {characters.length === 0 &&
        <LoadingMask />
      }
      <section>
        <h2>Characters</h2>
        {characters.length !== 0 &&
          characters.map(character => (character &&
            <Character
            key={character.name} 
            character={character}
            />

          ))}
      </section>


    </div>
  )
}

export default App
