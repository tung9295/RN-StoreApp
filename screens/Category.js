import React from 'react';
import { StyleSheet, View } from 'react-native';
 
export default class Category extends React.Component {
  render() {
    const { categories } = this.state;
    return (
      <View>Category</View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'stretch',
    justifyContent: 'center',
    paddingLeft: 16,
    paddingRight: 16
  },
});
