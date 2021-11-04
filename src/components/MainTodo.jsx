import React from "react";
import '../Styles/MainTodo.css'

const MainTodo = ({title, status, id, handleStatus}) => {

    return(
        
        <main>
            <p>{ title}</p>
            <button className={`${status ? 'completed' : 'reset' }`} onClick={()=> handleStatus(id)}>{status ? 'Completed' : 'Pending'}</button>

        </main>
    );

};

export default MainTodo;