import { StyleSheet, Text, View } from "react-native"

export const Card = () => {
    return(
        <View style={styles.card} showsVerticalScrollIndicator={false}>
            <View>
                <Text style={styles.tituloValor}>CEP:</Text>
                <Text style={styles.valor}>Dado 01</Text>
            </View>
            <View>
                <Text style={styles.tituloValor}>Logradouro:</Text>
                <Text style={styles.valor}>Dado 02</Text>
            </View>
            <View>
                <Text style={styles.tituloValor}>Bairro:</Text>
                <Text style={styles.valor}>Dado 03</Text>
            </View>
            <View>
                <Text style={styles.tituloValor}>UF:</Text>
                <Text style={styles.valor}>Dado 04</Text>
            </View>
            <View>
                <Text style={styles.tituloValor}>Estado:</Text>
                <Text style={styles.valor}>Dado 05</Text>
            </View>
            <View>
                <Text style={styles.tituloValor}>Região:</Text>
                <Text style={styles.valor}>Dado 06</Text>
            </View>   
        </View>
    )
}

const styles = StyleSheet.create({
    card:{
        width: '70%',
        padding: 20,
        backgroundColor: 'white',
        minHeight: '30%',
        marginBottom: 120,
        // elevation: 4,
        // shadowColor: '#727272ff',
        // shadowOffset: {width: 0, height: 2},
        // shadowOpacity: 0.5,
        // shadowRadius: 2,
        // elevation: 2
        boxShadow: '#8b8b8b29 0px 1px 4px',
        borderRadius: 7,
        gap: 25,
    },
    tituloValor:{
        fontWeight: 700,
    }
})