import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList} from 'react-native';
import { useState } from 'react';
import { Emotion } from './emotion.js';
//import { ListItem } from './components/ListItem.js';

const Item = ({title}) => 

const App = () => {
  const items = useState([
    {id: 1, name: 'Happiness'},
    {id: 2, name: 'Anger'},
    {id: 3, name: 'Sadness'},
    {id: 4, name: 'Anxiousness'},
]);
  
  return (
    <View style={styles.container}>
      <FlatList 
        data = {items}
        renderItem={({item}) => <ListItem items={item} />}
      />
      <Text>Test element</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
