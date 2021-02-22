import React, {useState} from 'react'
import {AppBar, Toolbar, Grid, Card, CardMedia, CardContent, CircularProgress, Typography, CardHeader, Avatar} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import DummyPokemon from '../Dummy/DummyPokemon'
import {Capitalize} from '../Constant/Constant'

//6min 50sec
const useStyles = makeStyles({
    pokedexContainer : {
        paddingTop: '20px',
        paddingLeft: '50px',
        paddingRight: '50px'
    },
    marginAuto : {
        margin: 'auto',
    
    },
    avatar: {
        backgroundColor: '#fcf403',
        color: '#ad0940'
    }
})


const Pokedex = props => {
    const {history} = props
    const classes = useStyles();
   const [pokemonData, setPokemonData] = useState(DummyPokemon)
   
  
    const getPokemonCard = (pokemonId) => {
       
        console.log(pokemonData[`${pokemonId}`]);

        const {id, name} = pokemonData[`${pokemonId}`]
        const gif = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${id}.gif`
    
    return(
        <Grid item xs={4} key={pokemonId} spacing={1}>
            <Card
                 className={classes.marginAuto}
            >
                <CardHeader
                avatar={
                    <Avatar aria-label="pokemonId" className={classes.avatar}>
                      {id}
                    </Avatar>}/>
            <CardMedia onClick= {()=>history.push(`/${pokemonId}`)}
                image={gif}
                style={{width: '130px', height: '130px', marginTop:'20px'}}
                className={classes.marginAuto}

                >
            </CardMedia>
            <CardContent
                className={classes.marginAuto}
            >
                <Typography style={{textAlign: 'center'}}
>{Capitalize(name)}
                </Typography>
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