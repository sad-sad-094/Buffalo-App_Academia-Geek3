import { typesLogin } from "../types/types"


export const actionLoginSync = (email, pass)=>{
return {
    type: typesLogin.verificarLogin,
    payload:{
        email, pass
    }
}
}