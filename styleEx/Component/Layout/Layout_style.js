import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2f2e2e'
    },
    layoutArea: {
        flexDirection: 'column',
        position: 'absolute',
        top: 30,
        bottom: 10,
        left: 8,
        right: 7
    },
    topLayoutArea : {
        flex: 2,
        flexDirection: 'row'
    },
    bttomLayoutArea : {
        flex: 1,
        flexDirection: 'row'
    },
    topLine1: {
        flexDirection: 'column',
        width: '27%',
        height : '100%',
        marginRight: '4%'
    },
    topLine2: {
        width: '69%',
        height: '100%'
    },
    bottomLine1: {
        width: '27%',
        height: '100%',
        marginRight: '4%'
    },
    bottomLine2: {
        width: '50%',
        height: '100%',
        marginRight: '4%'
    },
    bottomLine3: {
        flexDirection: 'column',
        width: '15%',
        height: '100%'
    },
    Object1: {
      width: '100%',
      height: '25%',
      backgroundColor: '#fff'
    },
    Object2: {
        width: '100%',
        height: '69%',
        marginTop: '15%',
        backgroundColor: '#fff'
    },
    Object3: {
        width: '100%',
        height: '98%',
        backgroundColor: '#565353'
    },
    Object4: {
        flex: 1,
        backgroundColor: '#a9a9a9'
    },
    Object5: {
        flex: 1,
        backgroundColor: '#fff'
    },
    Object6: {
        flex: 1,
        marginBottom: 10,
        backgroundColor: '#fff'
    },
    Object7: {
        flex: 1,
        backgroundColor: '#fff'
    }
});

export default styles;
