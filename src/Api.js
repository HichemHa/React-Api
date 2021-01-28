import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import UserAxios from './component/UserAxios';

function Api() {
    const [newListofUser, setNewListofUser] = useState([]);


    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
            .then(res => {
                let persons = res.data;
                setNewListofUser(persons);


            });
    }, [newListofUser]
    )

    return (
        <div className='apiCard'>

            {newListofUser.map((el) => (<UserAxios dataAxios={el} />))}

        </div>
    )
}

export default Api;