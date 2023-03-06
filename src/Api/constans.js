const API_URL = 'https://webfull-stack-courses.herokuapp.com'

export const API_ROUTES = {
	GET_USER: `${API_URL}/User` ,
  SIGN_UP: `${API_URL}/updateOrCreate`,
  SIGN_IN: `${API_URL}/Login`,
  POSTS: `${API_URL}/Blogs`,
	UPDATE_POST: `${API_URL}/Blogs/updateOrCreate`,
	CREATE_POST: `${API_URL}/Blogs/updateOrCreate`,
	CREATE_COMMENT: `${API_URL}/Blogs/Comments/create`,
	GET_ALL_COMMENTS: `${API_URL}/Blogs/Comments/?Blog_id=`
}
export const APP_ROUTES = {
  SIGN_UP: '/signup',
  SIGN_IN: '/signin',
  DASHBOARD: '/dashboard',
	HOME: '/home'
}