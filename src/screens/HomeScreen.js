import React from 'react';
import { StyleSheet } from 'react-native';
import { Container, Header, Right, Button, Icon, Title, Text, Footer, FooterTab, Content } from 'native-base';
import HomeDetail from '../components/HomeDetail';
// import { Font } from 'expo';
// import { colors } from 'react-native-elements';

const HomeScreen = ({navigation}) => {
    return (
      <Container>
        <Header>
          <Title>Dashboard</Title>
          <Right>
            <Button transparent>
              <Icon name='settings'/>
            </Button>
          </Right>
        </Header>
        <Content>
          <HomeDetail 
                navigate_name={()=>navigation.navigate('Components')}
                icon_name="apps"
                module_name="Components Modules"
                style_css={{ backgroundColor: "#FF0000" }}
          />
          <HomeDetail 
                navigate_name={()=>navigation.navigate('List')}
                icon_name="apps"
                module_name="List Modules"
                style_css={{ backgroundColor: "#00BF29" }}
          />
          <HomeDetail 
                navigate_name={()=>navigation.navigate('Image')}
                icon_name="apps"
                module_name="Image Modules"
                style_css={{ backgroundColor: "#0037FF" }}
          />
          <HomeDetail 
                navigate_name={()=>navigation.navigate('Counter')}
                icon_name="apps"
                module_name="Counter Modules"
                style_css={{ backgroundColor: "#EDB407" }}
          />
          <HomeDetail 
                navigate_name={()=>navigation.navigate('Color')}
                icon_name="apps"
                module_name="Color Modules"
                style_css={{ backgroundColor: "#FF008C" }}
          />
          <HomeDetail 
                navigate_name={()=>navigation.navigate('Api')}
                icon_name="apps"
                module_name="Call API Modules"
                style_css={{ backgroundColor: "#FF008C" }}
          />
          <HomeDetail 
                navigate_name={()=>navigation.navigate('Cust')}
                icon_name="apps"
                module_name="Call API Customer Lists"
                style_css={{ backgroundColor: "#FF008C" }}
          />
          <HomeDetail 
                navigate_name={()=>navigation.navigate('Quotation')}
                icon_name="apps"
                module_name="Call API Quotation Lists"
                style_css={{ backgroundColor: "#FF008C" }}
          />
          <HomeDetail 
                navigate_name={()=>navigation.navigate('QuotationDetailDesc')}
                icon_name="apps"
                module_name="Call API Quotation Details"
                style_css={{ backgroundColor: "#FF008C" }}
          />
        </Content>
        <Footer>
          <FooterTab>
            <Button vertical onPress={()=>navigation.navigate('Components')}>
              <Icon name="home" />
              <Text>Comp</Text>
            </Button>
            <Button vertical onPress={()=>navigation.navigate('List')}>
              <Icon name="apps" />
              <Text>List</Text>
            </Button>
            <Button vertical onPress={()=>navigation.navigate('Image')}>
              <Icon active name="image" />
              <Text>Img</Text>
            </Button>
            <Button vertical onPress={()=>navigation.navigate('Counter')}>
              <Icon name="settings" />
              <Text>Counter</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
};


const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    textAlign: "center",
  }
});

export default HomeScreen;
