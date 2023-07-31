// import { createContext, useContext, useState } from "react"
// import jwt from 'jsonwebtoken'

// // const { createContext, useContext } = require("react");


// const baseURL = process.env.NEXT_PUBLIC_API_URL
// const tokenURL = baseURL + "api/token/"


// const AuthContext = createContext();

// export function useAuth() {

//     const auth = useContext(AuthContext)
//     if (!auth) {
//         return ("Error : auth is empty")
//     }
//     return auth
// }



// export function AuthProvider(props) {


//     const [state, setState] = useState({
//         tokens: null,
//         user: null,
//         login,
//         logout,

//     })


//     async function login(username, passsword) {
//         const options = {
//             method: "POST",
//             body: JSON.stringify({ username, passsword }),
//         }
//         // console.log(tokenURL);

       

//         const response = await fetch("http://127.0.0.1:8000/api/token ", options)

//         const data = await response.json()
//         // console.log(data);
//         const decodedAccess = jwt.decode(data.access)
//         const newState = {
//             tokens: data,
//             user: {
//                 username: decodedAccess.username,
//                 email: decodedAccess.email,
//                 id: decodedAccess.user_id
//             }
//         }

//         setState(prevState => ({ ...prevState, ...newState }));
//     }

//     function logout(){
//         const newObj ={
//             tokens : null,
//             user : null,
//         }
//         setState(prevState => ({ ...prevState, ...newState }));
//     }

//     return (
//         <AuthContext.Provider value={state}>
//             {props.children}
//         </AuthContext.Provider>

//     )

// }
import { createContext, useContext, useState } from "react"
import jwt from 'jsonwebtoken'


//global

const baseUrl = process.env.NEXT_PUBLIC_API_URL;
const tokenUrl = baseUrl+"api/token/";

const AuthContext = createContext();

export function useAuth(){
    const auth = useContext(AuthContext)
    if(!auth) {
        return("Error: auth is empty")
    }
    return auth;
}

export function AuthProvider(props){

    const [state, setState] = useState({
        tokens: null,
        user: null,
        login,
        logout,
    })

    async function login(username, password){

        const options = {
            method : "POST",
            body: JSON.stringify({username,password}),
            headers : {'Content-Type' : 'application/json'}

        }


        const response = await fetch(tokenUrl,options)

        const data = await response.json()

        // console.log("data",data)

        const decodedAccess = jwt.decode(data.access)
        // console.log("decoded",decodedAccess)

        const newState = {
            tokens : data,
            user : {
                username : decodedAccess.username,
                email: decodedAccess.email,
                id: decodedAccess.user_id
            }
        }

        setState(prevState =>({...prevState, ...newState}));


    }

    

    function logout() {
        const newState = {
            tokens : null,
            user : null,
        }

        setState(prevState =>({...prevState, ...newState}));
    }



    return (
        <AuthContext.Provider value={state}>
            {props.children}
        </AuthContext.Provider>
    )
}