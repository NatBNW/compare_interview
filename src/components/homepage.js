import '../App.css';
import axios from 'axios';
import { useState } from 'react';
import Pokies from './pokemon';

function App() {
    const [pokemon, setPokemon] = useState([]);
    const [pokemon1, setPokemon1] = useState({});
    const [pokemon2, setPokemon2] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [turn1, setTurn1] = useState (true);

    const getPokemon = (e) => {
    axios.get('https://pokeapi.co/api/v2/pokemon').then(response => {
        setPokemon(response.data.results);
        setIsLoading(true);
    })
}
const get = (e,url) => { 
    if (turn1) {
        axios.get(url).then(res => setPokemon1(res.data))
    }else {
        axios.get(url).then(res => setPokemon2(res.data))
    }
    setTurn1(!turn1)
}

return (
    <div>
        <button onClick={getPokemon} disabled={isLoading}>Get Pokemon</button>
        

        { isLoading ? <p>One moment please</p> : "" }

        <tbody>
        {
            pokemon.map((pokemon, index) => (
            <tr key={index}>
                <td><button onClick={e => get(e,pokemon.url)}>{pokemon.name}</button></td>
            </tr>
            ))
        }

        </tbody>
        <div id = "wrapper">
        <Pokies {...pokemon1}></Pokies>
        <Pokies {...pokemon2}></Pokies>
        </div>
    </div>
    );
}
export default App;