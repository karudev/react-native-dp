import React from 'react';

import { StackNavigator } from 'react-navigation';

import {HomeScreen} from './components/map/HomeScreen';
import {PositionScreen} from './components/map/PositionScreen';

const  SimpleAppNavigator = StackNavigator({
    Home: { screen: HomeScreen },
    Position: { screen: PositionScreen }
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