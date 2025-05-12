docs.cheatsheet = `
<h1 class="heading">ReactJS − Cheatsheet</h1>

<h1 class="contentHeading">Component Basics</h1>
<div class="code-container">
  <pre><code>
<span class="comment">// Functional Component</span>
<span class="keyword">function</span> <span class="function-name">MyComponent</span>(props) {
   <span class="keyword">return</span> <span class="tag">&lt;div&gt;</span>Hello {props.name}!<span class="tag">&lt;/div&gt;</span>;
}

<span class="comment">// Class Component</span>
<span class="keyword">class</span> <span class="function-name">MyClassComponent</span> <span class="keyword">extends</span> React.Component {
   render() {
      <span class="keyword">return</span> <span class="tag">&lt;div&gt;</span>Hello {this.props.name}!<span class="tag">&lt;/div&gt;</span>;
   }
}
  </code></pre>
</div>

<h1 class="contentHeading">Hooks</h1>
<div class="code-container">
  <pre><code>
<span class="comment">// useState</span>
<span class="keyword">const</span> [state, setState] = useState(initialValue);

<span class="comment">// useEffect</span>
useEffect(() => {
   <span class="comment">// Side effect code</span>
   <span class="keyword">return</span> () => {
      <span class="comment">// Cleanup code</span>
   };
}, [dependencies]);

<span class="comment">// useContext</span>
<span class="keyword">const</span> value = useContext(MyContext);

<span class="comment">// useRef</span>
<span class="keyword">const</span> ref = useRef(initialValue);

<span class="comment">// useMemo</span>
<span class="keyword">const</span> memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);

<span class="comment">// useCallback</span>
<span class="keyword">const</span> memoizedCallback = useCallback(() => {
   doSomething(a, b);
}, [a, b]);
  </code></pre>
</div>

<h1 class="contentHeading">Props and State</h1>
<div class="code-container">
  <pre><code>
<span class="comment">// Props in Functional Component</span>
<span class="keyword">function</span> <span class="function-name">Greeting</span>({ name, age }) {
   <span class="keyword">return</span> <span class="tag">&lt;div&gt;</span>Hello {name}, you are {age} years old<span class="tag">&lt;/div&gt;</span>;
}

<span class="comment">// Props in Class Component</span>
<span class="keyword">class</span> <span class="function-name">GreetingClass</span> <span class="keyword">extends</span> React.Component {
   render() {
      <span class="keyword">const</span> { name, age } = this.props;
      <span class="keyword">return</span> <span class="tag">&lt;div&gt;</span>Hello {name}, you are {age} years old<span class="tag">&lt;/div&gt;</span>;
   }
}

<span class="comment">// State in Functional Component</span>
<span class="keyword">function</span> <span class="function-name">Counter</span>() {
   <span class="keyword">const</span> [count, setCount] = useState(0);
   <span class="keyword">return</span> (
      <span class="tag">&lt;div&gt;</span>
         <span class="tag">&lt;p&gt;</span>Count: {count}<span class="tag">&lt;/p&gt;</span>
         <span class="tag">&lt;button</span> <span class="attr">onClick=</span>{() => setCount(count + 1)}<span class="tag">&gt;</span>Increment<span class="tag">&lt;/button&gt;</span>
      <span class="tag">&lt;/div&gt;</span>
   );
}

<span class="comment">// State in Class Component</span>
<span class="keyword">class</span> <span class="function-name">CounterClass</span> <span class="keyword">extends</span> React.Component {
   state = { count: 0 };
   
   increment = () => {
      this.setState({ count: this.state.count + 1 });
   };
   
   render() {
      <span class="keyword">return</span> (
         <span class="tag">&lt;div&gt;</span>
            <span class="tag">&lt;p&gt;</span>Count: {this.state.count}<span class="tag">&lt;/p&gt;</span>
            <span class="tag">&lt;button</span> <span class="attr">onClick=</span>{this.increment}<span class="tag">&gt;</span>Increment<span class="tag">&lt;/button&gt;</span>
         <span class="tag">&lt;/div&gt;</span>
      );
   }
}
  </code></pre>
</div>

<h1 class="contentHeading">Event Handling</h1>
<div class="code-container">
  <pre><code>
<span class="comment">// Basic Event Handling</span>
<span class="keyword">function</span> <span class="function-name">Button</span>() {
   <span class="keyword">const</span> handleClick = (event) => {
      console.log(<span class="string">'Button clicked'</span>, event);
   };
   
   <span class="keyword">return</span> <span class="tag">&lt;button</span> <span class="attr">onClick=</span>{handleClick}<span class="tag">&gt;</span>Click me<span class="tag">&lt;/button&gt;</span>;
}

<span class="comment">// Form Handling</span>
<span class="keyword">function</span> <span class="function-name">Form</span>() {
   <span class="keyword">const</span> [input, setInput] = useState(<span class="string">''</span>);
   
   <span class="keyword">const</span> handleSubmit = (event) => {
      event.preventDefault();
      console.log(<span class="string">'Form submitted:'</span>, input);
   };
   
   <span class="keyword">return</span> (
      <span class="tag">&lt;form</span> <span class="attr">onSubmit=</span>{handleSubmit}<span class="tag">&gt;</span>
         <span class="tag">&lt;input</span>
            <span class="attr">type=</span><span class="string">"text"</span>
            <span class="attr">value=</span>{input}
            <span class="attr">onChange=</span>{(e) => setInput(e.target.value)}
         <span class="tag">/&gt;</span>
         <span class="tag">&lt;button</span> <span class="attr">type=</span><span class="string">"submit"</span><span class="tag">&gt;</span>Submit<span class="tag">&lt;/button&gt;</span>
      <span class="tag">&lt;/form&gt;</span>
   );
}
  </code></pre>
</div>

<h1 class="contentHeading">Conditional Rendering</h1>
<div class="code-container">
  <pre><code>
<span class="comment">// If Statement</span>
<span class="keyword">function</span> <span class="function-name">Greeting</span>({ isLoggedIn }) {
   <span class="keyword">if</span> (isLoggedIn) {
      <span class="keyword">return</span> <span class="tag">&lt;h1&gt;</span>Welcome back!<span class="tag">&lt;/h1&gt;</span>;
   }
   <span class="keyword">return</span> <span class="tag">&lt;h1&gt;</span>Please sign in.<span class="tag">&lt;/h1&gt;</span>;
}

<span class="comment">// Ternary Operator</span>
<span class="keyword">function</span> <span class="function-name">Message</span>({ isError }) {
   <span class="keyword">return</span> (
      <span class="tag">&lt;div&gt;</span>
         {isError ? <span class="tag">&lt;p&gt;</span>Error occurred<span class="tag">&lt;/p&gt;</span> : <span class="tag">&lt;p&gt;</span>Success!<span class="tag">&lt;/p&gt;</span>}
      <span class="tag">&lt;/div&gt;</span>
   );
}

<span class="comment">// Logical && Operator</span>
<span class="keyword">function</span> <span class="function-name">Notification</span>({ message }) {
   <span class="keyword">return</span> (
      <span class="tag">&lt;div&gt;</span>
         {message && <span class="tag">&lt;p&gt;</span>{message}<span class="tag">&lt;/p&gt;</span>}
      <span class="tag">&lt;/div&gt;</span>
   );
}
  </code></pre>
</div>

<h1 class="contentHeading">Lists and Keys</h1>
<div class="code-container">
  <pre><code>
<span class="comment">// Rendering Lists</span>
<span class="keyword">function</span> <span class="function-name">NumberList</span>({ numbers }) {
   <span class="keyword">return</span> (
      <span class="tag">&lt;ul&gt;</span>
         {numbers.map((number) => (
            <span class="tag">&lt;li</span> <span class="attr">key=</span>{number.toString()}<span class="tag">&gt;</span>
               {number}
            <span class="tag">&lt;/li&gt;</span>
         ))}
      <span class="tag">&lt;/ul&gt;</span>
   );
}

<span class="comment">// Keys in Components</span>
<span class="keyword">function</span> <span class="function-name">TodoList</span>({ todos }) {
   <span class="keyword">return</span> (
      <span class="tag">&lt;ul&gt;</span>
         {todos.map((todo) => (
            <span class="tag">&lt;TodoItem</span>
               <span class="attr">key=</span>{todo.id}
               <span class="attr">todo=</span>{todo}
            <span class="tag">/&gt;</span>
         ))}
      <span class="tag">&lt;/ul&gt;</span>
   );
}
  </code></pre>
</div>

<h1 class="contentHeading">Context API</h1>
<div class="code-container">
  <pre><code>
<span class="comment">// Creating Context</span>
<span class="keyword">const</span> ThemeContext = React.createContext(<span class="string">'light'</span>);

<span class="comment">// Provider Component</span>
<span class="keyword">function</span> <span class="function-name">App</span>() {
   <span class="keyword">return</span> (
      <span class="tag">&lt;ThemeContext.Provider</span> <span class="attr">value=</span><span class="string">"dark"</span><span class="tag">&gt;</span>
         <span class="tag">&lt;Toolbar</span> <span class="tag">/&gt;</span>
      <span class="tag">&lt;/ThemeContext.Provider&gt;</span>
   );
}

<span class="comment">// Consumer Component</span>
<span class="keyword">function</span> <span class="function-name">ThemedButton</span>() {
   <span class="keyword">const</span> theme = useContext(ThemeContext);
   <span class="keyword">return</span> <span class="tag">&lt;button</span> <span class="attr">className=</span>{theme}<span class="tag">&gt;</span>Themed Button<span class="tag">&lt;/button&gt;</span>;
}
  </code></pre>
</div>

<h1 class="contentHeading">Error Boundaries</h1>
<div class="code-container">
  <pre><code>
<span class="keyword">class</span> <span class="function-name">ErrorBoundary</span> <span class="keyword">extends</span> React.Component {
   state = { hasError: <span class="keyword">false</span> };
   
   static getDerivedStateFromError(error) {
      <span class="keyword">return</span> { hasError: <span class="keyword">true</span> };
   }
   
   componentDidCatch(error, errorInfo) {
      console.log(error, errorInfo);
   }
   
   render() {
      <span class="keyword">if</span> (this.state.hasError) {
         <span class="keyword">return</span> <span class="tag">&lt;h1&gt;</span>Something went wrong.<span class="tag">&lt;/h1&gt;</span>;
      }
      <span class="keyword">return</span> this.props.children;
   }
}
  </code></pre>
</div>

<h1 class="contentHeading">Summary</h1>
<p>This cheatsheet covers the fundamental concepts of React development. Remember these key points:</p>
<div style="background-color: #EDEDED; padding: 10px; border-radius: 5px; margin-bottom: 20px;">
<ul style="margin: 0;">
  <li>Components are the building blocks of React applications</li>
  <li>Hooks provide a way to use state and other React features in functional components</li>
  <li>Props are used to pass data down the component tree</li>
  <li>State is used to manage component-specific data</li>
  <li>Event handling follows camelCase naming convention</li>
  <li>Conditional rendering can be done using if statements, ternary operators, or logical &&</li>
  <li>Lists require unique keys for efficient rendering</li>
  <li>Context API helps manage global state</li>
  <li>Error boundaries catch JavaScript errors in the component tree</li>
</ul>
</div>
`;  