import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function PhoneBookForm(props) {
  const { sendData, changeHandler, name, lastName, phoneNumber } = props;
  return (
    <form>
      <div>
        <label>Name</label>
        <input type="text" name="name" value={name} onChange={changeHandler} />
      </div>
      <br />
      <div>
        <label>Last Name</label>
        <input type="text" name="lastName" value={lastName} onChange={changeHandler} />
      </div>
      <br />
      <div>
        <label>Phone Number</label>
        <input type="text" name="phoneNumber" value={phoneNumber} onChange={changeHandler} />
      </div>
      <br />
      <div>
        <button type="button" onClick={sendData}>Send</button>
      </div>
    </form>  
  );
}

function InformationTable(props) {
  const { users } = props;
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Last Name</th>
          <th>Phone Number</th>
        </tr>
      </thead>
      <tbody>
        {users.map(function(user, i){
          return (
            <tr key={i}>
              <td>{user.name}</td>
              <td>{user.lastName}</td>
              <td>{user.phoneNumber}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

function Application(props) {
  const [users, serUsers] = useState([]);
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  
  const changeHandler = (e) => {
    switch (e.target.name){
      case 'name':
        setName(e.target.value);
        break;
      case 'lastName':
        setLastName(e.target.value);
        break;
      case 'phoneNumber':
      setPhoneNumber(e.target.value);
        break;
    }
  }

  const sendData = () => {
    const userCopy = users.slice(0);
    userCopy.push({
      name,
      lastName,
      phoneNumber
    });

    userCopy.sort(function(a, b){
      if(a.lastName < b.lastName) { return -1; }
      if(a.lastName > b.lastName) { return 1; }
      return 0;
    });

    serUsers(userCopy);
  }

  return (
    <section>
      <PhoneBookForm
        changeHandler={changeHandler}
        sendData={sendData}
        name={name}
        lastName={lastName}
        phoneNumber={phoneNumber}
      />
      <br />
      <InformationTable
        users={users}
      />
    </section>
  );
}

export default Application;