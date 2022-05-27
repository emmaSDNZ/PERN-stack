import {Box, AppBar, Container, Toolbar, Typography, Button} from '@mui/material'
import {Link, useNavigate} from 'react-router-dom'

function Navbar() {

  const navegate = useNavigate()  
  return (
   <Box sx={{ flexGrow: 1 }}> 
     <AppBar position='static' color='transparent'>
       <Container>
          <Toolbar>

            <Typography variant='h6' sx={{flexGrow:1}} >
              <Link to='/' style={{textDecoration:'none', color: '#eee'}}> PERN stack </Link>
            </Typography>

            <Button 
            variant='contained' 
            onClick={()=>navegate('/tasks/new')}>
              New Task
            </Button>

          </Toolbar>
       </Container>
     </AppBar>
   </Box>
  )
}

export default Navbar

//comentarios:

//sx={{ flexGrow: 1 }} me abarca el ancho de la pantalla 
//useNavegate me hace una redireccion.