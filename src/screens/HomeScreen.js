import React, { Component } from 'react'
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { appInit } from '../state/actions'
import * as Constants from '../constants/constants'
import { Colors } from '../constants/colors'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.charcoalGrey,
    paddingTop: 20,
  },
  listItem: {
    margin: 2,
    padding: 5,
    backgroundColor: '#FFF',
    width: '95%',
    flex: 1,
    alignSelf: 'center',
    flexDirection: 'row',
    borderRadius: 5,
  },
})

const getArtists = artists => artists.map(artist => artist.name).join(', ')

const Item = ({ item, enterNotesScreen }) => (
  <View style={styles.listItem}>
    <Image
      source={{ uri: item.images[0].url }}
      style={{ width: 100, height: 100 }}
    />
    <View
      style={{
        marginLeft: 20,
        marginTop: 10,
        flex: 1,
      }}
    >
      <Text
        style={{
          fontSize: 16,
          fontWeight: 'bold',
          marginBottom: 5,
          color: Colors.charcoalGrey,
        }}
      >
        {item.name}
      </Text>
      <Text style={{ color: Colors.charcoalGrey }}>
        {getArtists(item.artists)}
      </Text>
    </View>
    <TouchableOpacity
      style={{
        height: 50,
        width: 50,
        justifyContent: 'center',
        alignItems: 'center',
      }}
      onPress={() => enterNotesScreen(item.id)}
    >
      <Text style={{ color: 'green' }}>Notes</Text>
    </TouchableOpacity>
  </View>
)

class HomeScreen extends Component {
  static navigationOptions = {
    title: 'New Releases',
    headerStyle: {
      backgroundColor: Colors.charcoalGrey,
      borderBottomColor: Colors.charcoalGrey,
    },
    headerTintColor: '#f7f7f7',
    headerTitleStyle: {
      fontSize: 22,
      fontWeight: 'bold',
      paddingBottom: 30,
    },
  }

  state = {
    title: 'Welcome to the Trivia Challenge!',
    message: 'You will be presented with 10 True or False questions.',
    challenge: 'Can you score 100%?',
  }

  componentDidMount() {
    const { appInit: dispatchAppInit } = this.props
    dispatchAppInit()
  }

  enterNotesScreen = id => {
    this.props.navigation.navigate(Constants.NOTES_SCREEN, { id })
  }

  render() {
    const { pendingScreen, fetchError, albums } = this.props
    const { title, message, challenge } = this.state
    return (
      <View style={styles.container}>
        <FlatList
          style={{ flex: 1 }}
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
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen)
