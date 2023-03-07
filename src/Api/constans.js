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
	HOME: '/home',
	LANDING: "/",
	POSTS: "/posts",
	ERROR: "/*"
}

export const websiteUrl =  "https://react-blog.virgel1995.repl.co";
export const githubBaseUrl =
  "https://github.com/virgel1995/react-blog";


export const siteConfig = {
  repo: {
    url: githubBaseUrl,
    editUrl: `${githubBaseUrl}/edit/main/content`,
    blobUrl: `${githubBaseUrl}/blob/main`,
  },
  author: {
    name: "virus24",
    github: "virgel1995",
    twitter: "@virus24",
    email: "kazouya25@gmail.com",
  },
  seo: {
    title: "Virus-Blog",
    description: "Blog for Whatsapp group for web development",
    openGraph: {
      url: websiteUrl,
      type: "website",
      image: {
        url: `${websiteUrl}/static/assets/devloper.gif`,
        width: 1240,
        height: 1080,
        alt: "Blog for Whatsapp group for web development",
        type: "image/png",
      },
      locale: "en_US",
      siteName: "Virus-Blog",
    },
    twitter: {
      site: "@virus24",
      handle: "@virus24",
      cardType: "summary_large_image",
      image: {
        url: `${websiteUrl}/static/assets/devloper.gif`,
        width: 1012,
        height: 506,
        alt: "Blog for Whatsapp group for web development",
        type: "image/png",
      },
    },
    robots: "index, follow",
  },
};