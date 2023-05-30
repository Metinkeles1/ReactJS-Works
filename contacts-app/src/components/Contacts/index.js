import { useState, useEffect } from 'react';
import './style.css'
import List from './List'
import Form from './Form'

function Index() {
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        console.log(contacts);
    }, [contacts])

    return (
        <div className='container'>
            <h1>Contacts</h1>
            <List contacts={contacts} />
            <Form addContact={setContacts} contacts={contacts} />
        </div>
    )
}

export default Index