import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
    const friends = [
        { name: 'Friend #1', age: 30 },
        { name: 'Friend #2', age: 31 },
        { name: 'Friend #3', age: 32 },
        { name: 'Friend #4', age: 33 },
        { name: 'Friend #5', age: 34 },
        { name: 'Friend #6', age: 35 }
    ] 
    return <FlatList 
        keyExtractor = {friend => friend.name}
        data = {friends} 
        renderItem = {({ item }) => {
        return <Text style={styles.textStyle}>
                    {item.name} - {item.age}
               </Text>
    }}
    />
};

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 30
    }
});

export default ListScreen;