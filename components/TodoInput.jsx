import React from 'react'
import { useState } from 'react'
import { addTodo } from '../Redux/actions'
import {v4 as uuidv4} from 'uuid'
import { useDispatch } from 'react-redux';

const TodoInput = () => {

  const [name, setname] = useState()
  const dispatch = useDispatch()
  return (
    <div>
       <div className="container">
       <h3>TODO APPLICATION</h3>
        <div className="row m-2">
            <input 
            value={name}
            onChange={(e)=>setname(e.target.value)}
            placeholder="Enter your todo here..."
            type="text" className='form-control col'/>
            <button className='btn btn-primary mx-2'
            onClick={()=>{
              dispatch(
                addTodo(
                  {
                    id:uuidv4(),
                    name:name,
                  }
                )
              )
              setname('')
            }
          }
            >Add</button>
        </div>
       </div>
    </div>
  )
}

export default TodoInput