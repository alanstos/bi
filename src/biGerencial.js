import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Alert,
  ScrollView,
  Image
} from 'react-native';

import {
  Actions,
  Scene,
  Router
} from 'react-native-router-flux';

import {
  Row,
  Col,
  Grid
} from 'react-native-elements';

import AppStyles from './styles';

export default class biGerencial extends Component {

  constructor(props){
    super(props);
    this.state = { numero: 0 };
  }

  calcular = () => {
    this.setState({numero: this.state.numero +1});
  }

  nextPage = () => {
    Actions.home();
  }

  componentDidMount = () => {
    //Alert.alert("depois");
  }

  componentWillMount = () => {
    //Alert.alert("aantes");
  }

  returnDados = () => {

      let data = [];

      for( var i=0; i < 10; i++  ){
          data.push(
            <View key={i} style={ styles.boxDados }  >
              <Text style={ styles.textDados } >Vendas</Text>
              <View style={ AppStyles.hrWhite } />
              <Text style={ styles.textDados }>3.422</Text>
            </View>
        )
      }

      return data;
  }

  render(){
    return (
      <Grid>
        <Col style={ {marginTop: 70} }>
          <Row size={1} >
            <ScrollView style={ AppStyles.inline, styles.containerBox } horizontal={true}>
              { this.returnDados() }
            </ScrollView>
          </Row>
          <Row size={9} >
            <Col style={ AppStyles.containerBox }>
              <Row style={ [AppStyles.inline, AppStyles.containerBox, {marginTop:40} ] } >

                  <View style={ [AppStyles.hrBi, {width:120}] } />
                  <Text style={{ textAlign:'center'}} >FEEDNEWS</Text>
                  <View style={ [AppStyles.hrBi, {width:120}] } />

              </Row>
              <Row>
                <View>
                  <Image source={ require('./Card-Azul.png') } style={ styles.card } resizeMode="contain" />
                </View>
              </Row>
            </Col>

          </Row>
        </Col>
      </Grid>

    );
  }

  render_old() {
    return (
      <View style={ [ AppStyles.containerCentered, styles.container ] }>

        <Text>{this.state.numero} </Text>

        <TouchableHighlight onPress={ () => this.nextPage() }>
          <Text> BI Gerencial </Text>
        </TouchableHighlight>

        <TouchableHighlight onPress={ () => this.calcular() }>
          <Text> Calcular </Text>
        </TouchableHighlight>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
  },
  textDados: {
    color: '#00b300',
    margin: 5
  },
  boxDados: {
    justifyContent: 'center'
  },
  containerBox: {
    backgroundColor: '#00004d'
  },
  card:{
    width:350,
    height:180
  }
});
