import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: { flex: 1 },
    btnContainer: { flex:1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: '#F5FCFF' },
    panContainer: { marginLeft: 10 },
    listLine: { flex: 2 },
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
    foxEmptyArea: { height: '80%' },
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
    headingText: {
        fontSize: 24,
        alignSelf: 'center',
        backgroundColor: '#FFF',
        fontWeight: 'bold',
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 2,
        paddingBottom: 2
    },
    bookItem: {
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        borderBottomColor: '#AAAAAA',
        borderBottomWidth: 2,
        padding: 5,
        height: 175
    },
    cover: {flex: 1, height: 150, resizeMode: 'contain'},
    info: {
        flex:3,
        alignItems: 'flex-end',
        flexDirection: 'column',
        alignSelf: 'center',
        padding: 20
    },
    author: { fontSize: 18 },
    title: { fontSize: 18, fontWeight: 'bold' },
});

export default styles;
