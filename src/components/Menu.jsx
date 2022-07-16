import React from 'react';
import { TouchableOpacity, View, StyleSheet, Text, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Menu=()=>{
    const navigation=useNavigation()
    return (
        <View style={styles.menuContainer}>
           <TouchableOpacity style={styles.buttonStyle} onPress={()=>navigation.navigate("Course")}>
               <Text>Courses</Text>
               <Image
                  style={styles.iconStyle}
                  source={{
                    uri: "https://img.icons8.com/stickers/90/000000/training.png",
                   }} 
                />
           </TouchableOpacity>
           <TouchableOpacity style={styles.buttonStyle} onPress={()=>navigation.navigate("About Us")}>
               <Text>About Us</Text>
               <Image
          style={styles.iconStyle}
          source={{
            uri: "https://img.icons8.com/stickers/100/000000/about.png",
          }}
        />
           </TouchableOpacity>
           <TouchableOpacity style={styles.buttonStyle} onPress={()=>navigation.navigate("Contact Us")}>
               <Text>Contact Us</Text>
               <Image
          style={styles.iconStyle}
          source={{
            uri: "https://img.icons8.com/stickers/100/000000/phone-office.png",
          }}
        />
           </TouchableOpacity>
           <TouchableOpacity style={styles.buttonStyle} onPress={()=>navigation.navigate("Students")}>
               <Text>Students</Text>
               <Image
                style={styles.iconStyle}
                source={{
                  uri: "https://img.icons8.com/stickers/100/000000/conference.png",
                     }}
                />
           </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    menuContainer:{
      display:'flex',
      flexDirection:'row',
      justifyContent:'space-evenly',
    },
    textStyle:{
        textTransform:"uppercase"
    },
    iconStyle:{
        width:"100%",
        height:50,
        aspectRatio:1
    }
})
export default Menu