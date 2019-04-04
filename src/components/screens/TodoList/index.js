import React, { Component } from 'react'
import { View, Text, FlatList } from 'react-native'

import Header from '../../common/Header'

const DATA = [
  { title: 'Ringa mamma', done: false },
  { title: 'Förbered WS', done: true }
]

class TodoList extends Component<Props> {
  render() {
    return (
      <View>
        <Header title={'TODO List'} />
        <FlatList
          data={DATA}
          renderItem={({ item }) => {
            return (
              <View
                style={{
                  height: 40,
                  borderWidth: 1,
                  backgroundColor: item.done ? 'white' : 'grey'
                }}
              >
                <Text>{item.title}</Text>
              </View>
            )
          }}
        />
      </View>
    )
  }
}

export default TodoList
