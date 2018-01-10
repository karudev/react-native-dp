import {Alert, StyleSheet, View} from "react-native";
import React from "react";
import t from 'tcomb-form-native'; // 0.6.9
import { FormValidationMessage, Button } from 'react-native-elements'

const Form = t.form.Form;

const User = t.struct({
    email: t.String,
    password: t.String,
});

export class HomeScreen extends React.Component {

    static navigationOptions = {
        title: 'Home'
    };

    constructor(props){
        super(props);

        const options = {
            fields: {
                email: {
                    hasError: true,
                    // you can use strings or JSX
                    error: 'Insert a valid email'
                }
            }
        };

    }



    handleSubmit = () => {

        const value = this._form.getValue(); // use that ref to get the form value
        console.log('value: ', value);

        if (value != null){
            this.props.navigation.navigate('Position',value);
        }else{
            Alert.alert("Connexion","Veuillez saisir vos identidiants !");
        }

    }



    render() {

        return (
            <View style={styles.container}>
                <Form
                    ref={c => this._form = c} // assign a ref
                    type={User}
                    options={this.options}
                />

                <Button
                    backgroundColor={"#4bc8ff"}
                    title="Valider"
                    onPress={this.handleSubmit}
                />
            </View>

        );
    }
}



const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        marginTop: 50,
        padding: 20,
        backgroundColor: '#ffffff',
    },
    input: {
        borderWidth : 1,
        fontSize: 18,
        width: 300,
        padding: 5,
        marginBottom: 10
    },
    link: {
        color: 'blue',
        textDecorationStyle: "solid",
        textDecorationColor: "blue",
        fontSize: 16,
        marginTop: 20,
        marginBottom: 20,

    },

});
