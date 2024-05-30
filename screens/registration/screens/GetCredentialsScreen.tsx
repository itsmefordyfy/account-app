import { View, TextInput, TouchableOpacity, StyleSheet, Text } from "react-native";
import colors from "../../../theme/colors";
import Button from "../../../components/button";
import { useEffect, useState } from "react";
import Input from "../../../components/input";
import { useUserRegistration } from "../context/UserRegistrationContext";
import { Account, RegistrationActionEnum } from "../../types/RegisterActionType";


export default function ({ navigation: { navigate, goBack } }: any) {

    const [credential, setCredential] = useState<Account>();
    const { user, dispatch } = useUserRegistration()

    useEffect(() => {
      setCredential({ email: user?.email, password: user?.password })
    }, [user?.email, user?.password])

    const onSubmit = () => {
      dispatch({ type: RegistrationActionEnum.SET_ACCOUNT, payload: credential as Account })
      navigate('confirmation')
    }

    return (
        <View style={styles.container}>
            <View style={styles.body}>
            <Text style={styles.title}>Create Account</Text>
            <View style={{ gap: 8 }}>
              <Input
                autoFocus
                  value={credential?.email}
                  onChangeText={(value) => setCredential(credential => ({ ...credential, email: value }))}
                  placeholder="Enter your email address"
                />
              <Input
                  value={credential?.password}
                  onChangeText={(value) => setCredential(credential => ({ ...credential, password: value }))}
                  placeholder="Enter your password"
                />
            </View>
            </View>
            <View style={styles.footer}>
              <Button variant="secondary" title="BACK" onPress={goBack}/>
              <Button title="SUBMIT" disabled={!(credential?.email && credential.password)} onPress={onSubmit} />
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