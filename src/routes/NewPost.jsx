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
    const response = await blogFetch.get(`/cars/model?model=${title}`);
    const data = response.data;
    setTableData(data);
  };

  return (
    <div className="new-post">
      <h2>Buscar por Modelo</h2>
      <form onSubmit={(e) => createPost(e)}>
        <div className="form-control">
          <label htmlFor="model">Modelo:</label>
          <input
            type="text"
            name="model"
            placeholder="Informe o modelo"
            id="model"
            value={title}
            onChange={(e) => setTitle(e.target.value.toUpperCase())}
          />
        </div>
        <input type="submit" value="Buscar" className="btn" />
      </form>

      {tableData.length > 0 && (
        <div className="table-container">
          <h3>Posição nº de vendas por mês</h3>
          <table className="table">
            <thead>
              <tr>
                <th>Mês</th>
                <th>Marca</th>
                <th>Modelo</th>
                <th>Posição</th>
                <th>Quantidade de Vendas</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((item, index) => (
                <tr key={index}>
                  <td>{item.mes}</td>
                  <td>{item.car.marca}</td>
                  <td>{item.car.modelo}</td>
                  <td>{item.car.posicao}</td>
                  <td>{item.car.qtdVendas}</td>
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
