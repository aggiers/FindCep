
import { Image, ImageBackground, ScrollView, StyleSheet, Text, View } from "react-native";
import { Botao } from '../components/botao/botao';
import { Card } from '../components/card/card';
import { Input } from '../components/input/input';


export default function Index() {
  return (
    <>
      {/* 1. logo + imagem de fundo */}
      <ImageBackground source={require('../assets/images/ImgFundo.png')}
        style={styles.imgFundo}>
        <Image source={require('../assets/images/FindCep.png')} style={styles.logo}>
        </Image>
      </ImageBackground>
      {/* sempre que você colocar uma imagem de fundo use essa tag de cima, o ImagemBackground */}

    <ScrollView style={styles.containerScroll}>
      {/* 2. campo de consulta */}
      <View style={styles.container}>
        {/* 2.1 título */}
        <Text style={styles.titulo}>Consulte deu CEP</Text>
        {/* 2.2 input */}
        <Input/>
        {/* 2.3 botão */}
        <Botao tituloBotao='Consultar'/>
        {/* 2.4 card de informações */}
        <Card/>
      </View>
    </ScrollView>

    </>
  );
}

//estilos dos meus componentes:
const styles = StyleSheet.create({
  imgFundo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%'
  },
  
  logo: {
    width: 100,
    height: 120
  },

  container:{
    minHeight: '100%',
    alignItems: "center",
    gap: 40,
    width: '100%'
  },

  containerScroll:{
    flex: 1.5,
    paddingTop: 50,
    paddingBottom: 80,
    height: '100%',
  },

  titulo:{
    fontSize: 25,
  }
})