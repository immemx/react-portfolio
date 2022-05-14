import { useState, useEffect } from 'react';
import Nav from './componets/Nav'
import About from './componets/About'
import Work from './componets/Work'
import Contact from './componets/Contact';
import './App.css';

function App() {

  const [link] = useState([
    'About',
    'Work',
    'Contact'
  ])

  // Array destructuring a react HOOK. 'choice' representing the current array
  // of information while 'setChoice' is the function that will effect 'choice'
  const [choice, setChoice] = useState(link[0]);

  useEffect(() => {
    document.title = `ME - ${choice}`;
  })
  
  const navChoices = (page) => setChoice(page)

  useState(() => {
    navChoices('About')
  })

  // const render = () => {
  //   if (choice === 'Work') {
	// 		return <Work />;
	// 	}
	// 	if (choice === 'Contact') {
	// 		// return <Contact />;
	// 	}
	// 	return <About />;
	// };

  return (
    <>
    <Nav navChoices={navChoices} choice={choice} setChoice={setChoice}>
      choice={choice}
    </Nav>

    {choice === 'About' && (<About />)}
    {choice === 'Work' && (<Work />)}
    {choice === 'Contact' && (<Contact />)}
    </>
  );
}

export default App;
