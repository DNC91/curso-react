import { useState } from "react";
import Navbar from "./components/navbar/index.js";

function App() {

    const [posts, setPosts] = useState([]);

    return  <Navbar setPosts={setPosts} posts={posts}/> 
}

export default App;
