import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { FormattedMessage } from "react-intl";
import Graph from "./Graph";
import ItemList from "./ItemList";

const ListTable = () => {
  const [tabla, setTabla] = useState([]);
  const [msg, setMsg] = useState("");

  useEffect(() => {
    if (navigator.language === "en") {
      if (!navigator.onLine) {
        if (localStorage.getItem("tabla") === null) {
          setTabla([]);
          setMsg("No connection. Could not obtain the information");
        } else {
          setTabla(JSON.parse(localStorage.getItem("tabla")));
          setMsg("");
        }
      } else {
        const url =
          "https://gist.githubusercontent.com/josejbocanegra/5dc69cb7feb7945ef58b9c3d84be2635/raw/64146e99e4416da3a8be2e2da4156cb87b3f6fd0/series-en.json";
        fetch(url)
          .then((res) => res.json())
          .then((res) => {
            setTabla(res);
            localStorage.setItem("tabla", JSON.stringify(res));
            setMsg("");
          });
      }
    } else {
      if (!navigator.onLine) {
        if (localStorage.getItem("tabla") === null) {
          setTabla([]);
          setMsg("No hay conexion, no se pudo obtener la informacion");
        } else {
          setTabla(JSON.parse(localStorage.getItem("tabla")));
          setMsg("");
        }
      } else {
        const url =
          "https://gist.githubusercontent.com/josejbocanegra/c55d86de9e0dae79e3308d95e78f997f/raw/d9eb0701f6b495dac63bbf59adc4614a9eb5fbc8/series-es.json";
        fetch(url)
          .then((res) => res.json())
          .then((res) => {
            setTabla(res);
            localStorage.setItem("tabla", JSON.stringify(res));
            setMsg("");
          });
      }
    }
  }, []);

  return (
    <div>
      <div className="row">
        <div className="col-lg-12">
          <Table striped hover>
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">
                  <FormattedMessage id="Name" />
                </th>
                <th scope="col">
                  <FormattedMessage id="Channel" />
                </th>
                <th scope="col">
                  <FormattedMessage id="Description" />
                </th>
              </tr>
            </thead>
            <tbody>
              {tabla.map((e, i) => (
                <ItemList key={i} pel={e} />
              ))}
            </tbody>
          </Table>
        </div>
        <h2>{msg}</h2>
      </div>
      <h2>
        <FormattedMessage id="Graph" />
      </h2>
      <Graph key={1} data={tabla} />
    </div>
  );
};

export default ListTable;
