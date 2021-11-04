import React from "react";
import '../Styles/Header.css'

const Header = ({ handleCompleted, handleAll, handlePending, handleCompletedValue}) => { 

    return (
        <header>
            <div>
                <p className='p-logo--container'>Todo List</p>
                <ul>
                    <button onClick={handleAll}>All</button>
                    <button onClick={handleCompleted}>Completed</button>
                    <button onClick={handlePending}>Pendings</button>
                </ul>
                <p className='p-todo--counter'><b>{handleCompletedValue}</b> of 20 tasks completed</p>

                </div>
        </header>
    );


};


export default Header;