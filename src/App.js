import React, { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter , Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import { 
	APP_ROUTES , 
	storeTokenInLocalStorage 
			 } from "./Api"
// import pages from Pages dir
import { 
	Landing ,
	Home ,
	Login,
	Rigster,
	NotFound
} from "./Pages"
import { NavBar , Footer } from "./Ui"
//const Landing = lazy(() => import('./Pages'));
const About = lazy(() => import('./Pages'));

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
    <Suspense fallback={<div>Loading...</div>}>
			<NavBar />
      <Routes>
<Route exact path="/" element={<Navigate to={APP_ROUTES.HOME} />} />
        <Route path={APP_ROUTES.SIGN_UP} exact element={<Rigster />} />
        <Route path={APP_ROUTES.SIGN_IN} element={<Login />} />
        <Route path={APP_ROUTES.HOME} element={<Home />} />



				
				{/* Error Pages  */}
			<Route path="/*" element={<NotFound />} />
      </Routes>
			<Footer />
    </Suspense>
  </BrowserRouter>
  )
}
export default App;
