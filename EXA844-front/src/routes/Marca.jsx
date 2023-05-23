import "./NewPost.css";
import blogFetch from "../axios/config";
import { useState } from "react";

const NewPost = () => {
  const [brand, setBrand] = useState("");
  const [tableData, setTableData] = useState([]);

  const searchByBrand = async (e) => {
    e.preventDefault();
    try {
      const response = await blogFetch.get(`/cars/brand?brand=${brand}`);
      const data = response.data;
      setTableData(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="new-post">
      <h2>Buscar por Marca</h2>
      <form onSubmit={searchByBrand}>
        <div className="form-control">
          <label htmlFor="brand">Marca:</label>
          <input
            type="text"
            name="brand"
            placeholder="Informe a marca"
            id="brand"
            value={brand}
            onChange={(e) => setBrand(e.target.value.toUpperCase())}
          />
        </div>
        <input type="submit" value="Buscar" className="btn" />
      </form>

      {tableData.length > 0 && (
        <div className="table-container">
          <h3>Tabela de Resultados</h3>
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
                  <td>{item.cars[0].marca}</td>
                  <td>{item.cars[0].modelo}</td>
                  <td>{item.cars[0].posicao}</td>
                  <td>{item.cars[0].qtdVendas}</td>
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
