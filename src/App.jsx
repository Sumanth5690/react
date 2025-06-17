import React, { useEffect,useState } from 'react'
import Search from './components/search'
import Spinner from './components/Spinner'

const API_BASE_URL='https://api.themoviedb.org/3'

const API_KEY=import.meta.env.VITE_TMDB_API_KEY

const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${API_KEY}`
  }
};


const App = () => {
  const [searchTerm,setSearchTerm]=useState('')
  const [errorMessage,setErrorMessage]=useState('')
  const [movieList,setMovieList]=useState([])
  const [isLoading,setIsLoading]=useState(false)


 const fetchmovie=async()=>{
  setIsLoading(true)
  setErrorMessage('')

try {
  const endpoint=`${API_BASE_URL}/discover/movie?sort_by=popularity.desc`
  const response=await fetch(endpoint,API_OPTIONS)
  if(!response.ok){
      throw new Error('failed to fetch movies')
  }
  const data=await response.json()
  
  if(data.Response === 'False'){
    setErrorMessage(data.Error || 'Failed to fetch movie')
    setMovieList([])
    return
  }

  setMovieList(data.results || [])


} catch (error) {
  console.error(`error fetching movies${error}`)
  setErrorMessage('error fetching movies plaese try again later')
}finally{
  setIsLoading(false)
}
 }

  useEffect(()=>{
    fetchmovie()
  },[])

  return (
    <main>
     <div className='pattern'/>
     <div className='wrapper'>
     <header>
      <img src='/hero.png' alt="hero banner"/>
       <h1>Find <span className='text-gradient'>Movies</span> You'll Enjoy Without the Hassle</h1>
     <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
     <section className='all-movies'>
      <h2 className='mt-[20px]'>All Movies</h2>
      {isLoading?(<p className='text-white'><Spinner/></p>):errorMessage?(<p className='text-red-500'>{errorMessage}</p>):(
        <ul>
          {movieList.map((movie)=>(
            <p key={movie.id} className='text-white'>{movie.title}</p>
          ))}
        </ul>
      )}
     </section>
     </header>
     </div>

     
    </main>
  )
}

export default App