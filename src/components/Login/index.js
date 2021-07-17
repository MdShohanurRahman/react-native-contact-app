import React, { useState } from "react";
import Container from "../common/container";
import { Image, Text, TouchableOpacity, View } from "react-native";
import Input from "../common/Input";
import CustomButton from "../common/CustomButton";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import { REGISTER } from "../../constants/routerNames";
import Message from "../common/Message";

const LoginComponent = ({ error,
                          form,
                          justSignedUp,
                          onChange,
                          loading,
                          onSubmit,}) => {

  const {navigate} = useNavigation();
  const [isSecureEntry, setIsSecureEntry] = useState(true);

  return (
    <Container>
      <Container>
        <Image
          height={70}
          width={70}
          source={require('../../assets/images/logo.png')}
          style={styles.logoImage}
        />

        <View>
          <Text style={styles.title}>Welcome to RNContacts</Text>
          <Text style={styles.subTitle}>Please login here</Text>

          <View style={styles.form}>
            {justSignedUp && (
              <Message
                onDismiss={() => {}}
                success
                message="Account created successfully"
              />
            )}
            {error && !error.error && (
              <Message
                onDismiss={() => {}}
                danger
                message="invalid credentials"
              />
            )}

            {error?.error && <Message danger onDismiss message={error?.error} />}

            <Input
              label="Username"
              iconPosition="right"
              placeholder="Enter Username"
              value={form.userName || null}
              onChangeText={(value) => {
                onChange({name: 'userName', value});
              }}
            />

            <Input
              label="Password"
              placeholder="Enter Password"
              secureTextEntry={isSecureEntry}
              icon={
                <TouchableOpacity
                  onPress={() => {
                    setIsSecureEntry((prev) => !prev);
                  }}>
                  <Text>{isSecureEntry ? 'Show' : 'Hide'}</Text>
                </TouchableOpacity>
              }
              iconPosition="right"
              onChangeText={(value) => {
                onChange({name: 'password', value});
              }}
            />

            <CustomButton
              disabled={loading}
              onPress={onSubmit}
              loading={loading}
              primary
              title="Submit"
            />

            <View style={styles.createSection}>
              <Text style={styles.infoText}>Need a new account?</Text>
              <TouchableOpacity
                onPress={() => {
                  navigate(REGISTER);
                }}>
                <Text style={styles.linkBtn}>Register</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Container>
    </Container>
  );
};

export default LoginComponent;
