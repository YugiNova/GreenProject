import {useState} from "react";

const App = () => {
  const [user,setUser] = useState({name:'A', email:'a@gmail.com'})
  const [arr, setArr] = useState([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15])
  const [count, setCount] = useState(0)
  const [userArr,setUserArr] = useState([{name:'A', email:'a@gmail.com'},{name:'B', email:'b@gmail.com'},{name:'C', email:'c@gmail.com'}])

  const onClick = () => {
    setCount(count + 1)
    const newUser = {
      ...user,
      email: `${user.name}${count}@gmail.com`
    }
    setUser(newUser);
  }

  const onClick2 = () =>{
    const newArr = arr.map(item => {
      return item*2
    })
    setArr(newArr)
  }

  const onClick3 = () =>{
    const newArr = arr.filter(item => {
      return undefined
    })
    setArr(newArr)
  }
  const onClick4 = () => {
    const newArr = userArr.map(user => {
      if(user.name === 'A'){
        return {name:'D', email: 'd@gmail.com'}
      }
    })
    setUserArr(newArr)
  }

   const onClick5 = () =>{
    // const newUsers = userArr.push({name:'D', email: 'd@gmail.com'})
    // setUserArr(newUsers)
    setUserArr([
      
      {name:'D', email:'d@gmail.com'},
      ...userArr
    ])
   }

  return (
    <div> 
      {
        arr.map((item)=> {
          return(
            <div>{item}</div>
          )
        })
      }
      {
        userArr.map(user => {
          return(
            <div>
              <div>Tên là: {user.name}</div>
              <div>Email là: {user.email}</div>
            </div>
          )
        })
      }
      <div>Count là: {count}</div>
      <div>Tên là: {user.name}</div>
      <div>Email là: {user.email}</div>
      <button onClick ={onClick5}>Click me</button>
    </div>
  );
}

export default App;
