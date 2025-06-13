import { useState } from "react"


const Card=(props)=>{
  const [hasLiked,setHasLiked]=useState(false)
  return(
    <div  className="card">
      <h2>{props.title}</h2>
      <button onClick={()=>setHasLiked(true)}>{hasLiked?'Liked':'Like'}</button>
    </div>
  )
}


const App=()=>{

  return(
    <div className='card-container'>
  
    <Card title="star wars"/>
    <Card  title="lion king"/>
    <Card title="avathar"/>
   </div>
    
    
  )
}

export default App