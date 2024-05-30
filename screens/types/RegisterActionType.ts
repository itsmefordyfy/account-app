import { User } from "./UserType"

export enum RegistrationActionEnum {
    SET_NAME,
    SET_GENDER,
    ADD_CHILD,
    REMOVE_CHILD,
    RESET_CHILDREN,
    SET_ACCOUNT
}

export type Account = {
    email?: string,
    password?: string
}

export type RegistrationAction = 
{
    type: RegistrationActionEnum.SET_NAME,
    payload: User['name']
} | 
{
    type: RegistrationActionEnum.SET_GENDER,
    payload: User['gender']
} | 
{
    type: RegistrationActionEnum.SET_ACCOUNT,
    payload: Account
} | 
{
    type: RegistrationActionEnum.ADD_CHILD,
    payload: string
} |
{
    type: RegistrationActionEnum.REMOVE_CHILD,
    payload: string
} |
{
    type: RegistrationActionEnum.RESET_CHILDREN,
}

export type RegistrationState = {
    user: User | null
}