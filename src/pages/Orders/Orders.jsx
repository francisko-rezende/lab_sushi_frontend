import React, { useEffect, useState } from "react";
export const Orders = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3333/orders")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <>
      <h1>Meus pedidos</h1>
      <ul>
        {data &&
          data.map((order) => {
            return (
              <li key={order.clientName}>
                Nome do cliente: {order.clientName}
              </li>
            );
          })}
      </ul>
    </>
  );
};
