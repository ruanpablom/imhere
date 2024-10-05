import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: '#1F1E25',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 5,
        marginBottom: 12,
    },
    name: {
        color: '#FFF',
        fontSize: 16,
        marginLeft: 16,
        flex:1,
    },
    buttonText: {
        color: '#FFF',
        fontSize: 24,
    },
    button: {
        width: 56,
        height: 56,
        borderRadius:5,
        backgroundColor: '#E23C44',
        alignItems: 'center',
        justifyContent: 'center',
    },
});