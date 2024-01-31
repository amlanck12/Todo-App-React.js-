import React, { useContext } from 'react'
import styles from './WelcomeMessage.module.css'
import { TodoItemsContext } from '../Store/Todo-item-store'

const WelcomeMessage = () => {
  const {todoItems} = useContext(TodoItemsContext);
  return (
    todoItems.length === 0 && <h1 className={styles.welcome}>Start Surviving!</h1>
    
  )
}

export default WelcomeMessage
