import React from 'react';
import axios from 'axios';
import{ Button } from '@mui/material';
import { Link,useNavigate } from "react-router-dom";
import "./Book.css";


const Book =(props) => {
    const history = useNavigate();
    const { _id, name, author, description, price, image} = props.book;
    const deleteHandler = async()=>{
      await axios
       .delete(`http://localhost:5000/books${_id}`)
       .then(res=>res.data)
       .then(()=>history("/"))
       .then(()=>history("/books"));
    };
 return<div className="card">
    <img src={image} alt={name}/>
    <article>By {author}</article>
    <h3>{name}</h3>
    <p>{description}</p>
    <h3>Rs{price}</h3>
    <Button LinkComponent={Link} to={`/book/${_id}`} sx={{mt: "auto"}}>
       Update
    </Button>
   
    <Button onclick={deleteHandler} sx={{mt:"auto"}}>Delete</Button>
 </div>;
};
export default Book;