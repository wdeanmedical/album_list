import React, { useEffect } from 'react'
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { appInit } from '../state/actions'
import * as Constants from '../constants/constants'
import Styles from '../styles/Styles'
import Spinner from '../components/Spinner'

const getArtists = artists => artists.map(artist => artist.name).join(', ')

// eslint-disable-next-line react/prop-types
const Item = ({ item, enterNotesScreen }) => {
  // eslint-disable-next-line react/prop-types
  const { id, images, name, artists } = item
  return (
    <View style={Styles.listItem}>
      {/* eslint-disable-next-line react/prop-types */}
      <Image source={{ uri: images[0].url }} style={Styles.itemImage} />
      <View style={Styles.itemText}>
        <Text style={Styles.albumName}>{name}</Text>
        <Text style={Styles.artistName}>{getArtists(artists)}</Text>
      </View>
      <TouchableOpacity
        style={Styles.notesButton}
        onPress={() => enterNotesScreen(id)}
      >
        <Text style={Styles.notesButtonText}>Notes</Text>
      </TouchableOpacity>
    </View>
  )
}

const HomeScreen = props => {
  const dispatch = useDispatch()
  const app = useSelector(state => state.app)

  useEffect(() => {
    dispatch(appInit())
  }, [])

  const enterNotesScreen = id => {
    // eslint-disable-next-line react/prop-types
    props.navigation.navigate(Constants.NOTES_SCREEN, { id })
  }

  return (
    <>
      <Spinner visible={app.pendingScreen} title="Loading Albums..." />
      <View style={Styles.container}>
        <FlatList
          style={Styles.itemsList}
          data={app.albums}
          renderItem={({ item }) => (
            <Item item={item} enterNotesScreen={id => enterNotesScreen(id)} />
          )}
          keyExtractor={item => item.id}
        />
      </View>
    </>
  )
}

HomeScreen.navigationOptions = () => ({
  title: 'New Releases',
  headerStyle: Styles.headerStyle,
  headerTintColor: Styles.headerTintColor,
  headerTitleStyle: Styles.headerTitleStyle,
})

export default HomeScreen
