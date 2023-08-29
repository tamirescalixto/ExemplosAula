import {useState} from 'react';

const ManageData = () => {
    let someData = 10;

    console.log(someData);

    const [number, setNumber] = useState(15);

    const [list] = useState(["Matheus", "Pedro", "Tamires"]);

    const [users, setUsers] = useState([
        {id: 1, name: "Matheus", age: 31},
        {id: 2, name: "Pietro", age: 21},
        {id: 3, name: "Tamires", age: 23},
    ]);

    const deleteRandom = () => {
        const randomNumber = Math.floor(Math.random * 4);

        setUsers((prevUsers) => {
            return prevUsers.filter((user) => randomNumber !== user.id);
        });
    };

  return (
    <div>
        <div>
            <p>Valor: {someData}</p>
            <button onClick={() => (someData = 15)}>Mudar variável</button>
        </div>

        <div>
            <p>Valor: {number}</p>
            <button onClick={() => setNumber(12)}>Mudar valor</button>
        </div>

        <div>
            <ul>
                {list.map((item, i) =>(
                    <li key={i}>{item}</li>
                ))}
            </ul>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        {user.name} - {user.age}
                    </li>
                ))}
            </ul>
            <button onClick={deleteRandom}>Delete random user</button>
        </div>
    </div>
  )
}

export default ManageData