import React from 'react'
import { View, Text, ScrollView, Image, StyleSheet } from 'react-native'
import { USERS } from '../../data/users'
const Stories = () => {
  return (
    <View style={{ marginBottom:13 }}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {USERS.map((story, index) => (
          <View key={index} style={{alignItems:'center'}}>
            <Image source={{uri:story.Image}} style={styles.story}></Image>
            <Text style={{color:'#FFFFFF', }}>{
              story.User.length > 9
                ? story.User.slice(0,8).toLowerCase() + "..."
                : story.User.toLowerCase()}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  story: {
    width: 60,
    height: 60,
    borderRadius: 28,
    marginRight: 8,
    borderWidth: 3,
    borderColor: '#F2C57C'
  }
})

export default Stories