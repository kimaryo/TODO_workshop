import React from 'react'
import { View, Text } from 'react-native'

import Styles from './styles'

const Header = props => {
  const { title } = props

  return (
    <View style={Styles.container}>
      <Text style={Styles.title}>{title}</Text>
    </View>
  )
}

export default Header
