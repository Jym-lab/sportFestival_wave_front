import React from 'react'
import Person from '../json/people.json';

function Person0({id}) {
  return (
    <div className="pbox">
        {Person.map(person => (
            (person.id === id) && (
            <div key={person.id}>
                    <img className="Pimg mx-auto" src={person.image} alt="personimg" />

                    <div className="Pinfo">
                        <img src={person.logo} alt="personimg"/>
                        <div className='name'>{person.name}</div>
                    </div>

                <div className="Pdepart">{person.department}</div>
                <div className="Pposi">{person.position}</div>
                <div className='Prole'>{person.role}</div>
            </div>
        )
      ))}
    </div>
  )
}

export default Person0