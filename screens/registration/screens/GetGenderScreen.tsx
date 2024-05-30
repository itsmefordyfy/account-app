import { View, TextInput, TouchableOpacity, StyleSheet, Text } from "react-native";
import colors from "../../../theme/colors";
import { useEffect, useState } from "react";
import { useUserRegistration } from "../context/UserRegistrationContext";
import { RegistrationActionEnum } from "../../types/RegisterActionType";
import Button from "../../../components/button";

const genderOptions = ['Male', 'Female',, 'Others']

export default function ({ navigation: { navigate, goBack } }: any) {

  const [gender, setGender] = useState<number>(-1)
  const { user, dispatch } = useUserRegistration()
  
  useEffect(() => {
    setGender(genderOptions.indexOf(user?.gender))
  }, [user?.gender])

  const onSubmit = () => {
    dispatch({ type: RegistrationActionEnum.SET_GENDER, payload: genderOptions[gender] })
    navigate('get-children')
  }


  const renderOptions = () => {
    return genderOptions.map((option, index) => (
      <TouchableOpacity
        key={index}
        onPress={() => setGender(index)}
        style={[styles.input, (index == gender ? styles.activeInput : gender != -1 ? { opacity: 0.3 } : {})]}
      >
        <Text style={styles.inputText}>{option}</Text>
      </TouchableOpacity>
    ))
  }
  

  return (
        <View style={styles.container}>
            <View style={styles.body}>
            <Text style={styles.title}>What do you prefer?</Text>
              <View style={{ gap: 8 }}>
                {renderOptions()}
              </View>
            </View>
            <View style={styles.footer}>
              <Button variant="secondary" title="BACK" onPress={goBack}/>
              <Button title="CONTINUE" disabled={gender == -1} onPress={onSubmit}/>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
      paddingHorizontal: 32,
      paddingVertical: 60,
      justifyContent: 'space-between'
    },
    body: {
      gap: 24,
      marginTop: 30
    },
    input: {
      height: 48,
      borderRadius: 12,
      borderWidth: 2,
      borderColor: colors.lightgray,
      paddingHorizontal: 18,
      color: 'white',
      fontWeight: 'bold',
      fontSize: 16,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: colors.gray,
    },
    activeInput: {
      borderColor: colors.primary,
      backgroundColor: colors.primaryDark
    },
    title: {
      fontSize: 32,
      color: 'white',
      fontWeight: 'bold',
    },
    inputText: {
      color: 'white',
      fontWeight: 'bold',
    },
    footer: {
      flexDirection: 'row',
      gap: 8
    }
  });