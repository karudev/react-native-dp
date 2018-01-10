import React from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import { StackNavigator } from 'react-navigation';
import MapView from 'react-native-maps';


export class PositionScreen extends React.Component {

    static navigationOptions = {
        title: 'Position'
    };

    constructor(props) {
        super(props);

        this.state = {
            latitude: null,
            longitude: null,
            error: null,
            markers: [
                {
                    coordinate: {
                        latitude: null,
                        longitude: null
                    },
                    title: "Ma position",
                    description: "Ma position"
                }
            ]
        };

    }

    componentWillMount() {
        navigator.geolocation.getCurrentPosition(
            (position) => {

                this.setState({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                    markers:
                        [
                            {
                                coordinate: {
                                    latitude: position.coords.latitude,
                                    longitude: position.coords.longitude
                                },
                                title: "Ma position",
                                description: "Ma position"
                            }
                        ]
                    ,
                    error: null,
                });


            },
            (error) => this.setState({ error: error.message }),
            { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
        );
    }


    onPressMarker(coordinate){


        console.log("test");
        console.log(coordinate);

        Alert.alert('Test','tes');

    }

    render() {
        const { params } = this.props.navigation.state;




        if (this.state.latitude != null) {

            const positionName = "Position de "+params.email;

            return (

                <View style={styles2.container}>


                    <MapView style={styles2.map}
                             initialRegion={{
                                 latitude: this.state.latitude,
                                 longitude: this.state.longitude,
                                 latitudeDelta: 0.0922,
                                 longitudeDelta: 0.0421,
                             }}
                             mapType="terrain"
                    >

                        <MapView.Marker
                            onPress={() => this.onPressMarker(this.state)}
                            coordinate={{
                                latitude: this.state.latitude,
                                longitude: this.state.longitude
                            }}
                            title={positionName}
                            description="Ma position"
                            pinColor="yellow"


                        />

                    </MapView>
                    {/* {this.state.markers.map(marker => (
                    <MapView.Marker
                        coordinate={marker.latlng}
                        title={marker.title}
                        description={marker.description}
                    />
                ))}*/}


                </View>
            );
        }else{
            return (
                <Text>Impossible d'afficher la map, veuillez réessayer.</Text>
            )
        }
    }
}



const styles2 = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
});
