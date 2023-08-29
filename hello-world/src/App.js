// Styles / css
import './App.css';
import UserDetails from './components/UserDetails';

// Components
// import Firstcomponent from './components/FirstComponent';
// import TemplateExpressions from './components/TemplateExpressions';
// import Events from './components/Events';
// import ManageData from './components/ManageData';
// import ShowUserName from './components/ShowUserName';
// import CarDetalis from './components/CarDetalis';
// import Fragment from './components/Fragment';
// import Container from './components/Container'
// import Message from './components/Message';
// import ChangeMessageState from './components/ChangeMessageState';
// import { useState } from 'react';

function App() {

  // const cars = [
  //   {id: 1, brand: "Ferrari", color: "Amarelo", newCar: true, km: 0},
  //   {id: 2, brand: "KIA", color: "Preto", newCar: false, km: 3250},
  //   {id: 3, brand: "Jeep", color: "Cinza", newCar: true, km: 0}
  // ];

  // const [message, setMessage] = useState("");
  // const handleMessage = (msg) => {
  //   setMessage(msg);
  // };

  const users = [
    {id: 1, name: "Tamires", job: "Desenvolvedora", age: 23},
    {id: 2, name: "Matheus", job:"Programador", age: 31},
    {id: 3, name: "Paulo", job: "Estudante", age: 17},
  ]

  return (
    <div className="App">
      {/* <Firstcomponent/> */}
      {/* <TemplateExpressions/> */}
      {/* <Events/> */}
      {/* <ManageData/> */}
      {/* <ShowUserName name="Tamires"/> */}
      {/* <CarDetalis /> */}
      {/* {cars.map((car) => (
        <CarDetalis brand={car.brand} color={car.color} km={car.km} newCar={car.newCar}/>
      ))} */}
      {/* <Fragment /> */}
      {/* <Container>
        <p>E este é o conteúdo</p>
      </Container> */}
      {/* <Message msg={message}/> */}
      {/* <ChangeMessageState handleMessage={handleMessage}/> */}
      {users.map((user) => (
        <UserDetails key={user.id} name={user.name} job={user.job} age={user.age}/>
      ))}
    </div>
  );
}

export default App;

