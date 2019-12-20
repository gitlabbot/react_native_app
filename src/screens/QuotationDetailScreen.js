import React from 'react';
import { ActivityIndicator, View, StyleSheet } from 'react-native';
import { Card, CardItem, Header, Footer, Container, Content, ListItem, Left, Body, Right, Button, Icon, Text, Title, FooterTab } from 'native-base';
// import { mocker } from '../mockers/MockerApiData';
// import { generator } from '../registers/api';
import axios from 'axios';

export default class QuotationDetailScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      quote_detail: [],
      isLoading: true
    };
    this.goToDetailScreen = this.goToDetailScreen.bind(this);
  }

  goToDetailScreen({flowout_book, flowout_no}) {
    this.props.navigation.navigate('QuotationDetailDesc', {flowout_book, flowout_no});
  }

  componentDidMount() {
    let sendParams = { 
      quote_book: this.props.navigation.state.params.flowout_book, 
      quote_no: this.props.navigation.state.params.flowout_no 
    };
    axios.get("http://172.20.10.4:8081/api/quote_detail/" + sendParams.quote_book + "/" + sendParams.quote_no)
      .then(res => {
        let quote_detail = res.data;
        this.setState({ isLoading: false, quote_detail });
        console.log(quote_detail.CUST_NAME);
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
            <Text style={{fontWeight: 'bold'}}>Quote No. : {this.state.quote_detail.QUOTE_DOC}</Text>
        </Header>
        <Content>    
          <Card>
            <CardItem>
              <Body>
                <Text>Date : {this.state.quote_detail.FLOWOUT_DATE} </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Body>
                <Text>Customer : {this.state.quote_detail.CUST_NAME} </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Body>
                <Text>Discount Amt. : {this.state.quote_detail.DISC_AMT} </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Body>
                <Text>Discount(%) : {this.state.quote_detail.DISC_PER} </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Body>
                <Text>Total : {this.state.quote_detail.TOTAL} </Text>
              </Body>
            </CardItem>
            <Button iconRight light onPress={() => this.goToDetailScreen({flowout_book: this.state.quote_detail.FLOWOUT_BOOK, 
                                                                flowout_no: this.state.quote_detail.FLOWOUT_NO})}>
              <Text style={{fontWeight: 'bold', color: "#0000ff"}}>Description Details</Text>
              <Icon name='arrow-forward' />
            </Button>
            <CardItem>
              <Body>
                <Text>Status: {this.state.quote_detail.STATUS_DESC} </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Body>
                <Text>Remarks : {this.state.quote_detail.REMARKS_QUO} </Text>
              </Body>
            </CardItem>
          </Card>
          <Button iconLeft rounded succes><Icon name='cog' /><Text>Approve</Text></Button>
          <Button rounded danger><Text>Reject</Text></Button>
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
  },
  descText: {
    fontSize: 13
  }
})