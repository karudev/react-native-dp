import React from 'react';

import { StackNavigator } from 'react-navigation';

import {HomeScreen} from './components/home/HomeScreen';
import {PositionScreen} from './components/map/PositionScreen';
import {ScanScreen} from './components/camera/ScanScreen';

const  SimpleAppNavigator = StackNavigator({
    Home: { screen: HomeScreen },
    Position: { screen: PositionScreen },
    Scan: { screen: ScanScreen }
});

const AppNavigation = () => (
    <SimpleAppNavigator  />
);

export default class App extends React.Component {
    render() {
        return (
            <AppNavigation/>
        );
    }
}