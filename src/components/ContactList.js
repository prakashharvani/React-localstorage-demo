import React from 'react'
import ContactCard from './ContactCard';

function ContactList(props) {

    const removeContactHandler = (id) =>{
        props.removeContactHandler(id);
    }

    const renderList = props.contacts.map((contact)=>{
        return (<ContactCard key={contact.id} contact={contact} clickHandler={removeContactHandler}></ContactCard>)
    })

    return (
        <div className="ui celled list">
                    {renderList}

        </div>
    )
}

export default ContactList
