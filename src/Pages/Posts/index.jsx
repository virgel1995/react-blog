
import { useEffect,useState } from 'react';
import { Sidebar } from "../../Ui"
import { PostCard, CreatePost } from "../../Components"
import { getAllPosts }from "../../Api"
import { Flex,SimpleGrid } from "@chakra-ui/react"

export default function Posts({
	history
}){
	const [posts , setPosts] = useState([])
	useEffect(()=>{
getAllPosts()
            .then(({ data }) => {
setPosts(data.data)
}).catch((e) => {
                history.push("/");
            });
		console.log("refreshed ")
	}, []);
//	console.log( posts)
	return (
		<>
<Flex maxW= {"70vh"} bg='purple.100' color='white'>
	<SimpleGrid columns={[1, null, 3]} spacingX='15px' spacingY='10px'>
		{
			posts.map(p => 
					<PostCard key = {p.id} post= {p}/>
	
			)
		}
    
</SimpleGrid>
</Flex>
		</>
	)

	
}



