"use strict";

import React, { Component } from 'react';
import { StyleSheet, Text, View, PanResponder } from 'react-native';
import styles from './main_style';

const CIRCLE_SIZE = 40;
const CIRCLE_COLOR = "blue";
const CIRCLE_HIGHLIGHT_COLOR = "green";

class PanDemo extends Component {

    //초깃값을 지정한다.
    _panResponder = {};
    _previousLeft = 0;
    _previousTop = 0;
    _circleStyles = {};
    cirlce = null;

    constructor(props) {
        super(props);
        this.state = {
            numberActiveTouches: 0,
            moveX: 0,
            moveY: 0,
            x0: 0,
            y0: 0,
            dx: 0,
            dy: 0,
            vx: 0,
            vy: 0
        };
    }

    componentDidMount() {
        this._panResponder = PanResponder.create({
            onStartShouldSetPanResponder: this._handleStartShouldSetPanResponder,
            onMoveShouldSetPanResponder: this._handleMoveShouldSetPanResponder,
            onPanResponderGrant: this._handlePanResponderGrant,
            onPanResponderMove: this._handlePanResponderMove,
            onPanResponderRelease: this._handlePanResponderEnd,
            onPanResponderTerminate: this._handlePanResponderEnd
        });
        this._previousLeft = 20;
        this._previousTop = 84;
        this._circleStyles = {
            style: { left: this._previousLeft, top: this._previousTop }
        };
        this._updatePosition();
    }

    render() {
        return (
            <View style={thisStyles.container}>
                <View
                  ref={circle => {
                      this.circle = circle;
                  }}
                  style={thisStyles.panCircle}
                  {...this._panResponder.panHandlers}
                />
                <Text>
                    {this.state.numberActiveTouches} touches,
                    dx: {this.state.dx},
                    dy: {this.state.dy},
                    vx: {this.state.vx},
                    vy: {this.state.vy}
                </Text>
            </View>
        );
    }

    // 사용자에게 시각적인 피드백을 제공하기 위해
    // _hightlight와 _unHighlight는 PanResponder 메서드에 의해 호출된다.

    _highlight = () => {
        this.circle &&
          this.circle.setNativeProps({
              style: { backgroundColor: CIRCLE_HIGHLIGHT_COLOR }
          });
    };

    _unHighlight = () => {
        this.circle &&
          this.circle.setNativeProps({
              style: { backgroundColor: CIRCLE_COLOR }
          });
    }

    // 원의 위치는 setNativeProps를 이용해여 직접 지정한다.
    _updatePosition = () => {
        this.circle && this.circle.setNativeProps(this._circleStyles);
    }

    _handleStartShouldSetPanResponder = (event, gestureState) => {
        // 사용자가 원 부분을 누르기 시작할 때 responder 활성화 여부
        return true;
    }

    _handleMoveShouldSetPanResponder = (event, gestureState) => {
        //사용자가 원 위로 터치하여 움직일 때 responder를 활성화하는지의 여부
        return true;
    }

    _handlePanResponderGrant = (event, gestureState) => {
        this._highlight();
    }

    _handlePanResponderMove = (event, gestureState) => {
        this.setState({
            stateID: gestureState.stateID,
            moveX: gestureState.moveX,
            moveY: gestureState.moveY,
            x0: gestureState.x0,
            y0: gestureState.y0,
            dx: gestureState.dx,
            dy: gestureState.dy,
            vx: gestureState.vx,
            vy: gestureState.vy,
            numberActiveTouches: gestureState.numberActiveTouches
        });

        // 이동한 값만큼 현재 위치를 계산한다.
        this._circleStyles.style.left = this._previousLeft + gestureState.dx;
        this._circleStyles.style.top = this._previousTop + gestureState.dy;
        this._updatePosition();
    }

    _handlePanResponderEnd = (event, gestureState) => {
        this._unHighlight();
        this._previousLeft += gestureState.dx;
        this._previousTop += gestureState.dy;
    }



}


const thisStyles = StyleSheet.create({
    panCircle: {
        width: CIRCLE_SIZE,
        height: CIRCLE_SIZE,
        borderRadius: CIRCLE_SIZE / 2,
        backgroundColor: CIRCLE_COLOR,
        position: 'absolute',
        left: 0,
        top: 0
    },
    container: { width: '100%', height: 100, bottom: 20 }
});

export default PanDemo;
