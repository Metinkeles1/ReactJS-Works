import React, { Component } from 'react'
import User from './User';

export class UserList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            users: [
                {
                    id: "97405379",
                    name: "Metin Keleş",
                    username: "Metinkeles1",
                    avatar_url: "https://avatars.githubusercontent.com/u/97405379?v=4",
                    github_url: "https://github.com/Metinkeles1",
                    website: "https://metinkeles.com.tr/",
                    followers: "4"
                },
                {
                    id: "97405372",
                    name: "Metin Keleş",
                    username: "Metinkeles1",
                    avatar_url: "https://avatars.githubusercontent.com/u/97405379?v=4",
                    github_url: "https://github.com/Metinkeles1",
                    website: "https://metinkeles.com.tr/",
                    followers: "4"
                },
                {
                    id: "97405371",
                    name: "Metin Keleş",
                    username: "Metinkeles1",
                    avatar_url: "https://avatars.githubusercontent.com/u/97405379?v=4",
                    github_url: "https://github.com/Metinkeles1",
                    website: "https://metinkeles.com.tr/",
                    followers: "4"
                }
            ]
        }
    }

    render() {
        return (
            <div>
                {this.state.users.map(user => (
                    <User user={user} key={user.id} />
                ))}
            </div>
        )
    }
}

export default UserList