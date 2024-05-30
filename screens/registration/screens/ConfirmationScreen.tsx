import { View, TextInput, TouchableOpacity, StyleSheet, Text } from "react-native";
import colors from "../../../theme/colors";
import Button from "../../../components/button";
import { useUserRegistration } from "../context/UserRegistrationContext";

export default function ({ navigation: { navigate } }: any) {
  const { user } = useUserRegistration()

    return (
      <View style={styles.container}>
        <View style={{ gap: 8 }}>
          <Text style={[styles.text, styles.title]}>Account Created Successfully 🥳🎉</Text>
          <View>
            <Text style={styles.text}>Name: {user?.name}</Text>
            <Text style={styles.text}>Gender: {user?.gender}</Text>
            <Text style={styles.text}>Children: {user?.children?.join(', ')}</Text>
            <Text style={styles.text}>Email: {user?.email}</Text>
            <Text style={styles.text}>Password: {user?.password}</Text>
          </View>
        </View>
        <Button style={{ flex: 0 }} title="GO TO LOGIN" onPress={() => navigate('get-started')}/>
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
    title: {
      textAlign: 'center',
      fontSize: 20,
      marginTop: 30
    },
    text: {
      color: 'white',
      fontWeight: 'bold',
    }
  });