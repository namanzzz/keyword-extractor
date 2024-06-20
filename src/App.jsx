import React from 'react'
import {Container, Box} from '@chakra-ui/react'
import Header from './components/Header'
import Footer from './components/Footer'

const App = () => {
  return (
    <Box bg="cyan.400" color="white" height="100vh"
    paddingTop={130}
    >
      <Container maxWidth='3xl' centerContent>
        <Header />
        <Footer />
      </Container>
      
    </Box>
  )
}

export default App