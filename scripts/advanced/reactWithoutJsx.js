docs.reactWithoutJsx = `
<h1 class="heading">ReactJS − React without JSX</h1>

<h1 class="contentHeading">What is JSX?</h1>
<p>JSX is a syntax extension for JavaScript that allows you to write HTML-like code in your JavaScript files. It makes React components more readable and easier to write. However, browsers don't understand JSX directly - it needs to be compiled to regular JavaScript using tools like Babel.</p>

<p>For example, this JSX code:</p>
<div class="code-container">
  <pre><code>
<span class="tag">&lt;div</span> <span class="attr">className=</span><span class="string">"container"</span><span class="tag">&gt;</span>
   <span class="tag">&lt;h1&gt;</span>Hello, World!<span class="tag">&lt;/h1&gt;</span>
<span class="tag">&lt;/div&gt;</span>
  </code></pre>
</div>

<p>Gets compiled to this JavaScript code:</p>
<div class="code-container">
  <pre><code>
React.createElement(
   <span class="string">'div'</span>,
   { className: <span class="string">'container'</span> },
   React.createElement(
      <span class="string">'h1'</span>,
      <span class="keyword">null</span>,
      <span class="string">'Hello, World!'</span>
   )
);
  </code></pre>
</div>

<h1 class="subHeading">Understanding React.createElement</h1>
<p>The <code>React.createElement</code> function is the fundamental building block of React. It creates and returns a new React element of a given type. The function takes three arguments:</p>
<div style="background-color: #EDEDED; padding: 10px; border-radius: 5px; margin-bottom: 20px;">
<ul style="margin: 0;">
    <li><strong>type</strong>: The type of element to create (string for HTML elements, function/class for components)</li>
    <li><strong>props</strong>: An object containing the properties to be passed to the element</li>
  <li><strong>children</strong>: The child elements to be rendered inside the parent element</li>

</ul>
</div>


<div class="code-container">
  <pre><code>
<span class="comment">// Basic usage of createElement</span>
<span class="keyword">const</span> element = React.createElement(
   <span class="string">'div'</span>,
   { 
      className: <span class="string">'greeting'</span>,
      id: <span class="string">'welcome'</span>
   },
   <span class="string">'Hello, React!'</span>
);

<span class="comment">// Creating nested elements</span>
<span class="keyword">const</span> nestedElement = React.createElement(
   <span class="string">'div'</span>,
   { className: <span class="string">'container'</span> },
   React.createElement(
      <span class="string">'h1'</span>,
      { className: <span class="string">'title'</span> },
      <span class="string">'Welcome'</span>
   ),
   React.createElement(
      <span class="string">'p'</span>,
      { className: <span class="string">'description'</span> },
      <span class="string">'This is a React application'</span>
   )
);
  </code></pre>
</div>

<h1 class="subHeading">Working Example</h1>
<p>Let's create a complete React application without JSX. This example demonstrates how to create components, handle state, and render lists using only <code>React.createElement</code>.</p>

<div class="code-container">
  <pre><code>
<span class="keyword">const</span> { createElement, useState } = React;

<span class="keyword">function</span> <span class="function-name">TodoList</span>() {
   <span class="keyword">const</span> [todos, setTodos] = useState([
      { id: <span class="number">1</span>, text: <span class="string">'Learn React'</span>, completed: <span class="keyword">false</span> },
      { id: <span class="number">2</span>, text: <span class="string">'Build a project'</span>, completed: <span class="keyword">false</span> }
   ]);

   <span class="keyword">const</span> [newTodo, setNewTodo] = useState(<span class="string">''</span>);

   <span class="keyword">const</span> handleAddTodo = () => {
      <span class="keyword">if</span> (newTodo.trim()) {
         setTodos([
            ...todos,
            {
               id: Date.now(),
               text: newTodo,
               completed: <span class="keyword">false</span>
            }
         ]);
         setNewTodo(<span class="string">''</span>);
      }
   };

   <span class="keyword">const</span> handleToggleTodo = (id) => {
      setTodos(
         todos.map(todo =>
            todo.id === id
               ? { ...todo, completed: !todo.completed }
               : todo
         )
      );
   };

   <span class="keyword">return</span> createElement(
      <span class="string">'div'</span>,
      { className: <span class="string">'todo-app'</span> },
      createElement(
         <span class="string">'h1'</span>,
         <span class="keyword">null</span>,
         <span class="string">'Todo List'</span>
      ),
      createElement(
         <span class="string">'div'</span>,
         { className: <span class="string">'add-todo'</span> },
         createElement(
            <span class="string">'input'</span>,
            {
               type: <span class="string">'text'</span>,
               value: newTodo,
               onChange: (e) => setNewTodo(e.target.value),
               placeholder: <span class="string">'Add new todo'</span>
            }
         ),
         createElement(
            <span class="string">'button'</span>,
            { onClick: handleAddTodo },
            <span class="string">'Add'</span>
         )
      ),
      createElement(
         <span class="string">'ul'</span>,
         { className: <span class="string">'todo-list'</span> },
         ...todos.map(todo =>
            createElement(
               <span class="string">'li'</span>,
               {
                  key: todo.id,
                  className: todo.completed ? <span class="string">'completed'</span> : <span class="string">''</span>,
                  onClick: () => handleToggleTodo(todo.id)
               },
               todo.text
            )
         )
      )
   );
}

<span class="comment">// Render the application</span>
ReactDOM.render(
   createElement(TodoList),
   document.getElementById(<span class="string">'root'</span>)
);
  </code></pre>
</div>

<p>This example demonstrates:</p>
<ul>
  <li>Creating a functional component without JSX</li>
  <li>Using React hooks (useState) without JSX</li>
  <li>Handling events and state updates</li>
  <li>Rendering lists and conditional classes</li>
  <li>Creating nested elements</li>
</ul>

<p>While it's possible to write React applications without JSX, using JSX makes the code more readable and maintainable. The example above would be much simpler to write and understand using JSX syntax.</p>
`;  