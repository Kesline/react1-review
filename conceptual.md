### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?
React is a JavaScript library for building user interfaces, developed by Facebook. It allows developers to create reusable UI components and manage their state efficiently. React is commonly used for building single-page applications (SPAs) and dynamic web applications. It's particularly useful when you need a fast, interactive, and scalable UI, especially in scenarios where the data changes frequently.

- What is Babel?
Babel is a toolchain that is mainly used to convert ECMAScript 2015+ (ES6+) code into a backwards-compatible version of JavaScript that can be run by older JavaScript engines. It's commonly used in front-end development to ensure that modern JavaScript code can run on older browsers.

- What is JSX?
JSX stands for JavaScript XML. It's a syntax extension for JavaScript that allows developers to write HTML-like code within JavaScript. JSX makes it easier to write React components by combining UI markup and JavaScript logic in a single file.


- How is a Component created in React?
A component in React can be created using either class components or function components. In class components, you define a class that extends React.Component and implement a render() method that returns the component's UI. In function components, you simply define a JavaScript function that returns JSX.


- What are some difference between state and props?
Props (short for properties) are read-only and are passed to a component by its parent. They are used to customize a component's behavior and appearance.
State is mutable and managed within the component itself. It represents the internal state of the component and can be updated using setState() method. State changes trigger re-rendering of the component.


- What does "downward data flow" refer to in React?
"Downward data flow" refers to the principle in React where data is passed from parent components to child components through props. This ensures that the parent component remains the single source of truth for the data, making the application easier to understand and debug.

- What is a controlled component?
A controlled component is a React component whose form elements (like input, textarea, select) are controlled by React via state. The value of the form elements is controlled by React state and updated through event handlers. This allows React to have full control over the form's state.

- What is an uncontrolled component?

An uncontrolled component is a React component whose form elements do not rely on React state to manage their values. Instead, the form elements manage their own state internally. Uncontrolled components are often used in situations where you need to integrate with non-React code or when you need a simpler implementation.

- What is the purpose of the `key` prop when rendering a list of components?
The key prop is used to uniquely identify elements in a list of components. It helps React identify which items have changed, are added, or are removed. Keys should be stable, unique, and consistent across renders.

- Why is using an array index a poor choice for a `key` prop when rendering a list of components?
Using array indexes as keys can lead to performance issues and unexpected behavior, especially when the list is reordered or items are added or removed. It can cause React to incorrectly identify components, leading to re-renders and reconciliation issues.


- Describe useEffect.  What use cases is it used for in React components?
useEffect is a React Hook that allows you to perform side effects in function components. It's similar to lifecycle methods in class components. You can use useEffect for various tasks such as data fetching, subscriptions, setting up timers, and manually changing the DOM.

- What does useRef do?  Does a change to a ref value cause a rerender of a component?
useEffect is a React Hook that allows you to perform side effects in function components. It's similar to lifecycle methods in class components. You can use useEffect for various tasks such as data fetching, subscriptions, setting up timers, and manually changing the DOM.

- When would you use a ref? When wouldn't you use one?
You would use a ref when you need to access or manage a DOM element imperatively, for example, focusing an input field, animating an element, or integrating with third-party DOM libraries. You wouldn't use a ref for managing component state or data fetching, as there are more suitable hooks for those tasks (like useState, useContext, or useEffect).


- What is a custom hook in React? When would you want to write one?
A custom hook is a JavaScript function that starts with "use" and may use other hooks internally. Custom hooks allow you to extract reusable logic from components and share it across multiple components. You might want to write a custom hook when you find yourself duplicating code across components or when you want to encapsulate complex logic into a reusable unit.