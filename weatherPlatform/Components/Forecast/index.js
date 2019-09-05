import React, { Component } from "react";
import { StyleSheet, Text, View } from 'react-native';

class Forecast extends Component {
  render() {
    return (
        <View style={styles.forecast}>
            <Text style={{ color: "#FFFFFF", fontSize: 72 }}>
                {this.props.temp}
            </Text>
            <Text style={{ color: "#FFFFFF", fontSize: 32 }}>
                {this.props.main}*F
            </Text>
        </View>
    );
  }
}


const styles = StyleSheet.create({
    forecast: {
        alignItems: 'center'
    }
});


export default Forecast;
