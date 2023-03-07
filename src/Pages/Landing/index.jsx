import { useEffect,useState } from 'react';
import { Sidebar, NavBar, ImageSkin } from "../../Ui"
import { PostCard } from "../../Components"
import { getAllPosts }from "../../Api"
import { Container } from "@chakra-ui/react"

export default async function Landing(){
	const [post , setPost] = useState(null)

	useEffect(()=>{
getAllPosts()
            .then(({ data }) => {
data.data.map(p => {
	setPost(p);
 });
}).catch((e) => {
                history.push("/");
            });
	}, []);
/*	const data =  await getAllPosts()
	console.log(data.data.data)
*/
    return (
<>
<Container bg='purple.100' color='white'>
        <PostCard post= {post}/>

        <Sidebar />
</Container>
</>
)
}
