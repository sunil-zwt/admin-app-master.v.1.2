import React, { useState } from 'react'
import { NavLink, Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom"
import logo from "../images/PngItem_195601.png"
import * as FaIcons from "react-icons/fa";

import * as AiIcons from "react-icons/ai";
import * as BsIcons from "react-icons/bs";

function Sidebar({ children }) {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const navigate = useNavigate()
    const menuItem = [
        {
            path: "/",
            name: "Dashboard",
            icon: <AiIcons.AiFillHome />,
        },
        {
            path: "/product",
            name: "Product",
            icon: <FaIcons.FaCartPlus />,
            // children: [
            //     {
            //         path: "/add"
            //     }
            // ]
        },
        {
            path: "/category",
            name: "Category",
            icon: <BsIcons.BsCaretDownSquareFill />,
            subNav: [
                {
                    path: "/abc",
                    name: "abc"
                }
            ]

        }
    ]


    const handleLogout = (e) => {

        localStorage.removeItem('userToken')
        // navigate("/login")
    }

    return (
        <React.Fragment>

            <header>
                <div className='header-container'>
                    <div className='header-container-logo'>
                        <img src={logo} alt="" className='header-logo-image' />
                        <p><i>Shopping App</i></p>
                    </div>
                    <div className='header-container-admin-section'>
                        <div >
                            <FaIcons.FaUserCircle className='dropdown-icon' onClick={toggle} />

                            {
                                isOpen ? (<ul className="menu">
                                    <li className="menu-item">

                                        <button className='menu-item-btn'><FaIcons.FaUserCog />Setting</button>
                                    </li>
                                    <li className="menu-item">

                                        <button className='menu-item-btn'><FaIcons.FaPowerOff />Log Out</button>
                                    </li>
                                </ul>) : null
                            }


                        </div>
                        {/* <div>
                            <Link to="/login" onClick={handleLogout}>Log Out</Link>
                        </div> */}
                    </div>
                </div>
            </header>
            <div className='container'>
                {/* <div className='top_section'>
            <h1 className='logo'>Phoenix</h1>
            </div> */}
                <div className="sidebar">
                    {/* <div className="top_section"> */}

                    {/* <div className="bars">
                        <FaIcons.FaBars onClick={toggle} />
                    </div> */}
                    {/* </div> */}
                    {
                        menuItem.map((item, index) => {

                            return (
                                <>
                                    <NavLink to={item.path} key={index} className="link" activeclassname="active">
                                        <div className="icon" >{item.icon}</div>
                                        <div className="link_text">{item.name}</div>

                                    </NavLink>

                                </>
                            )

                        })
                    }


                </div>
                <main>
                    {children}
                </main>

            </div>
        </React.Fragment>

    )
}

export default Sidebar