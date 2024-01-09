import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'

const Header = () => {
  return (
    <View style={styles.container}>
        <TouchableOpacity>
            <Image 
                style={styles.logo} 
                source={require('../../assets/logo.png')} 
            />
        </TouchableOpacity>

        <View style={styles.iconsContainer}>
            <TouchableOpacity>
                <Image 
                    source={{uri:'https://img.icons8.com/fluency-systems-regular/60/ffffff/plus-2-math.png'}}
                    style={styles.icon}
                />
            </TouchableOpacity>
            
            <TouchableOpacity>
                <Image 
                    source={{uri:'https://img.icons8.com/fluency-systems-regular/60/ffffff/like--v1.png'}}
                    style={styles.icon} 
                />
            </TouchableOpacity>
            
            <TouchableOpacity>
                <View style={styles.undreadBadge}>
                    <Text style={styles.undreadBadgeText}>11</Text>
                </View>
                <Image
                    source={{uri:'https://img.icons8.com/fluency-systems-regular/60/ffffff/facebook-messenger.png'}}
                    style={styles.icon}
                />
            </TouchableOpacity>
        
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    logo: {
        width: 150,
        height: 50,
        resizeMode: 'contain',
    },
    iconsContainer: {
        flexDirection: 'row',
        marginRight:5,
    },
    icon: {
        width: 30,
        height: 30,
        marginLeft: 10,
        resizeMode: 'contain',
    },
    undreadBadge: {
        backgroundColor: '#FF3250',
        position: 'absolute',
        left: 24,
        bottom: 40,
        width: 20,
        height: 15,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 100,
    },
    undreadBadgeText: {
        color: 'white',
    }
    
})
export default Header;