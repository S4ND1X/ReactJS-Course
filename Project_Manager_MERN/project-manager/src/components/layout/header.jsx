import React from 'react'

export default function Header() {
    return (
        <header className="app-header">
            <p className="nombre-usuario">User: <span>Jorge Sanchez</span></p>
            <nav className="nav-principal">
                <a href="#!">
                Log out
                </a>
            </nav>
        </header>
    )
}
