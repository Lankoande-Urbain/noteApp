import { View, Text } from 'react-native'
import React from 'react'
import Routes from './src/routes'
import Toast from 'react-native-toast-message'
import './localization/i18n';
const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ zIndex: 10 }}>
        <Toast />
      </View>
      <Routes />
    </View>
  )
}

export default App