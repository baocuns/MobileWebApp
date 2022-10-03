import React, { Component } from 'react';
import { TextInput } from 'react-native';

export default function UselessTextInput() {
  const [textInputValue, setTextInputValue] = React.useState('');

  return (
    <TextInput
      style={{ 
    	height: 40, 
    	borderColor: 'gray', 
    	borderWidth: 1,
    	placeholderTextColor: 'gray',
    }}
      onChangeText={text => setTextInputValue(text)}
      value={textInputValue}
	  placeholder="Insert your text!"
    />
  );
}