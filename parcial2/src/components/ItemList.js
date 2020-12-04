import React from "react";

const ItemList = (props) => {
  console.log(props.pel);
  return (
    <tr onClick={() => props.rowClick(props.pel)}>
      <td>{props.pel.id}</td>
      <td>{props.pel.name}</td>
      <td>{props.pel.channel}</td>
      <td>{props.pel.description}</td>
    </tr>
  );
};
export default ItemList;
