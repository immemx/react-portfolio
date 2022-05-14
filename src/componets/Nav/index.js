import React from "react";

function Nav(props) {

    const { choice, setChoice, navChoices } = props

    return (
        <header className="flex-row px-1">
            <h2 >
                <a href="/">
                    Matthew Eayres
                </a>
            </h2>
            <nav>
                <ul className="flex-row">
                        <li className={'mx-1'}>
                            <a 
                            href="#about"
                            onClick={() => setChoice('About')}
                            id='about'
                            className={choice === 'About' ?? 'nav-link active'}
                            >
                                About
                            </a>
                        </li>
                        <li className={'mx-1'}>
                            <a 
                            href="#work"
                            onClick={() => setChoice('Work')}
                            id='work'
                            className={choice === 'Work' ?? 'nav-link active'}
                            >
                                Work
                            </a>
                        </li>
                        <li className={'mx-1'}>
                            <a 
                            href="#contact"
                            onClick={() => setChoice('Contact')}
                            id='contact'
                            className={choice === 'Contact' ?? 'nav-link active'}
                            >
                                Contact
                            </a>
                        </li>
                </ul>
            </nav>
        </header>
    );
}

export default Nav;