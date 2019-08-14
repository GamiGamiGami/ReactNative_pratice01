import React, { Component } from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import PressDemo from './pressDemo';
import styles from './main_style';


class Strong extends Component {
    render() {
        return (
            <Text style={styles.bold}>
                {this.props.children}
            </Text>
        );
    }
};

class Em extends Component {
    render() {
        return (
            <Text style={styles.italic}>
                {this.props.children}
            </Text>
        );
    }
}

class main extends Component {
    render(){
        return (
          <View style={styles.container}>
              <View style={styles.listLine}>

              </View>
              <View style={styles.foxLine}>
                  <ImageBackground
                    source={require("./../../Images/snow_fox.jpg")}
                    style={{width:'100%', height:'100%'}}>
                      <View style={styles.foxEmptyArea}></View>
                      <Text style={styles.foxText}>
                          The quick <Em>brown</Em> fox jumped
                          over the lazy <Strong>dog</Strong>.
                      </Text>
                  </ImageBackground>
              </View>
              <View style={styles.btnLine}>
                  <PressDemo />
              </View>
          </View>
        );
    }
}


export default main;
