import React, {
    Component
} from 'react';

import {
  Actions,
  DefaultRenderer
} from 'react-native-router-flux';

//Plugins
import Drawer from 'react-native-drawer';
import Menu from './menu';

//Variaveis
var close;

export default class NavigationDrawer extends Component {

    componentDidMount = () => {
      close = this.refs.navigation.close;
    }

    render(){
        const state = this.props.navigationState;
        const children = state.children;
        return (
            <Drawer
                ref="navigation"
                open={state.open}
                onOpen={()=>Actions.refresh({key:state.key, open: true})}
                onClose={()=>Actions.refresh({key:state.key, open: false})}
                type="displace"
                content={<Menu closeDrawer={close} />}
                tapToClose={true}
                openDrawerOffset={0.2}
                panCloseMask={0.2}
                negotiatePan={true}
                tweenHandler={(ratio) => ({
                 main: { opacity:Math.max(0.54,1-ratio) }
            })}>
            <DefaultRenderer navigationState={children[0]} onNavigate={this.props.onNavigate} />
            </Drawer>
        );
    }
}
