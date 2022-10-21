import React, { useState, useEffect } from "react"
import "./App.css"

function App() {
  const API_URL =
    "https://api.giphy.com/v1/gifs/search?api_key=GgaacLnTmeq9IEUzr5AtltYJiq4YzJJM&q=wore&limit=10&offset=0&rating=g&lang=ens://api.giphy.com/v1/gifs/search?api_key=GgaacLnTmeq9IEUzr5AtltYJiq4YzJJM&q=mujer&limit=25&offset=0&rating=g&lang=en"

  const GIFS = [
    "https://media1.giphy.com/media/mCRJDo24UvJMA/giphy.gif?cid=ecf05e47svdl26lmkvyngq9aoobmskhsnhv43loqng5xe0vh&rid=giphy.gif",
    "https://media0.giphy.com/media/26tPplGWjN0xLybiU/giphy.gif?cid=ecf05e47svdl26lmkvyngq9aoobmskhsnhv43loqng5xe0vh&rid=giphy.gif",
  ]
  const [gifs, setGifs] = useState(GIFS)

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((response) => {
        const { data } = response
        const gifs = data.map((image) => image.images.downsized_medium.url)
        setGifs(gifs)
      })
  }, [])

  console.log(gifs)
  return (
    <div className="App">
      <section className="App-content">
        {gifs.map((SimpleGif) => (
          <img src={SimpleGif} />
        ))}
      </section>
    </div>
  )
}

export default App
