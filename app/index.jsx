
import axios from "axios";
import { useState } from "react";
import { Image, ImageBackground, ScrollView, StyleSheet, Text, View } from "react-native";
import { Botao } from '../components/botao/botao';
import { Card } from '../components/card/card';
import { Input } from '../components/input/input';


export default function Index() {

  const [cep, setCep] = useState("")
  const [jsonCep, setJsonCep] = useState({})
  const [amostradinho, setAmostradinho] = useState(false)

  async function consultarCep() {
    try {
      if(cep !== "" && cep.length === 8){
        const resposta = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)

        setJsonCep(resposta.data);
        console.log(resposta.data);

        setAmostradinho(true)
        
      }else{
        alert("O Cep está incorreto. Digite com 8 números!")
        setAmostradinho(false)
      }
      
    } catch (error) {
      console.log(error)
    }
  }


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
        <Text style={styles.titulo}>Consulte seu CEP</Text>
        {/* 2.2 input */}
        <Input 
          valorCep={cep}
          onChangeValorCep={e => setCep(e)}
        />
        {/* 2.3 botão */}
        <Botao tituloBotao='Consultar' onPress={consultarCep}/>

        {/* 2.4 card de informações */}
        {jsonCep.cep && (
          <Card
          cep = {jsonCep.cep}
          logradouro = {jsonCep.logradouro}
          bairro = {jsonCep.bairro}
          uf = {jsonCep.uf}
          estado = {jsonCep.estado}
          regiao = {jsonCep.regiao}
          />
        )}

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
    fontFamily: "Poppins-Bold"
  }
})