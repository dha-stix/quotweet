import React, {useState, useEffect} from 'react'
import Loading from '../components/Loading'
import Nav from '../components/Nav'
import Pagination from '../components/Pagination'
import QuoteCard from '../components/QuoteCard'
import { useNavigate } from 'react-router-dom'

const Quotes = () => {
  const [quotes, setQuotes ] = useState([]) 
  const [totalPages, setTotalPages] = useState(null)
  const [loading, setLoading] = useState(false)
  const [photoURL, setPhotoURL] = useState(null)
  const navigate = useNavigate()

  useEffect(()=> {
    const fetchQuoteTexts = () => {
      localStorage.getItem("_url") ? (
        fetch("https://api.quotable.io/quotes").then(data => data.json()).then(res => {
        setTotalPages(res.totalPages)
        setQuotes(res.results)
        setPhotoURL(localStorage.getItem("_url"))
      })
      ): (
         navigate("/")
      )
      
    }
  
    fetchQuoteTexts()
  }, [navigate])

  return (
    <>
      {quotes[0] && !loading ? (
        <div>
          <Nav photoURL={photoURL}/>
          <div className="w-full flex flex-wrap items-center justify-center md:px-8 px-2 py-12 max-w-[1300px]">
            {quotes.map(quote => <QuoteCard quote={quote} key={quote._id}/>)}
          </div>
          <Pagination totalPages={totalPages} setQuotes={setQuotes} loading={loading} setLoading={setLoading}/>
        </div>

      ): <Loading/> }
    </>
    
  )
}

export default Quotes
