import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';


const TabSet = ({ tabActive, counts, tabArr, onTabChange }) => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.holder}>
          { tabArr.map((item, i) => 
              (
                <TouchableOpacity
                  onPress={() => onTabChange(item)}
                  key={item} 
                  style={[
                    styles.button,
                    (item === tabActive) && styles.buttonActive,
                    (i === 1) && styles.buttonRight,
                    ]} > 
                  <Text 
                    style={[styles.buttonText, (item === tabActive) && styles.buttonTextActive]} > 
                    { item }
                  </Text>
                </TouchableOpacity>
              )
            )
          }
        </View>
        <Text
          style={[styles.countLeft, styles.countRight]} > 
          { counts[1] }
        </Text>
        <Text
          style={styles.countLeft} > 
          { counts[0] }
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#efeff4',
    padding: 5,
    alignSelf: 'center',
    width: '100%',
    borderTopColor: '#bcbdbe',
    borderTopWidth: 0.5,
  },
  wrapper: {
    alignSelf: 'center',
    width: 315,
    height: 50,
    padding: 10
  },
  holder: {
    alignSelf: 'center',
    width: 295,
    height: 30,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#88c025',
    borderRadius: 15,
    flexDirection: 'row',
  },
  button: {
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    flex: 1,
    flexDirection: 'row',
    position: 'relative'
  },
  buttonRight: {
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
  },
  buttonActive: {
    backgroundColor: '#b1e35f',
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 13,
    flex: 1,
    alignSelf: 'center',
    color: '#b1e35f',
    backgroundColor: 'transparent'

  },
  buttonTextActive: {
    color: 'white',
  },
  countLeft: {
    color: 'white',
    textAlign: 'center',
    position: 'absolute',
    left: 4,
    top: -2,
    padding: 4,
    backgroundColor: '#ff7600',
    width: 23,
    height: 23,
    borderRadius: 12,
    fontSize: 12,
    overflow: 'hidden'
  },
  countRight: {
    right: 4,
    left: null,
  }
});

export default TabSet;