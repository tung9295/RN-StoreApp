import React from 'react';
import { StyleSheet, ScrollView, View, FlatList } from 'react-native';
import CategoryListItem from './components/CategoryListItem';
import CosmeticImg from './assets/cosmetic.png';
import SupplementImg from './assets/vitamin.png'; 
import AccessoriImg from './assets/necklace.png'; 
export default class App extends React.Component {
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
    const { categories } = this.state;
    return (
      <View>
          <FlatList data={categories}
            renderItem={({ item }) => <CategoryListItem category={item}/>}
            keyExtractor={item => `${item.id}`}
            contentContainerStyle={{paddingRight: 16, paddingLeft: 16}}
          />
      </View>
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
