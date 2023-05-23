import { useState, useEffect } from "react";
import blogFetch from "../axios/config";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    try {
      const response = await blogFetch.get("/month?month=Abril");

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
      <h1>Carros Abril</h1>
      {posts.length == 0 ? (
        <p>Carregando...</p>
      ) : (
        posts.map((post) => (
          <div className="post" key={post.car.posicao}>
            <h2>{post.car.modelo}</h2>
            <p>{post.car.marca}</p>
            <Link to={`/posts/${post.car.posicao}`} className="btn">
              Ler mais
            </Link>
          </div>
        ))
      )}
    </div>
  );
};

export default Home;
