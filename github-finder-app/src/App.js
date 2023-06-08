import './App.css';
import Navbar from './components/Navbar';
import UserList from './components/UserList';
import { Component } from 'react'

export class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      users: []
    }
  }

  componentDidMount() {
    fetch("https://api.github.com/users")
      .then(response => response.json())
      .then(data => this.setState({ users: data }))
  }

  render() {
    return (
      <div>
        <Navbar icon="bi bi-github" title="Github Finder" />
        <div className='container mb-3'>
          <UserList users={this.state.users} />
        </div>
      </div>
    )
  }
}

export default App
