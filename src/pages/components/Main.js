import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    ScrollView,
    TouchableOpacity,
    AsyncStorage,
    Action
} from 'react-native';
import {Segment, Button, Right, Icon, Header, Left, Body, Title, Tab, Tabs} from 'native-base';

export default class Main extends Component {
    constructor(props){
        super(props);
        this.state = {
            title: 'Diary',
            region: {
                latitude: 20,
                longitude: -120.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            },
        }
    }

    render() {
        return (
            <View>
                <Text>Hello world!</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
});
