import React, { useContext, useState } from "react";
import RegisterComponent from "../../components/Register";
import { GlobalContext } from "../../context/provider";
import { LOGIN } from "../../constants/routerNames";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import register, { clearAuthState } from "../../context/actions/auth/register";

const Register = () => {
  const [form, setForm] = useState({})
  const [errors, setErrors] = useState({})
  const {navigate} = useNavigation()
  const {
    authDispatch,
    authState: {error, loading, data},
  } = useContext(GlobalContext);

  useFocusEffect(
    React.useCallback(() => {
      return () => {
        if (data || error) {
          clearAuthState()(authDispatch);
        }
      };
    }, [data, error]),
  );


  const onChange = ({name, value}) => {
    setForm({...form, [name]: value})

    if (value !== '') {
      if (name === 'password') {
        if (value.length < 6) {
          setErrors(prev => {
            return { ...prev, [name]: "password at least 6 character long" }
          })
        }
        else {
          setErrors(prev => {
            return { ...prev, [name]: null }
          })
        }
      }
      else {
        setErrors(prev => {
          return { ...prev, [name]: null }
        })
      }
    }
    else {
      setErrors(prev => {
        return { ...prev, [name]: "This field is required" }
      })
    }
  }

  const onSubmit = () => {
    // validations
    if (!form.userName) {
      setErrors(prev => {
        return { ...prev, userName: "please add a Username" }
      })
    }
    if (!form.firstName) {
      setErrors(prev => {
        return { ...prev, firstName: "please add a First Name" }
      })
    }
    if (!form.lastName) {
      setErrors(prev => {
        return { ...prev, lastName: "please add a Last Name" }
      })
    }
    if (!form.email) {
      setErrors(prev => {
        return { ...prev, email: "please add a Email" }
      })
    }
    if (!form.password) {
      setErrors((prev) => {
        return {...prev, password: 'Please add a password'};
      });
    }
    if (
      Object.values(form).length === 5 &&
      Object.values(form).every((item) => item.trim().length > 0) &&
      Object.values(errors).every((item) => !item)
    ) {
      register(form)(authDispatch)((response) => {
        navigate(LOGIN);
      });
    }
  }
  return (
    <RegisterComponent
      onSubmit={onSubmit}
      onChange={onChange}
      form={form}
      errors={errors}
      error={error}
      loading={loading}
    />
  )
}

export default Register
