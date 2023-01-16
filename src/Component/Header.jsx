import React from 'react'
import "../css/header.css"
import { Link, Outlet, useNavigate } from 'react-router-dom'
// import Addproduct from '../pages/Addproduct'
function Header() {
  const navigate = useNavigate()
  return (
    <div>
        <header style={{
            display:"flex",
            justifyContent:"flex-end",
            gap:"5rem",
           padding:"10px"

        }}>
            <div>
                <input type={'text'} placeholder={'Search item'}/>
            </div>
            <button className='add-btn' onClick={()=>
               navigate("/add")
             }>Add Product</button>
            {/* <Link to={'product/add'}>add</Link> */}
            {/* <Outlet/> */}
        </header>
    </div>
  )
}

export default Header