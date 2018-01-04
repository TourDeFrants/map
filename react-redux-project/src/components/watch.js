import React from 'react';

//class component Watch with time's button------------------------------------------------------------------------------

class Watch extends React.Component {

    constructor(props) {
        super(props);
        this.state = {time: Date.now()};
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            time: Date.now()
        });
    }

    getTask = () => {
        let time = this.state.time;
        let obj = {
            timeStart: time,
            timeEnd: '',
            taskName: 'New Task',
            taskDesc: 'Task Description',
            close: false
        };
        this.props.addTask(obj); //props from Task Component: function addTask(item) return array[obj];
    };

    render() {
        return (
            <div>
                <button className="square" onClick={this.getTask}>
                    Now {new Date(this.state.time).toLocaleTimeString()}
                </button>
            </div>
        );
    }
}

//export----------------------------------------------------------------------------------------------------------------

export default Watch;