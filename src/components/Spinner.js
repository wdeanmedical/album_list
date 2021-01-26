import * as React from 'react'
import PropTypes from 'prop-types'
import { View, Text, Modal, ActivityIndicator } from 'react-native'
import Styles from '../styles/Styles'
import { Colors } from '../constants/colors'

const Spinner = props => {
  const { title, subtitle, visible } = props

  return (
    <Modal visible={visible}>
      <View style={Styles.spinner}>
        <View style={Styles.spinnerBody}>
          <ActivityIndicator size="large" color={Colors.gray} />
          <Text style={Styles.spinnerTitle}>{title}</Text>
          {typeof subtitle !== 'undefined' && (
            <Text style={Styles.spinnerSubtitle}>{subtitle}</Text>
          )}
        </View>
      </View>
    </Modal>
  )
}

Spinner.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  visible: PropTypes.bool,
}

Spinner.defaultProps = {
  title: '',
  subtitle: '',
  visible: false,
}

export default Spinner
