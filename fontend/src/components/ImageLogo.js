import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

const ImageDetail = ({imageSource}) => {
    return (
        <View>
            <Image source = {imageSource} 
                   style  = {styles.stretch}/>
        </View>
    );
}

const styles = StyleSheet.create({
    stretch: {
      width: 220,
      height: 150,
    //   resizeMode: 'stretch',
      marginBottom:40
    }
});
  

export default ImageDetail;