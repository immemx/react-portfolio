import React from "react";

function Nav(props) {

    const { choice, setChoice, navChoices } = props

    return (
        <header className="flex-row px-1">
            <h1 className="text-center pt-3">
                <a href="/">
                    Matthew Eayres
                </a>
            </h1>
            <nav>
                <ul className="flex-row text-center py-3 mt-4">
                        <li className='mx-1'>
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