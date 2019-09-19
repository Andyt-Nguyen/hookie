import React, { useState } from 'react';

interface FullName {
  firstName?:String,
  lastName?:String
}

const InputCounter:React.FC = () => {
  const [fullName, setFullName] = useState({firstName: '', lastName: ''});
  const handleFirstNameChange = (e:any) => setFullName({
    ...fullName, [e.target.name]:e.target.value
  });
  return (
    <>
      <p>First name: {fullName.firstName}</p>
      <p>Last name: {fullName.lastName}</p>
      <label>First Name:</label>
      <input onChange={handleFirstNameChange} name="firstName" value={fullName.firstName} />
      <label>Last Name:</label>
      <input onChange={handleFirstNameChange} name="lastName"  value={fullName.lastName} />
    </>
  )
}

export default InputCounter;