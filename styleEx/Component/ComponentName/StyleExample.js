import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styles from './Styles';

class styleEx extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={[styles.button, styles.accentText, {color: '#FFFFFF'}, this.props.style]}>
                    THE FOX IS HERE STAY
                </Text>
                <View style={styles.parent}>
                    <Text style={styles.child}>Child One</Text>
                    <Text style={styles.child}>Child Two</Text>
                    <Text style={styles.child}>Child Three</Text>
                </View>
            </View>
        );
    }
}



export default styleEx;
