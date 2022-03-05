import React, { useState } from 'react';
import {
  Text,
  Button,
  View,
  TextInput,
  ToastAndroid,
  ScrollView,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import GrpcClient from '../GrpcClient';
import { styles } from './styles';
const LoginScreen = () => {
  const [hostname, setHostname] = useState('localhost');
  const [port, setPort] = useState('50051');
  const [username, setUsername] = useState('test');
  const [password, setPassword] = useState('123');
  const [authorized, setAuthorized] = useState(false);
  const [loading, setLoading] = useState(false);
  const login = async () => {
    try {
      console.log(
        '[host name] : %s - [port] : %d - [username] : %s - [password] : %d',
        hostname,
        port,
        username,
        password,
      );
      if (isNaN(Number(password)) === true || isNaN(Number(port)) === true) {
        ToastAndroid.show(
          'Port and password must be only number',
          ToastAndroid.SHORT,
        );
      } else {
        const loginResponse = await GrpcClient.loginRequst(
          username,
          Number(password),
          hostname,
          Number(port),
        );
        console.log(`[Login Response]: ${loginResponse}`);
        if (loginResponse === 'Error') {
          ToastAndroid.show(
            'Check your username or password',
            ToastAndroid.SHORT,
          );
        } else {
          ToastAndroid.show('Login successful', ToastAndroid.SHORT);
          setLoading(true);
          setTimeout(() => {
            setLoading(false);
            setAuthorized(true);
          }, 1500);
        }
      }
    } catch (e) {
      console.log('Error Occured : ', e);
      ToastAndroid.show(
        'Host,port informations are wrong or server has not been started!',
        ToastAndroid.SHORT,
      );
    }
  };

  const handleUsernameChange = e => {
    setUsername(e);
  };

  const handlePasswordChange = e => {
    setPassword(e);
  };

  const handleHostNameChange = e => {
    console.log({ e });
    setHostname(e);
  };

  const handlePortAddressChange = e => {
    setPort(e);
  };

  return (
    <View style={{ flex: 1 }}>
      {authorized ? (
        <View style={styles.authorized}>
          <Text>You are authorized :)</Text>
        </View>
      ) : (
        <View style={styles.container}>
          {loading && <Text style={styles.loading} >Loading...</Text>}
          <View style={styles.header}>
            <Text style={styles.textHeader}>Welcome!</Text>
          </View>

          <Animatable.View animation="fadeInUpBig" style={styles.footer}>
            <ScrollView>
              <View style={styles.outercover}>
                <Text style={styles.textFooter}>User name/email</Text>
                <View style={styles.action}>
                  <TextInput
                    value={username}
                    placeholder="Type username"
                    placeholderTextColor="#666666"
                    style={styles.textInput}
                    autoCapitalize="none"
                    onChangeText={handleUsernameChange}
                  />
                </View>
              </View>

              <View style={styles.outercover}>
                <Text style={styles.text_footer}>Password</Text>
                <View style={styles.action}>
                  <TextInput
                    value={password}
                    placeholder="Type password"
                    placeholderTextColor="#666666"
                    style={styles.textInput}
                    autoCapitalize="none"
                    onChangeText={handlePasswordChange}
                  />
                </View>
              </View>

              <View style={styles.outercover}>
                <Text style={styles.text_footer}>Host</Text>
                <View style={styles.action}>
                  <TextInput
                    value={hostname}
                    placeholder="Type host name"
                    placeholderTextColor="#666666"
                    style={styles.textInput}
                    autoCapitalize="none"
                    onChangeText={handleHostNameChange}
                  />
                </View>
              </View>

              <View style={styles.outercover}>
                <Text style={styles.text_footer}>Port</Text>
                <View style={styles.action}>
                  <TextInput
                    value={port}
                    placeholder="Type port number"
                    placeholderTextColor="#666666"
                    style={styles.textInput}
                    autoCapitalize="none"
                    onChangeText={handlePortAddressChange}
                  />
                </View>
              </View>
              <View style={styles.button}>
                <Button title="Login" onPress={login} />
              </View>
            </ScrollView>
          </Animatable.View>
        </View>
      )}
    </View>
  );
};

export default LoginScreen;
