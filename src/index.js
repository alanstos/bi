import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Platform
} from 'react-native';

import {
  Actions,
  Scene,
  Router
} from 'react-native-router-flux';

import BigGerencial from './biGerencial';
import Home from './home';
import drawer from './drawer';

export default class index extends Component {
  render() {
    return (

      <Router
        navigationBarStyle={ styles.navBar }
        titleStyle={ styles.navTitle }
        leftButtonIconStyle={ styles.btnColor }
      >
        <Scene key="root">
          <Scene key="tabbar" component={drawer}>
            <Scene key="drawer" tabs={true}>
              <Scene key='bigerencial' initial component={BigGerencial} title="BI GERENCIAL" />
              <Scene key='home' component={Home} title="Home" />
            </Scene>
          </Scene>
        </Scene>
      </Router>

    );
  }
}

const styles = StyleSheet.create({

  navBar:{
    backgroundColor:'#c52827',
    borderBottomWidth: 0
  },
  navTitle: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 21,
    fontFamily: Platform.OS == 'ios' ? 'Arial' : 'Roboto'
  },
  btnColor:{
    tintColor:'white'
  }
});
