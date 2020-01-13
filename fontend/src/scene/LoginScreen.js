import React from 'react';
import { Alert, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import ImageLogo from '../components/ImageLogo';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username:"",
            password:""
        };
    }
  render(){
    return (
      <View style={styles.container}>
        <ImageLogo 
            imageSource={require('../../assets/tkk_logo.jpg')}
        />
        {/* <Text style={styles.logo}>Please Login</Text> */}
        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="Username..." 
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({username:text})}/>
        </View>
        <View style={styles.inputView} >
          <TextInput  
            secureTextEntry
            style={styles.inputText}
            placeholder="Password..." 
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({password:text})}/>
        </View>
        <TouchableOpacity>
          <Text style={styles.forgot}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginBtn} 
                                onPress={() => {
                                if(this.state.username && this.state.password){
                                    this.props.navigation.navigate('Home')
                                }
                            }}>
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>  
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#003f5c',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    fontWeight:"bold",
    // fontSize:50,
    // color:"#fb5b5a",
    marginBottom:40
  },
  inputView:{
    width:"80%",
    backgroundColor:"#DBE2E9",
    borderRadius:25,
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:20
  },
  inputText:{
    height:50,
    // color:"white"
  },
  forgot:{
    color:"#C0C5CA",
    fontSize:11
  },
  loginBtn:{
    width:"80%",
    backgroundColor:"#1571CA",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    marginBottom:10
  },
  loginText:{
    color:"white"
  }
});