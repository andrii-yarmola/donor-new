import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Chart from 'react-native-chart';

const SentList = ({ incomingData, navigate }) => {
  return (
     <View style={styles.container}>
      { incomingData.length > 0 ? 
        <FlatList
          data={incomingData}
          renderItem={({ item }) => (
            <View>
              <TouchableOpacity 
                onPress={() => navigate('RequestSingle', { requestId: item.id })}
                style={styles.item}>
                <View style={styles.textHolder}>
                  <View style={styles.titleHolder}>
                    <Text style={styles.title}>
                      { item.bloodType }
                    </Text>
                    <Text style={styles.status}>
                      { item.status === 'Done' ? 
                        <Icon name="md-checkmark" size={20} color="#4dd5f0" />
                        : item.status}
                    </Text>
                  </View>

                  <Text style={styles.text}>
                    { `${item.donationDate}, ${item.donationTime}` }
                  </Text>
                  <Text style={styles.text}>
                    { item.location }
                  </Text>
                  { item.description && 
                    <View style={styles.description}>
                      <Icon name="md-information-circle" size={14} color='#e5e5ea' style={styles.icon}/>
                      <Text style={styles.descriptionText}>
                      { item.description }
                      </Text>
                    </View>
                  }
                </View>
                <Icon name="ios-arrow-forward" size={20} color='#8e8e93' style={styles.sideIcon}/>

                <View style={styles.pieHolder}>
                  <Chart
                    style={styles.chart}
                    data={[[1, item.amountTotal - item.amountNow], [2, item.amountNow]]}
                    type="pie"
                    showAxis={false}
                    sliceColors={["white", "#b1e35f"]}
                  />
                  <Text style={styles.amountNow}>
                    { item.amountTotal }
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          )}
          keyExtractor={item => item.id}
        />
        :
        <View style={styles.holder}>
          <Text style={styles.heading}>
            No accepted requests
          </Text>
          <Text style={styles.caption}>
            Thanks for checking this list.
          </Text>
          <Text style={styles.caption}>
            You are awesome.
          </Text>
          <TouchableOpacity style={styles.link}>
            <Icon name="ios-refresh" size={22} color="#b1e460" />
            <Text style={styles.linkText}>
              Refresh
            </Text>
          </TouchableOpacity>
        </View>
      }
    </View>
  );
};

const styles = StyleSheet.create({
  chart: {
    width: 31,
    height: 31,
    position: 'absolute',
    left: 0,
    top: 0,
  },
  amountNow: {
    color: '#b1e460',
    backgroundColor: 'white',
    position: 'absolute',
    left: 3,
    top: 3,
    width: 24,
    height: 24,
    borderRadius: 13,
    paddingVertical: 4,
    textAlign: 'center',
    overflow: 'hidden'
  },
  pieHolder: {
    borderWidth: 1,
    borderColor: '#88c025',
    width: 32,
    height: 32,
    borderRadius: 16,
    overflow: 'hidden',
    position: 'absolute',
    right: 35,
    marginTop: 3,
    top: '50%'
  },
  actionLink: {
    borderBottomWidth: 0.5,
    borderColor: '#bcbdbe',
    paddingHorizontal: 15,
    paddingVertical: 15,
    flex: 1,
    alignItems: 'center'
  },
  container: {
    flex: 1,
  },
  link: {
    alignSelf: 'center',
    flexDirection: 'row',
    marginTop: 30
  },
  linkText: {
    fontSize: 17,
    color: '#b1e35f',
    marginLeft: 10
  },
  heading: {
    fontSize: 32,
    color: '#8e8e93',
    fontWeight: '100',
    alignSelf: 'center',
    marginBottom: 25
  },
  caption: {
    fontSize: 13,
    alignSelf: 'center',
    color: '#8e8e93',
  },
  holder: {
    paddingHorizontal: 30,
    paddingVertical: 75
  },
  icon: {
    position: 'absolute',
    left: 1,
    top: 1
  },
  item: {
    borderBottomWidth: 0.5,
    borderColor: '#bcbdbe',
    paddingHorizontal: 15,
    paddingTop: 11,
    paddingBottom: 20
  },
  textHolder: {
    paddingRight: 60
  },
  title: {
    fontSize: 17,
    marginRight: 10
  },
  titleHolder: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginBottom: 7
  },
  status: {
    fontSize: 13,
    color: '#ff7600'
  },
  description: {
    paddingLeft: 20,
    marginTop: 10,
  },
  text: {
    fontSize: 13,
    lineHeight: 18
  },
  descriptionText: {
    fontSize: 13,
    color: '#8e8e93'
  },
  sideText: {
    position: 'absolute',
    fontSize: 13,
    right: 15,
    top: 14,
    color: '#ff7600',
  },
  sideIcon: {
    position: 'absolute',
    right: 16,
    top: '50%',
    marginTop: 8
  }
});

export default SentList;