import './App.scss'
import React from 'react';
import axios from 'axios';
import FullPokemon from './pages/FullPokemon/FullPokemon';
import { Routes ,Route} from 'react-router-dom';
import Home from './pages/Home/Home';

function App() {
  const [data, setData]=React.useState([])
  const [about, setAbout]=React.useState();

  React.useEffect(()=>{
    async function getData() {
      try {
        const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=150`);
        data.results.map(async(item)=>{
          const { data }=await axios.get(item.url)
          setData(items => {
            items = [...items, data]
            items.sort((a, b) => a.id - b.id)
            return items;
        })
        })
      } catch (e) {
        console.log('ERROR', e);
      }
    }
    getData();
  }, []);

  return (
      <div className="App">
          <Routes>
          <Route path='/' element={<Home pokeData={data} setInfoPokemon={setAbout}/>}/>
           <Route path='/FullPokemon' element={<FullPokemon data={about}/>}/>
           </Routes>
      </div>
  );
}


export default App;
