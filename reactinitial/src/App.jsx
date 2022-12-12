import React, { useEffect, useState } from "react"

// Import Components
import LoadingMask from "./components/LoadingMask.jsx"
import Character from "./components/Character.jsx"
import Subscription from "./components/Subscription.jsx"


// API URL
const apiUrl = "https://demoapi.com/api/series/howimetyourmother"

const App = () => {

  // App state
  const [characters, setCharacters] = useState([])
  // Subscribe state
  const [isSubscribe, setIsSubscribe] = useState(false)



  // GET data fom API
  const getData = async () => {

    try {
      const responseJson = await fetch(apiUrl)
      const responseObject = responseJson.json()
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
  }

  // Kick in window:onLoad
  useEffect(() => {
    initPage()
    subscriptionReleaseHandler()
  }, [])

  // Subscription releaser

  const sleep = (ms) => new Promise((resolve, reject) => setTimeout(() => {
    resolve()
    setIsSubscribe(true)
  }
    , ms))    // a lenti fc hívja meg

  const subscriptionReleaseHandler = async () => {
    await sleep(10000)
  }

  return (
    <div>
      <h1>Series Api</h1>
      {characters.length === 0 &&
        <LoadingMask />
      }

      <section>
        {characters.length !== 0 &&
          <h2>Characters</h2>
        }
        {characters.length !== 0 &&
          characters.map(character => (character &&
            <Character
              key={character.name}
              character={character}
            />

          ))}
      </section>

      <section>
        {isSubscribe &&
          <Subscription />
        }
      </section>

    </div>
  )
}

export default App
