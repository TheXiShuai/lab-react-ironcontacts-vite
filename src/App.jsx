import { useState } from "react";
import "./App.css";
import contacts from "./contacts.json";

function App() {
  const[initialContacts, setContacts] = useState (contacts.slice(0, 5));

function Random(){

  const extra = contacts[Math.floor(Math.random(6) * contacts.length)];
  const newArray = [...initialContacts, extra];

  if(initialContacts.includes(extra)){
    return 
  }
  setContacts(
     newArray
  )
}
function popular(){

  const newArray = [...initialContacts].sort((a, b)=>{
return b.popularity - a.popularity
  })
setContacts(newArray);
}

function sortByName() {
const newArray = [...initialContacts].sort(function (a, b) {
  if (a.name < b.name) {
    return -1;
  }
  if (a.name > b.name) {
    return 1;
  }
  return 0;
});;

setContacts(newArray);
}
function handleClick(contactId){
  const filteredContacts =initialContacts.filter((contact) => {
    return contact.id !== contactId
})
setContacts(filteredContacts);
 
}



  return (
    <div className="App">
      <h1>IronContacts</h1>
      <button onClick={()=> Random()}>Add Random Contact</button>
      <button onClick={()=> popular()}>Sort By popularity</button>
      <button onClick={() => sortByName()}>Sort by Name</button>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won an Oscar</th>
            <th>Won an Emmy</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {initialContacts.map((contact, index) => (
            <tr key={index}>
              <td>
                <img src={contact.pictureUrl}/>
              </td>
              <td>{contact.name}</td>
              <td>{contact.popularity}</td>
              <td>{contact.wonOscar? "🏆": null}</td>
              <td>{contact.wonEmmy?"🏆": null}</td>
              <td><button onClick={() => handleClick(contact.id)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;

