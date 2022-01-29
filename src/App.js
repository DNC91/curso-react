import { useState } from "react";
import Componente from "./components/componente/index.js";
import Form from "./components/form/index.js";
import Navbar from "./components/navbar/index.js";
import { BrowserRouter as Router} from "react-router-dom";

function App() {

    const [posts, setPosts] = useState([]);

    return (
        <Router>
            <Navbar setPosts={setPosts} posts={posts}/>
        </Router>
    );
}

export default App;
