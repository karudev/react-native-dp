import React from 'react';
import { Text, View, TouchableOpacity, Alert,StyleSheet } from 'react-native';
import { Camera, Permissions } from 'expo';

export class ScanScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Camera
                    ref={(cam) => {
                        this.camera = cam;
                    }}
                    onBarCodeRead={(data) => {
                        alert(data.data)
                    }}
                    style={styles.preview}>
                </Camera>
            </View>
        );
    }

    onBarCodeRead(e) {
        Alert.alert("test", e.data);
        console.log(
            "Barcode Found!",
            "Type: " + e.type + "\nData: " + e.data
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
    },
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    capture: {
        flex: 0,
        backgroundColor: '#fff',
        borderRadius: 5,
        color: '#000',
        padding: 10,
        margin: 40
    }
});
