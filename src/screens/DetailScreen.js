import React from 'react';
import { StyleSheet, ScrollView, Text, View, Image, Button, Linking,TouchableOpacity } from 'react-native';
import Score from "../components/Score"
import Starprt from"../components/Starprt"
const DetailScreen = ({ route }) => {
  const { title, 
    artist,
    price,
    url,
    image,
    descriptions,
    score,
    totalscore,
    star,
    brightstar_image,
    darkstar_image
  } = route.params;
  return (
    <ScrollView style={{backgroundColor: '#fff'}}>
      <View>
        <Image
          style={styles.imageStyle}
          source={{
            uri: image
          }}
        />
      </View>
      <View style={styles.cardContainerStyle}>

        <Text style={styles.titleStyle} >{title}</Text>
        <Text style={styles.artistStyle} >{artist}</Text>
        <View style={styles.rowContainerStyle}>
          <View  style={styles.rowstarStyle}>
          <Starprt 
              star={star}
               brightstar_image={brightstar_image}
                darkstar_image={darkstar_image} 
              />
          </View>
              
              <Score
              star={star}
              score={score}
              otalscore={totalscore}
             />
        </View>
       
          
        <Text 
        style={{
          lineHeight: 24,
          marginBottom:28,
          textAlign:'center'
        }}
        >{'\t'}{descriptions}</Text>
        
        <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Buy Now for $46.99</Text>
        </TouchableOpacity>
          
      </View>
      <View style={styles.cardContainerStyle}>
        
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },  
  imageStyle: {
    height: 300,
    width: 210,
    marginHorizontal: 90,
    marginTop:16
  },
  cardContainerStyle: {
    backgroundColor: '#fff',
    padding: 10,
    marginHorizontal: 10,
    marginTop: 10
  },
  titleStyle: {
    color: '#000',
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '500',

  },
  artistStyle: {
    fontWeight: '400',
    textAlign: 'center',
    fontSize: 14,
    marginVertical: 20,
    color: '#666666',
    marginTop:8
  },
  rowContainerStyle:{
    flex: 1,
    flexDirection: "row",
    alignItems:'center',
    justifyContent: 'center',
    // marginTop:8,
  },
  rowstarStyle:{
    marginLeft:60,
    left:45,
    alignItems:'center',
    marginBottom:8
  },
  button: {
    // marginHorizontal: 85,
    flex: 1,
    backgroundColor: '#6200EE',
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom:50,
    width:190,
    justifyContent: 'center',
    marginLeft:80,
  },
  buttonText: {
    fontWeight: '500',
    textAlign: 'center',
    fontSize: 14,
    color: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 16,
  }
});

export default DetailScreen;
