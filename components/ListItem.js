import React from 'react';
import {
    Text,
    StyleSheet,
  } from 'react-native';

const ListItem = (item) => {
    return(
        <Veiw style={StyleSheet.listItem}>
            <Text>{item.name}</Text>
        </Veiw>
    );
};

const styles = StyleSheet.create({
    listItem: {
      padding: 15,
      backgroundColor: '#f8f8f8',
      borderBottomWidth: 1,
      borderColor: '#eee',
    },
  });

  export default ListItem;