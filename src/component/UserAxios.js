import React from 'react'
import './userCard.css'


function UserAxios({ mcenter, dataAxios: { id, email, name, username, phone, website, address: { geo, city, street, zipcode }, company } }) {

    return (
        <div className="cardAxios" >

            <div>
                <h1>Name :{name}</h1> <span>Pseudo : {username} </span><p>Email :{email}</p> <p>phone :{phone}</p><span>website : {website}</span>
            </div>
            <div>
                <h6>Adress : {city} </h6> <span>Street :{street}</span><p>zipcode : {zipcode}  </p>


            </div>
            <div>
                <h6>company : {company.name} </h6>
            </div>
        </div>
    )
}

export default UserAxios
// import React from 'react'
// import Api from './../Api';



// function UserAxios() {
//     return (
//         <div >
//             <Api />
//         </div>
//     )
// }

// export default UserAxios