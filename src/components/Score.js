import React from "react";
import {StyleSheet,View,Image,Text} from "react-native";

const Score = (props) => {
     if(props.star!="null"){
        if(props.score==4.0){
            return(
                    <View style={styles.FullscoreStyle}>
                        <Text style={styles.scoreStyle}>{props.score}
                            <Text style={styles.totalscoreStyle} > / 5.0</Text>
                        </Text>  
                        
                    </View>
                  
            );
        }
    }
    
    else{
        return(null);
         }
    
    
};

const styles = StyleSheet.create({
    FullscoreStyle: {
        flex: 1,
        flexDirection: "row",
        marginLeft:0,
        marginBottom:0,
      justifyContent: "center",
    },
    scoreStyle:{
        fontSize:14,
        
        color:"#131313"
    },
    totalscoreStyle:{
        fontSize:14,
       
        color:"#666666"

    }

  });
export default Score;