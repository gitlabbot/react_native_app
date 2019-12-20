import React from 'react';
import { ActivityIndicator, View, StyleSheet } from 'react-native';
import { Header, Footer, Container, Content, ListItem, Left, Body, Right, Button, Icon, Text, Title, FooterTab } from 'native-base';
// import { mocker } from '../mockers/MockerApiData';
// import { generator } from '../registers/api';
import axios from 'axios';

export default class FetchExample extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      customers: [],
      isLoading: true
    };
  }

  componentDidMount() {
    axios.get("http://192.168.1.45:8081/api/customer")
      .then(res => {
        const customers = res.data;
        this.setState({ isLoading: false, customers });
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
          <Title>Customer Lists</Title>
        </Header>
        <Content>      
          { this.state.customers.map((customer,i) => 
            <ListItem icon key={i} style={{flex: 1}}>
              <Left>
                <Button style={{backgroundColor: "#00BF29"}}>
                  <Icon active name="checkbox" />
                </Button>
              </Left>
              <Body>
                <Text>{customer.code}-{customer.name}</Text>
                <Text style={{fontSize: 10}}>{customer.debpay}</Text>
              </Body>
              <Right>
                {/* <Text style={{fontSize: 15, color: "red", fontWeight: 'bold'}}>{customer.qty_doc}</Text> */}
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