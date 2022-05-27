import {Button, Card, CardContent, CircularProgress, Grid, TextField, Typography} from '@mui/material'


import {useState, useEffect} from 'react'
import {useNavigate, useParams} from 'react-router-dom'


function TaskForms() {
  const params = useParams()
  const navegation = useNavigate()

  const [edit, setEdit] = useState(false)
  const [task, setTask] = useState({
  title: '',
  description: ''
  })
  const [loading, setLoading] = useState(false)
  

  const handleSubmit = async (e)=>{
  e.preventDefault()
  //antes que haga el envio establezco el loading en TRUE
  setLoading(true)
 // console.log(task)
 if(edit){
   const resp = await fetch(`http://localhost:3001/tasks/${params.id}`,{
     method: "PUT",
     body: JSON.stringify(task),
     headers:{"Content-Type" : "application/json" },
     
   })} else {

   await fetch('http://localhost:3001/tasks', {
      method: 'POST',
      body: JSON.stringify(task),
      headers: { "Content-Type": "application/json"}
   })
 // console.log(res)
   
   //console.log(data)
 }
   //antes que termine de navegar establezco el loading en false
   setLoading(false)
   //luego de crear la nueva tarea lo redirecciono
   navegation('/')
}

  const heandleChange = (e)=>{
 setTask({...task, [e.target.name]: e.target.value}) 
}

const loadTask = async(id)=>{
 const result = await fetch(`http://localhost:3001/tasks/${id}`)
 const data = await result.json()
 console.log(data)
 setTask({title: data.title, description: data.description})
 setEdit(true) 

}
useEffect(()=>{
 if(params.id){
  loadTask(params.id)
 }

},[params.id])

  return (
    <Grid container 
     direction='column' 
     alignItems='center' 
     justifyContent='center'>
      <Grid item xs={3} >
        <Card
          sx={{mt:5}}
          style={{
            background: '#1e272e',
            padding: '1rem'
          }}
        >
          <Typography variant='5' textAlign='center' color='white'>
            {edit? 'editar' : 'Agregar Tarea'}
          </Typography>
          <CardContent>
            <form onSubmit={handleSubmit}>

              <TextField
                variante='filled'
                label= 'Tarea'
                value= {task.title}
                sx={{ 
                  display: 'block', 
                  margin: '.5rem 0'
              }}
                onChange= {heandleChange}
                name='title'
                inputProps={{style: {color:"white"}}}
                InputLabelProps={{style: {color: 'white'}}}
              />
              <TextField
                variant='filled'
                label='descripcion de la Tarea'
                multiline
                rows={4}
                value={task.description}
                sx={{ 
                  display: 'block', 
                  margin: '.5rem 0'
              }}
                onChange={heandleChange}
                name= 'description'
                inputProps={{style: {color:"white"}}}
                InputLabelProps={{style: {color: 'white'}}}
              />
              <Button variant='contained'  color='primary' type='submit'
              disabled={!task.title || !task.description}>
                { loading? (<CircularProgress color= "inherit" size={24}/>
                ) : (
                  'Save'  )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default TaskForms