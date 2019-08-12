import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        borderRadius: 8,
        backgroundColor: '#99CCFF'
    },
    accentText: {
        fontSize: 18,
        fontWeight: 'bold'
    },

    parent: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-start',
        backgroundColor: '#F5FCFF',
        borderColor: '#0099AA',
        borderWidth: 5,
        marginTop: 30
    },
    child: {
        flex: 1,
        borderColor: '#AA0099',
        borderWidth: 2,
        textAlign: 'center',
        fontSize: 24
    },
});

export default styles;
