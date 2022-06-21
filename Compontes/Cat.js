import './App.css';
const Cat=(cats)=>{
    return(
    <div>
        <img className='image' src={cats.image} alt='cat'/>
        <h4> name :{cats.name}</h4>
        <h4>age: {cats.age} year</h4>
    </div>
    );
};
export default Cat;