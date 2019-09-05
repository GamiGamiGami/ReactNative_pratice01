import react, { Component } from "react";

import { Image, ImageBackground, CameraRoll } from "react-native";

import styles from "./style";

class PhotoBackdrop extends Component {

    constructor(props) {
        super(props);
        this.state = { photoSource: null };
    }

    componentDidMount() {
        CameraRoll.getPhotos({ first: 1 }).then(data => {
              this.setState({ photoSource: { url: data.edges[3].node.image.uri } });
        }, error =>{
            console.warn(error);
        });
    }

    render() {
        return (
            <ImageBackground
                style={styles.backdrop}
                source={this.state.photoSource}
                resizeMode="cover"
            >
                {this.props.children}
            </ImageBackground>
        );
    }

}


export default PhotoBackdrop;
