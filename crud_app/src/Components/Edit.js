import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function Edit() {
    const [id, setId] = useState(0);
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [email, setEmail] = useState('');

    useEffect(() => {
        setId(localStorage.getItem('id'));
        setName(localStorage.getItem('name'));
        setAge(localStorage.getItem('age'));
        setEmail(localStorage.getItem('email'));

    }, [])

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
                        <h1>Update Data</h1>
                    </div>
                    <form>
                        <div className='form-group'>
                            <label htmlFor="">Enter Name: </label>
                            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='Name' className='form-control' />
                        </div>
                        <div className='form-group'>
                            <label htmlFor="">Enter Age: </label>
                            <input type="number" value={age} onChange={(e) => setAge(e.target.value)} placeholder='age' className='form-control' />
                        </div>
                        <div className='form-group'>
                            <label htmlFor="">Enter Email: </label>
                            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' className='form-control' />
                        </div>
                        <br />
                        <div className='d-grid'>
                            <input type="submit" value="Update" className='btn btn-primary' />
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Edit