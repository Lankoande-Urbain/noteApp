import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import Routes from './src/routes'
import SplashScreen from 'react-native-splash-screen'

const App = () => {
  useEffect(() =>{
    setTimeout(() =>{
      SplashScreen.hide()
    }, 500)
  })
  return (
    <View style={{ flex:1 }}>
      <Routes/>
    </View>
  )
}

export default App