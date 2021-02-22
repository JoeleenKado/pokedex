import React, {useState} from 'react'
import DummyPokemon from '../Dummy/DummyPokemon'
import {Typography, Link} from '@material-ui/core'
import {Capitalize} from '../Constant/Constant'

const Pokemon = (props) => {

    const {match} = props;
    const {params} = match
    const {pokemonId} = params

    const [pokemon, setPokemon] = useState(DummyPokemon[pokemonId])
    
    const generatePokemonJSX = () => {
        const {name, id, species, types, height, weight, type, sprites} = pokemon
        const fullImageUrl = `https://pokeres.bastionbot.org/images/pokemon/${id}.png`
        const {front_shiny, front_default} = sprites
        
    return (
        <>
        <Typography variant="h1">
         {`${id}. ${Capitalize(name)}`}
         <img src={front_default}/>
  </Typography>
  <img style={{width:'300px', height:'300px'}} src={fullImageUrl}/>
  <Typography variant='h3'>Pokemon Info</Typography>
<Typography>
    {'species:'}
    <Link href={species.url}>{species.name}</Link>
</Typography>
<Typography>Height: {height}</Typography>
<Typography>Weight: {weight}</Typography>
<Typography variant='h6'>Types:</Typography>
{types.map((typeInfo) => {
    const {type} = typeInfo
    const {name} = type
    return <Typography key={name}> {name} </Typography>
})}


</>
    )

    }
return <>{generatePokemonJSX()}</>

}

export default Pokemon