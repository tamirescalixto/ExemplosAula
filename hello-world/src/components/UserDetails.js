import React from 'react'

const UserDetails = ({name, age, job}) => {
  return (
    <div>
        <h2>{name}</h2>
        <p>Idade: {age}</p>
        <p>Profissão: {job}</p>
        {age >= 18 ? (
            <p>Maior de 18 anos!</p>
        ) : (
            <p>Menor de 18 anos!</p>
        )}
    </div>
  )
}

export default UserDetails