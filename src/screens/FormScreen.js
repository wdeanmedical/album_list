import React, { Component } from 'react'
import { TextInput, Text, TouchableOpacity, View, Alert } from 'react-native'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { submitNotes } from '../state/actions'
import * as Constants from '../constants/constants'
import Styles from '../styles/Styles'

class FormScreen extends Component {
  static navigationOptions = {
    title: 'Notes',
    headerStyle: Styles.headerStyle,
    headerTintColor: Styles.headerTintColor,
    headerTitleStyle: Styles.headerTitleStyle,
  }

  state = {
    notes: '',
  }

  componentDidMount() {}

  submitNotes = () => {
    // eslint-disable-next-line react/prop-types
    this.props.navigation.navigate(Constants.HOME_SCREEN)
  }

  notesSubmitAlert = () => {
    Alert.alert(
      'Notes Submitted',
      '',
      [
        {
          text: 'OK',
          onPress: () => {},
          style: 'cancel',
        },
      ],
      { cancelable: false }
    )
  }

  handleSubmit = () => {
    // eslint-disable-next-line react/prop-types
    const { navigation } = this.props
    // eslint-disable-next-line react/prop-types
    const { id } = navigation.state.params
    const { notes } = this.state
    // eslint-disable-next-line react/prop-types
    const { submitNotes: dispatchSubmitNotes } = this.props
    dispatchSubmitNotes({ notes, id })
    // eslint-disable-next-line react/prop-types
    navigation.navigate(Constants.HOME_SCREEN)
    this.notesSubmitAlert()
  }

  render() {
    return (
      <View style={Styles.container}>
        <View style={Styles.notesForm}>
          <TextInput
            onChangeText={text => this.setState({ notes: text })}
            editable
            multiline
            maxLength={250}
            style={Styles.notesTextInput}
          />
          <TouchableOpacity
            style={Styles.notesSubmitButton}
            onPress={() => this.handleSubmit()}
          >
            <Text style={Styles.notesSubmitButtonText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const mapStateToProps = state => {
  const { pendingScreen, fetchError, albums } = state.app
  return { pendingScreen, fetchError, albums }
}

const mapDispatchToProps = dispatch => ({
  submitNotes: params => dispatch(submitNotes(params)),
})

FormScreen.propTypes = {
  submitNotes: PropTypes.func,
}

FormScreen.defaultProps = {
  submitNotes: undefined,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FormScreen)
