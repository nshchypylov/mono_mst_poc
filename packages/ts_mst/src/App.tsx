import React from 'react';
import {inject, observer} from 'mobx-react'
import {IStore} from './store'


type IProps = {
    store: IStore
}

@inject('store')
@observer
class App extends React.Component<IProps> {
    static defaultProps = {store: {}};

    addTodo = () => {
        const {addTodo} = this.props.store,
            todo = {
                title: 'New todo from dummy data',
                id: Date.now()
            };

        addTodo(todo)
    };

    render() {
        const {todos} = this.props.store;

        return (
            <div>
                <div>
                    <div onClick={this.addTodo}>Add todo to MST store</div>
                    <br/>
                    <br/>

                    {todos.map(({title, done, id, toggle}) => {
                        return <div key={id} onClick={toggle}>
                            {title} - {done ? 'done' : 'not done'}
                        </div>
                    })}
                </div>

            </div>
        )
    }
}

export default App;
