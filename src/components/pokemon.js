import React from 'react';
import '../App.css';

const Pokies = props => {
    
    return (
                    <div class="subcontents">
                        <h2>{props.name}</h2>
                        <img src={props?.sprites?.other?.dream_world?.front_default} alt="pokemon"></img>
                        <div> 
                            {props.types?.map((t,i)=>
                            <span style={{backgroundColor:"",margin:"5px", padding:"5px"}}>{t.type.name}</span>
                            )}
                        </div>
                        <p>HP: {props.stats?.[0]?.base_stat}</p>
                        <p>ATTACK: {props.stats?.[1]?.base_stat}</p>
                        <p>DEFENSE: {props.stats?.[2]?.base_stat}</p>
                        <p>WEIGHT: {props.weight}</p>
                    </div>
                
            );
}

export default Pokies