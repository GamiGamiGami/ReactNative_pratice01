import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import PanDemo from './panDemo';
import styles from './main_style';


class Button extends Component {

    constructor(props) {
        super(props);
        this.state = { pressing: false };
    }

    _onPressIn = () => {
        this.setState({ pressing: true });
    };

    _onPressOut = () => {
        this.setState({ pressing: false });
    };

    _onPress = () => {
        this.setState({ pressing: true });
        console.log('ON Press ME!');
    }

    _onLongPress = () => {
        this.setState({ pressing: true });
        console.log('ON Long Press ME!');
    }

    render () {
        return (
            <View style={styles.btnContainer}>
                <TouchableHighlight
                  onPressIn={this._onPressIn}
                  onPressOut={this._onPressOut}
                  onPress = {this._onPress}
                  onLongPress = {this._onLongPress}
                  style={styles.touchable}
                >

                    <View style={styles.button}>
                        <Text style={styles.welcome}>
                            {this.state.pressing ? "CUTE FOX!" : "PUSH ME"}
                        </Text>
                    </View>
                </TouchableHighlight>
                <PanDemo />
            </View>
        );
    }
}

export default Button;
