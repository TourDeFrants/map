import React from 'react';

//class component Watch with time's button------------------------------------------------------------------------------

class TaskObject extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            edit: false,
            end: false,
            error: ''
        }
    };

    remove = () => {
        this.props.removeTask(this.props.index);
    };

    update = () => {
        this.setState({edit: true});
    };

    save = () => {
        let newTaskName = this.refs.newTaskName.value === '' ? 'Новая Задача' : this.refs.newTaskName.value;
        let newTaskDesc = this.refs.newTaskDesc.value === '' ? 'Описание к задаче' : this.refs.newTaskDesc.value;
        let regex = new RegExp('[^a-zA-Z0-9]+');
        if (!regex.test(newTaskName) && newTaskName.length > 3 && newTaskName.length < 9) {
            let obj = {
                newTaskName: newTaskName,
                newTaskDesc: newTaskDesc
            };
            this.props.updateTask(obj, this.props.index);
            this.setState({edit: false});
        } else {
            this.setState({error: 'name must be from 4 to 8 literal, and only alpha & numeric'});
        }
    };

    endTime = () => {
        if (isNaN(parseInt(this.props.task.timeEnd))) {
            let newTimeEnd = Date.now();
            this.props.setTimeEnd(newTimeEnd, this.props.index);
        }
        this.setState({end:true});
    };

    convertTime = (time) => {
        if (!isNaN(parseInt(time)))
            return new Date(time).toLocaleTimeString()
    };

    setTime = () => {
        let timeStart = this.props.task.timeStart;
        let timeEnd = this.props.task.timeEnd;
        if (!isNaN(parseInt(timeStart)) && !isNaN(parseInt(timeEnd))) {
            let time = timeEnd - timeStart;
            let hours = Math.floor(time/3600000);
            let minutes = Math.floor(time/60000);
            let seconds = Math.floor(time/1000);
            let timeString = hours + ' hour(-s) ' + minutes + ' minute(-s) ' + seconds + ' second(-s)';
            return timeString;
        }
    };

    emptyError = () => {
        this.setState({error: ''})
    };

    render() {
        return (
            <div>
                <p>New Task</p>
                <p>Time start: {this.convertTime(this.props.task.timeStart)}</p>
                <p>Time end: {this.convertTime(this.props.task.timeEnd)}</p>
                <p>Task name: {
                    this.state.edit ? (
                        <input ref="newTaskName" onBlur={ this.emptyError }  defaultValue={this.props.task.taskName}/>
                    ) : this.props.task.taskName
                }</p>
                {
                    this.state.error !== '' ? (
                        <p>{this.state.error}</p>
                    ) : ''
                }
                <p>Task desc: {
                    this.state.edit ? (
                        <input ref="newTaskDesc" defaultValue={this.props.task.taskDesc}/>
                    ) : this.props.task.taskDesc
                }</p>
                {
                    this.state.end ? (
                        <p>workTime: {this.setTime()}</p>
                    ) : (
                        <button onClick={this.endTime}>Close Task</button>
                    )
                }
                {
                    this.state.edit ? (
                        <div>
                            <button onClick={this.save}>Save changes</button>
                        </div>
                    ) : (
                        <div>
                            <button onClick={this.update}>Change</button>
                            <button onClick={this.remove}>Delete</button>
                        </div>
                    )
                }
            </div>
        )
    }
}

export default TaskObject;