import "./NewPost.css";
import blogFetch from "../axios/config";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const NewPost = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [tableData, setTableData] = useState([]);

  const createPost = async (e) => {
    e.preventDefault();
    const post = { title };
    console.log(title);
    const response = await blogFetch.get(`/cars/occurrence?month=${title}`);
    const data = response.data;
    setTableData(data);
  };

  return (
    <div className="new-post">
      <h2>Modelos Mais Populares</h2>
      <form onSubmit={(e) => createPost(e)}>
        <div className="form-control">
          <label htmlFor="model">Mês:</label>
          <input
            type="text"
            name="model"
            placeholder="Informe o mês"
            id="model"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <input type="submit" value="Buscar" className="btn" />
      </form>

      {tableData.length > 0 && (
        <div className="table-container">
          <h3>Modelos Mais Comentados</h3>
          <table className="table">
            <thead>
              <tr>
                <th>Marca</th>
                <th>Modelo</th>
                <th>Posição</th>
                <th>Quantidade de Ocorrências</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((item, index) => (
                <tr key={index}>
                  <td>{item.car.marca}</td>
                  <td>{item.car.modelo}</td>
                  <td>{item.car.posicao}</td>
                  <td>{item.car.qtdOcorrencias}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default NewPost;
