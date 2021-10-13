import React, {useState} from 'react';
import {SafeAreaView, FlatList, Switch, Text, View} from 'react-native';

const data = [
  {
    id: 0,
    name: 'cafe.1',
    isFavourite: true,
  },
  {
    id: 1,
    name: 'cafe.2',
    isFavourite: false,
  },
  {
    id: 2,
    name: 'cafe.3',
    isFavourite: false,
  },
  {
    id: 3,
    name: 'cafe.4',
    isFavourite: true,
  },
  {
    id: 4,
    name: 'cafe.5',
    isFavourite: false,
  },
  {
    id: 5,
    name: 'cafe.6',
    isFavourite: false,
  },
];

function App() {
  const [cafeList, setcafeList] = useState(data);
  const [showOnlyFavourites, setshowOnlyFavourites] = useState(false);

  function onFavouriteChange(isFavouriteSelected) {
    setshowOnlyFavourites(isFavouriteSelected);
    isFavouriteSelected
      ? setcafeList(cafeList.filter(cafe => cafe.isFavourite))
      : setcafeList(data);
  }

  return (
    <SafeAreaView style={{flex: 1, justifyContent: 'flex-start'}}>
      <View>
        <Text>Show only Favourites</Text>
      </View>
      <View style={{alignItems: 'flex-start'}}>
        <Switch value={showOnlyFavourites} onValueChange={onFavouriteChange} />
      </View>
      <View>
        <FlatList
          data={cafeList}
          renderItem={({item}) => {
            return <Text style={{fontSize: 25}}>{item.name}</Text>;
          }}
        />
      </View>
    </SafeAreaView>
  );
}

export default App;
