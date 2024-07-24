import axios from "axios";
import React, { useEffect, useState } from "react";
import {Container, Input, Table } from "reactstrap";
import Student from "./Student";

export default function RestAPI() {
  const [data, setData] = useState([]);
  const [message, setMessage] = useState(null);
  const [text, setText] = useState("")
  
  const url = "https://66a07bab7053166bcabb8e1a.mockapi.io/students";
  const getStudents = () => {
    axios
      .get(url)
      .then(function (res) {
        setData(res.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  
  const addStudent = (txt) => {
    axios({
      url: url + "/",
      method: "post",
      data: {
        name: txt,
      },
    })
      .then(function (res) {
        setMessage("Add success.");
        getStudents();
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    getStudents();
  }, []);

  return (
    <div>
      <Container>
        <h1>Student List</h1>
        <Input type="text" value={text} onChange={(e)=>setText(e.target.value)} onKeyDown={
            (e) => {
                if (e.key === "Enter"){
                    addStudent(text);
                    setText("")
                }
            }
        }/>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map((item, index) => (
                <tr key={index}>
                  <Student item={item} getStudents={getStudents} url={url} setMessage={setMessage}/>
                </tr>
                
              ))}
                
          </tbody>
        </Table>
        {message && <p>{message}</p>}
        
      </Container>
    </div>
  );
}
