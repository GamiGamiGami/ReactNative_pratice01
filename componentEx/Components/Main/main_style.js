import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: { flex: 1 },
    btnContainer: { flex:1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: '#F5FCFF' },
    panContainer: { marginLeft: 10 },
    listLine: { flex: 2, backgroundColor: 'black' },
    foxLine: { flex: 4 },
    btnLine: { flex: 2 },
    bold: { fontWeight: 'bold' },
    italic: { fontStyle: 'italic'},
    foxText: {
        fontSize: 15,
        textAlign: 'center',
        marginLeft: '5%',
        width:'90%',
        backgroundColor: '#FFF',
        borderRadius: 10
    },
    foxEmptyArea: { height: '84%' },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        color: '#FFFFFF'
    },
    touchable: { borderRadius: 100 },
    button: {
        backgroundColor: '#FF0000',
        borderRadius: 100,
        height: 100,
        width: 100,
        justifyContent: 'center'
    },
});

export default styles;
