import * as React from 'react';
import { useState, useEffect } from 'react';
import {
  Heading, Table, Th, Tbody, Tr,
  Td,
  VStack,
  Button,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper, 
} from '@chakra-ui/react';

import { ToDoItem } from './types'
import { ToDoItemEntryForm } from './ToDoItemEntryForm'
import { ToDoListDisplay } from './ToDoListDisplay'
import { setPriority } from 'os';
// import { ToDoListDisplay } from './ToDoListDisplayBad';

export default function ToDoApp () {
  const [todoList,setTodolist] = useState<ToDoItem[]>([])
  const [itemKey,setItemKey] = useState<number>(0)   // first unused key
  const [delAbove, setDelAbove] = useState<number>(10);

  function handleAdd (title:string, priority:number) {
    if (title === '') {return}   // ignore blank button presses
    setTodolist(todoList.concat({title: title, priority: priority, key: itemKey}))
    setItemKey(itemKey + 1)
  }

  function handleDelete(targetKey:number) {
    const newList = todoList.filter(item => item.key != targetKey)
    setTodolist(newList)
  }

  function sortList () {
    const sorted = todoList.sort(function(a, b){return a.priority-b.priority})
    setTodolist([...sorted]); // SPREAD OPERATION MAKES IT WORK
  }

  function handleDeleteSome () {
    const newList = todoList.filter(item => item.priority <= delAbove)
    setTodolist(newList)
    setDelAbove(10)
  }

  return (
  <VStack>
    <Heading>TODO List</Heading>
    <ToDoItemEntryForm onAdd={handleAdd}/>
    <Button
      onClick={sortList}
    >
      Sort
    </Button>
    <NumberInput
      name="delAbove"
      max={10}
      min={1}
      value={delAbove}
      onChange={(event) => setDelAbove(parseInt(event))}
    >
      <NumberInputField />
      <NumberInputStepper>
      <NumberIncrementStepper />
      <NumberDecrementStepper />
      </NumberInputStepper>
    </NumberInput>

    <Button
      onClick={handleDeleteSome}
    >
      Delete all items above a priority
    </Button>
    <ToDoListDisplay items={todoList} onDelete={handleDelete}/>
  </VStack>
  )
}





