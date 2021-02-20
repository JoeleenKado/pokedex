import React, {useState} from 'react'
import {AppBar, Toolbar, Grid, Card, CardMedia, CardContent, CircularProgress} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import DummyPokemon from '../Dummy/DummyPokemon'
//6min 50sec
const useStyles = makeStyles({
    pokedexContainer : {
        paddingTop: '20px',
        paddingLeft: '50px',
        paddingRight: '50px'
    },
    marginAuto : {
        margin: 'auto'
    }
})

const Pokedex = () => {
    const classes = useStyles();
   const [pokemonData, setPokemonData] = useState(DummyPokemon)
   
  
    const getPokemonCard = (pokemonId) => {
       
        console.log(pokemonData[`${pokemonId}`]);

        const {id, name} = pokemonData[`${pokemonId}`]
        const gif = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${id}.gif`
    
    return(
        <Grid item xs={4} key={pokemonId}>
            <Card
                 className={classes.marginAuto}
            >
            <CardMedia
                image={gif}
                style={{width: '130px', height: '130px', marginTop:'20px'}}
                className={classes.marginAuto}

                >
            </CardMedia>
            <CardContent
                className={classes.marginAuto}
            >
                <h1 className={classes.marginAuto}
                style={{textAlign: 'center'}}>{name}</h1>
            </CardContent>
            </Card>
        </Grid>
        )
    }
    
    return (<>
    <AppBar position='static'>
        <Toolbar/>
    </AppBar>
    {pokemonData ? (  <Grid container spacing={2} className={classes.pokedexContainer}>
        {Object.keys(pokemonData).map(pokemonId =>
        getPokemonCard(pokemonId))}

    </Grid>) : (<CircularProgress/>)}
    
    </>
    )

   


}





export default Pokedex