import './App.css';
import Cat from './Cat';
import cat2 from './cat2.jpg';
import cat3 from './cat3.jpg';
import cat4 from './cat4.jpg';



function App() {


  return (
    <div className="App">
     <h1>Cats Store</h1>

<div className='wrapper'>
<Cat 
     image={cat2}
     name={"lolo"}
     age={3}/>

<Cat 
     image={cat3}
     name={"meme"}
     age={1}/>

<Cat 
     image={cat4}
     name={"zozo"}
     age={3}/>

 </div>




    </div>
  );
};

export default App;
