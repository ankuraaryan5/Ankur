import React,{useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const Login = () => {
    const [user, setUser] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    const handleLogin = async () => {
        await axios.post("http://localhost:4000/api/v1/login", {
            email: user,
            password: password
        })
        .then((res) => {
            console.log(res.data)
            navigate("/dashboard")
            localStorage.setItem("token", res.data.token)
        })
        .catch((err) => {
            console.log(err)
        })

    }

  return (
    <div className="flex justify-center items-center h-screen w-screen">
        <div className="flex flex-col gap-4 bg-white p-10 rounded-xl shadow-xl w-1/3">
            <input type="email" className='p-2 rounded-lg shadow-lg ' onChange={(e) => setUser(e.target.value)} value={user} placeholder="Enter Email"/>
            <input type="password" className='p-2 rounded-lg shadow-lg ' onChange={(e) => setPassword(e.target.value)} value={password} placeholder="Enter Password"/>
            <button className='bg-blue-500 text-white p-2 rounded-lg' onClick={handleLogin}>Login</button>
        </div>
    </div>
  )
}

export default Login