import { Sidebar, NavBar, ImageSkin } from "../../Ui"
import { PostCard,PostCard2 } from "../../Components"


export function Landing(){
    return (
<>
<div className="content">
	      <NavBar />
        <PostCard />
        <Sidebar />
<PostCard2 />
	      </div>
</>
)
}
