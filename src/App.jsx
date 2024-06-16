import React from 'react'
import {Container, Box} from '@chakra-ui/react'

const App = () => {
  return (
    <Box bg="blue.600" color="white" height="100vh"
    paddingTop={130}
    >
      <Container maxWidth='3xl' centerContent>
        <h1>My App</h1>
      </Container>
      
    </Box>
  )
}

export default App