import axios from "axios";
import React, { useState } from "react";
import { Button, Input } from "reactstrap";

export default function Student(props) {
  const { item, getStudents, url, setMessage} = props;
  const [isEdit, setIsEdit] = useState(false);
  const [text, setText] = useState(item.name);
  const deleteStudent = (id) => {
    axios({
      url: url + "/" + id,
      method: "delete",
    })
      .then(function (res) {
        setMessage("Delete success.");
        getStudents();
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const updateStudent = (id, txt) => {
    axios
      .put(url + "/" + id, {
        name: txt,
      })
      .then(function (res) {
        setMessage("Update success.");
        getStudents();
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <>
      <td>{item.id}</td>
      {isEdit ? (
        <td>
          <Input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                updateStudent(item.id, text);
                setIsEdit(false);
              }
            }}
          />
        </td>
      ) : (
        <td onDoubleClick={() => setIsEdit(true)}>{item.name}</td>
      )}
      <td>
        <Button
          className="btn btn-success"
          onClick={() => updateStudent(item.id, "Le Tho")}
        >
          Update
        </Button>
        <Button
          className="btn btn-danger"
          onClick={() => deleteStudent(item.id)}
        >
          Delete
        </Button>
      </td>
    </>
  );
}
