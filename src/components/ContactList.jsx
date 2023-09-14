import React from 'react'

function ContactList ({ contacts }) {
  return (
    <div>
      <h2>Contact List</h2>
      <ul>
        {contacts.map((contact, index) => (
          <li key={index}>
            {contact.firstName} {contact.lastName} - {contact.phoneNumber}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ContactList
