import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { Divider } from 'react-native-elements'

const postFooterIcons = [
    {
      name: 'Like',
      imageUrl: 'https://img.icons8.com/fluency-systems-regular/60/ffffff/like--v1.png',
      likedImageUrl: 'https://img.icons8.com/ios-filled/50/fa314a/like--v1.png',
    },
    {
      name: 'Comment',
      imageUrl: 'https://img.icons8.com/ios-glyphs/60/ffffff/topic.png',
    },
    {
      name: 'Share',
      imageUrl: 'https://img.icons8.com/fluency-systems-regular/60/ffffff/reshare.png',
    },
    {
      name: 'Save',
      imageUrl: 'https://img.icons8.com/fluency-systems-regular/60/ffffff/bookmark-ribbon.png',
    },
]

const Post = ({ post }) => {
  return (
    <View style= {{ marginBottom:30 }}>
        <Divider width={1} orientation='vertical' />
        <PostHeader post={post} />
        <PostImage post={post} />
    </View>
  )
}

const PostHeader = ({ post }) => (
    <View style={styles.post_header}>
        <View style = {{flexDirection: 'row', alignItems:'center'}}>
            <Image source={{ uri: post.profile_picture }} style={styles.profile_picture}/>
            <Text style= {styles.username}>{post.user}</Text>
        </View>

        <Text style={{color:'#FFFFFF', fontWeight: '900'}}>...</Text>
    </View>
)

const PostImage = ({post}) => (
    <View style={{
        width: '100%',
        height: 450,
    }}>

        <Image 
            source={{ uri:post.image_url }} 
            style={{ height:'100%', resizeMode:'cover'}}
        />
    </View>
)

export default Post

const styles = StyleSheet.create({
    profile_picture: {
      width: 35,
      height: 35,
      borderRadius: 28,
      marginRight: 8,
      borderWidth: 1.5,
      borderColor: '#F2C57C'
    },
    username: {
      color: '#FFFFFF',
      marginLeft: 0,
      fontSize: 15,
      fontWeight: 'bold',
    },
    post_header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      margin:5,
    }
  })

