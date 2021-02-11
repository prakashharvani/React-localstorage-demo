import React, { useEffect, useState } from 'react';
import AddContact from './AddContact';
import './App.css';
import ContactList from './ContactList';
import Header from './Header';
import  {v4 } from 'uuid';

function App() {
  const LOCAL_STORAGE_KEY = 'contacts';
  const [contacts, setContacts] = useState([])

  const addContactHandler = (contact) => {
    console.log('------------conatc', contact);
    setContacts([...contacts, {id:v4() , ...contact}]);
  }


  const removeContactHandler = (id) => {
   

    const newContactList = contacts.filter((contact)=>{
      return contact.id != id
    })
    setContacts(newContactList);
  }

  useEffect(() => {
    const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retriveContacts) {
      setContacts(retriveContacts);
    }
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className="ui container">
      <Header>
      </Header>
      <AddContact addContactHandler={addContactHandler} ></AddContact>
      <ContactList contacts={contacts} removeContactHandler={removeContactHandler}></ContactList>
    </div>
  );
}

export default App;
