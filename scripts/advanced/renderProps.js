docs.renderProps = `
<h1 class="heading">ReactJS − Render Props</h1>

<h1 class="contentHeading">What are Render Props?</h1>
<p>Render Props is a pattern in React where a component's children are a function that returns React elements. This pattern allows components to share code and state logic with other components.</p>

<div style="background-color: #EDEDED; padding: 10px; border-radius: 5px; margin-bottom: 20px;">
<ul style="margin: 0;">
  <li>A technique for sharing code between components</li>
  <li>Uses a prop whose value is a function</li>
  <li>Allows components to be more reusable and flexible</li>
  <li>Alternative to Higher-Order Components (HOCs)</li>
</ul>
</div>

<h1 class="subHeading">How to Use Render Props</h1>
<p>Here's a basic example of how to implement and use render props:</p>

<div class="code-container">
  <pre><code>
<span class="comment">// Component with render prop</span>
<span class="keyword">class</span> <span class="function-name">MouseTracker</span> <span class="keyword">extends</span> React.Component {
   <span class="keyword">constructor</span>(props) {
      <span class="keyword">super</span>(props);
      this.state = { x: <span class="number">0</span>, y: <span class="number">0</span> };
   }

   handleMouseMove = (event) => {
      this.setState({
         x: event.clientX,
         y: event.clientY
      });
   };

   render() {
      <span class="keyword">return</span> (
         <span class="tag">&lt;div</span> <span class="attr">style=</span>{{ height: <span class="string">'100vh'</span> }} <span class="attr">onMouseMove=</span>{this.handleMouseMove}<span class="tag">&gt;</span>
            {this.props.render(this.state)}
         <span class="tag">&lt;/div&gt;</span>
      );
   }
}

<span class="comment">// Using the MouseTracker component</span>
<span class="keyword">function</span> <span class="function-name">App</span>() {
   <span class="keyword">return</span> (
      <span class="tag">&lt;div&gt;</span>
         <span class="tag">&lt;h1&gt;</span>Move the mouse around!<span class="tag">&lt;/h1&gt;</span>
         <span class="tag">&lt;MouseTracker</span>
            <span class="attr">render=</span>{({ x, y }) => (
               <span class="tag">&lt;p&gt;</span>
                  The current mouse position is ({x}, {y})
               <span class="tag">&lt;/p&gt;</span>
            )}
         <span class="tag">/&gt;</span>
      <span class="tag">&lt;/div&gt;</span>
   );
}
  </code></pre>
</div>

<h1 class="subHeading">Applying Render Props</h1>
<p>Let's look at more practical examples of using render props in different scenarios:</p>

<div class="code-container">
  <pre><code>
<span class="comment">// Data fetching component with render prop</span>
<span class="keyword">class</span> <span class="function-name">DataFetcher</span> <span class="keyword">extends</span> React.Component {
   state = {
      data: <span class="keyword">null</span>,
      loading: <span class="keyword">true</span>,
      error: <span class="keyword">null</span>
   };

   componentDidMount() {
      fetch(this.props.url)
         .then(response => response.json())
         .then(data => this.setState({ data, loading: <span class="keyword">false</span> }))
         .catch(error => this.setState({ error, loading: <span class="keyword">false</span> }));
   }

   render() {
      <span class="keyword">return</span> this.props.children(this.state);
   }
}

<span class="comment">// Using the DataFetcher component</span>
<span class="keyword">function</span> <span class="function-name">UserProfile</span>() {
   <span class="keyword">return</span> (
      <span class="tag">&lt;DataFetcher</span> <span class="attr">url=</span><span class="string">"/api/user"</span><span class="tag">&gt;</span>
         {({ data, loading, error }) => {
            <span class="keyword">if</span> (loading) <span class="keyword">return</span> <span class="tag">&lt;div&gt;</span>Loading...<span class="tag">&lt;/div&gt;</span>;
            <span class="keyword">if</span> (error) <span class="keyword">return</span> <span class="tag">&lt;div&gt;</span>Error: {error.message}<span class="tag">&lt;/div&gt;</span>;
            <span class="keyword">return</span> (
               <span class="tag">&lt;div&gt;</span>
                  <span class="tag">&lt;h2&gt;</span>{data.name}<span class="tag">&lt;/h2&gt;</span>
                  <span class="tag">&lt;p&gt;</span>{data.email}<span class="tag">&lt;/p&gt;</span>
               <span class="tag">&lt;/div&gt;</span>
            );
         }}
      <span class="tag">&lt;/DataFetcher&gt;</span>
   );
}

<span class="comment">// Toggle component with render prop</span>
<span class="keyword">class</span> <span class="function-name">Toggle</span> <span class="keyword">extends</span> React.Component {
   state = { on: <span class="keyword">false</span> };

   toggle = () => {
      this.setState(prevState => ({ on: !prevState.on }));
   };

   render() {
      <span class="keyword">return</span> this.props.children({
         on: this.state.on,
         toggle: this.toggle
      });
   }
}

<span class="comment">// Using the Toggle component</span>
<span class="keyword">function</span> <span class="function-name">ToggleButton</span>() {
   <span class="keyword">return</span> (
      <span class="tag">&lt;Toggle&gt;</span>
         {({ on, toggle }) => (
            <span class="tag">&lt;button</span> <span class="attr">onClick=</span>{toggle}<span class="tag">&gt;</span>
               {on ? <span class="string">'ON'</span> : <span class="string">'OFF'</span>}
            <span class="tag">&lt;/button&gt;</span>
         )}
      <span class="tag">&lt;/Toggle&gt;</span>
   );
}
  </code></pre>
</div>

<h1 class="subHeading">Summary</h1>
<p>Render Props is a powerful pattern in React that enables code reuse and component composition through function props. It provides a flexible way to share behavior between components while maintaining explicit data flow. The pattern is particularly useful for sharing complex state logic or behavior that needs to be customized by the consuming component. While render props offer great flexibility, they should be used judiciously as they can lead to deeply nested callbacks. For simpler state management scenarios, React Hooks might be a more straightforward alternative.</p>

<p>Best practices when using render props:</p>
<div style="background-color: #EDEDED; padding: 10px; border-radius: 5px; margin-bottom: 20px;">
<ul style="margin: 0;">
  <li>Use descriptive prop names (e.g., <code>render</code>, <code>children</code>)</li>
  <li>Keep the render prop component focused on a single responsibility</li>
  <li>Consider using the <code>children</code> prop for cleaner syntax</li>
  <li>Document the expected shape of the data passed to the render function</li>
  <li>Use TypeScript or PropTypes to ensure type safety</li>
</ul>
</div>

<p>Remember that while render props are powerful, they can lead to "callback hell" if overused. Consider using React Hooks as an alternative in some cases, especially for simpler state management scenarios.</p>
`;  