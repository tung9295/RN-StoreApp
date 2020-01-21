import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import CategoryListItem from '../components/CategoryListItem';

import CosmeticImg from '../assets/cosmetic.png';
import SupplementImg from '../assets/vitamin.png'; 
import AccessoriImg from '../assets/necklace.png'; 

export default class Categories extends React.Component {
  static navigationOptions = {
    title: 'HOME'
  }
  constructor(props) {
    super(props);
    this.state = {
      categories: [
        { id: 1, name: 'Mỹ phẩm', imgLink: CosmeticImg},
        { id: 2, name: 'Thực phẩm chức năng', imgLink: SupplementImg},
        { id: 3, name: 'Đồ trang sức', imgLink: AccessoriImg},
        { id: 4, name: 'Quần áo', imgLink: SupplementImg},
        { id: 5, name: 'Đồ ăn vặt', imgLink: SupplementImg},
      ]
    }
  }
  render() {
    const { navigation } = this.props;
    const { categories } = this.state;
    return (
      <FlatList data={categories}
        renderItem={({ item }) =>
          <CategoryListItem
            category={item}
            onPress={() => navigation.navigate('Category', {
              categoryName: item.name
            })}
          />
        }
        keyExtractor={item => `${item.id}`}
        contentContainerStyle={styles.container}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 16
  },
});
