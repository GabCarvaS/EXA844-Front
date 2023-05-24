import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import blogFetch from "../axios/config";

const Ranking = () => {
  const { mes } = useParams();
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await blogFetch.get(`/cars/month?month=${mes}`);
        const data = response.data;
        setTableData(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [mes]);

  return (
    <div className="ranking">
      <h2>Ranking de Vendas - {mes}</h2>

      {tableData.length > 0 ? (
        <div className="table-container">
          <h3>Mais Vendidos</h3>
          <h6>by Fenabrave</h6>
          <table className="table">
            <thead>
              <tr>
                <th>Marca</th>
                <th>Modelo</th>
                <th>Posição</th>
                <th>Quantidade de Vendas</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((item, index) => (
                <tr key={index}>
                  <td>{item.car.marca}</td>
                  <td>{item.car.modelo}</td>
                  <td>{item.car.posicao}</td>
                  <td>{item.car.qtdVendas}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p>Carregando...</p>
      )}
    </div>
  );
};

export default Ranking;
