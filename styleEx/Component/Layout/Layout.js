import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styles from './Layout_style';

class layoutEx extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.layoutArea}>
                    <View style={styles.topLayoutArea}>
                          <View style={styles.topLine1}>
                              <View style={styles.Object1} />
                              <View style={styles.Object2} />
                          </View>
                          <View style={styles.topLine2}>
                              <View style={styles.Object3} />
                          </View>
                    </View>
                    <View style={styles.bttomLayoutArea}>
                          <View style={styles.bottomLine1}>
                              <View style={styles.Object4} />
                          </View>
                          <View style={styles.bottomLine2}>
                              <View style={styles.Object5} />
                          </View>
                          <View style={styles.bottomLine3}>
                              <View style={styles.Object6} />
                              <View style={styles.Object7} />
                          </View>
                    </View>
                </View>
            </View>
        );
    }
}



export default layoutEx;
