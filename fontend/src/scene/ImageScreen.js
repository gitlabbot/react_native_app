import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import ImageDetail from '../components/ImageDetail';

const ImageScreen = () => {
    return (
        <View>
            <ImageDetail 
                title="Forst"
                imageSource={require('../../assets/forest.jpg')}
                imageScore={10}
            />
            <ImageDetail 
                title="Moun"
                imageSource={require('../../assets/mountain.jpg')}
                imageScore={15}
            />
            <ImageDetail 
                title="Beach"
                imageSource={require('../../assets/beach.jpg')}
                imageScore={9}
            />
        </View>
    );
}

const styles = StyleSheet.create({});

export default ImageScreen;