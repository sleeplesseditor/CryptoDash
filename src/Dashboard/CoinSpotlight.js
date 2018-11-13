import React from 'react';
import styled from 'styled-components';
import {Tile} from '../Shared/Tile';
import {AppContext} from '../App/AppProvider';
import CoinImage from '../Shared/CoinImage';

const SpotlightName = styled.h2`
    text-align: center;
`

export default function(){
    return (
        <AppContext.Consumer>
            {({currentFavorite, coinList}) =>
            <Tile>
                <h2>{coinList[currentFavorite].CoinName}</h2>
                <CoinImage spotlight coin={coinList[currentFavorite]}/>
            </Tile>}
        </AppContext.Consumer>
    )
}