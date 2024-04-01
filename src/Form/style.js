import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    form: {
        backgroundColor: '#FFF',
        padding: 30,
        borderRadius: 10,
        margin: 15,
        height: 220,
    },
    label:{
        fontSize: 18,
        marginBottom: 10,

    },
    input:{
        fontSize: 18,
        color: '#FFF',
        borderRadius: 10,
        backgroundColor: '#8B03BB',
        padding: 10,
        borderColor:'#FFF',
        borderWidth: 1,
        marginBottom: 15,
        marginLeft: 15,
        marginRight: 15,
    },
    btn:{
        backgroundColor: '#FFF',
        padding: 5,
        borderRadius: 50,
        marginBottom: 20,
        width: '40%',
        borderColor:'#8B03BB',
        borderWidth: 1,
    },
    btnText:{
        fontSize: 18,
        color: '#8B03BB',
        textAlign: 'center',
    },
    text1:{
        fontSize:20,
        fontWeight: 'bold',

    },
    text2:{
        fontSize: 15,
        paddingTop: 5,
    },
    text3:{
        fontSize: 35,
        color: '#0099CC',
        paddingTop: 10,
        paddingBottom: 15,
         fontWeight: 'bold',
    },
    text5:{
        fontSize: 35,
        color: '#000',
        paddingTop: 10,
        paddingBottom: 15,
        fontWeight: 'bold',
    },
    boto:{
        alignItems: 'center',
        backgroundColor: '#0099CC',
        padding:10,
        margin:15,
        borderRadius:30,
    },
    botoText:{
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold',
    },
})

export default styles