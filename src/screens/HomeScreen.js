import React, { Component } from 'react'
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { appInit } from '../state/actions'
import * as Constants from '../constants/constants'
import { Colors } from '../constants/colors'
import Styles from '../styles/Styles'

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
        <Text style={{ color: Colors.charcoalGrey }}>
          {getArtists(artists)}
        </Text>
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

class HomeScreen extends Component {
  static navigationOptions = {
    title: 'New Releases',
    headerStyle: Styles.headerStyle,
    headerTintColor: Styles.headerTintColor,
    headerTitleStyle: Styles.headerTitleStyle,
  }

  state = {}

  componentDidMount() {
    const { appInit: dispatchAppInit } = this.props
    dispatchAppInit()
  }

  enterNotesScreen = id => {
    // eslint-disable-next-line react/prop-types
    this.props.navigation.navigate(Constants.NOTES_SCREEN, { id })
  }

  render() {
    const { pendingScreen, fetchError, albums } = this.props
    return (
      <View style={Styles.container}>
        <FlatList
          style={Styles.itemsList}
          data={albums}
          renderItem={({ item }) => (
            <Item
              item={item}
              enterNotesScreen={id => this.enterNotesScreen(id)}
            />
          )}
          keyExtractor={item => item.id}
        />
      </View>
    )
  }
}

const mapStateToProps = state => {
  const { pendingScreen, fetchError, albums } = state.app
  return { pendingScreen, fetchError, albums }
}

const mapDispatchToProps = dispatch => ({
  appInit: () => dispatch(appInit()),
})

HomeScreen.propTypes = {
  appInit: PropTypes.func,
  albums: PropTypes.array,
}

HomeScreen.defaultProps = {
  appInit: undefined,
  albums: [],
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen)
