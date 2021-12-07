import * as React from 'react';
import { Text, Image, StyleSheet } from 'react-native';

export default function CustomImage({fromWeb,image,title,width,height}) {
  return (
    <>
      <Text style={styles.tituloImage}>
        {title}
      </Text>
      {fromWeb || <Image source={image} style={{width: width, height: height, alignSelf: 'center'}} />}
      {!fromWeb || <Image source={{uri:image}} style={{width: width, height: height, alignSelf: 'center'}} />}
    </>
  );
}

const styles = StyleSheet.create({
  tituloImage: {
    paddingTop: 10, 
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#8D4600',
  },
});

