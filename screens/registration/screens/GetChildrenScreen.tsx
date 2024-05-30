import { View, StyleSheet, Text, ScrollView, TextInput, NativeSyntheticEvent, TextInputSubmitEditingEventData } from "react-native";
import colors from "../../../theme/colors";
import Button from "../../../components/button";
import { useEffect, useRef, useState } from "react";
import Input from "../../../components/input";
import { AntDesign } from '@expo/vector-icons';
import { useUserRegistration } from "../context/UserRegistrationContext";
import { RegistrationActionEnum } from "../../types/RegisterActionType";


export default function ({ navigation: { navigate, goBack } }: any) {

    const { user, dispatch } = useUserRegistration()
    const [input, setInput] = useState<string>('')
    const inputRef = useRef<TextInput>(null);

    const onAddItem = (e: NativeSyntheticEvent<TextInputSubmitEditingEventData>) => {
      const value = e.nativeEvent.text;
      dispatch({ type: RegistrationActionEnum.ADD_CHILD, payload: value })
      setInput('')
    }

    const onRemoveItem = (value: string) => () => {
      dispatch({ type: RegistrationActionEnum.REMOVE_CHILD, payload: value })
    }

    return (
        <View style={styles.container}>
            <View style={styles.body}>
            <Text style={styles.title}>Your children's name</Text>
              <ScrollView contentContainerStyle={{ gap: 4 }}>
                <View style={[styles.item, { marginBottom: 8 }]}>
                  <Input 
                    autoFocus
                    ref={inputRef}
                    focusable
                    style={{ flex: 1 }} 
                    value={input} 
                    placeholder="Enter name"
                    blurOnSubmit={false}
                    onChangeText={(value) => setInput(value)}
                    onSubmitEditing={onAddItem}
                  />
                  {!!user?.children?.length && (
                    <Button 
                      variant="secondary"
                      style={[styles.button, { backgroundColor: colors.lightgray }]} 
                      onPress={() => dispatch({ type: RegistrationActionEnum.RESET_CHILDREN })}
                      title={<AntDesign name="minus" size={24} color="white" />} 
                    />
                  )}
                </View>
                {user?.children?.map((name, index) => (
                  <View 
                    key={index}
                    style={[styles.item, { opacity: 0.65 }]}
                  >
                    <Input 
                      readOnly
                      style={{ borderWidth: 0, flex: 1, height: 40 }} 
                      value={name} 
                      onChangeText={(value)  => setInput(value)}
                    />
                    <Button 
                      variant="secondary"
                      onPress={onRemoveItem(name)} 
                      style={styles.button}
                      title={<AntDesign name="minus" size={24} color="white" />} 
                    />
                  </View>
                ))}
              </ScrollView>
            </View>
            <View style={styles.footer}>
              <Button variant="secondary" title="BACK" onPress={goBack}/>
              <Button title="CONTINUE" disabled={!user?.children?.length} onPress={() => navigate('get-credentials')}/>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      position: 'relative',
      backgroundColor: colors.background,
      paddingHorizontal: 32,
      paddingVertical: 60,
      paddingBottom: 148,
      justifyContent: 'space-between'
    },
    body: {
      gap: 24,
      marginTop: 30
    },
    item: {
      gap: 6, 
      flexDirection: 'row', 
      alignItems: 'center', 
    },
    title: {
      fontSize: 32,
      color: 'white',
      fontWeight: 'bold',
    },
    footer: {
      position: 'absolute',
      flexDirection: 'row',
      gap: 8,
      bottom: 0,
      left: 0,
      right: 0,
      paddingHorizontal: 32,
      paddingBottom: 30,
      paddingTop: 16,
      backgroundColor: colors.background
    },
    button: {
      flex: 0, 
      paddingHorizontal: 10
    },
  });