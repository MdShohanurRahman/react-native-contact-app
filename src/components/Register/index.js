import React, { useState } from "react";
import Container from "../common/container";
import { Image, Text, TouchableOpacity, View } from "react-native";
import Input from "../common/Input";
import CustomButton from "../common/CustomButton";
import Styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import { LOGIN } from "../../constants/routerNames";
import Message from "../common/Message";

const RegisterComponent = ({
                             onSubmit,
                             onChange,
                             form,
                             loading,
                             error,
                             errors,
                           }) => {
  const {navigate} = useNavigation();
  const [isSecureEntry, setIsSecureEntry] = useState(true);

  return (
    <Container>
      <Image
        height={70}
        width={70}
        source={require('../../assets/images/logo.png')}
        style={Styles.logoImage}
      />

      <View>
        <Text style={Styles.title}>Welcome to RNContacts</Text>
        <Text style={Styles.subTitle}>Create a free account</Text>

        <View style={Styles.form}>
          {error?.error && (
            <Message retry danger retryFn={onSubmit} message={error?.error} />
          )}
          <Input
            label="Username"
            iconPosition="right"
            placeholder="Enter Username"
            error={errors.userName || error?.username?.[0]} // errors => frontend error, error => backend error
            onChangeText={(value) => {
              onChange({name: 'userName', value});
            }}
          />

          <Input
            label="First name"
            iconPosition="right"
            placeholder="Enter First name"
            onChangeText={(value) => {
              onChange({name: 'firstName', value});
            }}
            error={errors.firstName || error?.first_name?.[0]}
          />
          <Input
            label="Last Name"
            iconPosition="right"
            placeholder="Enter Last name"
            error={errors.lastName || error?.last_name?.[0]}
            onChangeText={(value) => {
              onChange({name: 'lastName', value});
            }}
          />
          <Input
            label="Email"
            iconPosition="right"
            placeholder="Enter Email"
            error={errors.email || error?.email?.[0]}
            onChangeText={(value) => {
              onChange({name: 'email', value});
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
            error={errors.password || error?.password?.[0]}
            onChangeText={(value) => {
              onChange({name: 'password', value});
            }}
          />

          <CustomButton
            loading={loading}
            onPress={onSubmit}
            disabled={loading}
            primary
            title="Submit"
          />

          <View style={Styles.createSection}>
            <Text style={Styles.infoText}>Already have an account?</Text>
            <TouchableOpacity
              onPress={() => {
                navigate(LOGIN);
              }}>
              <Text style={Styles.linkBtn}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Container>
  );
};

export default RegisterComponent;
