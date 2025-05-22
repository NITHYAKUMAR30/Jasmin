import Input from "costuminputg"
import{useState}from"react"
 
const Register=()=>{
    const[email,setEmail]=useState("")
    const[name,setName]=useState("")
    const[password,setPassword]=useState("")
    const[age,setAge]=useState("")
    const handileSubmit=()=>{
        console.log(email)
        console.log(password)
        setEmail("")
        setPassword("")
    }
    return(
        <center>
            <div className="item-center justify-center w-150 h-full mt-50 bg-gray-100">
                <form onSubmit={handileSubmit}>
                    <Input
                    type="text"
                    lable="Email-address"
                    placeholder="Enter your email"
                    className="w-[80%] h-10 border border=gray-300 rounded-md px-4"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    />
                    <Input
                    type="text"
                    lable="name"
                    placeholder="Enter your name"
                    className="w-[80%] h-10 border border=gray-300 rounded-md px-4"
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                    />
                    <Input
                    type="password"
                    lable="password"
                    placeholder="Enter your pasword"
                    className="w-[80%] h-10 border border=gray-300 rounded-md px-4"
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    />
                    <Input
                    type="age"
                    lable="age"
                    placeholder="Enter your age"
                    className='w-[80%]h-10 border border-gray-300 rounded-md px-4'
                    value={age}
                    onChange={(e)=>setAge(e.target.value)}
                    />
                    <button className="bg-blue-600 w-full mt-4" type='submit'>Login</button>
                </form>
                {/* <p>New User?<Link to="/Register">Register</Link></p> */}
            </div>
        </center>
    )
}
    

export default Register