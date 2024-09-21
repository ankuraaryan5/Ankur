import React,{useState} from 'react'

const Login = () => {
    const [user, setUser] = useState({})
    const [password, setPassword] = useState({})

    const handleLogin = () => {
        console.log(user, password)
    }

  return (
    <div className="flex justify-center items-center h-screen w-screen">
        <div className="flex flex-col gap-4 bg-white p-10 rounded-xl shadow-xl w-1/3">
            <input type="email" className='p-2 rounded-lg shadow-lg ' onChange={(e) => setUser(e.target.value)}  placeholder="Enter Email"/>
            <input type="password" className='p-2 rounded-lg shadow-lg ' onChange={(e) => setPassword(e.target.value)}  placeholder="Enter Password"/>
            <button className='bg-blue-500 text-white p-2 rounded-lg' onClick={handleLogin}>Login</button>
        </div>
    </div>
  )
}

export default Login