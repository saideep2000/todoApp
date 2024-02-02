import * as React from 'react';
import { useState, useEffect } from 'react';
import {
  Button, Box,
  FormControl,
  FormLabel,
  Heading,
  IconButton,
  Input,
  Text,
  VStack, Tr, Td, Table, Tbody, TableContainer, HStack, NumberInput, NumberInputField, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper
} from '@chakra-ui/react';
import { AiFillDelete, AiFillHeart, AiOutlineDelete, AiOutlineHeart } from 'react-icons/ai';
import { nanoid } from 'nanoid';

import { ToDoItem } from './types'

export function ToDoItemEntryForm (props: {onAdd:(title:string, priority:number)=>void}) {
    // state variables for this form
    const [title,setTitle] = useState<string>("")
    const [priority,setPriority] = useState<number>(0)
    const [key, setKey] = useState(1)     // key is assigned when the item is created.
  
    function handleClick(event) {
      event.preventDefault()  // magic, sorry.
      
      if (title === '') {return}   // ignore blank button presses
      props.onAdd(title, priority)    // tell the parent about the new item
      setTitle('')   // resetting the values redisplays the placeholder
      setPriority(0)   // resetting the values redisplays the placeholder
      setKey(key + 1)   // increment the key for the next item
    }
  
    return (    
      <VStack spacing={0} align='left'>
        <form>
          <FormControl>
            <VStack align='left' spacing={0}>
            <FormLabel as="b">Add TODO item here:</FormLabel>
            <HStack w='200' align='left'>
            <Input
              name="title"
              value={title}
              placeholder='type item name here'
              onChange={(event => {
                setTitle(event.target.value);
                console.log('setting Title to:', event.target.value)
              })}
            />

            <NumberInput
              name="priority"
              value={priority}
              placeholder= 'type priority here'
              onChange={(event => setPriority(parseInt(event)))}
            >
              <NumberInputField />
              <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>

            <Box><Button bg='lightblue' type="submit" onClick={handleClick} width={200}> Add TODO item</Button>
            </Box>
            </HStack>
            </VStack>
          </FormControl>
          
                  
        </form>
      </VStack>
    )
  
  }
  