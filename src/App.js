import logo from './logo.svg';
import './App.css';
import About from './component/About';
import Footer from './component/Footer';
import Header from './component/Header';
import Home from './component/Home';
import Missing from './component/Missing';
import Nav from './component/Nav';
import NewPost from './component/NewPost';
import PostPage from './component/PostPage';
import { Routes, Route, Link } from 'react-router-dom';
import Post from './component/Post';
import PostLayOut from './component/PostLayOut';
import { useState } from 'react';


function App() {
  let default_post = [
    {
      id:1,
      title: "My First Post",
      datatime: "July 01, 2023 11:17:36 AM",
      body: "Made a video about Tesla Q1 results"
    },
    {
      id:2,
      title: "My 2nd Post",
      datatime: "July 01, 2023 11:17:36 AM",
      body: "Attended Block Chain Tutorial"
    },
    {
      id:3,
      title: "My 3rd Post",
      datatime: "July 01, 2023 11:17:36 AM",
      body: "Web3 global submit next week"
    },
    {
      id:4,
      title: "My 4th Post",
      datatime: "July 01, 2023 11:17:36 AM",
      body: "ETH will outperform BTC"
    },
  ];
  const [post, setPost] = useState(default_post);
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([])


  return (
    <div className="App">
      
      <Header title="Dhuddu Social Media"/>
      <Nav search={search} setSearch={setSearch}/>
      <Home />
      <NewPost />
      <PostPage />
      <About />
      <Missing />
      <Footer />
    </div>
  );
}

export default App;
