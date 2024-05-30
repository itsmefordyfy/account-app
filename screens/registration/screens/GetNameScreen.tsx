import { View, TextInput, TouchableOpacity, StyleSheet, Text } from "react-native";
import colors from "../../../theme/colors";
import { useUserRegistration } from "../context/UserRegistrationContext";
import { useEffect, useState } from "react";
import { RegistrationActionEnum } from "../../types/RegisterActionType";
import Button from "../../../components/button";
import Input from "../../../components/input";


export default function ({ navigation: { navigate, goBack } }: any) {
    
    const [name, setName] = useState<string | undefined>('')
    const { user, dispatch } = useUserRegistration()
    
    useEffect(() => {
      setName(user?.name)
    }, [user?.name])

    const onSubmit = () => {
      dispatch({ type: RegistrationActionEnum.SET_NAME, payload: name })
      navigate('get-gender')
    }

    return (
        <View style={styles.container}>
            <View style={styles.body}>
              <Text style={styles.title}>Let's get to know each other 👋</Text>
              <Input
                autoFocus
                value={name}
                onChangeText={(value) => setName(value)}
                placeholder="Enter your name"
                  />
            </View>
            <View style={styles.footer}>
              <Button variant="secondary" title="BACK" onPress={goBack}/>
              <Button title="CONTINUE" disabled={!name} onPress={onSubmit}/>
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
    title: {
      fontSize: 32,
      color: 'white',
      fontWeight: 'bold',
    },
    footer: {
      flexDirection: 'row',
      gap: 8
    }
  });