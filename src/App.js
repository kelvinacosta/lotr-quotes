import "./index.css"
import { characters } from "./db"
import Header from "./components/Header"
import CharacterList from "./components/CharacterList"

const App = () => {
   return <div>
      <Header />
      <CharacterList characters={characters}/>
   </div>
}

export default App
