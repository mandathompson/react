import React, { useState, setPage } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import Navbar from './Components/Navbar'
import Planets from './Components/Planets'
import People from './Components/People'

function App() {
  const [page, setPage] = useState('planets');   //giving state initial value of planets page

  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <h1>Star Wars Info</h1>
        <Navbar setPage={setPage} />
        <div className="content">

          {page === 'planets' ? <Planets /> : <People />}

        </div>
      </div>
    </QueryClientProvider>
  );
}

export default App;
