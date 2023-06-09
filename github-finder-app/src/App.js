import './App.css';
import Navbar from './components/Navbar';
import UserList from './components/UserList';
import { Component } from 'react'

export class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      loading: false,
      users: []
    }
  }

  componentDidMount() {
    this.setState({ loading: true });
    setTimeout(() => {
      fetch("https://api.github.com/users")
        .then(response => response.json())
        .then(data => this.setState({ users: data, loading: false }))
    }, 2000);

  }

  render() {
    return (
      <div>
        <Navbar icon="bi bi-github" title="Github Finder" />
        <div className='container mb-3'>
          <UserList users={this.state.users} loading={this.state.loading} />
        </div>
      </div>
    )
  }
}

export default App
