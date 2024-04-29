
import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { fetchAllUser } from '../services/UserService';


const TableUsers = (props) => {

    const [listUsers, setlistUser] = useState([]);

    useEffect(() => {
        getUsers();
    }, []);

    const getUsers = async () => {
        try {
            let response = await fetchAllUser();
            setlistUser(response.data.results);
        } catch(error) {
            console.error("Error fetching data: ", error);
        }
    }

    return (
        <>
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>ID</th>
                    <th>User</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Is_active</th>
                    </tr>
                </thead>
                <tbody>
                    {listUsers && listUsers.length > 0 && 
                        listUsers.map((item, index) => {
                            return(
                                <tr key={`users-${index}`}>
                                    <td>{item.id}</td>
                                    <td>{item.username}</td>
                                    <td>{item.first_name}</td>
                                    <td>{item.last_name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.is_active.toString()}</td>
                                </tr>
                            )
                        })  
                    }
                </tbody>
            </Table>
        </>
    );
}

export default TableUsers;