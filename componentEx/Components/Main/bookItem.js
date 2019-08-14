import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, SectionList } from 'react-native';
import styles from './main_style';

class BookItem extends Component {
    render() {
        return (
            <View style={styles.bookItem}>
                <Image style={styles.cover} source={{ uri: this.props.coverURL }} />
                <View style={styles.info}>
                    <Text style={styles.author}>{this.props.author}</Text>
                    <Text style={styles.title}>{this.props.title}</Text>
                </View>
            </View>
        );
    }
};

export default BookItem
