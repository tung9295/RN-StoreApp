import React from 'react';
import { StyleSheet, View } from 'react-native';
import CategoryListItem from './components/CategoryListItem';
import CosmeticImg from './assets/cosmetic.png';
import SupplementImg from './assets/vitamin.png'; 
import AccessoriImg from './assets/necklace.png'; 
export default function App() {
  return (
    <View style={styles.container}>
      <CategoryListItem title={'Mỹ phẩm'} imgLink={CosmeticImg}/>
      <CategoryListItem title={'Thực phẩm chức năng'} imgLink={SupplementImg}/>
      <CategoryListItem title={'Đồ trang sức'} imgLink={AccessoriImg}/>
    </View>
  );
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
