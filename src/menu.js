import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Platform,
  TouchableHighlight,
  Switch,
  Image
} from 'react-native';

import {
  Row,
  Col,
  Grid
} from 'react-native-elements';

import {
  Actions,
  Scene,
  Router
} from 'react-native-router-flux';

import Icon from 'react-native-vector-icons/Ionicons';

import AppStyles from './styles';

var ImagePicker = require('react-native-image-picker');

export default class menu extends Component{

  constructor(props){
    super(props);
    this.state =  { modoNortuno: false, painelComercial: false} ;
  }

  _toBi = (closeDrawer) => {
    Actions.bigerencial();

  }

  _tirarFoto() {
      const options = {
        quality: 1.0,
        maxWidth: 500,
        maxHeight: 500,
        storageOptions: {
            skipBackup: true,
            path: 'images'
        }
      };
      ImagePicker.showImagePicker(options, (response) => {
          let source = {uri: 'data:image/jpeg;base64,' + response.data, isStatic: true};
          if(response.fileName){
            this.setState({
              avatarSource: source,
              base64: response.data.toString()
            });
          }
      });
  }

  // Launch Camera:
  //ImagePicker.launchCamera(options, (response)  => {
    // Same code as in above section!
  //});

  // Open Image Library:
  //ImagePicker.launchImageLibrary(options, (response)  => {
    // Same code as in above section!
  //});

  render(){

    return (
      <Grid>
        <Col>
          <Row size={3}>
            <Col style={ AppStyles.boxMenu }>

              <TouchableHighlight onPress={ () => this._tirarFoto() } underlayColor={'transparent'} >

                { this.state.avatarSource !=null ?

                  <Image source={ this.state.avatarSource } style={ AppStyles.perfilImage } resizeMode="contain"/>
                  :
                  <Image source={ {uri:'https://leafii.com/images/defaultProfilePic.png'} } style={ AppStyles.perfilImage } resizeMode="contain"/>

                 }

              </TouchableHighlight>


              <Text style={ AppStyles.textName } >Alan Araujo </Text>
            </Col>
          </Row>
          <Row size={1}>
            <Col>
              <Row>
                <Col size={8}>
                  <Text style={ AppStyles.textLabel } >Modo norturno</Text>
                </Col>
                <Col size={2}>
                <Switch
                  onValueChange={(value) => this.setState({  modoNortuno: value} ) }
                  value={ this.state.modoNortuno }
                  style={{marginBottom: 5, marginTop:10}}
                   />
                </Col>
              </Row>

              <Row>
                <Col size={8}>
                  <Text style={ AppStyles.textLabel } >Atualização do painel comercial</Text>
                </Col>
                <Col size={2}>
                <Switch
                  onValueChange={(value) => this.setState({painelComercial: value})}
                  value={this.state.painelComercial}
                  style={{marginBottom: 5,marginTop:10}}
                   />
                </Col>
              </Row>

            </Col>
          </Row>
          <View style={ AppStyles.hr } />
          <Row size={3}>
            <Col>
              <TouchableHighlight>
                <View style={ [ AppStyles.inline, AppStyles.line ] }>
                  <Icon name={'md-bookmark'} size={25} color={'gray'} />
                  <Text style={ AppStyles.controlText }  > alan</Text>
                </View>
              </TouchableHighlight>
              <TouchableHighlight>
                <View style={ [ AppStyles.inline, AppStyles.line ] }>
                  <Icon name={'md-add'} size={25} color={'gray'} />
                  <Text style={ AppStyles.controlText }  > alan</Text>
                </View>
              </TouchableHighlight>
              <TouchableHighlight>
                <View style={ [ AppStyles.inline, AppStyles.line ] }>
                  <Icon name={'md-briefcase'} size={25} color={'gray'} />
                  <Text style={ AppStyles.controlText }  > alan</Text>
                </View>
              </TouchableHighlight>
            </Col>
          </Row>
          <View style={ AppStyles.hr } />
          <Row size={3}>
            <Col>

            </Col>
          </Row>
        </Col>
      </Grid>
    );

  }

}
