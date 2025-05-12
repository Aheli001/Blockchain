docs.webComponents = `
<h1 class="heading">ReactJS − Web Components</h1>

<h1 class="contentHeading">What are Web Components?</h1>
<p>Web Components are a set of web platform APIs that allow you to create new custom, reusable, encapsulated HTML tags to use in web pages and web apps. They work across modern browsers and can be used with any JavaScript library or framework that works with HTML.</p>

<div style="background-color: #EDEDED; padding: 10px; border-radius: 5px; margin-bottom: 20px;">
<ul style="margin: 0;">
  <li>Custom Elements: Define new HTML elements</li>
  <li>Shadow DOM: Encapsulated DOM and styling</li>
  <li>HTML Templates: Reusable markup templates</li>
  <li>ES Modules: Standard JavaScript modules</li>
</ul>
</div>

<h1 class="contentHeading">Using Web Components in React</h1>
<p>React can work with Web Components, but there are some important considerations to keep in mind:</p>

<div class="code-container">
  <pre><code>
<span class="comment">// Define a custom Web Component</span>
<span class="keyword">class</span> <span class="function-name">MyCustomElement</span> <span class="keyword">extends</span> HTMLElement {
   <span class="keyword">constructor</span>() {
      <span class="keyword">super</span>();
      <span class="keyword">const</span> shadow = this.attachShadow({ mode: <span class="string">'open'</span> });
      shadow.innerHTML = 
         <span class="tag">&lt;style&gt;</span>
            .custom-element {
               padding: 20px;
               background: #f0f0f0;
               border-radius: 5px;
            }
         <span class="tag">&lt;/style&gt;</span>
         <span class="tag">&lt;div</span> <span class="attr">class=</span><span class="string">"custom-element"</span><span class="tag">&gt;</span>
            <span class="tag">&lt;slot&gt;</span><span class="tag">&lt;/slot&gt;</span>
         <span class="tag">&lt;/div&gt;</span>
      ;
   }
}

<span class="comment">// Register the custom element</span>
customElements.define(<span class="string">'my-custom-element'</span>, MyCustomElement);
  </code></pre>
</div>

<h1 class="contentHeading">React Component Using Web Component</h1>
<p>Here's how to use a Web Component in a React application:</p>

<div class="code-container">
  <pre><code>
<span class="keyword">import</span> React <span class="keyword">from</span> <span class="string">'react'</span>;

<span class="keyword">class</span> <span class="function-name">WebComponentWrapper</span> <span class="keyword">extends</span> React.Component {
   <span class="keyword">constructor</span>(props) {
      <span class="keyword">super</span>(props);
      this.myRef = React.createRef();
   }

   componentDidMount() {
      <span class="comment">// Access the Web Component's methods and properties</span>
      <span class="keyword">const</span> element = this.myRef.current;
      element.addEventListener(<span class="string">'custom-event'</span>, this.handleCustomEvent);
   }

   componentWillUnmount() {
      <span class="keyword">const</span> element = this.myRef.current;
      element.removeEventListener(<span class="string">'custom-event'</span>, this.handleCustomEvent);
   }

   handleCustomEvent = (event) => {
      console.log(<span class="string">'Custom event received:'</span>, event.detail);
   };

   render() {
      <span class="keyword">return</span> (
         <span class="tag">&lt;my-custom-element</span> <span class="attr">ref=</span>{this.myRef}<span class="tag">&gt;</span>
            <span class="tag">&lt;h2&gt;</span>Hello from React!<span class="tag">&lt;/h2&gt;</span>
            <span class="tag">&lt;p&gt;</span>This content is slotted into the Web Component<span class="tag">&lt;/p&gt;</span>
         <span class="tag">&lt;/my-custom-element&gt;</span>
      );
   }
}
  </code></pre>
</div>

<h1 class="contentHeading">Handling Events and Properties</h1>
<p>Working with Web Component events and properties in React requires special handling:</p>

<div class="code-container">
  <pre><code>
<span class="keyword">function</span> <span class="function-name">WebComponentWithProps</span>() {
   <span class="keyword">const</span> [value, setValue] = React.useState(<span class="string">''</span>);
   <span class="keyword">const</span> elementRef = React.useRef();

   React.useEffect(() => {
      <span class="keyword">const</span> element = elementRef.current;
      
      <span class="comment">// Set properties using setAttribute</span>
      element.setAttribute(<span class="string">'data-value'</span>, value);
      
      <span class="comment">// Listen for events</span>
      element.addEventListener(<span class="string">'value-changed'</span>, (e) => {
         setValue(e.detail);
      });

      <span class="keyword">return</span> () => {
         element.removeEventListener(<span class="string">'value-changed'</span>, (e) => {
            setValue(e.detail);
         });
      };
   }, [value]);

   <span class="keyword">return</span> (
      <span class="tag">&lt;div&gt;</span>
         <span class="tag">&lt;my-custom-input</span>
            <span class="attr">ref=</span>{elementRef}
            <span class="attr">data-value=</span>{value}
         <span class="tag">/&gt;</span>
         <span class="tag">&lt;p&gt;</span>Current value: {value}<span class="tag">&lt;/p&gt;</span>
      <span class="tag">&lt;/div&gt;</span>
   );
}
  </code></pre>
</div>

<h1 class="contentHeading">Best Practices</h1>
<div style="background-color: #EDEDED; padding: 10px; border-radius: 5px; margin-bottom: 20px;">
<ul style="margin: 0;">
  <li>Use refs to access Web Component instances</li>
  <li>Handle events using addEventListener/removeEventListener</li>
  <li>Set properties using setAttribute/getAttribute</li>
  <li>Use proper cleanup in componentWillUnmount/useEffect cleanup</li>
  <li>Consider using a wrapper component for complex Web Components</li>
  <li>Test Web Components in isolation before integrating with React</li>
</ul>
</div>

<h1 class="contentHeading">Summary</h1>
<p>Web Components and React can work together effectively, but they require careful handling of events, properties, and lifecycle methods. While React's virtual DOM and Web Components' Shadow DOM serve different purposes, they can complement each other in building modular, reusable UI components. When using Web Components in React, remember to properly handle event listeners, manage component lifecycle, and use appropriate methods for setting properties and attributes. This integration allows you to leverage the benefits of both technologies while maintaining clean, maintainable code.</p>
`;  