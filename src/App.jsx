
import {useState} from 'react'
import React from 'react'
import {Container, Box} from '@chakra-ui/react'
import Header from './components/Header'
import Footer from './components/Footer'
import TextInput from './components/TextInput'

const App = () => {
  const [keywords, setKeywords] = useState('');
  const [isOpen, setIsOpen] = useState(false)
  const [loading, setLoading] = useState(false);

  const extractKeywords = (text) => {
    setLoading(true)
    setIsOpen(true)
    console.log(text)


    const options = {
      method: 'POST',
      headers:{
        'Content-Type': 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: 'text-davinci-003',
        prompt: 'Extract keywords from this text. Make the first letter of each word uppercase and seperate with commas'
      })
    }
  }


  return (
    <Box bg="cyan.400" color="white" height="100vh"
    paddingTop={130}
    >
      <Container maxWidth='3xl' centerContent>
        <Header />
        <TextInput extractKeywords={extractKeywords}/>
        <Footer />
      </Container>
      
    </Box>
  )
}

export default App