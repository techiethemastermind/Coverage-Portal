import React, { Component } from 'react';
import {
    ScrollView,
    Text,
    TextInput,
    View,
    Image,
    Button,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

import logoImg from '../assets/logo.jpg';

export default class Login extends Component {

    render() {
        return (
            <View style={styles.container}>
                <View style={{paddingLeft: 15, paddingRight: 15}}>
                    <View style={{height: 80}}>
                        <View style={{
                            flex: 1,
                            flexDirection: 'column',
                            justifyContent: 'center'
                        }}>
                            <View style={{flexDirection: 'row', backgroundColor: ''}}>
                                <View style={styles.header}>
                                    <Image source={logoImg} style={styles.image} />
                                    <Text style={styles.textH1}>COVERAGE PORTAL</Text>
                                </View>
                            </View>              
                        </View>
                    </View>
                    <View style={{
                        width: 230, height: 5,
                        backgroundColor: '#009ef9',
                        alignSelf: 'center'
                        }} ></View>
                    <Text style={styles.textH2}>WELCOME</Text>
                    <View>
                        <TextInput style={styles.input}
                            onChangeText={text => onChangeText(text)}
                            placeholder="Username"
                        />
                        <TextInput style={styles.input}
                            onChangeText={text => onChangePassword(text)}
                            placeholder="Password"
                        />
                        <TouchableOpacity onPress={this.handlPress}
                            style={{marginBottom: 15}}>
                            <Text style={styles.button}>Sign in</Text>
                        </TouchableOpacity>
                        <Text style={styles.textH3}>Forgot your login details? get help signing in.</Text>
                    </View>
                    <View style={styles.container2}>
                        <View style={styles.line2} />
                        <View style={styles.lineDiv}>
                            <Text style={styles.textH4}>or sign in with.</Text>
                        </View>
                        <View style={styles.line2} />
                    </View>
                    <View>
                        <TouchableOpacity onPress={this.handlPress}
                            style={{marginBottom: 15}}>
                            <Text style={styles.buttonGoogle}>Google</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{
                    flex: 1,
                    flexDirection: 'column-reverse'
                }} >
                    <TouchableOpacity onPress={this.handlPress}>
                        <Text style={styles.buttonRegister}>REGISTER FOR AN ACCOUNT</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'stretch',
        backgroundColor: '#005398'
    },
    container2: {
        flexDirection: 'row',
        backgroundColor: '',
        height: 30,
        marginTop: 15,
        justifyContent: 'center',
        marginBottom: 30
    },
    header: {
      flex: 3,
      flexDirection: 'row',
      justifyContent: 'center'
    },
    image: {
      width: 50,
      height: 50,
    },
    textH1: {
      color: 'white',
      fontWeight: 'bold',
      backgroundColor: 'transparent',
      fontSize: 30,
      lineHeight: 45,
      paddingLeft: 10
    },
    textH2: {
        color: '#009ef9',
        backgroundColor: 'transparent',
        fontSize: 22,
        alignSelf: 'center',
        letterSpacing: 3,
        lineHeight: 70
    },
    textH3: {
        color: 'white',
        fontSize: 18,
        textAlign: 'center'
    },
    textH4: {
        color: '#60c5ff',
        textAlign: 'center',
        fontSize: 16,
        marginTop: -5
    },
    input: {
        height: 70,
        backgroundColor: 'white',
        borderRadius: 2,
        padding: 20,
        paddingBottom: 25,
        fontSize: 25,
        marginBottom: 15
    },
    button: {
        height: 70,
        color: 'white',
        fontSize: 25,
        backgroundColor: '#009ef9',
        padding: 15,
        textAlign: 'center'
    },
    buttonGoogle: {
        height: 70,
        color: 'white',
        fontSize: 25,
        backgroundColor: '#2f73ab',
        padding: 15,
        textAlign: 'center',
        borderWidth: 2,
        borderColor: '#86adce',
        borderRadius: 3
    },
    buttonRegister: {
        height: 80,
        color: 'white',
        backgroundColor: '#009ef9',
        fontSize: 25,
        padding: 20,
        textAlign: 'center',
    },
    line2: {
        flex: 0.3,
        height: 1,
        backgroundColor: '#86adce',
        alignSelf: 'center'
    },
    lineDiv: {
        flex: 0.3,
        alignSelf: 'center'
    }
});