import React from 'react'
import './FullPokemon.scss'
import { Link } from 'react-router-dom';
import Progressbar from '../../components/ProgressBar'
export const FullPokemon = ({data}) => {
  return (
       <>
            <div className='main'>
              <div className="up-pok">
                <div className="abilities"> 
                  <h3>grasss</h3>
                  <span>poison</span>
                </div>
                <h4>#{data.id}</h4>
              </div>
              <div className="main-info">
                <div className="top">
                  <div className="text">
                    <h1 className='text__name'>{data.name}</h1>
                    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg `}alt="" />
                  </div>
                </div>
                <div className="Chracters">
                  {
                    data.stats.map(item=>{
                      return(
                        <h4>{item.stat.name}<Progressbar  progress={item.base_stat}/></h4>
                      )
                    })
                  }
                </div>
              </div>
            <Link to='/'> <button style={{position:'fixed', bottom:'50px',left:'-450px', padding: '20px 50px',background: 'blue',color:'white',marginLeft: '500px' ,borderRadius:'20px'}}>Back</button></Link>
            </div>
    </>
  )
 
}
export default FullPokemon;