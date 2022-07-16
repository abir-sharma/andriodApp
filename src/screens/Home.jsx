import { StyleSheet, Text, View, Image,FlatList } from 'react-native'
import React from 'react'
import Menu from '../components/Menu'
import { useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { getPosts } from '../actions/post'

const showPosts=({item})=>{
  return (
    <>
    <View>
      <Text>{item.title}</Text>
    </View>
    </>
  )
}

const Home = (props) => {
  const dispatch=useDispatch()
  const {posts}=useSelector(state=>state.posts)
  useEffect(() => {
    dispatch(getPosts())
  }, [])
  // https://my-json-server.typicode.com/abir-sharma/mockjson/db
  // console.log(posts.slice(0,10),"abir")
  const description="This is best online education clasess in the world coame here right now you bloody idiot. other i will sue you in the jail."
  return (
    <View style={styles.mainContainer}>
      <FlatList>
        keyExtractor={(item)=>item.id}
        data={posts}
        renderItem={showPosts}
      </FlatList>
      <View style={styles.homeTop}>
        <Image 
        style={styles.headerImage}
        resizeMode="cover"
        source={require("../../assets/logo.jpeg")}
         />
         <Text style={styles.mainHeader} >Welcome to</Text>
         <Text style={[styles.mainHeader,{fontSize:33,color:"#4c5dab",marginTop:0}]} >{props.channelName}</Text>
         <Text style={styles.paraStyle} >{description}</Text>
      </View>
      <View style={styles.menuStyle}>
        <View style={styles.lineStyle}></View>
        <Menu />
        <View style={[styles.lineStyle,{marginVertical:20}]}></View>
      </View>
    </View>

  )
}
const styles = StyleSheet.create({
    mainContainer:{
        height:"100%",
        display:"flex",
        backgroundColor:"#fff",
        textAlign:"center",
        paddingTop:50,
     },
     homeTop:{
       display:"flex",
       justifyContent:"center",
       alignItems:"center",
       paddingHorizontal:10,
     },
     headerImage:{
       display:"flex",
       alignItems:"stretch",
       marginTop:50,
       borderRadius:2,
     },
     mainHeader:{
       fontSize:30,
       color:"#344055",
       textTransform:"uppercase",
       marginTop:40
     },
     paraStyle:{
       textAlign:"left",
       fontSize:19,
       color:"#7d7d7d",
       marginTop:30,
       paddingBottom:50,
       lineHeight:26,
     },
     lineStyle:{
       marginBottom:10,
       borderWidth:0.5,
       borderColor:"grey"
     }
})
export default Home

