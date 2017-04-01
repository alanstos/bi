import {

  StyleSheet,

} from 'react-native';

const styles = StyleSheet.create({

  containerCentered :{
    justifyContent: 'center',
    alignItems:'center',
    flex: 1
  },
  inline: {
    flexDirection:'row',
    flexWrap:'wrap'
  },
  hr: {
    left: 0,
    right: 0,
    borderBottomWidth: 1,
    borderBottomColor: '#D0D1D5',
    height: 1,
    backgroundColor: 'transparent',
    marginBottom: 10,
    marginTop:30
  },

  hrWhite: {
    left: 0,
    right: 0,
    borderBottomWidth: 0.2,
    borderBottomColor: 'white',
    height: 0.2,
    backgroundColor: 'transparent',
    marginBottom: 2,
    marginTop: 2
  },

  hrBi: {
      left: 0,
      right: 0,
      borderBottomWidth: 1,
      borderBottomColor: '#D0D1D5',
      height: 1,
      backgroundColor: 'transparent',
      marginTop: 10,
      marginRight: 10,
      marginLeft: 10
  },

  controlText: {
    color: 'gray',
    marginLeft: 35,
    fontSize: 14,
    marginTop: 5,
    fontWeight: "bold"
  },
  line: {
    margin:15
  },
  textName: {
    margin: 20,
    color: 'white',
    fontSize: 16
  },
  textLabel:{
    margin:10
  },
  boxMenu: {
    backgroundColor: '#c52827',
    flex: 1,
    justifyContent: 'flex-end'
  },
  row: {
    flexDirection: 'column',
    padding: 15
  },
  allLabels: {
    marginBottom: 30,
    fontWeight: "400",
    color: 'gray'
  },
  perfilImage :{
    height:60,
    width:60,
    borderRadius:30,
    marginLeft:30
  }
})

export default styles;
