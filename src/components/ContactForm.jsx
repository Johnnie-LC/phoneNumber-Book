import React, { useState } from 'react'

function ContactForm ({ onAddContact }) {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const newContact = {
      firstName,
      lastName,
      phoneNumber,
      id: crypto.randomUUID()
    }
    onAddContact(newContact)
    setFirstName('')
    setLastName('')
    setPhoneNumber('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="First Name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Last Name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        required
      />
      <input
        type="tel"
        placeholder="Phone Number"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
        required
      />
      <button type="submit">Add Contact</button>
    </form>
  )
}

export default ContactForm
