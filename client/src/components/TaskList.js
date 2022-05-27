import { Button, Card, CardContent, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom'

function TaskList() {

  const navegation= useNavigate()
  const [task, setTask] = useState([])
  const loadTask =async ()=>{
   const resp =  await fetch('http://localhost:3001/tasks')
   const data = await resp.json()
   setTask(data)  // establezco las tareas = console.log(data)
  }
  const heandleDelete = async(id)=>{
    try {
      const res = await fetch(`http://localhost:3001/tasks/${id}` , {
        method: 'DELETE',
      })
      setTask(task.filter(task => task.id !== id))
    } catch (error) {
      console.log(error)
    }
  }

  const henadleEdit = ()=>{}
  useEffect(()=>{
    loadTask()
  },[])
  return (
    <div>
    <h1>TASK LIST</h1>
    {task.map(e=>(
      <Card style={{
        margin: '.7rem',
        background: '#1e272e'
      }}
      key={e.id}
        >
        <CardContent style={{
          display: 'flex',
          justifyContent: 'space-between'
        }}>
        <div style={{color:'white'}}>
          <Typography>{e.title}</Typography>
          <Typography>{e.description}</Typography>
        </div>
         <div>
          <Button variant='contained' color='inherit' onClick={()=> navegation(`/tasks/${e.id}/edit`)}>
            edit
          </Button>
          <Button variant='contained' color='warning' onClick={()=> heandleDelete(e.id)} 
          style={{ marginLeft: '.5rem'}}>
            delet
          </Button>
         </div>
         
        </CardContent>
      </Card>
    ))
    }
    </div>
  )
}

export default TaskList