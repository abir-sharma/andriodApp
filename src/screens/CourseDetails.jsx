import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import course from '../api/course'

const CourseDetails = ({navigation,route}) => {
  const id=route.params.courseId
  const selectedCourse=course.find((element)=>{
    return id===element.id 
  })
  return (
    <View style={styles.mainContainer}>
        <View style={styles.courseContainer}>
          <View>
            <Image
              style={styles.cardImage}
              source={selectedCourse.image}
              resizeMode="contain"
            />
          </View>

          <Text style={styles.mainHeader}>{selectedCourse.title}</Text>

          <Text style={styles.description}>course 1 : {selectedCourse.course1}</Text>
          <Text style={styles.description}>course 2 : {selectedCourse.course2}</Text>
          <Text style={styles.description}>course 3: {selectedCourse.course3}</Text>
          <Text style={styles.description}>Price : {selectedCourse.price}</Text>

          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.buttonStyle}
              onPress={() =>
                navigation.navigate("CourseDetails",{
                  courseId:item.id,
                })
              }>
              <Text style={styles.buttonText}> Join Now !!! </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View> 
  )
}
const styles = StyleSheet.create({
  cardImage: {
    width: "100%",
    height: undefined,
    aspectRatio: 1,
  },
  mainContainer: {
    paddingHorizontal: 20,
  },
  courseContainer: {
    padding: 30,
    backgroundColor: "rgba(255, 255, 255, 0.90)",
    textAlign: "center",
    borderRadius: 5,
    shadowColor: "grey",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 8,
    elevation: 8,
    marginVertical: 30,
  },
  mainHeader: {
    fontSize: 22,
    color: "#344055",
    textTransform: "uppercase",
    paddingBottom: 15,
    textAlign: "center",
  },
  description: {
    textAlign: "left",
    paddingBottom: 15,
    fontFamily:"NunitoSans_600SemiBold",
    lineHeight: 20,
    fontSize: 16,
    color: "#7d7d7d",
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  buttonStyle: {
    backgroundColor: "#809fff",
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 20,
    color: "#eee",
    textTransform: "capitalize",
  },
})
export default CourseDetails
