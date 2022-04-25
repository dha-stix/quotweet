import React, {useState, useEffect} from 'react'
import Loading from '../components/Loading'
import Nav from '../components/Nav'
import Pagination from '../components/Pagination'
import QuoteCard from '../components/QuoteCard'

const Quotes = () => {
  const [quotes, setQuotes ] = useState([]) 
  const [totalPages, setTotalPages] = useState(null)
  const [loading, setLoading] = useState(false)

  const fetchQuoteTexts = () => {
    fetch("https://api.quotable.io/quotes").then(data => data.json()).then(res => {
      setTotalPages(res.totalPages)
      setQuotes(res.results)
    })
  }
  useEffect(()=> {
    fetchQuoteTexts()
  }, [])

  return (
    <>
      {quotes[0] && !loading ? (
        <div>
          <Nav/>
          <div className="w-full flex flex-wrap items-center justify-center px-8 py-12 max-w-[1300px]">
            {quotes.map(quote => <QuoteCard quote={quote} key={quote._id}/>)}
          </div>
          <Pagination totalPages={totalPages} setQuotes={setQuotes} loading={loading} setLoading={setLoading}/>
        </div>

      ): <Loading/> }
    </>
    
  )
}

export default Quotes