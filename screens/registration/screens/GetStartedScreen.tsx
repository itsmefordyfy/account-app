import { View, TextInput, TouchableOpacity, StyleSheet, Text } from "react-native";
import colors from "../../../theme/colors";
import Button from "../../../components/button";

export default function ({ navigation: { navigate } }: any) {

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Get Started</Text>
            <Button style={{ flex: 0 }} title="CONTINUE" onPress={() => navigate('get-name')}/>
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
      fontSize: 32,
      color: 'white',
      fontWeight: 'bold',
      marginTop: 30
    }
  });