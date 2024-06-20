import './App.css';
import { useState } from 'react';

function App() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div className='wrapper'>
      <div className='accordion'>

        {data.map((item, index) => (
          <div key={index} className='item'>
            <div className='title' onClick={() => handleToggle(index)}>
              <h2>{item.question} </h2>
              <span className='more' >+</span>
            </div>
            <div className={`content ${activeIndex === index ? 'open' : ''}`}>
              {item.answer}
            </div>
          </div>
        ))};


      </div>

    </div>
  );
}

const data = [
  {
    question: 'What is React and how does it work?',
    answer: `React is a JavaScript library for building user interfaces. It was developed by Facebook and is widely used for building single-page applications and mobile apps. React works by creating a virtual DOM in memory, which is a lightweight representation of the actual DOM. When the state of a component changes, React updates the virtual DOM first and then efficiently updates the actual DOM to match the virtual DOM. This process is called reconciliation. React components can be defined as classes or functions, and they can manage their own state and lifecycle methods. The main concepts in React include components, props, state, and lifecycle methods.`
  },
  {
    question: 'What are the key features of modern JavaScript (ES6+)?',
    answer: `Modern JavaScript, also known as ES6 or ECMAScript 2015, introduced many new features that make the language more powerful and easier to work with. Some key features include:
      1. **Arrow Functions**: A shorter syntax for writing functions.
      2. **Classes**: A syntax for creating constructor functions and prototype-based inheritance.
      3. **Template Literals**: A new way to create strings with embedded expressions.
      4. **Destructuring**: A syntax for extracting values from arrays and objects.
      5. **Default Parameters**: A way to set default values for function parameters.
      6. **Rest and Spread Operators**: New operators for working with arrays and objects.
      7. **Modules**: A way to organize and import/export code.
      8. **Promises**: A way to handle asynchronous operations more easily.
    These features, along with many others, have greatly improved the readability, maintainability, and functionality of JavaScript code.`
  },
  {
    question: 'How does the JavaScript event loop work?',
    answer: `The JavaScript event loop is a fundamental concept that allows JavaScript to perform non-blocking, asynchronous operations. JavaScript is single-threaded, meaning it can only execute one piece of code at a time. However, it can handle multiple tasks concurrently through the event loop. Here's how it works:
      1. **Call Stack**: When a function is called, it is added to the call stack. The call stack is a data structure that keeps track of function calls.
      2. **Web APIs**: When asynchronous operations (like setTimeout, fetch, or event listeners) are called, they are handled by Web APIs provided by the browser. These operations run in the background.
      3. **Callback Queue**: Once an asynchronous operation completes, its callback function is added to the callback queue (also known as the task queue).
      4. **Event Loop**: The event loop constantly checks the call stack and the callback queue. If the call stack is empty, it moves the first callback from the callback queue to the call stack, allowing it to be executed.
    This process ensures that even though JavaScript is single-threaded, it can perform asynchronous operations without blocking the main thread, providing a smooth and responsive user experience.`
  }
];


export default App;
