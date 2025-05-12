docs.refsAndDom = `
<h1 class="heading">ReactJS − Refs and the DOM</h1>

<h1 class="contentHeading">What are Refs?</h1>
<p>Refs provide a way to access DOM nodes or React elements created in the render method. They are useful when you need to:</p>

<div style="background-color: #EDEDED; padding: 10px; border-radius: 5px; margin-bottom: 20px;">
<ul style="margin: 0;">
  <li>Manage focus, text selection, or media playback</li>
  <li>Trigger imperative animations</li>
  <li>Integrate with third-party DOM libraries</li>
  <li>Access DOM measurements</li>
</ul>
</div>

<h1 class="subHeading">Signature of the createRef Method</h1>
<p>The <code>createRef</code> method creates a ref object that can be attached to React elements via the ref attribute. Here's how it works:</p>

<div class="code-container">
  <pre><code>
<span class="keyword">import</span> React, { createRef } <span class="keyword">from</span> <span class="string">'react'</span>;

<span class="keyword">class</span> <span class="function-name">MyComponent</span> <span class="keyword">extends</span> React.Component {
   <span class="keyword">constructor</span>(props) {
      <span class="keyword">super</span>(props);
      this.myRef = createRef();
   }

   render() {
      <span class="keyword">return</span> <span class="tag">&lt;div</span> <span class="attr">ref=</span>{this.myRef}<span class="tag">&gt;</span>Hello<span class="tag">&lt;/div&gt;</span>;
   }
}
  </code></pre>
</div>

<p>Key points about <code>createRef</code>:</p>
<div style="background-color: #EDEDED; padding: 10px; border-radius: 5px; margin-bottom: 20px;">
<ul style="margin: 0;">
  <li>Returns a mutable ref object</li>
  <li>The ref object has a <code>current</code> property that holds the referenced DOM element</li>
  <li>Refs are created in the constructor to ensure they persist throughout the component's lifecycle</li>
  <li>Can be used with both class and functional components</li>
</ul>
</div>

<h1 class="subHeading">Applying Refs</h1>
<p>Refs can be applied to both DOM elements and React components. Here are examples of both:</p>

<div class="code-container">
  <pre><code>
<span class="comment">// Ref to a DOM element</span>
<span class="keyword">class</span> <span class="function-name">TextInput</span> <span class="keyword">extends</span> React.Component {
   <span class="keyword">constructor</span>(props) {
      <span class="keyword">super</span>(props);
      this.inputRef = createRef();
   }

   focusInput = () => {
      this.inputRef.current.focus();
   };

   render() {
      <span class="keyword">return</span> (
         <span class="tag">&lt;div&gt;</span>
            <span class="tag">&lt;input</span>
               <span class="attr">type=</span><span class="string">"text"</span>
               <span class="attr">ref=</span>{this.inputRef}
            <span class="tag">/&gt;</span>
            <span class="tag">&lt;button</span> <span class="attr">onClick=</span>{this.focusInput}<span class="tag">&gt;</span>
               Focus Input
            <span class="tag">&lt;/button&gt;</span>
         <span class="tag">&lt;/div&gt;</span>
      );
   }
}

<span class="comment">// Ref to a React component</span>
<span class="keyword">class</span> <span class="function-name">ParentComponent</span> <span class="keyword">extends</span> React.Component {
   <span class="keyword">constructor</span>(props) {
      <span class="keyword">super</span>(props);
      this.childRef = createRef();
   }

   handleClick = () => {
      this.childRef.current.someMethod();
   };

   render() {
      <span class="keyword">return</span> (
         <span class="tag">&lt;div&gt;</span>
            <span class="tag">&lt;ChildComponent</span> <span class="attr">ref=</span>{this.childRef} <span class="tag">/&gt;</span>
            <span class="tag">&lt;button</span> <span class="attr">onClick=</span>{this.handleClick}<span class="tag">&gt;</span>
               Call Child Method
            <span class="tag">&lt;/button&gt;</span>
         <span class="tag">&lt;/div&gt;</span>
      );
   }
}
  </code></pre>
</div>

<h1 class="subHeading">Use Cases of createRef</h1>
<p>Here are some common use cases for refs in React applications:</p>

<div class="code-container">
  <pre><code>
<span class="comment">// Managing focus</span>
<span class="keyword">class</span> <span class="function-name">FocusExample</span> <span class="keyword">extends</span> React.Component {
   <span class="keyword">constructor</span>(props) {
      <span class="keyword">super</span>(props);
      this.inputRef = createRef();
   }

   componentDidMount() {
      this.inputRef.current.focus();
   }

   render() {
      <span class="keyword">return</span> <span class="tag">&lt;input</span> <span class="attr">ref=</span>{this.inputRef} <span class="tag">/&gt;</span>;
   }
}

<span class="comment">// Measuring DOM nodes</span>
<span class="keyword">class</span> <span class="function-name">MeasureExample</span> <span class="keyword">extends</span> React.Component {
   <span class="keyword">constructor</span>(props) {
      <span class="keyword">super</span>(props);
      this.measureRef = createRef();
   }

   componentDidMount() {
      <span class="keyword">const</span> height = this.measureRef.current.clientHeight;
      <span class="keyword">const</span> width = this.measureRef.current.clientWidth;
      console.log(<span class="string">'Dimensions:'</span>, { height, width });
   }

   render() {
      <span class="keyword">return</span> <span class="tag">&lt;div</span> <span class="attr">ref=</span>{this.measureRef}<span class="tag">&gt;</span>Measure me<span class="tag">&lt;/div&gt;</span>;
   }
}

<span class="comment">// Integrating with third-party libraries</span>
<span class="keyword">class</span> <span class="function-name">ChartExample</span> <span class="keyword">extends</span> React.Component {
   <span class="keyword">constructor</span>(props) {
      <span class="keyword">super</span>(props);
      this.chartRef = createRef();
   }

   componentDidMount() {
      <span class="keyword">const</span> chart = <span class="keyword">new</span> Chart(this.chartRef.current, {
         type: <span class="string">'line'</span>,
         data: this.props.data
      });
   }

   render() {
      <span class="keyword">return</span> <span class="tag">&lt;canvas</span> <span class="attr">ref=</span>{this.chartRef} <span class="tag">/&gt;</span>;
   }
}
  </code></pre>
</div>

<h1 class="subHeading">Summary</h1>
<p>Refs are a powerful feature in React that allow you to:</p>

<div style="background-color: #EDEDED; padding: 10px; border-radius: 5px; margin-bottom: 20px;">
<ul style="margin: 0;">
  <li>Access DOM nodes directly</li>
  <li>Integrate with third-party libraries</li>
  <li>Manage focus and text selection</li>
  <li>Measure DOM elements</li>
  <li>Trigger imperative animations</li>
</ul>
</div>

<p>Best practices when using refs:</p>
<div style="background-color: #EDEDED; padding: 10px; border-radius: 5px; margin-bottom: 20px;">
<ul style="margin: 0;">
  <li>Use refs sparingly - they break the declarative nature of React</li>
  <li>Consider using callback refs for dynamic refs</li>
  <li>Don't use refs for what can be done declaratively</li>
  <li>Remember that refs are not available until after the component mounts</li>
  <li>Use <code>useRef</code> hook in functional components</li>
</ul>
</div>

<p>Remember that while refs are powerful, they should be used as a last resort. Most of the time, you can achieve what you need using React's declarative approach with state and props.</p>
`;  