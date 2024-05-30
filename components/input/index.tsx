import { StyleSheet, TextInput, TextInputProps } from "react-native"
import colors from "../../theme/colors"
import { forwardRef } from "react"

export default forwardRef(function (props: TextInputProps, ref) {
    return (
        <TextInput
            placeholderTextColor='gray'
            {...props}
            ref={ref as any}
            style={[styles.input, props.style]}
        />
    )
})

const styles = StyleSheet.create({
    input: {
        height: 48,
        borderRadius: 12,
        borderWidth: 2,
        borderColor: colors.lightgray,
        paddingHorizontal: 18,
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
        backgroundColor: colors.gray,
      },
})