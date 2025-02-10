import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom';

function Create() {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [email, setEmail] = useState('');

    const navigate = useNavigate();

    const handleSubmit = (e) => {

        e.preventDefault();
        axios.post('https://669b9e46276e45187d360200.mockapi.io/crud', {
            e_name: name,
            e_age: age,
            e_email: email
        }).then(() => {
            navigate('/')
        })
    }

    return (
        <>
            <div className='row'>
                <div className='col-md-4'>
                    <div className='mb-2 mt-2'>
                        <Link to='/'>
                            <button className='btn btn-primary'>Read Data</button>
                        </Link>
                    </div>
                    <div className='bg-primary text-center p-4'>
                        <h1>Create Data</h1>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className='form-group'>
                            <label htmlFor="">Enter Name: </label>
                            <input type="text" placeholder='Name' onChange={(e) => setName(e.target.value)} className='form-control' />
                        </div>
                        <div className='form-group'>
                            <label htmlFor="">Enter Age: </label>
                            <input type="number" placeholder='age' onChange={(e) => setAge(e.target.value)} className='form-control' />
                        </div>
                        <div className='form-group'>
                            <label htmlFor="">Enter Email: </label>
                            <input type="text" placeholder='Email' onChange={(e) => setEmail(e.target.value)} className='form-control' />
                        </div>
                        <br />
                        <div className='d-grid'>
                            <input type="submit" value="Submit" className='btn btn-primary' />
                        </div>
                    </form>
                    <br />
                    {name}
                    <br />
                    {age}
                    <br />
                    {email}
                </div>
            </div>
        </>
    )
}

export default Create