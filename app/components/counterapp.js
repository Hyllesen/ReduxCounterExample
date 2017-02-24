import React from 'react';
import {
  Text,
  View,
  TouchableHighlight  
} from 'react-native';


const CounterApp = () => {
    const { counter } = this.props;

    const { buttonStyle } = styles;
    return (
        <View style={{ flexDirection: 'row', flex: 1, alignItems: 'center' }}>
            <TouchableHighlight onPress={() => { console.log("Clicked +") }}>
                <View style={buttonStyle}>
                    <Text>+</Text>
                </View>
            </TouchableHighlight>

            <TouchableHighlight onPress={() => { console.log("Clicked -") }}>
                <View style={buttonStyle}>
                    <Text>-</Text>
                </View>
            </TouchableHighlight>

            <View>
                <Text>{this.props.counter}</Text>
            </View>


        </View>
    )
}

const styles = {
    buttonStyle: {
        backgroundColor: 'gray',
        padding: 10,
        margin: 10,
    }
}

export default CounterApp;