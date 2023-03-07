import React, { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter , Routes, Route, Navigate } from 'react-router-dom';

import './App.css';
import { 
	APP_ROUTES , 
	storeTokenInLocalStorage 
			 } from "./Api"
// import pages from Pages dir
/*
import { 
	Landing ,
	Home ,
	Login,
	Rigster,
	NotFound,
	About
} from "./Pages"

import { NavBar , Footer } from "./Ui"*/
const Landing = lazy(() => import('./Pages/Landing'));
const About = lazy(() => import('./Pages/About'));
	const Home = lazy(() => import('./Pages/Home'))
	const Login = lazy(() => import('./Pages/Auth/Login'))
 const	Rigster = lazy(() => import('./Pages/Auth/Rigster'))
const	NotFound = lazy(() => import('./Pages/Error/404'))
const Posts = lazy(()=> 
	import ("./Pages/Posts"))


				//ui 
const	NavBar = lazy(() => import('./Ui/Navbar'))
const	Footer = lazy(() => import('./Ui/Footer'))
const Loader =  lazy(() => import("./Ui/Loader"))
// SEO
const	Seo = lazy(() => import('./Components/Seo'))

function App() {
	useEffect(() => {
    // check for token in LS when app first runs
    if (localStorage.token) {
      // if there is a token set axios headers for all requests
      storeTokenInLocalStorage(localStorage.token);
    }

		// try to get user here if true or flase
		window.addEventListener('storage', () => {
      if (!localStorage.token){
// log out here
				console.log("signed out")
			}
    });
  }, []);
	
  return (
		<BrowserRouter>
			<Seo />
    <Suspense fallback={<Loader />}>
			<NavBar />
      <Routes>
				{/*<Route exact path="/" element={<Navigate to={APP_ROUTES.HOME} />} />*/}
				
<Route path={APP_ROUTES.POSTS} exact element={<Landing />} />
        <Route path={APP_ROUTES.SIGN_UP} exact element={<Rigster />} />
        <Route path={APP_ROUTES.SIGN_IN} element={<Login />} />
        <Route path={APP_ROUTES.HOME} element={<Home />} />

<Route path= {APP_ROUTES.LANDING} element= {<Posts />} />

				
				{/* Error Page  */}
			<Route path={APP_ROUTES.ERROR} element={<NotFound />} />
      </Routes>
			<Footer />
    </Suspense>
  </BrowserRouter>
  )
}
export default App;
