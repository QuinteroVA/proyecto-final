import { StyleSheet, Text, View } from 'react-native';

import MainNavigation from './navigators/MainNavigator';

export default function App() {
  return (
    <MainNavigation/>      
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});