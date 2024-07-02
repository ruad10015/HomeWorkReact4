import React, { useState } from 'react'
import './StudentCV.css'
export default function Student() {

  const [student, setStudent] = useState({
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    name: 'Nigger',
    surname: 'Niggerian',
    birthDate: new Date("01-01-2001"),
    score: 0
  });

  function handleChangeImage(e) {
    setStudent({
      ...student,
      image: e.target.value
    });
  }

  function handleChangeName(e) {
    setStudent({
      ...student,
      name: e.target.value
    });
  }


  function handleChangeSurname(e) {
    setStudent({
      ...student,
      surname: e.target.value
    });
  }

  function handleChangeBirthDate(e) {
    setStudent({
      ...student,
      birthDate: new Date(e.target.value)
    });
  }

  function handleChangeScore(e) {
    setStudent({
      ...student,
      score: e.target.value
    });
  }



  return (
    <section className='baseSection'>
      <section className='writingSide'>

        <div>
          Enter Image Link : <input value={student.image}
            onChange={handleChangeImage}></input>
          <img src={student.image} alt='studentImage'></img>
        </div>

        <label>
          Enter Name : <input value={student.name}
            onChange={handleChangeName}></input>
        </label>

        <label>
          Enter Surname : <input value={student.surname}
            onChange={handleChangeSurname}></input>
        </label>

        <label>
          Enter Birth date : <input value={student.birthDate.toLocaleDateString()}
            onChange={handleChangeBirthDate}></input>
        </label>

        <label>
          Enter Score : <input value={student.score}
            onChange={handleChangeScore}></input>
        </label>
      </section>

      <section className='showingSide'>
        <div>
          <img src={student.image} alt='studentImage'></img>
        </div>
        <div>
          <label>{student.name}</label>
        </div>
        <div>
          <label>{student.surname}</label>
        </div>
        <div>
          <label>{student.birthDate.toLocaleDateString()}</label>
        </div>
        <div>
          <label>{student.score}</label>
        </div>

      </section>
    </section>
  )
}
