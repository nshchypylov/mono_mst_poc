import { types, Instance } from "mobx-state-tree"

const Todo = types
    .model("Todo", {
        title: types.string,
        id: types.number,
        done: false
    })
    .actions(self => ({
        toggle() {
            self.done = !self.done
        },
    }))

const Store = types.model("Store", {
    todos: types.array(Todo),
}).actions(self => ({
    addTodo({ title, id } : { title: string, id: number }) {
        self.todos.unshift({
            title,
            id
        })
    }
}))

export type IStore = Instance<typeof Store>;

const store = Store.create({
    todos: [
        {
            title: "Get coffee",
            id: Date.now(),
        }
    ]
})


export default store;