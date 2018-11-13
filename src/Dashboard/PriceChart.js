import React from 'react';
import HighChartsConfig from './HighChartsConfig';
import {Tile} from '../Shared/Tile';
import {AppContext} from '../App/AppProvider';
import ReactHighCharts from 'react-highcharts';

export default function(){
    return (
        <AppContext.Consumer>
            {({}) => 
                <Tile>
                    <ReactHighCharts config={HighChartsConfig()}/>
                </Tile>
            }
        </AppContext.Consumer>
    )
}
