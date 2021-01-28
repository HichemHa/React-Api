import React from 'react'
import { Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import './userCard.css'

// function UserCard({ data, adress, comapany }) {
function UserCard({ data: { id, email, name, username, phone, website, address: { geo, city, street }, company } }) {

    return (
        <div className='carduser'>

            <Table striped bordered hover className='tabuser'>
                <thead >
                    <tr>
                        <th>id</th>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Web Site</th>
                        <th>Adress</th>
                        <th>Company</th>
                    </tr>
                </thead>

                {/* <span> {geo.lat}</span> */}
                <tbody>
                    <tr>
                        <td>{id}</td>
                        <td>{name}</td>
                        <td>{username}</td>
                        <td > <a style={{ color: 'white' }} href={`mailto:${email}`}>email</a></td>
                        <td>{phone}</td>
                        <td>{website}</td>
                        <td>{street}{" "}{city} {' '}lat :{geo.lat} {' '} lng: {geo.lng} </td>
                        <td>{company.name}</td>
                    </tr>
                </tbody>

            </Table>
        </div>
    )
}

export default UserCard;
