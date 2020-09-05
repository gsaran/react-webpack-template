import React from "react";
import { Link } from "@reach/router";

const itemList = [
  {
    id: 1,
    name: "Item 1",
  },
  {
    id: 2,
    name: "Item 2",
  },
  {
    id: 3,
    name: "Item 3",
  },
  {
    id: 4,
    name: "Item 4",
  },
  {
    id: 5,
    name: "Item 5",
  },
];

const List = () => (
  <table border="1px solid black">
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
      </tr>
    </thead>
    <tbody>
      {itemList.map((item) => (
        <tr key={item.id}>
          <td>{item.id}</td>
          <td>
            <Link to={`/details/${item.id}`}>{item.name}</Link>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default List;
