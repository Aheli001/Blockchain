docs.usingComponents = `
<h1 class="heading">ReactJS − Use Component</h1>
        <p class="contentText">A React component represents a small chunk of user interface in a webpage. The primary job of a React component is to render its user interface and update it whenever its internal state is changed. In addition to rendering the UI, it manages the events belongs to its user interface. To summarize, React component provides below functionalities.</p>
        <h1 class="contentHeading">Using Components in ReactJS</h1>
        <div class="contentText">
            <p class="contentText">In this chapter, let us use newly created components and enhance our ExpenseEntryItem component.</p>
            <p class="contentText"><strong>Step 1</strong> − Open our expense-manager application in your favorite editor and open the ExpenseEntryItem.js file.</p>
            <p class="contentText">Then, import FormattedMoney and FormattedDate using the following statements.</p>
            </div>
            <div class="code-container">
  <pre><code>
import FormattedMoney from './FormattedMoney' 
import FormattedDate from './FormattedDate'
  </code></pre>
</div>

            <p class="contentText"><strong>Step 2</strong> − Next, update the render method by including FormattedMoney and FormattedDater component.</p>
<div class="code-container">
  <pre><code id="htmlCode">
<span class="tag">render</span>() { 
   <span class="tag">return</span> ( 
      <span class="tag">&lt;div&gt;</span>
         <span class="tag">&lt;div&gt;</span><span class="tag">&lt;b&gt;</span>Item:<span class="tag">&lt;/b&gt;</span> <span class="tag">&lt;em&gt;</span>{<span class="tag">this</span>.<span class="tag">props</span>.<span class="tag">item</span>.<span class="tag">name</span>}<span class="tag">&lt;/em&gt;</span><span class="tag">&lt;/div&gt;</span>
         <span class="tag">&lt;div&gt;</span><span class="tag">&lt;b&gt;</span>Amount:<span class="tag">&lt;/b&gt;</span> 
            <span class="tag">&lt;em&gt;</span>
               <span class="tag">&lt;FormattedMoney</span> <span class="tag">value</span>={<span class="tag">this</span>.<span class="tag">props</span>.<span class="tag">item</span>.<span class="tag">amount</span>} <span class="tag">/&gt;</span>
            <span class="tag">&lt;/em&gt;</span>
         <span class="tag">&lt;/div&gt;</span>
         <span class="tag">&lt;div&gt;</span><span class="tag">&lt;b&gt;</span>Spend Date:<span class="tag">&lt;/b&gt;</span> 
            <span class="tag">&lt;em&gt;</span>
               <span class="tag">&lt;FormattedDate</span> <span class="tag">value</span>={<span class="tag">this</span>.<span class="tag">props</span>.<span class="tag">item</span>.<span class="tag">spendDate</span>} <span class="tag">/&gt;</span>
            <span class="tag">&lt;/em&gt;</span>
         <span class="tag">&lt;/div&gt;</span>
         <span class="tag">&lt;div&gt;</span><span class="tag">&lt;b&gt;</span>Category:<span class="tag">&lt;/b&gt;</span> 
            <span class="tag">&lt;em&gt;</span>{<span class="tag">this</span>.<span class="tag">props</span>.<span class="tag">item</span>.<span class="tag">category</span>}<span class="tag">&lt;/em&gt;</span><span class="tag">&lt;/div&gt;</span>
      <span class="tag">&lt;/div&gt;</span>
   ); 
}
  </code></pre>
</div>

            <div class="contentText">
            <p class="contentText">Here, we have passed the amount and spendDate through value attribute of the components.</p>
            <p class="contentText">The final updated source code of the ExprenseEntryItem component is given below −</p>
            </div>
<div class="code-container">
  <pre><code id="htmlCode">
<span class="tag">import</span> React <span class="tag">from</span> <span class="string">'react'</span>;
<span class="tag">import</span> FormattedMoney <span class="tag">from</span> <span class="string">'./FormattedMoney'</span>;
<span class="tag">import</span> FormattedDate <span class="tag">from</span> <span class="string">'./FormattedDate'</span>;

<span class="tag">class</span> ExpenseEntryItem <span class="tag">extends</span> React.Component {
   <span class="tag">constructor</span>(props) {
      <span class="tag">super</span>(props);
   }
   <span class="tag">render</span>() {
      <span class="tag">return</span> (
         <span class="tag">&lt;div&gt;</span>
            <span class="tag">&lt;div&gt;</span><span class="tag">&lt;b&gt;</span>Item:<span class="tag">&lt;/b&gt;</span> <span class="tag">&lt;em&gt;</span>{<span class="tag">this</span>.<span class="tag">props</span>.<span class="tag">item</span>.<span class="tag">name</span>}<span class="tag">&lt;/em&gt;</span><span class="tag">&lt;/div&gt;</span>
            <span class="tag">&lt;div&gt;</span><span class="tag">&lt;b&gt;</span>Amount:<span class="tag">&lt;/b&gt;</span> 
               <span class="tag">&lt;em&gt;</span>
                  <span class="tag">&lt;FormattedMoney</span> <span class="tag">value</span>={<span class="tag">this</span>.<span class="tag">props</span>.<span class="tag">item</span>.<span class="tag">amount</span>} <span class="tag">/&gt;</span>
               <span class="tag">&lt;/em&gt;</span>
            <span class="tag">&lt;/div&gt;</span>
            <span class="tag">&lt;div&gt;</span><span class="tag">&lt;b&gt;</span>Spend Date:<span class="tag">&lt;/b&gt;</span> 
               <span class="tag">&lt;em&gt;</span>
                  <span class="tag">&lt;FormattedDate</span> <span class="tag">value</span>={<span class="tag">this</span>.<span class="tag">props</span>.<span class="tag">item</span>.<span class="tag">spendDate</span>} <span class="tag">/&gt;</span>
               <span class="tag">&lt;/em&gt;</span>
            <span class="tag">&lt;/div&gt;</span>
            <span class="tag">&lt;div&gt;</span><span class="tag">&lt;b&gt;</span>Category:<span class="tag">&lt;/b&gt;</span> 
               <span class="tag">&lt;em&gt;</span>{<span class="tag">this</span>.<span class="tag">props</span>.<span class="tag">item</span>.<span class="tag">category</span>}<span class="tag">&lt;/em&gt;</span><span class="tag">&lt;/div&gt;</span>
         <span class="tag">&lt;/div&gt;</span>
      );
   }
}
<span class="tag">export</span> <span class="tag">default</span> ExpenseEntryItem;
  </code></pre>
</div>


            <div class="contentText">
            <p class="contentText"><strong>index.js</strong></p>
            <p class="contentText">Open index.js and call the ExpenseEntryItem component by passing the item object.</p>
            </div>

<div class="code-container">
  <pre><code id="htmlCode">
<span class="tag">const</span> item = {
   id: 1,
   name: <span class="string">"Grape Juice"</span>,
   amount: 30.5,
   spendDate: <span class="tag">new</span> Date(<span class="string">"2020-10-10"</span>),
   category: <span class="string">"Food"</span>
};

ReactDOM.render(
   <span class="tag">&lt;React.StrictMode&gt;</span>
      <span class="tag">&lt;ExpenseEntryItem</span> <span class="tag">item</span>={item} <span class="tag">/&gt;</span>
   <span class="tag">&lt;/React.StrictMode&gt;</span>,
   <span class="tag">document</span>.<span class="tag">getElementById</span>(<span class="string">'root'</span>)
);
  </code></pre>
</div>
<p class="contentText">Next, serve the application using npm command.</p>
<div class="code-container">
  <pre><code>
npm start
  </code></pre>
</div>
<p class="contentText">Open the browser and enter http://localhost:3000 in the address bar and press enter.</p>
`;
