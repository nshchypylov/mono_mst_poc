import {computed, observable} from "mobx";

type ITodo = {
    id: number,
    title: string,
    finished: boolean
}

class Todo implements ITodo {
    id = Math.random();
    @observable title = "";
    @observable finished = false
}

export class TodoList {
    @observable todos: Todo[] = [{
        title: 'Some basic todo',
        id: Date.now(),
        finished: false
    }];

    @computed get unfinishedTodoCount() {
        return this.todos.filter(todo => !todo.finished).length
    }
}

const store = new TodoList();

export default store