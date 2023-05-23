import { useState, useEffect } from "react";
import blogFetch from "../axios/config";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    try {
      const response = await blogFetch.get("/cars");

      const data = response.data;

      setPosts(data);

      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="home">
      <h1>Projeto EXA844</h1>
      {posts.length == 0 ? (
        <p>Carregando...</p>
      ) : (
        posts.map((post) => (
          <div className="post" key={post.mes}>
            <h2>{post.mes}</h2>
            <Link to={`/posts/${post.mes}`} className="btn">
              Ranking de Vendas
            </Link>
          </div>
        ))
      )}
    </div>
  );
};

export default Home;
