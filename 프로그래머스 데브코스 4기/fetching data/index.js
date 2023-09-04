import axios from axios

async function getPikachuImg() {
  try {
    const {sprites} = await axios.get("https://pokeapi.co/api/v2/pokemon/pikachu")
    console.log(sprites)
  } catch {
    console.log("error 발생")
  }
}