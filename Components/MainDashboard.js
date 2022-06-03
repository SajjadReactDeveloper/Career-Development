import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useGetUserQuery } from '../services/userAuthApi'
import AsyncStorage from '@react-native-async-storage/async-storage';
import Dashboard from './Dashboard'
import UserDashboard from './UserDashboard'

export default function MainDashboard() {
    const [token, setToken] = React.useState('');
    React.useEffect(() => {
    (
      async () => {
        const token = JSON.parse(await AsyncStorage.getItem('token'));
        setToken(token);
      }
    )();
  });
  const { data } = useGetUserQuery(token);
  console.log(data.role);
  return (
    <View>
      {data.role === 1 ? <Dashboard /> : <UserDashboard />}
    </View>
  )
}

const styles = StyleSheet.create({})