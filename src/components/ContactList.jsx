import React from 'react'

function ContactList ({ contacts }) {
  return (
    <div className='contact-list-container'>
      <h2>Contact List</h2>
      <ul>
        {contacts.map((contact, index) => (
          <li key={index}>
            <span>{contact.firstName} {contact.lastName}</span> <span>{contact.phoneNumber}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ContactList
