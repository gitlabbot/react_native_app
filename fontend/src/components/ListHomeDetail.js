import React from 'react';
import { StyleSheet } from 'react-native';
import { ListItem, Left, Body, Right, Button, Icon, Text} from 'native-base';

const ListHomeDetail = ({navigate_name, icon_name, module_name, style_css}) => {
    return (
        <ListItem icon onPress={navigate_name}>
            <Left>
                <Button style={style_css}>
                <Icon active name={icon_name} />
                </Button>
            </Left>
            <Body>
                <Text>{module_name}</Text>
            </Body>
            <Right>
                <Icon active name="arrow-forward" />
            </Right>
        </ListItem>
    );
}

const styles = StyleSheet.create({});

export default ListHomeDetail;