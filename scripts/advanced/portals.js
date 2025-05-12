docs.portals = `
<h1 class="heading">ReactJS − Portals</h1>

<h1 class="contentHeading">Concept and Usage of Portals</h1>
<p>React Portals provide a way to render children into a DOM node that exists outside the DOM hierarchy of the parent component. This is particularly useful when you need to render a component at a different place in the DOM tree while maintaining its position in the React component hierarchy.</p>

<p>Common use cases for portals include:</p>
<ul>
  <li>Modal dialogs</li>
  <li>Tooltips</li>
  <li>Popovers</li>
  <li>Loading spinners</li>
  <li>Any UI element that needs to "break out" of its container</li>
</ul>

<div class="code-container">
  <pre><code>
<span class="keyword">import</span> React <span class="keyword">from</span> <span class="string">'react'</span>;
<span class="keyword">import</span> ReactDOM <span class="keyword">from</span> <span class="string">'react-dom'</span>;

<span class="keyword">function</span> <span class="function-name">Modal</span>({ children }) {
   <span class="keyword">return</span> ReactDOM.createPortal(
      children,
      document.getElementById(<span class="string">'modal-root'</span>)
   );
}

<span class="keyword">function</span> <span class="function-name">App</span>() {
   <span class="keyword">return</span> (
      <span class="tag">&lt;div&gt;</span>
         <span class="tag">&lt;Modal&gt;</span>
            <span class="tag">&lt;div</span> <span class="attr">className=</span><span class="string">"modal-content"</span><span class="tag">&gt;</span>
               This content will be rendered in the modal-root div
            <span class="tag">&lt;/div&gt;</span>
         <span class="tag">&lt;/Modal&gt;</span>
      <span class="tag">&lt;/div&gt;</span>
   );
}
  </code></pre>
</div>

<h1 class="contentHeading">Applying Portals in Real-World Scenarios</h1>
<p>Let's look at a practical example of implementing a modal dialog using portals. This example demonstrates how to create a reusable modal component that can be used throughout your application.</p>

<div class="code-container">
  <pre><code>
<span class="keyword">import</span> React, { useEffect } <span class="keyword">from</span> <span class="string">'react'</span>;
<span class="keyword">import</span> ReactDOM <span class="keyword">from</span> <span class="string">'react-dom'</span>;

<span class="keyword">function</span> <span class="function-name">ModalDialog</span>({ isOpen, onClose, children }) {
   useEffect(() => {
      <span class="keyword">const</span> handleEscape = (e) => {
         <span class="keyword">if</span> (e.key === <span class="string">'Escape'</span>) {
            onClose();
         }
      };

      document.addEventListener(<span class="string">'keydown'</span>, handleEscape);
      <span class="keyword">return</span> () => {
         document.removeEventListener(<span class="string">'keydown'</span>, handleEscape);
      };
   }, [onClose]);

   <span class="keyword">if</span> (!isOpen) <span class="keyword">return</span> <span class="keyword">null</span>;

   <span class="keyword">return</span> ReactDOM.createPortal(
      <span class="tag">&lt;div</span> <span class="attr">className=</span><span class="string">"modal-overlay"</span><span class="tag">&gt;</span>
         <span class="tag">&lt;div</span> <span class="attr">className=</span><span class="string">"modal-content"</span><span class="tag">&gt;</span>
            <span class="tag">&lt;button</span> <span class="attr">className=</span><span class="string">"close-button"</span> <span class="attr">onClick=</span>{onClose}<span class="tag">&gt;</span>
               ×
            <span class="tag">&lt;/button&gt;</span>
            {children}
         <span class="tag">&lt;/div&gt;</span>
      <span class="tag">&lt;/div&gt;</span>,
      document.getElementById(<span class="string">'modal-root'</span>)
   );
}

<span class="keyword">function</span> <span class="function-name">App</span>() {
   <span class="keyword">const</span> [isModalOpen, setIsModalOpen] = React.useState(<span class="keyword">false</span>);

   <span class="keyword">return</span> (
      <span class="tag">&lt;div&gt;</span>
         <span class="tag">&lt;button</span> <span class="attr">onClick=</span>{() => setIsModalOpen(<span class="keyword">true</span>)}<span class="tag">&gt;</span>
            Open Modal
         <span class="tag">&lt;/button&gt;</span>
         
         <span class="tag">&lt;ModalDialog</span>
            <span class="attr">isOpen=</span>{isModalOpen}
            <span class="attr">onClose=</span>{() => setIsModalOpen(<span class="keyword">false</span>)}
         <span class="tag">&gt;</span>
            <span class="tag">&lt;h2&gt;</span>Modal Title<span class="tag">&lt;/h2&gt;</span>
            <span class="tag">&lt;p&gt;</span>This is the modal content<span class="tag">&lt;/p&gt;</span>
         <span class="tag">&lt;/ModalDialog&gt;</span>
      <span class="tag">&lt;/div&gt;</span>
   );
}
  </code></pre>
</div>

<p>To use this modal, you need to add a div with id "modal-root" in your HTML file:</p>

<div class="code-container">
  <pre><code>
<span class="tag">&lt;div</span> <span class="attr">id=</span><span class="string">"root"</span><span class="tag">&gt;&lt;/div&gt;</span>
<span class="tag">&lt;div</span> <span class="attr">id=</span><span class="string">"modal-root"</span><span class="tag">&gt;&lt;/div&gt;</span>
  </code></pre>
</div>

<h1 class="contentHeading">Summary</h1>
<p>React Portals are a powerful feature that allows you to render components outside their parent DOM hierarchy while maintaining their position in the React component tree. Key points to remember:</p>

<ul>
  <li>Portals are created using <code>ReactDOM.createPortal()</code></li>
  <li>They maintain the React component hierarchy and event bubbling</li>
  <li>Common use cases include modals, tooltips, and popovers</li>
  <li>Portals require a target DOM node outside the root element</li>
  <li>They're particularly useful for UI elements that need to break out of their container's overflow or z-index constraints</li>
</ul>

<p>When using portals, remember to:</p>
<ul>
  <li>Always clean up event listeners and other side effects</li>
  <li>Consider accessibility when implementing modal dialogs</li>
  <li>Use proper CSS to handle positioning and z-index</li>
  <li>Test your portal components in different scenarios</li>
</ul>
`;  