import Pagination from "./components/Pagination";
import Quotes from "./components/Quotes";
import Header from "./components/Header";
import {useState, useEffect} from "react"

function App() {
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
    <div className="w-full min-h-screen">
      <Header/>
      {loading ? <p>Loading</p> : <Quotes quotes={quotes}/>}
      
      <Pagination totalPages={totalPages} setQuotes={setQuotes} loading={loading} setLoading={setLoading}/>
      
    </div>
  );
}

export default App;
