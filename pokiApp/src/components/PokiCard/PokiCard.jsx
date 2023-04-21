import React from 'react'
import './PokiCard.scss'
import { Link } from 'react-router-dom'


 const PokiCard = ({all, allInfo, Search}) => {
  return (
      all.filter(obj=>obj.name.includes(Search)).map((item)=>{
        return(
        <Link to="/FullPokemon">
          <div className='card' key={item.id} onClick={()=>allInfo(item)}>
            <span>#{item.id}</span>
            <h1>{item.name}</h1>
            <img src={item.sprites.other.dream_world.front_default}/>
            
          </div>
        </Link>
        )
       })
      
  
  )
}
export default PokiCard;
