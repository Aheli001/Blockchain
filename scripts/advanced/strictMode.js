docs.strictMode = `
<h1 class="heading">ReactJS − Strict Mode</h1>

<h1 class="contentHeading">What is Strict Mode?</h1>
<p>Strict Mode is a development tool in React that helps identify potential problems in your application. It doesn't render any visible UI, but it activates additional checks and warnings for its descendants.</p>

<div style="background-color: #EDEDED; padding: 10px; border-radius: 5px; margin-bottom: 20px;">
<ul style="margin: 0;">
  <li>Identifies unsafe lifecycle methods</li>
  <li>Warns about legacy string ref API usage</li>
  <li>Detects deprecated findDOMNode usage</li>
  <li>Identifies unexpected side effects</li>
  <li>Warns about legacy context API</li>
  <li>Helps prepare for reusable state</li>
</ul>
</div>

<h1 class="contentHeading">Unsafe Lifecycle Usage</h1>
<p>Strict Mode helps identify unsafe lifecycle methods that will be deprecated in future React versions:</p>

<div class="code-container">
  <pre><code>
<span class="comment">// Unsafe lifecycle methods</span>
<span class="keyword">class</span> <span class="function-name">UnsafeComponent</span> <span class="keyword">extends</span> React.Component {
   <span class="comment">// These methods will trigger warnings in Strict Mode</span>
   componentWillMount() { ... }
   componentWillReceiveProps() { ... }
   componentWillUpdate() { ... }

   <span class="comment">// Safe alternatives</span>
   static getDerivedStateFromProps() { ... }
   getSnapshotBeforeUpdate() { ... }
   componentDidUpdate() { ... }
}
  </code></pre>
</div>

<h1 class="contentHeading">Legacy Ref API Usage</h1>
<p>Strict Mode warns about the use of the legacy string ref API, encouraging the use of createRef or useRef instead:</p>

<div class="code-container">
  <pre><code>
<span class="comment">// Legacy string ref (will trigger warning)</span>
<span class="keyword">class</span> <span class="function-name">LegacyRefComponent</span> <span class="keyword">extends</span> React.Component {
   render() {
      <span class="keyword">return</span> <span class="tag">&lt;div</span> <span class="attr">ref=</span><span class="string">"myRef"</span><span class="tag">&gt;</span>Legacy Ref<span class="tag">&lt;/div&gt;</span>;
   }
}

<span class="comment">// Modern ref usage (recommended)</span>
<span class="keyword">class</span> <span class="function-name">ModernRefComponent</span> <span class="keyword">extends</span> React.Component {
   myRef = React.createRef();

   render() {
      <span class="keyword">return</span> <span class="tag">&lt;div</span> <span class="attr">ref=</span>{this.myRef}<span class="tag">&gt;</span>Modern Ref<span class="tag">&lt;/div&gt;</span>;
   }
}
  </code></pre>
</div>

<h1 class="contentHeading">Legacy findDOMNode Usage</h1>
<p>Strict Mode warns about the use of findDOMNode, which is considered legacy and should be replaced with refs:</p>

<div class="code-container">
  <pre><code>
<span class="comment">// Legacy findDOMNode usage (will trigger warning)</span>
<span class="keyword">class</span> <span class="function-name">LegacyDOMComponent</span> <span class="keyword">extends</span> React.Component {
   componentDidMount() {
      <span class="keyword">const</span> node = ReactDOM.findDOMNode(this);
      <span class="comment">// Do something with node</span>
   }
}

<span class="comment">// Modern approach using refs</span>
<span class="keyword">class</span> <span class="function-name">ModernDOMComponent</span> <span class="keyword">extends</span> React.Component {
   nodeRef = React.createRef();

   componentDidMount() {
      <span class="keyword">const</span> node = this.nodeRef.current;
      <span class="comment">// Do something with node</span>
   }

   render() {
      <span class="keyword">return</span> <span class="tag">&lt;div</span> <span class="attr">ref=</span>{this.nodeRef}<span class="tag">&gt;</span>Modern Approach<span class="tag">&lt;/div&gt;</span>;
   }
}
  </code></pre>
</div>

<h1 class="subHeading">Side Effects</h1>
<p>Strict Mode helps identify unexpected side effects by intentionally double-invoking certain lifecycle methods and hooks:</p>

<div class="code-container">
  <pre><code>
<span class="comment">// Component with side effects</span>
<span class="keyword">class</span> <span class="function-name">SideEffectComponent</span> <span class="keyword">extends</span> React.Component {
   componentDidMount() {
      <span class="comment">// This will be called twice in Strict Mode</span>
      console.log(<span class="string">'Component mounted'</span>);
   }
}

<span class="comment">// Function component with side effects</span>
<span class="keyword">function</span> <span class="function-name">EffectComponent</span>() {
   React.useEffect(() => {
      <span class="comment">// This will be called twice in Strict Mode</span>
      console.log(<span class="string">'Effect ran'</span>);
      
      <span class="keyword">return</span> () => {
         console.log(<span class="string">'Cleanup'</span>);
      };
   }, []);

   <span class="keyword">return</span> <span class="tag">&lt;div&gt;</span>Effect Component<span class="tag">&lt;/div&gt;</span>;
}
  </code></pre>
</div>

<h1 class="subHeading">Legacy Context API</h1>
<p>Strict Mode warns about the use of the legacy context API, encouraging the use of the modern Context API:</p>

<div class="code-container">
  <pre><code>
<span class="comment">// Legacy context API (will trigger warning)</span>
<span class="keyword">class</span> <span class="function-name">LegacyContextComponent</span> <span class="keyword">extends</span> React.Component {
   static childContextTypes = {
      theme: PropTypes.string
   };

   getChildContext() {
      <span class="keyword">return</span> { theme: <span class="string">'dark'</span> };
   }
}

<span class="comment">// Modern Context API (recommended)</span>
<span class="keyword">const</span> ThemeContext = React.createContext(<span class="string">'light'</span>);

<span class="keyword">function</span> <span class="function-name">ModernContextComponent</span>() {
   <span class="keyword">return</span> (
      <span class="tag">&lt;ThemeContext.Provider</span> <span class="attr">value=</span><span class="string">"dark"</span><span class="tag">&gt;</span>
         <span class="tag">&lt;ChildComponent</span> <span class="tag">/&gt;</span>
      <span class="tag">&lt;/ThemeContext.Provider&gt;</span>
   );
}
  </code></pre>
</div>

<h1 class="subHeading">Reusable State</h1>
<p>Strict Mode helps prepare for future React features by ensuring components can safely unmount and remount:</p>

<div class="code-container">
  <pre><code>
<span class="comment">// Component that handles reusable state properly</span>
<span class="keyword">class</span> <span class="function-name">ReusableStateComponent</span> <span class="keyword">extends</span> React.Component {
   state = {
      count: 0
   };

   componentDidMount() {
      <span class="comment">// Proper cleanup in componentWillUnmount</span>
      this.interval = setInterval(() => {
         this.setState(prev => ({ count: prev.count + 1 }));
      }, 1000);
   }

   componentWillUnmount() {
      clearInterval(this.interval);
   }

   render() {
      <span class="keyword">return</span> <span class="tag">&lt;div&gt;</span>Count: {this.state.count}<span class="tag">&lt;/div&gt;</span>;
   }
}
  </code></pre>
</div>

<h1 class="subHeading">Summary</h1>
<p>Strict Mode is a valuable development tool that helps identify potential problems in your React application. It warns about deprecated features, unsafe lifecycle methods, and helps prepare your components for future React features. By using Strict Mode during development, you can catch and fix issues early, leading to more robust and maintainable code. Remember that Strict Mode only runs in development and doesn't affect the production build.</p>
`;  