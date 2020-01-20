import React from 'react'
import { Image, Text, View, StyleSheet } from 'react-native'

export default class CategoryListItem extends React.Component {
  render () {
    const { category } = this.props
    return (
      <View style={style.container}>
        <Text style={style.title}>{category.name}</Text>
        <Image source={category.imgLink} style={style.categoryImages}></Image>
      </View>
    )
  }
}

const style = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 16,
    backgroundColor: `#D7DADD`,
    borderRadius: 10,
    shadowColor: `#CBC5AC`,
    shadowOpacity: 0.8,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 0 },
    marginBottom: 16
  },
  title: {
    fontSize: 16,
    textTransform: 'uppercase',
    fontWeight: 'bold'
  },  
  categoryImages: {
    width: 64,
    height: 64,
    margin: 8
  }
});