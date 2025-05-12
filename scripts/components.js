docs.components = `
<h1 class="heading">ReactJS − Component</h1>
        <div class="contentText">
<p class="contentText">React component is the building block of a React application. Let us learn how to create a new React component and the features of React components in this chapter.</p>
<p class="contentText">A React component represents a small chunk of user interface in a webpage. The primary job of a React component is to render its user interface and update it whenever its internal state is changed. In addition to rendering the UI, it manages the events belongs to its user interface. To summarize, React component provides below functionalities.</p>
</div>
 <div style="background-color: #EDEDED; padding: 10px; border-radius: 5px; margin-bottom: 20px;">
<ul style="margin: 0;">
  <li>
    Initial rendering of the user interface.
  </li>
  <li>
    Management and handling of events.
  </li>
  <li>
    Updating the user interface whenever the internal state is changed.
  </li>
</ul>
</div>
<p class="contentText">React component accomplish these feature using three concepts −</p>
<div style="background-color: #EDEDED; padding: 10px; border-radius: 5px; margin-bottom: 20px;">
<ul style="margin: 0;">
  <li>
    <strong>Properties</strong> − Enables the component to receive input.
  </li>
  <li>
    <strong>Events </strong> − Enable the component to manage DOM events and end-user interaction.
  </li>
  <li>
    <strong>State </strong> − Enable the component to stay stateful. Stateful component updates its UI with respect to its state.
  </li>
</ul>
</div>
<p class="contentText">There are two types of components in React. They are −</p>
<div style="background-color: #EDEDED; padding: 10px; border-radius: 5px; margin-bottom: 20px;">
<ul style="margin: 0;">
  <li>
    <strong>Function Components</strong>
  </li>
  <li>
    <strong>Class Components</strong>
  </li>
</ul>
</div>
<h1 class="contentHeading">Function Components</h1>
<p class="contentText">A function component is literally defined as JavaScript functions. This React component accepts a single object argument and returns a React element. Note that an element in React is not a component, but a component is comprised of multiple elements. Following is the syntax for the function component in React:</p>
<div class="code-container">
  
  <pre><code id="htmlCode">
<span class="tag">function</span> function_name(<span class="tag">argument_name</span>) {
   function_body;
}
  </code></pre>
</div>
<h1 class="contentHeading">Class Components</h1>
<p class="contentText">Similarly, class components are basic classes that are made of multiple functions. All class components of React are subclasses of the React.Component class, hence, a class component must always extend it. Following is the basic syntax −</p>
<div class="code-container">
  
  <pre><code id="htmlCode">
<span class="tag">class</span> class_name <span class="tag">extends</span> React.Component {
  <span class="tag">render</span>() {
    <span class="tag">return</span> <span class="tag">&lt;h1&gt;</span>Hello, {this.props.name}<span class="tag">&lt;/h1&gt;</span>;
  }
}
  </code></pre>
</div>
<p class="contentText">Let us learn all the concept one-by-one in the upcoming chapters.</p>
<h1 class="contentHeading">Creating a React Component</h1>
<p class="contentText">React library has two component types. The types are categorized based on the way it is being created.</p>
<div style="background-color: #EDEDED; padding: 10px; border-radius: 5px; margin-bottom: 20px;">
<ul style="margin: 0;">
  <li>
    Function component − Uses plain JavaScript function.
  </li>
  <li>
    ES6 class component − Uses ES6 class.
  </li>
</ul>
</div>
<p class="contentText">The core difference between function and class component are −</p>
<div style="background-color: #EDEDED; padding: 10px; border-radius: 5px; margin-bottom: 20px;">
<ul style="margin: 0;">
  <li>
    Function components are very minimal in nature. Its only requirement is to return a React element.
  </li>
</ul>
</div>
<div class="code-container">
  
  <pre><code id="htmlCode">
<span class="tag">function</span> Hello() { 
   <span class="tag">return</span> <span class="string">&quot;&lt;div&gt;Hello&lt;/div&gt;&quot;</span>; 
}
  </code></pre>
</div>
<p class="contentText">The same functionality can be done using ES6 class component with little extra coding.</p>
<div class="code-container">
  
  <pre><code id="htmlCode">
<span class="tag">class</span> ExpenseEntryItem <span class="tag">extends</span> React.Component {         
   <span class="tag">render</span>() { 
      <span class="tag">return</span> ( 
         <span class="tag">&lt;div&gt;</span>Hello<span class="tag">&lt;/div&gt;</span> 
      ); 
   }
}
  </code></pre>
</div>
<div style="background-color: #EDEDED; padding: 10px; border-radius: 5px; margin-bottom: 20px;">
<ul style="margin: 0;">
  <li>
    Class components supports state management out of the box whereas function components does not support state management. But, React provides a hook, useState() for the function components to maintain its state.
  </li>
  <li>
    Class component have a life cycle and access to each life cycle events through dedicated callback apis. Function component does not have life cycle. Again, React provides a hook, useEffect() for the function component to access different stages of the component.
  </li>
</ul>
</div>
<h1 class="contentHeading">Creating a class component</h1>
<p class="contentText">Let us create a new React component (in our expense-manager app), ExpenseEntryItem to showcase an expense entry item. Expense entry item consists of name, amount, date and category. The object representation of the expense entry item is −</p>
<div class="code-container">
  <pre><code>
{ 
   'name': 'Mango juice', 
   'amount': 30.00, 
   'spend_date': '2020-10-10' 
   'category': 'Food', 
}
  </code></pre>
</div>
<div class="contentText">
<p class="contentText">Open expense-manager application in your favorite editor.</p>
<p class="contentText">Next, create a file, ExpenseEntryItem.css under src/components folder to style our component.</p>
<p class="contentText">Next, create a file, ExpenseEntryItem.js under src/components folder by extending React.Component.</p>
</div>
<div class="code-container">
  
  <pre><code id="htmlCode">
<span class="tag">import</span> React <span class="tag">from</span> <span class="string">'react'</span>;
<span class="tag">import</span> <span class="string">'./ExpenseEntryItem.css'</span>;

<span class="tag">class</span> ExpenseEntryItem <span class="tag">extends</span> React.Component { 
}
  </code></pre>
</div>
<p class="contentText">Next, create a method render inside the ExpenseEntryItem class.</p>
<div class="code-container">
  
  <pre><code id="htmlCode">
<span class="tag">class</span> ExpenseEntryItem <span class="tag">extends</span> React.Component { 
   <span class="tag">render</span>() { 
   } 
}
  </code></pre>
</div>
<p class="contentText">Next, create the user interface using JSX and return it from render method.</p>
<div class="code-container">
  
  <pre><code id="htmlCode">
<span class="tag">function</span> ExpenseEntryItem() {
   <span class="tag">return</span> (
      <span class="tag">&lt;div&gt;</span>
         <span class="tag">&lt;div&gt;</span><span class="tag">&lt;b&gt;</span>Item:<span class="tag">&lt;/b&gt;</span> <span class="tag">&lt;em&gt;</span>Mango Juice<span class="tag">&lt;/em&gt;</span><span class="tag">&lt;/div&gt;</span>
         <span class="tag">&lt;div&gt;</span><span class="tag">&lt;b&gt;</span>Amount:<span class="tag">&lt;/b&gt;</span> <span class="tag">&lt;em&gt;</span>30.00<span class="tag">&lt;/em&gt;</span><span class="tag">&lt;/div&gt;</span>
         <span class="tag">&lt;div&gt;</span><span class="tag">&lt;b&gt;</span>Spend Date:<span class="tag">&lt;/b&gt;</span> <span class="tag">&lt;em&gt;</span>2020-10-10<span class="tag">&lt;/em&gt;</span><span class="tag">&lt;/div&gt;</span>
         <span class="tag">&lt;div&gt;</span><span class="tag">&lt;b&gt;</span>Category:<span class="tag">&lt;/b&gt;</span> <span class="tag">&lt;em&gt;</span>Food<span class="tag">&lt;/em&gt;</span><span class="tag">&lt;/div&gt;</span>
      <span class="tag">&lt;/div&gt;</span>
   );
}
  </code></pre>
</div>

<p class="contentText">Next, specify the component as default export class.</p>
<div class="code-container">
  
  <pre><code id="htmlCode">
<span class="tag">import</span> React <span class="tag">from</span> <span class="string">'react'</span>;
<span class="tag">import</span> <span class="string">'./ExpenseEntryItem.css'</span>;

<span class="tag">class</span> ExpenseEntryItem <span class="tag">extends</span> React.Component {
   <span class="tag">render</span>() {
      <span class="tag">return</span> (
         <span class="tag">&lt;div&gt;</span>
            <span class="tag">&lt;div&gt;</span><span class="tag">&lt;b&gt;</span>Item:<span class="tag">&lt;/b&gt;</span> <span class="tag">&lt;em&gt;</span>Mango Juice<span class="tag">&lt;/em&gt;</span><span class="tag">&lt;/div&gt;</span>
         <span class="tag">&lt;div&gt;</span><span class="tag">&lt;b&gt;</span>Amount:<span class="tag">&lt;/b&gt;</span> <span class="tag">&lt;em&gt;</span>30.00<span class="tag">&lt;/em&gt;</span><span class="tag">&lt;/div&gt;</span>
         <span class="tag">&lt;div&gt;</span><span class="tag">&lt;b&gt;</span>Spend Date:<span class="tag">&lt;/b&gt;</span> <span class="tag">&lt;em&gt;</span>2020-10-10<span class="tag">&lt;/em&gt;</span><span class="tag">&lt;/div&gt;</span>
         <span class="tag">&lt;div&gt;</span><span class="tag">&lt;b&gt;</span>Category:<span class="tag">&lt;/b&gt;</span> <span class="tag">&lt;em&gt;</span>Food<span class="tag">&lt;/em&gt;</span><span class="tag">&lt;/div&gt;</span>
         <span class="tag">&lt;/div&gt;</span>
      );
   }
}
<span class="tag">export</span> <span class="tag">default</span> ExpenseEntryItem;
  </code></pre>
</div>
<p class="contentText">Now, we successfully created our first React component. Let us use our newly created component in index.js.</p>
<div class="code-container">
  
  <pre><code id="htmlCode">
<span class="tag">import</span> React <span class="tag">from</span> <span class="string">'react'</span>;
<span class="tag">import</span> ReactDOM <span class="tag">from</span> <span class="string">'react-dom'</span>;
<span class="tag">import</span> ExpenseEntryItem <span class="tag">from</span> <span class="string">'./components/ExpenseEntryItem'</span>;

ReactDOM.render(
     <span class="tag">&lt;React.StrictMode&gt;</span>
    <span class="tag">&lt;HelloWorld /&gt;</span>
   <span class="tag">&lt;/React.StrictMode&gt;</span>,
   document.getElementById(<span class="string">'root'</span>)
);
  </code></pre>
</div>
<h1 class="subHeading">Example</h1>
<p class="contentText">The same functionality can be done in a webpage using CDN as shown below −</p>
<div class="code-container">
  
  <pre><code id="htmlCode">
<span class="tag">&lt;!DOCTYPE html&gt;</span>
<span class="tag">&lt;html&gt;</span>
   <span class="tag">&lt;head&gt;</span>
      <span class="tag">&lt;meta</span> <span class="attribute">charset=</span><span class="string">&quot;UTF-8&quot;</span> <span class="tag">/&gt;</span>
      <span class="tag">&lt;title&gt;</span>React application :: ExpenseEntryItem component<span class="tag">&lt;/title&gt;</span>
   <span class="tag">&lt;/head&gt;</span>
   <span class="tag">&lt;body&gt;</span>
      <span class="tag">&lt;div</span> <span class="attribute">id=</span><span class="string">&quot;react-app&quot;</span> <span class="tag">&gt;</span><span class="tag">&lt;/div&gt;</span>
       
      <span class="tag">&lt;script</span> <span class="attribute">src=</span><span class="string">&quot;https://unpkg.com/react@17/umd/react.development.js&quot;</span> <span class="attribute">crossorigin=</span><span class="string">&quot;&quot;</span> <span class="tag">&gt;</span><span class="tag">&lt;/script&gt;</span>
      <span class="tag">&lt;script</span> <span class="attribute">src=</span><span class="string">&quot;https://unpkg.com/react-dom@17/umd/react-dom.development.js&quot;</span> <span class="attribute">crossorigin=</span><span class="string">&quot;&quot;</span> <span class="tag">&gt;</span><span class="tag">&lt;/script&gt;</span>
      <span class="tag">&lt;script</span> <span class="attribute">src=</span><span class="string">&quot;https://unpkg.com/@babel/standalone/babel.min.js&quot;</span> <span class="attribute">crossorigin=</span><span class="string">&quot;&quot;</span> <span class="tag">&gt;</span><span class="tag">&lt;/script&gt;</span>
      <span class="tag">&lt;script</span> <span class="attribute">type=</span><span class="string">&quot;text/babel&quot;</span><span class="tag">&gt;</span>
         <span class="tag">class</span> ExpenseEntryItem <span class="tag">extends</span> React.Component {
            <span class="tag">render</span>() {
               <span class="tag">return</span> (
                  <span class="tag">&lt;div&gt;</span>
                    <span class="tag">&lt;div&gt;</span><span class="tag">&lt;b&gt;</span>Item:<span class="tag">&lt;/b&gt;</span> <span class="tag">&lt;em&gt;</span>Mango Juice<span class="tag">&lt;/em&gt;</span><span class="tag">&lt;/div&gt;</span>
                    <span class="tag">&lt;div&gt;</span><span class="tag">&lt;b&gt;</span>Amount:<span class="tag">&lt;/b&gt;</span> <span class="tag">&lt;em&gt;</span>30.00<span class="tag">&lt;/em&gt;</span><span class="tag">&lt;/div&gt;</span>
                    <span class="tag">&lt;div&gt;</span><span class="tag">&lt;b&gt;</span>Spend Date:<span class="tag">&lt;/b&gt;</span> <span class="tag">&lt;em&gt;</span>2020-10-10<span class="tag">&lt;/em&gt;</span><span class="tag">&lt;/div&gt;</span>
                    <span class="tag">&lt;div&gt;</span><span class="tag">&lt;b&gt;</span>Category:<span class="tag">&lt;/b&gt;</span> <span class="tag">&lt;em&gt;</span>Food<span class="tag">&lt;/em&gt;</span><span class="tag">&lt;/div&gt;</span>
                  <span class="tag">&lt;/div&gt;</span>
               );
            }
         }
         ReactDOM.render(
            <ExpenseEntryItem />,
            document.getElementById('react-app') );
      <span class="tag">&lt;/script&gt;</span>
   <span class="tag">&lt;/body&gt;</span>
<span class="tag">&lt;/html&gt;</span>
  </code></pre>
</div>
<p class="contentText">Next, serve the application using npm command.</p>
<div class="code-container">
  <pre><code>
npm start
  </code></pre>
</div>
<h1 class="subHeading">Output</h1>
<p class="contentText">Next, open the browser and enter http://localhost:3000 in the address bar and press enter.</p>
<div class="code-container">
  <pre><code>
Item: Mango Juice
Amount: 30.00
Spend Date: 2020-10-10
Category: Food
  </code></pre>
</div>
<h1 class="contentHeading">Creating a function component</h1>
<div class="contentText">
<p class="contentText">React component can also be created using plain JavaScript function but with limited features. Function based React component does not support state management and other advanced features. It can be used to quickly create a simple component.</p>
<p class="contentText">The above ExpenseEntryItem can be rewritten in function as specified below −</p>
</div>
<div class="code-container">
  
  <pre><code id="htmlCode">
<span class="tag">function</span> ExpenseEntryItem() {
   <span class="tag">return</span> (
      <span class="tag">&lt;div&gt;</span>
         <span class="tag">&lt;div&gt;</span><span class="tag">&lt;b&gt;</span>Item:<span class="tag">&lt;/b&gt;</span> <span class="tag">&lt;em&gt;</span>Mango Juice<span class="tag">&lt;/em&gt;</span><span class="tag">&lt;/div&gt;</span>
         <span class="tag">&lt;div&gt;</span><span class="tag">&lt;b&gt;</span>Amount:<span class="tag">&lt;/b&gt;</span> <span class="tag">&lt;em&gt;</span>30.00<span class="tag">&lt;/em&gt;</span><span class="tag">&lt;/div&gt;</span>
         <span class="tag">&lt;div&gt;</span><span class="tag">&lt;b&gt;</span>Spend Date:<span class="tag">&lt;/b&gt;</span> <span class="tag">&lt;em&gt;</span>2020-10-10<span class="tag">&lt;/em&gt;</span><span class="tag">&lt;/div&gt;</span>
         <span class="tag">&lt;div&gt;</span><span class="tag">&lt;b&gt;</span>Category:<span class="tag">&lt;/b&gt;</span> <span class="tag">&lt;em&gt;</span>Food<span class="tag">&lt;/em&gt;</span><span class="tag">&lt;/div&gt;</span>
      <span class="tag">&lt;/div&gt;</span>
   );
}
  </code></pre>
</div>
<p class="contentText">Here, we just included the render functionality and it is enough to create a simple React component.</p>
<h1 class="contentHeading">Splitting Components</h1>
<div class="contentText">
<p class="contentText">Even if JavaScript is said to be simpler to execute, there are many times where the code gets complex due to large number of classes or dependencies for a relatively simple project. And with larger codes, the loading time in a browser gets longer. As a result, reducing the efficiency of its performance. This is where code-splitting can be used. Code splitting is used to divide components or bundles into smaller chunks to improve the performance.</p>
<p class="contentText">Code splitting will only load the components that are currently needed by the browser. This process is known as lazy load. This will drastically improve the performance of your application. One must observe that we are not trying to reduce the amount of code with this, but just trying to reduce the burden of browser by loading components that the user might never need. Let us look at an example code.</p>
</div>
<h1 class="subHeading">Example</h1>
<p class="contentText">Let us first see the bundled code of a sample application to perform any operation.</p>
<div class="code-container">
  
  <pre><code id="htmlCode">
// file name = app.js
<span class="tag">import</span> { <span class="tag">sub</span> } <span class="tag">from</span> <span class="string">'./math.js'</span>;

<span class="tag">console.log</span>(<span class="string">sub(23, 14)</span>);

// file name = math.js
<span class="tag">export</span> <span class="tag">function</span> <span class="tag">sub</span>(a, b) {
  <span class="tag">return</span> a - b;
}
  </code></pre>
</div>
<p class="contentText">The Bundle for the application above will look like this −</p>
<div class="code-container">
  
  <pre><code id="htmlCode">
<span class="tag">function</span> <span class="tag">sub</span>(a, b) {
  <span class="tag">return</span> a - b;
}
<span class="tag">console.log</span>(<span class="string">sub(23, 14)</span>);
  </code></pre>
</div>
<p class="contentText">Now, the best way to introduce code splitting in your application is by using dynamic import().</p>
<div class="code-container">
  
  <pre><code id="htmlCode">
<span class="tag">// Before code-splitting</span>
<span class="tag">import</span> { <span class="tag">sub</span> } <span class="tag">from</span> <span class="string">'./math'</span>;

<span class="tag">console.log</span>(<span class="string">add(23, 14)</span>);

<span class="tag">// After code-splitting</span>
<span class="tag">import</span>(<span class="string">"./math"</span>).<span class="tag">then</span>(math => {
  <span class="tag">console.log</span>(math.<span class="tag">sub</span>(23, 14));
});
  </code></pre>
</div>
<p class="contentText">When this syntax is used (in bundles like Webpack), code-splitting will automatically begin. But if you are Create React App, the code-splitting is already configured for you and you can start using it immediately.</p>
`;
