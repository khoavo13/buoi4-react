import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function API1() {
    const [data, setData] = useState([])
    const fetchAPI = () => {
        const url = "https://66a07bab7053166bcabb8e1a.mockapi.io/students"
        axios.get(url)
        .then(function(res){
            setData(res.data)
            // console.log(res.data)
        })
        .catch(function(error){
            console.log(error)
        })
    }
    useEffect(()=>{
        fetchAPI()
    }, [])
  return (
    <div>
        {
            data.map((item, index) => (
                <h1 key={index}>{item.id} - {item.name}</h1>
            ))
        }
    </div>
  )
}
