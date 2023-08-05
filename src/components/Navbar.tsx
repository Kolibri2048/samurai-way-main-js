import React from 'react';
import s from './Navbar.module.css'


let c2 = 'active'
const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <a>Profila</a>
            </div>
            <div className={`${s.item} ${c2}`}>
                <a>Message</a>
            </div>
            <div className={s.item}>
                <a>News</a>
            </div>
            <div className={s.item}>
                <a>Music</a>
            </div>
            <div className={s.item}>
                <a>Settings</a>
            </div>
        </nav>
)
}

export default Navbar