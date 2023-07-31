import { useAuth } from "@/contexts/auth"

export default function LoginForm() {

    const { login , logout } = useAuth()
    
    function loginHandler(event) {

        event.preventDefault();
        
        login(event.target.username.value, event.target.password.value)

    }

  
    return (
        <div className="flex items-center justify-center mt-80">
            <form className="flex flex-col items-center justify-center w-1/2 h-auto p-10 bg-green-300 border border-black" onSubmit={loginHandler}>
                <label className="flex justify-center p-5 text-2xl font-bold">User Name</label>
                <input className="w-11/12 p-5" type="text" name="username" ></input>
                <label className="flex justify-center p-5 text-2xl font-bold">Password</label>
                <input className="w-11/12 p-5" type="text" name="password" ></input>
                <button className="w-full p-5 m-10 text-2xl font-bold bg-green-500 rounded" type="submit ">Login</button>
            </form>
        </div>
    )
}