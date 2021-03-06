import React, { Component  } from 'react';

import { ImageBackground } from 'react-native';

import styles from './style';

class PhotoBackdrop extends Component {
    render() {
        return (
            <ImageBackground
              style={styles.backdrop}
              source={require("./../../Images/flowers.png")}
              resizeMode="cover"
            >
                {this.props.children}
            </ImageBackground>
        );
    }
}

export default PhotoBackdrop;
