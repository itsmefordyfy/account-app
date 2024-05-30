import { RegistrationAction, RegistrationActionEnum, RegistrationState } from "../../types/RegisterActionType";



export default function (state: RegistrationState, action: RegistrationAction): RegistrationState {
   switch(action.type) {
   case RegistrationActionEnum.SET_ACCOUNT: 
      return {
         user: {
            ...state.user,
            email: action.payload.email,
            password: action.payload.password
         }
   };
   case RegistrationActionEnum.ADD_CHILD: 
      return {
         user: {
            ...state.user,
            children: [action.payload, ...(state.user?.children || [])]
         }
   }
   case RegistrationActionEnum.REMOVE_CHILD: 
      return {
         user: {
            ...state.user,
            children: state.user?.children?.filter(item => item != action.payload)
         }
   }
   case RegistrationActionEnum.RESET_CHILDREN: 
      return { user: { ...state.user, children: [] } }
   case RegistrationActionEnum.SET_GENDER: 
      return { user: { ...state.user, gender: action.payload } };
   case RegistrationActionEnum.SET_NAME: 
      return { user: { ...state.user, name: action.payload } };
   default: 
      return state;
   }
}