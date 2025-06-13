
const Card=(props)=>{
  return(
    <div>
      <h2>{props.title}</h2>
    </div>
  )
}


const App=()=>{
  return(
    <>
    <h2>this is functional component</h2>
    <Card title="star wars"/>
    <Card  title="lion king"/>
    <Card title="avathar"/>
   
    </>
    
  )
}

export default App