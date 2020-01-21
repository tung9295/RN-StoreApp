import React from 'react';
import { Image, FlatList, StyleSheet, View, Text } from 'react-native';
import CosmeticImg from '../assets/cosmetic.png';

export default class Category extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('categoryName')
    };
  };

  constructor() {
    super();
    this.state = {
      cosmeticProducts: [
        {id: 1, name: 'Son', price: '100K', imgLink: CosmeticImg},
        {id: 2, name: 'Son', price: '100K', imgLink: CosmeticImg},
        {id: 3, name: 'Son', price: '100K', imgLink: CosmeticImg},
        {id: 4, name: 'Son', price: '100K', imgLink: CosmeticImg},
        {id: 5, name: 'Son', price: '100K', imgLink: CosmeticImg}
      ]
    }
  }

  render() {
    const { cosmeticProducts } = this.state;
    return (
      <FlatList 
        numColumns={2}
        data={cosmeticProducts}
        renderItem={({ item }) =>
          <View style={styles.wrapper}>
            <Text style={styles.title}>{item.name}</Text>
            <Image source={item.imgLink} style={styles.image}></Image>
            <View style={styles.priceRow}>
              <Text style={styles.price}>{item.price}</Text>
              <Text>Buy</Text>
            </View>
            
          </View>
        }
        keyExtractor={item => `${item.id}`}
        contentContainerStyle={styles.container}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'stretch',
    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: `#FFF`
  },
  title: {
    textAlign: 'center',
    textTransform: 'uppercase'
  },
  image: {
    height: 100,
    width: 100,
    marginBottom: 5
  },
  priceRow: {
    alignItems: 'center',
    flexDirection: 'row'
  },
  price: {
    flex: 1
  },
  wrapper: {
    backgroundColor: '#bcccba',
    marginHorizontal: 16,
    marginTop: 32,
    padding: 16,
    shadowColor: 'green',
    shadowOpacity: 0.8,
    shadowOffset: { width: 0, height: 0 },
  }
});
