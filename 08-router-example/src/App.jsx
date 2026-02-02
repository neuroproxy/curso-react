import './App.css'
import SearchPage from './pages/Search.jsx'
import { Router } from './Router.jsx'
import { Route } from './Route.jsx'
import Page404 from './404.jsx'
import { lazy, Suspense } from 'react'

const LazyHomePage = lazy(() => import('./pages/Home.jsx'))
const LazyAboutPage = lazy(() => import('./pages/About.jsx'))

const appRoutes = [
  {
    path: '/:lang/about',
    Component: LazyAboutPage
  },
  {
    path: '/search/:query',
    Component: SearchPage
  }
]

function App() {
  
  return (
    <main>
      <Suspense fallback={<div>Loading...</div>} >
        <Router routes={appRoutes} defaultComponent={Page404}>
          <Route path='/' Component={LazyHomePage} />
          <Route path='/about' Component={LazyAboutPage} />
        </Router>
      </Suspense>
    </main>
  )
}

export default App

