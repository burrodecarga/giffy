export default function getGifs() {
  const API_URL =
    "https://api.giphy.com/v1/gifs/search?api_key=GgaacLnTmeq9IEUzr5AtltYJiq4YzJJM&q=mujer&limit=25&offset=0&rating=g&lang=en"

  return fetch(API_URL)
    .then((res) => res.json())
    .then((response) => {
      const { data = [] } = response
      if (Array.isArray[data]) {
        const gifs = data.map((image) => image.images.downsized_medium.url)
        console.log("alerta")
        console.log(gifs)
        return gifs
      }
    })
}
