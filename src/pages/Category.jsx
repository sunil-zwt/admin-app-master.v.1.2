import axios from 'axios';
import React,{useState,useEffect} from 'react'
// import axios from "axios";
function Category() {
  const [prDropdown, setPrDropdown] = useState('');
  useEffect(() => {
   axios.get("https://fakestoreapi.com/products/categories").then((res)=>{
    console.log(res.data);
    setPrDropdown(res.data)
   })
    
     
  }, []);
  let dropDownOption = prDropdown&&prDropdown.map((ele, index) => {
    return (
      <option value={ele} key={index}>
      {ele}
      </option>
    );
  });

  // console.log(prDropdown)
  return (
    <div>
      <select>
       
        {dropDownOption}
        
      </select>
      </div>
  )
}

export default Category