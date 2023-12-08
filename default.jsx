import React, { Component } from 'react';
import { AppRegistry, Text, View, TouchableHighlight, TextInput, StyleSheet, Dimensions, ImageBackground, Image } from 'react-native';
import Constants from 'expo-constants';

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;
    
export default class App extends Component {
  
    state = {
        originalBill: 'Original Bill',
        billWithTip: 'Bill with Tip Added',
        value: '$.$$',
        symbol: ' ',
        conPageDisplay: 'none',
        tipPageDisplay: 'none',
        homePageDisplay: 'block',
    }

    update10 = () => {
        this.setState({ 
            total : ((parseFloat(this.state.value) * 0.10) + parseFloat(this.state.value)).toFixed(2),
            symbol: '$'
        })
    }
    update15 = () => {
        this.setState({ 
            total: ((parseFloat(this.state.value) * 0.15) + parseFloat(this.state.value)).toFixed(2), 
            symbol: '$'
        })
    }
    update20 = () => {
        this.setState({ 
            total: ((parseFloat(this.state.value) * 0.20) + parseFloat(this.state.value)).toFixed(2), 
            symbol: '$'
        })
    }
    update25 = () => {
        this.setState({ 
            total: ((parseFloat(this.state.value) * 0.25) + parseFloat(this.state.value)).toFixed(2), 
            symbol: '$'
        })
    }
    update30 = () => {
        this.setState({ 
            total: ((parseFloat(this.state.value) * 0.30) + parseFloat(this.state.value)).toFixed(2), 
            symbol: '$'
        })
    }
    update35 = () => {
        this.setState({ 
            total: ((parseFloat(this.state.value) * 0.35) + parseFloat(this.state.value)).toFixed(2), 
            symbol: '$'
        })
    }
    updateGbp = () => {
        this.setState({ 
            total : (parseFloat(this.state.value) * 0.82).toFixed(2), 
            symbol: '£'
        })
    }
    updatePeso = () => {
        this.setState({ 
            total: (parseFloat(this.state.value) * 17.98).toFixed(2), 
            symbol: '$'
        })
    }
    updateRupee = () => {
        this.setState({ 
            total: (parseFloat(this.state.value) * 83.29).toFixed(2),
            symbol: '₹'
        })
    }
    updateWon = () => {
        this.setState({ 
            total: (parseFloat(this.state.value) * 1349.02).toFixed(2), 
            symbol: '₩'
        })
    }
    updateYen = () => {
        this.setState({ 
            total: (parseFloat(this.state.value) * 149.76).toFixed(2),
            symbol: '¥'
        })
    }
    updateEuro = () => {
        this.setState({ 
            total: (parseFloat(this.state.value) * 0.95).toFixed(2),
            symbol: '€'
        })
    }
    
    handleConPagePress = () => this.setState(state => ({
        conPageDisplay: 'block',
        tipPageDisplay: 'none',
        homePageDisplay: 'none',
    }));

    handleTipPagePress = () => this.setState(state => ({
        conPageDisplay: 'none',
        tipPageDisplay: 'block',
        homePageDisplay: 'none',
    }));
    
    handleHomePagePress = () => this.setState(state => ({
        conPageDisplay: 'none',
        tipPageDisplay: 'none',
        homePageDisplay: 'block',
    }));
    
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.navbarContainer}>
                    <View style={styles.buttonContainer}>
                        <TouchableHighlight style={styles.navButton}
                        onPress={this.handleHomePagePress}
                        >
                            <Text style={styles.responseButtonText}>
                                Home
                            </Text>
                        </TouchableHighlight>
                        <TouchableHighlight style={styles.navButton}
                        onPress={this.handleConPagePress}
                        >
                            <Text style={styles.responseButtonText}>
                                Currency Converter
                            </Text>
                        </TouchableHighlight>
                        <TouchableHighlight style={styles.navButton}
                        onPress={this.handleTipPagePress}
                        >
                            <Text style={styles.responseButtonText}>
                                Score Board
                            </Text>
                        </TouchableHighlight>
                    </View>
                </View>
                <View style={{ display: this.state.tipPageDisplay }}>
                    <View style={styles.container}>
                        <Text style={styles.title}>
                            Tip Calculator
                        </Text>
                        <Text style={styles.paragraph}>
                            Input Original Bill:
                        </Text>
                        <TextInput style = {styles.inputValue}
                            onChangeText={(value) => this.setState({value})}
                            value={this.state.value}
                            clearTextOnFocus = {true}
                        />
                        <View style={styles.buttonContainer}>
                            <TouchableHighlight style={styles.button}
                                onPress = {this.update10}
                            >
                                <Text style={styles.buttonText}>
                                    10% 
                                </Text>
                            </TouchableHighlight>
                            <TouchableHighlight style={styles.button}
                                onPress = {this.update15}
                            >
                                <Text style={styles.buttonText}>
                                    15%
                                </Text>
                            </TouchableHighlight>
                        </View>
                        <View style={styles.buttonContainer}>
                            <TouchableHighlight style={styles.button}
                                onPress = {this.update20}
                            >
                                <Text style={styles.buttonText}>
                                    20%
                                </Text>
                            </TouchableHighlight>
                            <TouchableHighlight style={styles.button}
                                onPress = {this.update25}
                            >
                                <Text style={styles.buttonText}>
                                    25%
                                </Text>
                            </TouchableHighlight>
                        </View>
                        <View style={styles.buttonContainer}>
                            <TouchableHighlight style={styles.button}
                                onPress = {this.update30}
                            >
                                <Text style={styles.buttonText}>
                                    30%
                                </Text>
                            </TouchableHighlight>
                            <TouchableHighlight style={styles.button}
                                onPress = {this.update35}
                            >
                                <Text style={styles.buttonText}>
                                    35%
                                </Text>
                            </TouchableHighlight>
                        </View>
                        <Text style={styles.paragraph}>
                            Total After Tip :
                        </Text>
                        <Text style={styles.output}>
                            {this.state.symbol} {this.state.total}
                        </Text>
                    </View>
                </View>
                <View style={{ display: this.state.conPageDisplay }}>
                    <View style={styles.container}>
                        <Text style={styles.title}>
                            Currency Converter
                        </Text>
                        <Text style={styles.paragraph}>
                            Input USD Amount:
                        </Text>
                        <TextInput style = {styles.inputValue}
                            onChangeText={(value) => this.setState({value})}
                            value={this.state.value}
                            clearTextOnFocus = {true}
                        />
                        <View style={styles.buttonContainer}>
                            <TouchableHighlight style={styles.button}
                                onPress = {this.updateGbp}
                            >
                                <Text style={styles.buttonText}>
                                    GBP
                                </Text>
                            </TouchableHighlight>
                            <TouchableHighlight style={styles.button}
                                onPress = {this.updatePeso}
                            >
                                <Text style={styles.buttonText}>
                                    PESO
                                </Text>
                            </TouchableHighlight>
                        </View>
                        <View style={styles.buttonContainer}>
                            <TouchableHighlight style={styles.button}
                                onPress = {this.updateRupee}
                            >
                                <Text style={styles.buttonText}>
                                    RUPEE
                                </Text>
                            </TouchableHighlight>
                            <TouchableHighlight style={styles.button}
                                onPress = {this.updateWon}
                            >
                                <Text style={styles.buttonText}>
                                    WON
                                </Text>
                            </TouchableHighlight>
                        </View>
                        <View style={styles.buttonContainer}>
                            <TouchableHighlight style={styles.button}
                                onPress = {this.updateYen}
                            >
                                <Text style={styles.buttonText}>
                                    YEN
                                </Text>
                            </TouchableHighlight>
                            <TouchableHighlight style={styles.button}
                                onPress = {this.updateEuro}
                            >
                                <Text style={styles.buttonText}>
                                    EURO
                                </Text>
                            </TouchableHighlight>
                        </View>
                        <Text style={styles.paragraph}>
                            Converted Value:
                        </Text>
                        <Text style={styles.output}>
                            {this.state.symbol} {this.state.total}
                        </Text>
                    </View>
                </View>
                <View style={{ display: this.state.homePageDisplay }}>
                    <View style={styles.container}>
                        <Image
                            source={{ uri: 'https://codehs.com/uploads/3606bc7c44154ebcd0d3931d395280ce' }}
                            style={{ height: 300, width: 200 }}
                        />
                        <Text style={styles.paragraph}>
                            Choose between a Currency Converter or a Tip Calculator
                        </Text>
                    </View>
                </View>
            </View>
      );
   }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightgrey',
        alignItems: 'center',
    },
    navbarContainer: {
        height: deviceHeight/6,
        width: deviceWidth,
        backgroundColor: 'grey',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 10,
        borderColor: 'white',
        marginBottom: 5,
    },
    textInput: {
        height: 50,
        width: 50,
        borderWidth: 1,
        color: 'white',
        fontSize: 30,
    },
    title: {
        color: 'darkBlue',
        fontSize: 25,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    titleContainer: {
        height: deviceHeight / 4,
        width: deviceWidth,
    },
    paragraph: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
        margin: 5,
        fontWeight: 'bold',
    },
    buttonContainer: {
        flexDirection: 'row',
    },
    button: {
        height: 50,
        width: 100,
        backgroundColor: 'teal',
        borderColor: 'darkblue',
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
        borderRadius: 20,
    },
    navButton: {
        height: 50,
        width: 70,
        backgroundColor: 'teal',
        borderColor: 'darkblue',
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
        borderRadius: 20,
    },
    buttonText: {
        color: 'white',
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    inputValue: {
        height: 40,
        width: 100,
        fontSize: 30,
        color: 'white',
        borderColor: 'darkblue',
        borderWidth: 2,
        borderRadius: 20,
    },
    responseButtonText: {
        fontSize: deviceHeight/40,
        textAlign: 'center',
        color: 'darkblue',
        fontWeight: 'bold'
    },
    buttonContainer: {
        flexDirection: 'row',
    },
    output: {
        color: 'darkblue',
        fontSize: 35,
        textAlign: 'center',
        fontWeight: 'bold',
    },
});