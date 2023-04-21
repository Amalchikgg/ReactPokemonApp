import React from 'react'
import Header from '../../components/Header/Header'
import PokiCard from '../../components/PokiCard/PokiCard'
import './Home.scss';

export const Home = ({pokeData, setInfoPokemon}) => {
const [search, setSearch]=React.useState('')
  return (
    <div>
      <Header/>
      <div className="input" >
        <input type="text" onChange={(e)=>setSearch(e.target.value)}  placeholder='Search...' />
      </div>
      <div className="home">
        <PokiCard all={pokeData} Search={search} allInfo={items=>setInfoPokemon(items)} />
      </div>
    </div>
  )
}
export default Home;
