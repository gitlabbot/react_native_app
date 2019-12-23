import React from 'react';
import { ActivityIndicator, View, StyleSheet } from 'react-native';
import { Header, Footer, Container, Content, ListItem, Left, Body, Right, Button, Icon, Text, Title, FooterTab } from 'native-base';
// import { mocker } from '../mockers/MockerApiData';
import { apiBaseURL } from '../registers/api';
import axios from 'axios';

export default class QuotationScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      quote_list: [],
      isLoading: true,
      apiGetData: apiBaseURL + 'api/quote_header_list'
    };
    this.goToDetailScreen = this.goToDetailScreen.bind(this);
  }

  goToDetailScreen({flowout_book, flowout_no}) {
    this.props.navigation.navigate('QuoteDetail', {flowout_book, flowout_no});
  }

  componentDidMount() {
    axios.get(this.state.apiGetData)
      .then(res => {
        const quote_list = res.data;
        this.setState({ isLoading: false, quote_list });
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
          <Title>Quotation Approvals</Title>
        </Header>
        <Content>    
          { this.state.quote_list.map((quotations,i) => 
            <ListItem icon key={i} style={{flex: 1}} 
                           onPress={() => this.goToDetailScreen({flowout_book: quotations.FLOWOUT_BOOK, 
                                                                 flowout_no: quotations.FLOWOUT_NO})}>
              <Left>
                <Button style={{backgroundColor: "#00BF29"}}>
                  <Icon active name="apps" />
                </Button>
              </Left>
              <Body>
                <Text>{quotations.QUOTE_DOC}</Text>
                <Text style={{fontSize: 10, color: "#0000ff"}}>{quotations.APP_POS}</Text>
              </Body>
              <Right>
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
