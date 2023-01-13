import { useEffect, useState } from "react";
import '../componets/Test.css'
function Test() {
  const [data, getData] = useState([]);
  const URL = "  http://localhost:3000/transactions";

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch(URL)
      .then((res) => res.json())

      .then((response) => {
        console.log(response);
        getData(response);
      });
  };
  return (
    <>
      <h1>SEALED SAFE BANK TRANSACTIONS</h1>
      <tbody className="big">
        <tr className="headers">
         
          <th>ID</th>
          <th>Date</th>
          <th>Description</th>
          <th>Category</th>
          <th>Amount</th>
        </tr>
        {data.map((item, i) => (
          <tr key={i}>
            
            <td className="id">{item.id}</td>
            <td>{item.date}</td>
            <td>{item.description}</td>
            <td>{item.category}</td>
            <td>{item.amount}</td>
          </tr>
        ))}
      </tbody>
    </>
  );
}

export default Test;