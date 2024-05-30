import React, {
    createContext,
    Dispatch,
    ReactElement,
    ReactNode,
    Reducer,
    SetStateAction,
    useContext,
    useReducer,
    useState
} from "react";
import { User } from "../../types/UserType";
import UserRegistrationReducer from "../reducer/UserRegistrationReducer";
import { RegistrationAction, RegistrationState } from "../../types/RegisterActionType";

type UserRegistrationContextType = {
    user: User | null;
    dispatch: Dispatch<RegistrationAction>;
};

const UserRegistrationContext = createContext<UserRegistrationContextType | undefined>(undefined);

function useUserRegistration(): UserRegistrationContextType {
    const context = useContext(UserRegistrationContext);
    if (!context) {
        throw new Error("useUserRegistration must be used within an UserRegistrationProvider");
    }
    return context;
}

const UserRegistrationProvider = (props: { children: ReactNode }): ReactElement => {
    const [state, userDispatch] = useReducer<Reducer<RegistrationState, RegistrationAction>>(UserRegistrationReducer, { user: null });

    return (
        <UserRegistrationContext.Provider 
            {...props} 
            value={{ user: state.user, dispatch: userDispatch }} 
        />
    )
};


export { UserRegistrationProvider, useUserRegistration };