import React from 'react'
import { Link } from 'react-router'
import './Header.css'

const NAVIGATION = [
    {
        id: 'home',
        title: 'Home',
        url: '/'
    },
    {
        id: 'people',
        title: 'People',
        url: '/people'
    },
    {
        id: 'planets',
        title: 'Planets',
        url: '/planets'
    },{
        id: 'starships',
        title: 'Starships',
        url: '/starships'
    }
];

export default function Header() {
  return (
    <div>
        <nav>
            <ul>
                {NAVIGATION.map(item => (
                    <li key={item.id}>
                        <Link to={item.url}>{item.title}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    </div>
  )
}
