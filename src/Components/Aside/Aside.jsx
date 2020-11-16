import styles from './Aside.module.scss'
import React, { useState } from "react";
import Nav from "../Nav/Nav";
import FriendsAside from "../FriendsAside/FriendsAside";

const Aside = (props) => {

    const [state, setState] = useState({
        asideFriends: [
            {id: 1, nickname: 'Daniel'},
            {id: 2, nickname: 'Eleanora'},
            {id: 3, nickname: 'Angela'}
        ],
    })

    return (
        <aside className={styles.aside}>
            <Nav/>
            <FriendsAside friendsList={state.asideFriends}/>
        </aside>
    )
}

export default Aside