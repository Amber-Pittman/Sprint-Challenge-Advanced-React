- [ ] Why would you use class component over function components (removing hooks from the question)?

#### Class Components are considered "Stateful," as they are more complex than functional components. Class components provide more control with the use of constructors, life-cycle methods, and state management. 


- [ ] Name three lifecycle methods and their purposes.

#### Mounting Phase - Birth
Constructor function is called and state data is initialized. Render is then invoked and our JSX elements are transformed into DOM elements.

#### Updating Phase - Growth
Any new props received from the parent will trigger updates to the child. The setState will call a render by default. It will automatically update as necessary until it is stopped by using `shouldComponentUpdate` or the final phase starts.

#### Unmounting Phase - Death
By using `componentWillUnmount`, DOM event listeners are destroyed. This is kind of a cleanup method for any work we're putting on the DOM that doesn't need to be there once our component leaves.


- [ ] What is the purpose of a custom hook?

Helps keep your code DRY. Custom hooks are reusable throughout your app, as they follow the same patterns of naming that we're already using (eg: `use` as in `useState`). You can build a reusable custom hook for uses as varied as handling controlled inputs, managing event listeners, and watching for key presses.


- [ ] Why is it important to test our apps?

Automated testing minimizes the risk of bugs finding their way into production code. You'll find bugs sooner, helps as a safety net. Developers that come after you can use the tests as a way to understand the app's "documentation." With proper testing procedures, it's easier to scale the application as needed. 