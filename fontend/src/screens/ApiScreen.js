import React from 'react';
// import { FlatList, ActivityIndicator, Text, View, Image } from 'react-native';
import { ActivityIndicator, View, StyleSheet } from 'react-native';
import { Header, Footer, Container, Content, ListItem, Left, Body, Right, Button, Icon, Text, Title, FooterTab } from 'native-base';
// import { mocker } from '../mockers/MockerApiData';
// import { generator } from '../registers/api';
import axios from 'axios';

export default class FetchExample extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      modules_app: [],
      isLoading: true
    };
  }

  componentDidMount() {
    axios.get('http://192.168.100.107:8081/api/modules_app')
      .then(res => {
        const modules_app = res.data;
        this.setState({ isLoading: false, modules_app });
      })
      .catch(error => console.log(error));
  }

  render() {
    if(this.state.isLoading){
      return(
        <View style={[styles.container, styles.horizontal]}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      )
    }

    return (
      <Container>
        <Header>
          <Title>Approval Modules</Title>
        </Header>
        <Content>      
          { this.state.modules_app.map((param,i) => 
            <ListItem icon key={i}>
              <Left>
                <Button style={{backgroundColor: "#00BF29"}}>
                  <Icon active name="checkbox" />
                </Button>
              </Left>
              <Body>
                <Text>{param.MODULE_NAME}</Text>
              </Body>
              <Right>
                <Text style={{fontSize: 15, color: "red", fontWeight: 'bold'}}>{param.QTY_BOOK}</Text>
                <Icon active name="arrow-forward" />
              </Right>
            </ListItem>
          )}
        </Content>
        <Footer>
          <FooterTab></FooterTab>
        </Footer>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10
  }
})