import React from "react";
import {StyleSheet,View,Image} from "react-native";
const Starprt = (props) => {

  if (props.star == 1) {
    return (

      <View style={styles.starContainerStyle}>
          <Image
            style={styles.starStyle}
            source={{uri: props.brightstar_image}}
          />
          <Image
            style={styles.starStyle}
            source={{uri: props.darkstar_image}}
          />
          <Image
            style={styles.starStyle}
            source={{uri: props.darkstar_image}}
          />
          <Image
            style={styles.starStyle}
            source={{uri: props.darkstar_image}}
          />
          <Image
            style={styles.starStyle}
            source={{uri: props.darkstar_image}}
          />
      </View>

    );
  } else if (props.star == 2) {
    return (

      <View style={styles.starContainerStyle}>
        
          <Image
            style={styles.starStyle}
            source={{uri: props.brightstar_image}}
          />
          <Image
            style={styles.starStyle}
            source={{uri: props.brightstar_image}}
          />
          <Image
            style={styles.starStyle}
            source={{uri: props.darkstar_image}}
          />
          <Image
            style={styles.starStyle}
            source={{uri: props.darkstar_image}}
          />
          <Image
            style={styles.starStyle}
            source={{uri: props.darkstar_image}}
          />
      </View>
    );
  } else if (props.star == 3) {
    return (

      <View style={styles.starContainerStyle}>
          <Image
            style={styles.starStyle}
            source={{uri: props.brightstar_image}}
          />
          <Image
            style={styles.starStyle}
            source={{uri: props.brightstar_image}}
          />
          <Image
            style={styles.starStyle}
            source={{uri: props.brightstar_image}}
          />
          <Image
            style={styles.starStyle}
            source={{uri: props.darkstar_image}}
          />
          <Image
            style={styles.starStyle}
            source={{uri: props.darkstar_image}}
          />
      </View>

    );
  } else if (props.star == 4) {
    return (
      <View style={styles.starContainerStyle}>
        
          <Image
            style={styles.starStyle}
            source={{uri: props.brightstar_image}}
          />
          <Image
            style={styles.starStyle}
            source={{uri: props.brightstar_image}}
          />
          <Image
            style={styles.starStyle}
            source={{uri: props.brightstar_image}}
          />
          <Image
            style={styles.starStyle}
            source={{uri: props.brightstar_image}}
          />
          <Image
            style={styles.starStyle}
            source={{uri: props.darkstar_image}}
          />
      </View>
    );
  } else if (props.star == 5) {
    return (
      <View style={styles.starContainerStyle}>
          <Image
            style={styles.starStyle}
            source={{uri: props.brightstar_image}}
          />
          <Image
            style={styles.starStyle}
            source={{uri: props.brightstar_image}}
          />
          <Image
            style={styles.starStyle}
            source={{uri: props.brightstar_image}}
          />
          <Image
            style={styles.starStyle}
            source={{uri: props.brightstar_image}}
          />
          <Image
            style={styles.starStyle}
            source={{uri: props.brightstar_image}}
          />
      </View>
    );
    
  } else {
    return null;
  }
};

const styles = StyleSheet.create({
 starContainerStyle: {
   flexDirection: "row",
   marginBottom:8,
   marginTop:16.5,
   right:10
 },
 starStyle: {
   height: 14,
   width: 14,
   marginLeft:6,
   
 }
})


export default Starprt;