import React from 'react'
import {StyleSheet,Text,View,Image,FlatList} from 'react-native'
import django from '../../assets/categories/django.jpeg'
import react from '../../assets/categories/react.png'
import reactNative from '../../assets/categories/reactNative.png'
import next from '../../assets/categories/next.jpeg'
import ml from '../../assets/categories/ml.png'
import blockchain from '../../assets/categories/blockchain.png'


const Navigator = () => {
  return (
    <>
    <View style={[styles.lineStyle]}></View>
    <View style={styles.mainContainer}>
      <View style={styles.imgBox}>
      <Image style={styles.imgStyle} source={django}/>
      <Text>Django</Text>
      </View>
      <View style={styles.imgBox}>
      <Image style={styles.imgStyle} source={react}/>
      <Text>React js</Text>
      </View>
      <View style={styles.imgBox}>
      <Image style={styles.imgStyle} source={reactNative}/>
      <Text>React Native</Text>
      </View>
      <View style={styles.imgBox}>
      <Image style={styles.imgStyle} source={next}/>
      <Text>Next js</Text>
      </View>
      <View style={styles.imgBox}>
      <Image style={styles.imgStyle} source={ml}/>
      <Text>ML</Text>
      </View>
      <View style={styles.imgBox}>
      <Image style={styles.imgStyle} source={blockchain}/>
      <Text>Blockchain</Text>
      </View>
    </View>
    </>
  )
}
const styles=StyleSheet.create({
    mainContainer:{
      display:'flex',
      flexDirection:'row',
      justifyContent:'center',
      alignItems:'center',
      height:60,
      shadowColor: 'black',
      shadowOpacity: 0.26,
      shadowOffset: { width: 0, height: 2},
      shadowRadius: 10,
      elevation: 3,
      backgroundColor: 'white'
    },
    imgStyle:{
      height:35,
      width:35,
      marginHorizontal:14,
      paddingHorizontal:10,
      // borderColor:'#353535',
      borderWidth:2,
      borderRadius:50
    },
    imgBox:{
      display:'flex',
      alignItems:'center'
    },
    lineStyle:{
      marginBottom:5,
      borderWidth:0.5,
      borderColor:"grey"
    }
})
export default Navigator
