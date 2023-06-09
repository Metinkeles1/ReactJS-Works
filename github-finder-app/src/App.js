import './App.css';
import Navbar from './components/Navbar';
import UserList from './components/UserList';
import { Component } from 'react'
import Search from './components/Search';

export class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      loading: false,
      users: []
    }
  }

  searchUsers = (keyword) => {
    this.setState({ loading: true });
    setTimeout(() => {
      fetch("https://api.github.com/search/users?q=" + keyword)
        .then(response => response.json())
        .then(data => this.setState({ users: data.items, loading: false }))
    }, 1000);
  }

  render() {
    return (
      <div>
        <Navbar icon="bi bi-github" title="Github Finder" />
        <Search searchUsers={this.searchUsers} />
        <div className='container mb-3'>
          <UserList users={this.state.users} loading={this.state.loading} />
        </div>
      </div>
    )
  }
}

export default App
