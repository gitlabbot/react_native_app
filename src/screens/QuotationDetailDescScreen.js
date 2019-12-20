import React from 'react';
import { ActivityIndicator, View, StyleSheet } from 'react-native';
import { Header, Footer, Container, Content, ListItem, Left, Body, Right, Button, Icon, Text, Title, FooterTab } from 'native-base';
// import { mocker } from '../mockers/MockerApiData';
// import { generator } from '../registers/api';
import axios from 'axios';

export default class QuotationDetailDescScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      quote_detail: [],
      isLoading: true
    };
  }

  componentDidMount() {
    let sendParams = { 
      quote_book: this.props.navigation.state.params.flowout_book, 
      quote_no: this.props.navigation.state.params.flowout_no 
    };
    axios.get("http://172.20.10.4:8081/api/quote_detail_desc/" + sendParams.quote_book + "/" + sendParams.quote_no)
      .then(res => {
        let quote_detail = res.data;
        this.setState({ isLoading: false, quote_detail });
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
        <Content>      
          { this.state.quote_detail.map((quotations,i) => 
            <ListItem icon key={i} style={{flex: 1, height: 160}}>
              <Body style={{flex: 1, height: 160}}>
                <Text style={styles.descText}>Seq: {quotations.SEQ}</Text>
                <Text style={styles.descText}>Brand Name : {quotations.BRAND_NAME}</Text>
                <Text style={styles.descText}>Product Name : {quotations.PRODUCT_NAME}</Text>
                <Text style={styles.descText}>Model No. : {quotations.MODEL_NO}</Text>
                <Text style={styles.descText}>Qty.: {quotations.QTY} {quotations.UNIT}</Text>
                <Text style={styles.descText}>Rate : {quotations.RATE} {quotations.CURRENCY}</Text>
                <Text style={styles.descText}>Subtotal : {quotations.SUB_TOTAL} {quotations.CURRENCY}</Text>
              </Body>
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
  },
  descText: {
    fontSize: 13
  }
})