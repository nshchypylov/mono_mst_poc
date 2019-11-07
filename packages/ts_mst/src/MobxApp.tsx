import React from 'react';
import {observer, inject} from "mobx-react"
import {TodoList} from "./mobxStore";


type IProps = {
    store: TodoList
}

const getProp = (obj: any) => (cb: (obj: any) => {} | undefined) => {
    const res = cb(obj);

    return res || undefined
}

@inject('store')
@observer
class MobxApp extends React.Component<IProps> {
    static defaultProps = {
        store: {}
    };

    addNote = () => {
        const note = {
            title: 'New note',
            id: Date.now(),
            finished: false
        };

        this.props.store.todos.push(note)
    };

    render() {
        const {todos} = this.props.store;
        return (
            <div>
                <div onClick={this.addNote}>Add todo to MobX store</div>
                <br/>
                <br/>
                <div>
                    {todos.map(todo => {
                        return <div key={todo.id}>
                            {todo.title} - {todo.finished ? 'finished' : 'not finished'}
                        </div>
                    })}
                </div>
            </div>
        );
    }
}

export default MobxApp;