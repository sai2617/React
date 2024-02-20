import { useState,useEffect } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const  Home = () => {

    // let name ='SUMASHA';
    const [name, setName] = useState('SuMaSha');
    const [age, setAge] =useState(26)
    const {data: blogs, ispending, error} = useFetch('http://localhost:8000/blogs');

const handleClick = () => {
    // console.log('hello mates', e);
    setName('MaSuSha');
    setAge(28);

}



const handleClickAgain = (name) =>{
    console.log("hello"+name);
}

const handleDelete = (id) => {
    const newBlogs =blogs.filter(blog=> blog.id !== id);
    // setBlogs(newBlogs);
}

    return ( 
        <div className="home">
            {error && <div> {error} </div>}
            {ispending && <div>Please wait its Loading</div>}
            <h2>Home Page Component</h2>
            <button onClick={handleClick}>Click me</button>
            <p>{name} is {age} years old</p>
            <button className="danger" onClick={handleClickAgain}>Click me again</button>
        {blogs && <BlogList blogs={blogs} title = "All Blogs!" handleDelete = {handleDelete}></BlogList>}
        {blogs &&<BlogList blogs={blogs.filter((blog)=>blog.author==='mario' )} title = "SuMaSha Blogs!"></BlogList>}
        
        </div>
     );
}
 
export default Home;