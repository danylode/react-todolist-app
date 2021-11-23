import React from 'react'

export default function Task(props) {
    return (
        <div className="task">
            {props.task.name}
        </div>
    )
}
