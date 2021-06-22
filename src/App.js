import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App(){ 
  const nayoks =['Sifat','Sanny','Shabok','Arafat','Kadir','Himel','Rifat','Sayed','Maruf','Rahman'];
  const products=[
    {name:'Photoshop', price:'$100'},
    {name:'Illustrator', price:'$60.45'},
    {name:'Xd', price:'$56.60'}
  ];
  
  
  return (
    <div className="App">
      <header className="App-header">
        <p>I am a react person</p>
        <Counter></Counter>
        <Users></Users>
        <ul>
          {
            nayoks.map(nayok=> <li>{nayok}</li>)
          }
          {
            products.map(product=><li>{product.name}</li>)
          }
        </ul>
        {
          products.map(product=><Product product={product}></Product>)
        }
        <Person name='Munna'profession='Singer'></Person>
        <Person name='Sifat' profession= 'Web-Developer'></Person>
      </header>
    </div>
  );
}
function Counter(){
  const [count,setCount]= useState(0);
  const handleIncrease= () => setCount(count + 1);
  return(
    <div>
      <h1>Count : {count}</h1>
      <button onClick={()=> setCount(count - 1)}>Decrease</button>
      <button onClick={()=> setCount(count + 1)}>Increase</button>
      </div>
  );
}
function Product(props){
  const productStyle ={
      border: '1px solid gray',
      borderRadius:'20px',
      backgroundColor: 'lightgray',
      margin:'20px',
      height: '200px',
      width: '200px',
      float:'left'
  }
  const {name,price}=props.product;
  return(
    <div style={productStyle}>
        <h5>{name}</h5>
        <h4>{price}</h4>
        <button>Buy Now</button>
    </div>
  );
}
function Person(props){
  return(
    <div style={{border:'2px solid red' ,margin: '20px', padding: '20px',width:'500px'}}>
      <h3 >My name {props.name}</h3>
      <p>My profession {props.profession}</p>
    </div>
  );
}

function Users (){
  const [users,setUsers] = useState([]);
useEffect(()=>{
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())
  .then(data => setUsers(data))
},[])
  return(
    <div>
      <h3>Dynamic User : {users.length}</h3>
      <ul>
        {
          users.map(user=><li>{user.name}</li>)
        }
      </ul>
    </div>
  )
}
  

export default App;
