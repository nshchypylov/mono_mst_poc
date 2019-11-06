import React from 'react'
import second from '@monorepo/second'

export default class App extends React.PureComponent {
    componentDidMount() {
        console.log('mounted --- ', second());
    }

    render() {
        return <div>Hello from render</div>
    }
} 
