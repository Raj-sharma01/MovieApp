import { Outlet, createBrowserRouter } from 'react-router-dom'
import './App.css'
import Header from './components/header/Header'
import Home from './pages/home/Home'
import MovieList from './components/movieList/MovieList'
import Movie from './pages/movieDetail/Movie'

function App() {

  return (
    <div className='App'>
      <Header />
      <Outlet />
    </div>
  )
}


export const myRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <h1>Error!!!!</h1>,
    children: [
      {
        path:'/',
        element:<Home/>
      },
      {
        path: "movie/:id",
        element: <Movie/>
      },
      {
        path: "movies/:type",
        element: <MovieList/>
      }
    ]
  },
])

// export const myRouter = createBrowserRouter([
//   {
//     path: '/',
//     element: <h1>Home Page</h1>,
//     errorElement: <h1>Error!!!!</h1>
//   },
//   {
//     path: "movie/:id",
//     element: <h1>Movie  Page</h1>,
//   },
//   {
//     path: "movies/:type",
//     element: <h1>Movie Type</h1>,
//   }
// ])



export default App
