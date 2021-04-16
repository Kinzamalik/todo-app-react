import {List,ListItem, ListItemText,Avatar,ListItemAvatar } from '@material-ui/core'
import React from 'react'
import './Todo.css'

function Todo(props) {
    return (

        <List>
            <ListItem>
                    
                <ListItemAvatar>
                </ListItemAvatar>
                <ListItemText primary={props.text} secondary=" Set Your Deadlines⏰ "/>
            </ListItem>
        </List>
           
        
    )
}

export default Todo
