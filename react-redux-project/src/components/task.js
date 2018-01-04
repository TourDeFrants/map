import React from 'react';
import Watch from './watch';
import TaskObject from './task-object';

//class component Watch with time's button------------------------------------------------------------------------------

class Task extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            tasks: []
        }
    }

    removeTask = (i) => {
        let arr = this.state.tasks;
        arr.splice (i, 1);
        this.setState ({tasks: arr});
    };

    updateTask = (obj, i) => {
        let arr = this.state.tasks;
        arr[i].taskName = obj.newTaskName;
        arr[i].taskDesc = obj.newTaskDesc;
        this.setState ({tasks: arr});
    };

    setTimeEnd = (timeEnd, i) => {
        let arr = this.state.tasks;
        arr[i].timeEnd = timeEnd;
        arr[i].close = true;
        this.setState ({tasks: arr});
    };

    addTask = (item) => {
        let arr = this.state.tasks;
        arr.push(item);
        this.setState({tasks: arr});
    };

    countClosedTasks = () => {
        let count = 0;
        this.state.tasks.map((item)=>{
            if (item.close) count += 1;
        });
        return count;
    };

    showTasks = (item, i) => {
        if (this.state.tasks.length === 0)
            return false;
        return (
            <TaskObject key={i} index={i} removeTask={this.removeTask} updateTask={this.updateTask} setTimeEnd={this.setTimeEnd} task={item} />
        );
    };

    render() {
        return (
            <div>
                <Watch addTask={this.addTask} />
                <p>Tasks Count: {this.state.tasks.length}</p>
                <p>Closed Tasks: {this.countClosedTasks()}</p>
                {this.state.tasks.map(this.showTasks)}
            </div>
        )
    }
}

//export----------------------------------------------------------------------------------------------------------------

export default Task;