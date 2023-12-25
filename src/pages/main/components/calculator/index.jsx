import { useEffect, useState, useContext } from "react";

import { MainContext } from "../../../../context/useContext";


function Calculator(props) {
  const [number, setNumber] = useState(0);
  const [api, setApi] = useState([]);

  const { user } = useContext(MainContext)

  useEffect(() => {
    console.log("Component mounted"); //Component mounted

    return console.log("ComponentUnmount")  //Component unmount
  }, [number]) //Componentupdate when [] has value


  const url = 'https://jsonplaceholder.typicode.com/todos/';
  
  useEffect( () => {
    const findMovie = async () => {
      try {
        const response =  await fetch(url);
        const result =  await response.json();

        setApi([result]) //Add data to state named api
      }
  
      catch (error) {
        console.log("The following error occured: ", {error})
      }
    }

    findMovie()
  }, [])
  
  
  return (
    <div className="">
      <p>{props.name}'s Calculator</p>
      <p>Age: {props.age}</p>
      <p>Number { number }</p>
      <input type="text" name="" id=""  />

      { console.log(api[0]) }
      { console.log("user: ", user) }

      <button onClick={ () => setNumber(number + 1) }>Incriment</button>

    </div>
  );
}

export default Calculator;
