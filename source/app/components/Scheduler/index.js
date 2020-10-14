// Core
import React, { Component } from 'react';
import Move from 'react-flip-move';
import { hot } from 'react-hot-loader';
import { v4 } from 'uuid';
import { fromJS, Map } from "immutable";

// Instruments
import Styles from './styles.m.css';
import Checkbox from '../../theme/assets/Checkbox';
import initialTasksData from './tasks.json';
import { sortTasksByGroup } from "../../instruments";

// Components
import { Task } from '../Task';

@hot(module)
export class Scheduler extends Component {
    state = {
        newTaskMessage: '',
        tasksFilter:    '',
        tasks:          fromJS(initialTasksData),
    };

    _updateTasksFilter = (event) => {
        this.setState({
            tasksFilter: event.target.value.toLowerCase(),
        });
    };

    _updateNewTaskMessage = (event) => {
        this.setState({
            newTaskMessage: event.target.value,
        });
    };

    _getAllCompleted = () => this.state.tasks.every((task) => task.get("completed"));

    _createTask = (event) => {
        event.preventDefault();
        const { newTaskMessage } = this.state;

        if (!newTaskMessage) {
            return null;
        }

        const newTask = Map({
            id:        v4(),
            completed: false,
            favorite:  false,
            message:   newTaskMessage,
        });

        this.setState(({ tasks }) => ({
            tasks:          sortTasksByGroup(tasks.unshift(newTask)),
            newTaskMessage: '',
        }));
    };

    _updateTask = (updatedTask) => {
        this.setState(({ tasks }) => {
            const indexToReplace = tasks.findIndex(
                (task) => task.get("id") === updatedTask.id,
            );

            const newTasks = [ ...tasks.filter((task) => task.id !== updatedTask.id) ];

            newTasks.splice(indexToReplace, 0, updatedTask);

            return {
                tasks: sortTasksByGroup(tasks.update(indexToReplace, () => Map(updatedTask))),
            };
        });
    };

    _removeTask = (taskId) => {
        this.setState(({ tasks }) => ({
            tasks: tasks.filter((task) => task.get("id") !== taskId),
        }));
    };

    _completeAllTasks = () => {
        if (this._getAllCompleted()) {
            return null;
        }

        this.setState(({ tasks }) => ({
            tasks: tasks.map((task) => task.set("completed", true)),
        }));
    };

    render() {
        const { tasks, newTaskMessage, tasksFilter } = this.state;

        const allCompleted = this._getAllCompleted();
        const todoList = tasks
            .filter((task) => task.get("message").toLowerCase().includes(tasksFilter))
            .map((task) => (
                <Task
                    _removeTask = { this._removeTask }
                    _updateTask = { this._updateTask }
                    key = { task.get("id") }
                    id = { task.get("id") }
                    message = { task.get("message") }
                    completed = { task.get("completed") }
                    favorite = { task.get("favorite") }                      
                    { ...task }
                />
            ));

        return (
            <section className = { Styles.scheduler }>
                <main>
                    <header>
                        <h1>Планировщик задач</h1>
                        <input
                            placeholder = 'Поиск'
                            type = 'search'
                            value = { tasksFilter }
                            onChange = { this._updateTasksFilter }
                        />
                    </header>
                    <section>
                        <form onSubmit = { this._createTask }>
                            <input
                                className = { Styles.createTask }
                                maxLength = { 50 }
                                placeholder = 'Описaние моей новой задачи'
                                type = 'text'
                                value = { newTaskMessage }
                                onChange = { this._updateNewTaskMessage }
                            />
                            <button>Добавить задачу</button>
                        </form>
                        <div className = { Styles.overlay }>
                            <ul>
                                <Move
                                    duration = { 400 }
                                    easing = 'ease-in-out'>
                                    {todoList}
                                </Move>
                            </ul>
                        </div>
                    </section>
                    <footer>
                        <Checkbox
                            checked = { allCompleted }
                            color1 = '#363636'
                            color2 = '#fff'
                            onClick = { this._completeAllTasks }
                        />
                        <span className = { Styles.completeAllTasks }>
                            Все задачи выполнены
                        </span>
                    </footer>
                </main>
            </section>
        );
    }
}
