docs.reactWithoutEchma = `
<h1 class="heading">ReactJS − React without ES6/ECMAScript</h1>

<h1 class="contentHeading">Create React Class (create-react-class)</h1>
<p>Before ES6 classes were introduced, React components were created using the <code>create-react-class</code> module. This approach is still useful when you need to maintain compatibility with older codebases or when working in environments that don't support ES6 classes.</p>

<div class="code-container">
  <pre><code>
<span class="keyword">var</span> createReactClass = require(<span class="string">'create-react-class'</span>);

<span class="keyword">var</span> <span class="function-name">Greeting</span> = createReactClass({
   render: <span class="keyword">function</span>() {
      <span class="keyword">return</span> (
         <span class="tag">&lt;h1&gt;</span>Hello, {this.props.name}<span class="tag">&lt;/h1&gt;</span>
      );
   }
});

<span class="keyword">var</span> <span class="function-name">App</span> = createReactClass({
   render: <span class="keyword">function</span>() {
      <span class="keyword">return</span> (
         <span class="tag">&lt;div&gt;</span>
            <span class="tag">&lt;Greeting</span> <span class="attr">name=</span><span class="string">"John"</span> <span class="tag">/&gt;</span>
         <span class="tag">&lt;/div&gt;</span>
      );
   }
});
  </code></pre>
</div>

<p>Key differences from ES6 classes:</p>
<ul>
  <li>Uses <code>createReactClass</code> instead of <code>class</code> syntax</li>
  <li>Methods are defined as object properties</li>
  <li>Automatic binding of methods to the component instance</li>
  <li>No need to use <code>this</code> binding in constructor</li>
</ul>

<h1 class="contentHeading">Set Default Value for Props (getDefaultProps)</h1>
<p>In the pre-ES6 approach, default props are defined using the <code>getDefaultProps</code> method. This method returns an object containing the default values for props when they are not provided by the parent component.</p>

<div class="code-container">
  <pre><code>
<span class="keyword">var</span> createReactClass = require(<span class="string">'create-react-class'</span>);

<span class="keyword">var</span> <span class="function-name">UserProfile</span> = createReactClass({
   getDefaultProps: <span class="keyword">function</span>() {
      <span class="keyword">return</span> {
         name: <span class="string">'Guest'</span>,
         age: <span class="number">18</span>,
         isActive: <span class="keyword">true</span>
      };
   },

   render: <span class="keyword">function</span>() {
      <span class="keyword">return</span> (
         <span class="tag">&lt;div&gt;</span>
            <span class="tag">&lt;p&gt;</span>Name: {this.props.name}<span class="tag">&lt;/p&gt;</span>
            <span class="tag">&lt;p&gt;</span>Age: {this.props.age}<span class="tag">&lt;/p&gt;</span>
            <span class="tag">&lt;p&gt;</span>Status: {this.props.isActive ? <span class="string">'Active'</span> : <span class="string">'Inactive'</span>}<span class="tag">&lt;/p&gt;</span>
         <span class="tag">&lt;/div&gt;</span>
      );
   }
});

<span class="comment">// Usage examples:</span>
<span class="tag">&lt;UserProfile</span> <span class="tag">/&gt;</span> <span class="comment">// Uses all default values</span>
<span class="tag">&lt;UserProfile</span> <span class="attr">name=</span><span class="string">"Alice"</span> <span class="attr">age=</span><span class="number">25</span> <span class="tag">/&gt;</span> <span class="comment">// Overrides some defaults</span>
  </code></pre>
</div>

<h1 class="contentHeading">Set Initial State (getInitialState)</h1>
<p>The <code>getInitialState</code> method is used to define the initial state of a component in the pre-ES6 approach. This method returns an object containing the initial state values.</p>

<div class="code-container">
  <pre><code>
<span class="keyword">var</span> createReactClass = require(<span class="string">'create-react-class'</span>);

<span class="keyword">var</span> <span class="function-name">Counter</span> = createReactClass({
   getInitialState: <span class="keyword">function</span>() {
      <span class="keyword">return</span> {
         count: <span class="number">0</span>
      };
   },

   increment: <span class="keyword">function</span>() {
      this.setState({
         count: this.state.count + <span class="number">1</span>
      });
   },

   decrement: <span class="keyword">function</span>() {
      this.setState({
         count: this.state.count - <span class="number">1</span>
      });
   },

   render: <span class="keyword">function</span>() {
      <span class="keyword">return</span> (
         <span class="tag">&lt;div&gt;</span>
            <span class="tag">&lt;h2&gt;</span>Counter: {this.state.count}<span class="tag">&lt;/h2&gt;</span>
            <span class="tag">&lt;button</span> <span class="attr">onClick=</span>{this.increment}<span class="tag">&gt;</span>+<span class="tag">&lt;/button&gt;</span>
            <span class="tag">&lt;button</span> <span class="attr">onClick=</span>{this.decrement}<span class="tag">&gt;</span>-<span class="tag">&lt;/button&gt;</span>
         <span class="tag">&lt;/div&gt;</span>
      );
   }
});
  </code></pre>
</div>

<p>Key points about state management in pre-ES6 React:</p>
<ul>
  <li><code>getInitialState</code> is called once when the component is created</li>
  <li>State updates are done using <code>this.setState()</code></li>
  <li>Methods are automatically bound to the component instance</li>
  <li>State is accessed via <code>this.state</code></li>
</ul>

<p>Note: While these pre-ES6 approaches are still supported, it's recommended to use ES6 classes and modern React features in new projects for better maintainability and compatibility with the latest React features.</p>
`;  