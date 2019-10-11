import React, { Component } from "react";
import { StyleSheet, Text, View, Alert, Platform } from "react-native";

const platform01 = Platform.select({
    ios : Alert.alert("Hey!", "you using iOS !"),
    android : Alert.alert("Hey!", "you using Android !")
});

export default class App extends Component {

    compoentDidMount() {

    }

    render() {
        return (
            <View>
                <Text>
                    {platform01}
                </Text>
            </View>
        );
    }

}
