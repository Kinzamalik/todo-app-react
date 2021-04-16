import React, { useState ,useEffect} from "react";
import {Button ,FormControl,Input,InputLabel} from '@material-ui/core'
import Todo from './Todo';
import  "./Todo.css";
import db from './firebase';
import firebase from './firebase'






function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  console.log(input);

  // when the app loads,we need to listen to this code
  useEffect(()=>{
    // this code fire when app.js loads
    db.collection('todos').orderBy('timestamp','desc').onSnapshot(snapshot =>{
      setTodos(snapshot.docs.map(doc => doc.data().todo))
    })

  },[]);


  const addTodo = (event) => {
    event.preventDefault(); //will stop Refresh
    // console.log("i ma working haahah!" , '💓' ,'🚀');

    db.collection('todos').add({
      todo:input,
      timestamp:firebase.firestore.FieldValue.serverTimestamp()
    })
    // setTodos([...todos, input]);
    setInput("");//clear up the after hitting submit
  };

  return (
    <div>
      <FormControl className="form_control">
        <InputLabel> ✔️ Write a Todo</InputLabel>
        <Input
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
      </FormControl>
      {/* <input value={input} onChange={(event) => setInput(event.target.value)} /> */}
      <Button
        disabled={!input}
        variant="contained"
        type="submit"
        onClick={addTodo}
        color="primary"
      >
        Primary
      </Button>

      <ul>
        {todos.map((todo) => (
          <Todo text={todo}/>
          // <li>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
