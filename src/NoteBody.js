import React from "react";
import { Link } from "react-router-dom";

const NoteBody = props => {
  const rows =
    props.notesData &&
    props.notesData.map((row, index) => {
      return (
        <tr key={index}>
          <td>{row.title}</td>
          <td>{row.detail}</td>
          <td>
            <Link to={`/edit/${index}`}>
              {" "}
              <button>Edit</button>
            </Link>
          </td>
          <td>
            <button onClick={() => props.handleRemove(index)}>Delete</button>
          </td>
        </tr>
      );
    });
  return <tbody>{rows}</tbody>;
};

export default NoteBody;
