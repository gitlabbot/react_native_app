import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
    const name = 'Hello World';
    return (
        <View> 
            <Text style = {style.textStyle}> Getting start with react native </Text>
            <Text style = {style.subHeaderStyle}> My name is {name} </Text>
        </View>
    );
};

const style = StyleSheet.create ({
    textStyle: {
        fontSize: 30
    },
    subHeaderStyle: {
        fontSize: 20
    }
});

export default ComponentsScreen;