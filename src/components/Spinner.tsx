import * as React from "react";
import { View, Text, Modal, ActivityIndicator } from "react-native";
import Styles from "../styles/Styles";
import { Colors } from "../constants/colors";

interface SpinnerProps {
  title: string;
  subtitle: string;
  visible: boolean;
}

const Spinner: React.FC<SpinnerProps> = (props) => {
  const { title, subtitle, visible } = props;

  return (
    <Modal visible={visible}>
      <View style={Styles.spinner}>
        <View style={Styles.spinnerBody}>
          <ActivityIndicator size="large" color={Colors.gray} />
          <Text style={Styles.spinnerTitle}>{title}</Text>
          {typeof subtitle !== "undefined" && (
            <Text style={Styles.spinnerSubtitle}>{subtitle}</Text>
          )}
        </View>
      </View>
    </Modal>
  );
};

export default Spinner;
