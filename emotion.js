import {React, useState} from 'react';
import {Text, FlatList} from 'react-native';

const Emotion = () => {
    
    renderItem = ({ item }) => <Emotion items={item} />

    return(
        renderItem(items)
    )
};

export default Emotion;
