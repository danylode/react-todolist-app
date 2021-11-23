import React from 'react'

import Task from '../Task/Task'

export default function Tasks(props) {
    return (
        <div className="tasks">
                {props.lists.map((task) => (<Task task={task} />))}
        </div>
    )
}
