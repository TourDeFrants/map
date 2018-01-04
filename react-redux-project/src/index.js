import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Task from './components/task';

//view selector---------------------------------------------------------------------------------------------------------

const selector = document.getElementById('root');

//from Task to view-----------------------------------------------------------------------------------------------------

ReactDOM.render(
    <Task />,
    selector
);

