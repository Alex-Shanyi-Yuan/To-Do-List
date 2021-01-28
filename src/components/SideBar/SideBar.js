import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './SideBar.css';
import { SideBarData } from './SideBarData';

function SideBar({ page, setPage }) {

    const [sidebar, setSideBar] = useState(false)

    const changeSideBar = () => setSideBar(!sidebar)

    return (
        <>
            <nav className={ sidebar ? 'side-menu active' : 'side-menu'}>
                <ul className="side-menu-items">
                    <li className="sidebar-toggle">
                        <Link to="#" className="menu-bars">
                            <i onClick={changeSideBar} className={sidebar ? "fa fa-times" : "fa fa-bars"}></i>
                        </Link>
                    </li>
                    {SideBarData.map((item, index) => {
                        return (
                            <li onClick={() => setPage(item.link)} key={index} className={item.cName}>
                                <Link id={page == item.link ? "active" : ""} to={item.link}>
                                    <i id="icon" className={item.icon}></i>
                                    {sidebar ? <span id="title">{item.title}</span> : ""}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </>
    )
}

export default SideBar
