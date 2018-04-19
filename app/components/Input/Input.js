import React from 'react';
import T from 'prop-types';
import { TextInput, View, ViewPropTypes } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Text from '../Text';
import { colors } from '../../styles';
import s from './styles';

const Input = ({
  containerStyle,
  placeholderColor,
  secondContainerStyle,
  containerStyleFocus,
  isNotValidStyle = s.isNotValid,
  icon,
  iconRight,
  inputRef,
  label,
  error,
  labelStyle,
  prefix,
  style,
  isFocus,
  onFocus,
  onBlur,
  isNotValid,
  isFocusColor = colors.green,
  ...props
}) => (
  <View style={containerStyle}>
    {!!label && <Text style={[s.label, labelStyle]}>{label}</Text>}
    <View
      style={[
        s.root,
        secondContainerStyle,
        isFocus && containerStyleFocus,
        isNotValid && isNotValidStyle,
        error && isNotValidStyle,
      ]}
    >
      {
        !!icon &&
        <MaterialIcons
          color={isFocus ? isFocusColor : colors.greyDarker}
          style={s.icon}
          {...icon}
        />
      }
      {!!prefix && <Text style={s.prefix}>{prefix}</Text>}
      <TextInput
        autoCorrect={false}
        placeholderTextColor={placeholderColor || colors.grey}
        underlineColorAndroid={colors.transparent}
        onFocus={onFocus}
        onBlur={onBlur}
        {...props}
        ref={inputRef}
        style={[s.input, style]}
      />
      {
        !!iconRight &&
        <MaterialIcons
          color={isFocus ? isFocusColor : colors.greyDarker}
          style={s.icon}
          {...iconRight}
        />
      }
    </View>
    {!!error && <Text style={s.error}>{error}</Text>}
  </View>
);

Input.propTypes = {
  containerStyle: ViewPropTypes.style,
  secondContainerStyle: ViewPropTypes.style,
  containerStyleFocus: ViewPropTypes.style,
  isNotValidStyle: ViewPropTypes.style,
  placeholderColor: T.string,
  isFocusColor: T.string,
  isFocus: T.bool,
  isNotValid: T.bool,
  icon: T.object,
  iconRight: T.object,
  inputRef: T.any,
  label: T.string,
  error: T.string,
  labelStyle: Text.propTypes.style,
  prefix: T.string,
  style: Text.propTypes.style,
  onFocus: T.func,
  onBlur: T.func,
  value: T.string,
};

export default Input;
