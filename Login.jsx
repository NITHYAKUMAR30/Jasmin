
import Input from "costuminputg"
import{useState}from"react"
const Login=()=>{
    const[email,setEmail]=useState("")
    const[Password,setPassword]=useState("")
    const handileSubmit=()=>{
       // e.preventDefault()
        console.log(email)
        console.log(Password)
        // setEmail("")
        // setPassword("")
    }
    return(
        <center>
            <div className="item-center justify-center w-150 h-full mt-50 bg-gray-100">
                <form onSubmit={handileSubmit}>
                    <Input
                    type="email"
                    lable="Email-address"
                    placeholder="Enter your email"
                    className="w-[80%] h-10 border border=gray-300 rounded-md px-4"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    />
                    <Input
                    type="password"
                    lable="password"
                    placeholder="Enter your password"
                    className='w-[80%]h-10 border border-gray-300 rounded-md px-4'
                    value={Password}
                    onChange={(e)=>setPassword(e.target.value)}
                    />
                    <button className="bg-blue-600 w-full mt-4" type='submit'>Login</button>
                </form>
                {/* <p>New User?<Link to="/Register">Register</Link></p> */}
            </div>
        </center>
    )
}
export default Login