import{ useState }from "react"
function Sample(){
    const[count,setCount]=useState(0)
    console.log(count)
    return(
        <div>
        <button className="by-amber-400 p-2" onClick={() => setCount(count + 1)}>
        count {count}
        </button>
        </div>

    );
}
export default Sample