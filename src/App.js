import {useState} from "react";

const App = () => {
  const [user,setUser] = useState({name:'A', email:'a@gmail.com'})
  const [count, setCount] = useState(0)

  const onClick = () => {
    setCount(count + 1)
    const newUser = {
      ...user,
      email: `${user.name}${count}@gmail.com`
    }
    setUser(newUser);
  }

  return (
    <div> 
      <div>Count là: {count}</div>
      <div>Tên là: {user.name}</div>
      <div>Email là: {user.email}</div>
      <button onClick ={onClick}>Click me</button>
    </div>
  );
}

export default App;
