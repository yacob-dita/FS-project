import React,{ useState} from 'react';
import{ TextField, FormLabel, Button, FormControlLabel,Checkbox} from "@mui/material";
import { Box } from '@mui/system';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddBook = () => {
const history = useNavigate();  
const [inputs, setInputs] = useState({
    name:'',
    description:'',
    price:'',
    author:'',
    available:'',
    image:'',
});
const [checked, setChecked] = useState(false);

const handleChange = (e) => {
 setInputs((prevState) => ({
     ...prevState,
     [e.target.value]: e.target.value
 }))
 console.log(e.target.name,"Value",e.target.value)
}
const handleCheck = (e) => {
    e.preventDefault();
    

}
const sendRequest = async () => {
  await axios.post("http://localhost:3002/books", {
     name: String(inputs.name),
     author: String(inputs.author),
     description: String(inputs.description),
     price: Number(inputs.price),
     image: String(inputs.image),
     available: Boolean(inputs.available)
 }).then(res => res.data)
}

const handleSubmit = (e) => {
 e.preventDefault();
 console.log(inputs, checked);
 sendRequest().then(()=>history("/books"));
}
 return (
  <form onSubmit={handleSubmit}>
    <Box
        display="block" 
        flex-direction="column" 
        justifyContent={'center'} 
        maxWidth={700}
        alignContent={"center"}
        alignSelf="center"
        marginLeft = {"auto"}
        marginRight = "auto"
        marginTop = {10}
    >
       <FormLabel>Name</FormLabel>
       <TextField
       value={inputs.name}
       onChange={handleChange}
        margin="normal" 
        fullWidth variant="outlined" 
        name ="name" 
        />
       <FormLabel>Author</FormLabel>
       <TextField 
       value={inputs.author}
       onChange={handleChange}
       margin="normal" 
       fullWidth variant="outlined"
       name ="author" 
        />
       <FormLabel>Description</FormLabel>
       <TextField
       value ={inputs.description}
       onChange={handleChange}
       margin="normal" 
       fullWidth variant="outlined" 
       name ="description" 
      />
      <FormLabel>Price</FormLabel>
      <TextField 
      value={inputs.price}
      onChange={handleChange}
      type="number"
      margin="normal" 
      fullWidth variant="outlined"
      name ="price" 
       />
      <FormLabel>Image</FormLabel>
      <TextField
      value={inputs.image}
      onChange={handleChange}
      margin="normal" 
      fullWidth variant="outlined"
      name ="image" 
       />
       <FormControlLabel control={<Checkbox Checked = {checked}  onChange={(e)=>setChecked(!checked)}/>} label="Available"/>
      {inputs.name}
      {inputs.author}
      {inputs.available}
      {inputs.description}
      {inputs.available}
      {inputs.image}
  <Button  variant="contained" type="submit" onClick={handleCheck}>
      Add Book
      </Button>
  </Box>
  
 </form>
 
   
  )
}

export default AddBook;