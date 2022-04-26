import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Appbar, FAB } from 'react-native-paper';
import React, { useState } from 'react';
export default function App() {
  const [count, setCount] = useState(0);
  console.log('rebuild');
  return (
    <View style={styles.container}>
      <View style={styles.bottom}>
        <Appbar.Header >
          <Appbar.Content title="RN Counter App" style={{ alignItems: 'center' }} />
        </Appbar.Header>
      </View>
      <Text>you have pushed many times as well</Text>
      <Text>{count}</Text>
      <FAB style={styles.fab}
        small
        icon="plus"
        onPress={() => setCount(count + 1)}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  fab: {
    position: 'absolute',
    height: 50,
    width: 50,
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: '#3872FD',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottom: {
    position: 'absolute',
    width: "100%",
    left: 0,
    right: 0,
    top: 0,
    height: 50,
  },
});
