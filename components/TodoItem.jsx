import React,{useState} from 'react'
import { useDispatch } from 'react-redux';
import { deleteTodo, updateTodo } from './../Redux/actions';

const TodoItem = ({todo}) => {
  const [editable, setEditable] = useState(false)
  const [name, setName] = useState(todo.name)
 const dispatch = useDispatch()
  return (
    <div>
        
       <div className="container">
       <div className="row mx-3 align-items-center">
            <div >#{todo.id.length > 1 ? todo.id[2]:todo.id} </div>
            <div className="col">
              {editable ? <input className="form-control" type="text"
              value={name}
              onChange={(e)=>setName(e.target.value)}
              />:  <h4>{todo.name}</h4> }
               
            </div>
            <button className="btn btn-success m-2"
            onClick={()=>{
              dispatch(updateTodo(
                {
                  ...todo,
                  name:name,
                }
              ))
              if(editable){
                setName(todo.name)
              }
              setEditable(!editable)
            }}
            >{editable ? 'UPDATE':'EDIT'}</button>
            <button onClick={()=>dispatch(deleteTodo(todo.id))} className="btn btn-danger m-2">Delete</button>
        </div>
       </div>
    </div>
  )
}

export default TodoItem