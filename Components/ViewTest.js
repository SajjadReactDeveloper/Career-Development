import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import axios from 'axios';

export default function ViewTest() {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const res = await axios.get('http://192.168.100.9:6000/test/viewTest');
      console.log(res);
      setData(res.data);
    } catch (error) {}
  };
  return (
    <View>
      <Text
        style={{textAlign: 'center', fontSize: 18, color: 'black', margin: 10}}>
        Mock Test
      </Text>
      {data.map((item, i) => (
        <ScrollView style={styles.main}>
          <Text style={styles.text}>University Name: {item.university}?</Text>
          {item.questions.map(data => (
            <>
              <Text style={styles.text}>
                Question No {i + 1}: {data.question}?
              </Text>
              <Text style={styles.text}>A: {data.A}</Text>
              <Text style={styles.text}>B: {data.B}</Text>
              <Text style={styles.text}>C: {data.C}</Text>
              <Text style={styles.text}>D: {data.D}</Text>
              <Text style={styles.text}>
                <Text style={{color: 'black', fontWeight: 'bold'}}>
                  Correct Option:{' '}
                </Text>
                {data.correctOption}
              </Text>
            </>
          ))}
        </ScrollView>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    borderWidth: 1,
    padding: 10,
    margin: 10,
  },
  text: {
    color: 'black',
    fontSize: 16,
  },
});
