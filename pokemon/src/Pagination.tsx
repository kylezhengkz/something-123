import { useContext } from 'react'
import { AppContext } from "./App"

export default function Pagination() {
  const { setCurrentUrl, prevUrl, nextUrl } = useContext(AppContext);

  function previousPage() {
    if (prevUrl !== null) {
      setCurrentUrl(prevUrl)
    }
  }

  function nextPage() {
    if (nextUrl !== null) {
      setCurrentUrl(nextUrl)
    }
  }

  return (
    <div>
      
      {prevUrl && <button onClick={previousPage}>Previous page</button>}
      {nextUrl && <button onClick={nextPage}>Next page</button>}

      {prevUrl && <p>Previous link: {prevUrl}</p>}
      {!prevUrl && <p>Previous link: NULL</p>}

      {nextUrl && <p>Next link: {nextUrl}</p>}
      {!nextUrl && <p>Next link: NULL</p>}
    </div>
  )
}
