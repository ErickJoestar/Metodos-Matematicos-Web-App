import React from 'react';
import '../Styles/Workspace.css'
import CreatePost from './CreatePost/CreatePost';

import Post from './Post/Post';

import photoURL from '../assets/perfil.png'

import trash from '../assets/background-3.jpg'

const POSTS = [
    {
        auth: { displayName: "Erick Borquez", photoURL: photoURL, mail: "erickborquez@gmail.com" },
        date: "12 de marzo 13:23",
        content: [
            {
                type: "Title",
                text: "Recoger la basura de algun mercado",
                color: ""
            },
            {
                type: "Description",
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            },
            {
                type: "Todo",
                title: "Hacer estas cosas.",
                data: [
                    {
                        text: "Lorem ipsum dolor sit amet",
                        completed: false
                    },
                    {
                        text: "Consectetur adipiscing elit",
                        completed: true
                    },
                    {
                        text: "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
                        completed: true
                    }
                ]

            },
            {
                type: "Ubication",
                data: [
                    {

                    }
                ]
            },
            {
                type: "Image",
                src: trash,
                alt: "This is an image"
            },
            {
                type: "Description",
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            }

        ],
        status: "Pendiente",
        team: { name: "Recolecccion de basura", url: "#" },
        comments: [
            {
                user: {
                    displayName: "Erick Borquez",
                    photoURL: photoURL
                },
                date: "11/17/2019",
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
            },
            {
                user: {
                    displayName: "Erick Borquez",
                    photoURL: photoURL
                },
                date: "11/17/2019",
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
            },
        ],
        key: 1
    },
    {
        auth: { displayName: "Erick Borquez", photoURL: photoURL, mail: "erickborquez@gmail.com" },
        date: "12 de marzo 13:23",
        content: [
            {
                type: "Title",
                text: "Recoger la basura de algun mercado",
                color: ""
            },
            {
                type: "Description",
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            },
            {
                type: "Todo",
                data: [
                    {
                        text: "Ir y recoger basura",
                        completed: false
                    },
                    {
                        text: "Ir y recoger basura",
                        completed: true
                    }
                ]

            },
            {
                type: "Ubication",
                data: [
                    {

                    }
                ]
            },
            {
                type: "Description",
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            }

        ],
        comments: [],
        status: "Pendiente",
        team: { name: "Recolecccion de basura", url: "#" },
        key: 2
    }
]

const Workspace = () => {
    return (
        <div className="work-space">
            <CreatePost />
            {POSTS.map(post => {
                return <Post {...post} key={post.key} ></Post>
            })}
        </div>
    );
}

export default Workspace;