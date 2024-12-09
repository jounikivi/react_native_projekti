import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { customButtonStyles as styles } from '../styles/styles';

// Räätälöity nappi
const CustomButton = ({ title, onPress, color = '#00796b' }) => (
  <TouchableOpacity style={[styles.button, { backgroundColor: color }]} onPress={onPress}>
    <Text style={styles.text}>{title}</Text>
  </TouchableOpacity>
);

export default CustomButton;
