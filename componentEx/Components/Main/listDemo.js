import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, SectionList } from 'react-native';
import styles from './main_style';

import BookItem from './bookItem';
import NYT from './NYT';

class listDemo extends Component {

    constructor(props) {
        super(props);
        this.state = { sections: [] };
    }

    componentDidMount() {
        this._refreshData();
    }

    _addKeysToBooks = books => {
        return books.map(book => {
            return Object.assign(book, { key: book.title });
        });
    }

    _refreshData = () => {
        Promise
          .all([
              NYT.fetchBooks("hardcover-fiction"),
              NYT.fetchBooks("hardcover-nonfiction")
          ])
          .then(results => {
              if(results.length !== 2) {
                  console.error("Unexpected results");
              }

              this.setState({
                  sections: [
                      {
                          title: "Hardcover Fiction",
                          data: this._addKeysToBooks(results[0])
                      },
                      {
                          title: "Hardcover NonFiction",
                          data: this._addKeysToBooks(results[1])
                      }
                  ]
              });
          });
    };

    _renderItem = ({ item }) => {
        return (
            <BookItem
              coverURL={item.book_image}
              title={item.key}
              author={item.author}
            />
        );
    };

    _renderHeader = ({section}) => {
        return (
            <Text style={styles.headingText}>
                {section.title}
            </Text>
        );
    };

    render() {
        return (
            <View style={styles.listContainer}>
                <SectionList
                  sections={this.state.sections}
                  renderItem={this._renderItem}
                  renderSectionHeader={this._renderHeader}
                />
            </View>
        );
    }
};

export default listDemo;
