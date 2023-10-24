import './App.css';
import About from './component/About';
import Footer from './component/Footer';
import Header from './component/Header';
import Home from './component/Home';
import Missing from './component/Missing';
import Nav from './component/Nav';
import NewPost from './component/NewPost';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';


function App() {
  let default_post = [
    {
      id:1,
      title: "My First Post",
      datetime: "July 01, 2023 11:17:36 AM",
      body: "Made a video about Tesla Q1 results"
    },
    {
      id:2,
      title: "My 2nd Post",
      datetime: "July 01, 2023 11:17:36 AM",
      body: "Attended Block Chain Tutorial"
    },
    {
      id:3,
      title: "My 3rd Post",
      datetime: "July 01, 2023 11:17:36 AM",
      body: "Web3 global submit next week"
    },
    {
      id:4,
      title: "My 4th Post",
      datetime: "July 01, 2023 11:17:36 AM",
      body: "ETH will outperform BTC"
    },
  ];
  const [posts, setPosts] = useState(default_post);
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([])
  const [postTitle, setPostTitle] = useState('');
  const [postBody, setPostBody] = useState('');

  useEffect(() => {
    const filteredResults = posts.filter((post) => 
    
    ((post.body).toLowerCase()).includes(search.toLowerCase()) || ((post.title).toLowerCase()).includes(search.toLowerCase()));

    setSearchResults(filteredResults.reverse());
  }, [posts, search])
  
  const handleSubmit = (e) => {
    e.preventDefault();

    const id = posts.length ? posts[posts.length - 1].id+1:1;
    const datetime = String(new Date())

    const newPost = {
      id,
      title: postTitle,
      datetime,
      body: postBody
    };

    const allPosts = [...posts, newPost];
    setPosts(allPosts); 
    setPostTitle('');
    setPostBody('');
    Navigate('/');
  }

  return (
    <div className="App">
      <Header title="Dhuddu Social Media" />
      <Nav search={search} setSearch={setSearch} />
      <Routes>
        <Route path='/' element={<Home posts={searchResults} />} />
        <Route path='post' element={<NewPost
          handleSubmit={handleSubmit}
          postTitle={postTitle}
          setPostTitle={setPostTitle}
          postBody={postBody}
          setPostBody={setPostBody}
        />} />
        {/* <PostPage /> */}
        <Route path='about' element={<About />} />
        <Route path='*' element={<Missing />} /> 
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
