import { TouchableOpacity, Text, StyleSheet, TouchableOpacityProps } from "react-native"
import colors from "../../theme/colors"
import { ReactNode } from "react"

type BaseButtonProps = {
    title: string | ReactNode
}

type ButtonProps = BaseButtonProps & TouchableOpacityProps & (
    { variant?: 'primary'} |
    { variant?: 'secondary' }
)

export default function ({ variant, title, disabled, ...props }: ButtonProps) {
    return (
        <TouchableOpacity 
            {...props}
            disabled={disabled}
            style={[
                styles.button,
                (variant === 'secondary' ? styles.secondaryButton : {}),
                (disabled ? styles.disabledButton : {}),
                props.style
            ]}
        >
            <Text style={styles.buttonText}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        flex: 1,
        height: 42,
        backgroundColor: colors.primary,
        justifyContent: 'center',
        borderRadius: 12,
        alignItems: 'center'
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold'
    },
    secondaryButton: {
        backgroundColor: colors.gray
    },
    disabledButton: {
        opacity: 0.1,
        borderWidth: 1,
        borderColor: 'white'
    }
})