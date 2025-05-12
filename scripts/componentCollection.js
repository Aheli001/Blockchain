docs.componentCollection = `
<h1 class="heading">ReactJS − Component Collection</h1>
        <p class="contentText">In modern application, developer encounters a lot of situations, where list of item (e.g. todos, orders, invoices, etc.,) has to be rendered in tabular format or gallery format. React provides clear, intuitive and easy technique to create list based user interface. React uses two existing features to accomplish this feature.</p>
        <div style="background-color: #EDEDED; padding: 10px; border-radius: 5px;">
<ul style="margin: 0;">
  <li>
    JavaScript's built-in map method.
  </li>
  <li>
    React expression in jsx.
  </li>
</ul>
</div>
<h1 class="contentHeading">Map Method</h1>
<div class="contentText">
<p class="contentText">The map function accepts a collection and a mapping function. The map function will be applied to each and every item in the collection and the results are used to generate a new list.</p>
<p class="contentText">For instance, declare a JavaScript array with 5 random numbers as shown below −</p>
</div>
<div class="code-container">
  <pre><code>
let list = [10, 30, 45, 12, 24]
  </code></pre>
</div>
<p class="contentText">Now, apply an anonymous function, which double its input as shown below −</p>
<div class="code-container">
  <pre><code>
result = list.map((input) => input * 2);
  </code></pre>
</div>
<p class="contentText">Then, the resulting list is −</p>
<div class="code-container">
  <pre><code>
[20, 60, 90, 24, 48]
  </code></pre>
</div>
<p class="contentText">To refresh the React expression, let us create a new variable and assign a React element.</p>
<div class="code-container">
  <pre><code id="htmlCode">
<span class="tag">var</span> hello = <span class="tag">&lt;h1&gt;</span>Hello!<span class="tag">&lt;/h1&gt;</span>;
<span class="tag">var</span> final = <span class="tag">&lt;div&gt;</span>{helloElement}<span class="tag">&lt;/div&gt;</span>;
  </code></pre>
</div>
<p class="contentText">Now, the React expression, hello will get merged with final and generate,</p>
<div class="code-container">
  <pre><code id="htmlCode">
<span class="tag">&lt;div&gt;</span><span class="tag">&lt;h1&gt;</span>Hello!<span class="tag">&lt;/h1&gt;</span><span class="tag">&lt;/div&gt;</span>
  </code></pre>
</div>
<h1 class="subHeading">Example</h1>
<div class="contentText">
<p class="contentText">Let us apply this concept to create a component to show a collection of expense entry items in a tabular format.</p>
<p class="contentText"><strong>Step 1</strong> − Open our expense-manager application in your favorite editor.</p>
<p class="contentText">Create a file ExpenseEntryItemList.css in src/components folder to include styles for the component.</p>
<p class="contentText">Create another file, ExpenseEntryItemList.js in src/components folder to create ExpenseEntryItemList component</p>
<p class="contentText"><strong>Step 2</strong> − Import React library and the stylesheet.</p>
</div>
<div class="code-container">
  <pre><code id="htmlCode">
<span class="tag">import</span> React <span class="tag">from</span> <span class="string">'react'</span>;
<span class="tag">import</span> <span class="string">'./ExpenseEntryItemList.css'</span>;
  </code></pre>
</div>
<p class="contentText"><strong>Step 3</strong> − Create ExpenseEntryItemList class and call constructor function.</p>
<div class="code-container">
  <pre><code id="htmlCode">
<span class="tag">class</span> ExpenseEntryItemList <span class="tag">extends</span> React.Component {  
   <span class="tag">constructor</span>(props) { 
      <span class="tag">super</span>(props); 
   } 
}
  </code></pre>
</div>
<p class="contentText">Create a render() function.</p>
<div class="code-container">
  <pre><code id="htmlCode">
<span class="tag">render</span>() { 
}
  </code></pre>
</div>
<p class="contentText"><strong>Step 4</strong> − Use the map method to generate a collection of HTML table rows each representing a single expense entry item in the list.</p>
<div class="code-container">
  <pre><code id="htmlCode">
<span class="tag">render</span>() {
   <span class="tag">const</span> lists = <span class="tag">this</span>.<span class="tag">props</span>.<span class="tag">items</span>.<span class="tag">map</span>((item) =&gt; 
      <span class="tag">&lt;tr</span> <span class="tag">key</span>={item.id}<span class="tag">&gt;</span>
         <span class="tag">&lt;td&gt;</span>{item.name}<span class="tag">&lt;/td&gt;</span>
         <span class="tag">&lt;td&gt;</span>{item.amount}<span class="tag">&lt;/td&gt;</span>
         <span class="tag">&lt;td&gt;</span>{<span class="tag">new</span> Date(item.spendDate).<span class="tag">toDateString</span>()}<span class="tag">&lt;/td&gt;</span>
         <span class="tag">&lt;td&gt;</span>{item.category}<span class="tag">&lt;/td&gt;</span>
      <span class="tag">&lt;/tr&gt;</span>
   );
}
  </code></pre>
</div>
<div class="contentText">
<p class="contentText">Here, key identifies each row and it has to be unique among the list.</p>
<p class="contentText"><strong>Step 5</strong> − Next, in the render() method, create a HTML table and include the lists expression in the rows section.</p>
</div>
<div class="code-container">
  <pre><code id="htmlCode">
<span class="tag">return</span> (
   <span class="tag">&lt;table&gt;</span>
      <span class="tag">&lt;thead&gt;</span>
         <span class="tag">&lt;tr&gt;</span>
            <span class="tag">&lt;th&gt;</span>Item<span class="tag">&lt;/th&gt;</span>
            <span class="tag">&lt;th&gt;</span>Amount<span class="tag">&lt;/th&gt;</span>
            <span class="tag">&lt;th&gt;</span>Date<span class="tag">&lt;/th&gt;</span>
            <span class="tag">&lt;th&gt;</span>Category<span class="tag">&lt;/th&gt;</span>
         <span class="tag">&lt;/tr&gt;</span>
      <span class="tag">&lt;/thead&gt;</span>
      <span class="tag">&lt;tbody&gt;</span>
         {lists}
      <span class="tag">&lt;/tbody&gt;</span>
   <span class="tag">&lt;/table&gt;</span>
);
  </code></pre>
</div>
<p class="contentText">Finally, export the component.</p>
<div class="code-container">
  <pre><code id="htmlCode">
<span class="tag">export</span> <span class="tag">default</span> ExpenseEntryItemList;
  </code></pre>
</div>
<p class="contentText">Now, we have successfully created the component to render the expense items into HTML table. The complete code is as follows −</p>
<div class="code-container">
  <pre><code id="htmlCode">
<span class="tag">import</span> React <span class="tag">from</span> <span class="string">'react'</span>;
<span class="tag">import</span> <span class="string">'./ExpenseEntryItemList.css'</span>;

<span class="tag">class</span> ExpenseEntryItemList <span class="tag">extends</span> React.Component {
   <span class="tag">constructor</span>(props) {
      <span class="tag">super</span>(props);
   }
   <span class="tag">render</span>() {
      <span class="tag">const</span> lists = <span class="tag">this</span>.<span class="tag">props</span>.<span class="tag">items</span>.<span class="tag">map</span>((item) =&gt; 
         <span class="tag">&lt;tr</span> <span class="tag">key</span>={item.id}<span class="tag">&gt;</span>
            <span class="tag">&lt;td&gt;</span>{item.name}<span class="tag">&lt;/td&gt;</span>
            <span class="tag">&lt;td&gt;</span>{item.amount}<span class="tag">&lt;/td&gt;</span>
            <span class="tag">&lt;td&gt;</span>{<span class="tag">new</span> Date(item.spendDate).<span class="tag">toDateString</span>()}<span class="tag">&lt;/td&gt;</span>
            <span class="tag">&lt;td&gt;</span>{item.category}<span class="tag">&lt;/td&gt;</span>
         <span class="tag">&lt;/tr&gt;</span>
      );
      <span class="tag">return</span> (
         <span class="tag">&lt;table&gt;</span>
            <span class="tag">&lt;thead&gt;</span>
               <span class="tag">&lt;tr&gt;</span>
                  <span class="tag">&lt;th&gt;</span>Item<span class="tag">&lt;/th&gt;</span>
                  <span class="tag">&lt;th&gt;</span>Amount<span class="tag">&lt;/th&gt;</span>
                  <span class="tag">&lt;th&gt;</span>Date<span class="tag">&lt;/th&gt;</span>
                  <span class="tag">&lt;th&gt;</span>Category<span class="tag">&lt;/th&gt;</span>
               <span class="tag">&lt;/tr&gt;</span>
            <span class="tag">&lt;/thead&gt;</span>
            <span class="tag">&lt;tbody&gt;</span>
               {lists}
            <span class="tag">&lt;/tbody&gt;</span>
         <span class="tag">&lt;/table&gt;</span>
      );
   }
}
<span class="tag">export</span> <span class="tag">default</span> ExpenseEntryItemList;
  </code></pre>
</div>

<div class="contentText">
<p class="contentText"><strong>index.js:</strong></p>
<p class="contentText">Open index.js and import our newly created ExpenseEntryItemList component.</p>
</div>

<div class="code-container">
  <pre><code id="htmlCode">
<span class="tag">import</span> ExpenseEntryItemList <span class="tag">from</span> <span class="string">'./components/ExpenseEntryItemList'</span>;
  </code></pre>
</div>
<p class="contentText">Next, declare a list (of expense entry item) and populate it with some random values in index.js file.</p>
<div class="code-container">
  <pre><code id="htmlCode">
<span class="tag">const</span> items = [
   { <span class="tag">id</span>: 1, <span class="tag">name</span>: <span class="string">"Pizza"</span>, <span class="tag">amount</span>: 80, <span class="tag">spendDate</span>: <span class="string">"2020-10-10"</span>, <span class="tag">category</span>: <span class="string">"Food"</span> },
   { <span class="tag">id</span>: 1, <span class="tag">name</span>: <span class="string">"Grape Juice"</span>, <span class="tag">amount</span>: 30, <span class="tag">spendDate</span>: <span class="string">"2020-10-12"</span>, <span class="tag">category</span>: <span class="string">"Food"</span> },
   { <span class="tag">id</span>: 1, <span class="tag">name</span>: <span class="string">"Cinema"</span>, <span class="tag">amount</span>: 210, <span class="tag">spendDate</span>: <span class="string">"2020-10-16"</span>, <span class="tag">category</span>: <span class="string">"Entertainment"</span> },
   { <span class="tag">id</span>: 1, <span class="tag">name</span>: <span class="string">"Java Programming book"</span>, <span class="tag">amount</span>: 242, <span class="tag">spendDate</span>: <span class="string">"2020-10-15"</span>, <span class="tag">category</span>: <span class="string">"Academic"</span> },
   { <span class="tag">id</span>: 1, <span class="tag">name</span>: <span class="string">"Mango Juice"</span>, <span class="tag">amount</span>: 35, <span class="tag">spendDate</span>: <span class="string">"2020-10-16"</span>, <span class="tag">category</span>: <span class="string">"Food"</span> },
   { <span class="tag">id</span>: 1, <span class="tag">name</span>: <span class="string">"Dress"</span>, <span class="tag">amount</span>: 2000, <span class="tag">spendDate</span>: <span class="string">"2020-10-25"</span>, <span class="tag">category</span>: <span class="string">"Cloth"</span> },
   { <span class="tag">id</span>: 1, <span class="tag">name</span>: <span class="string">"Tour"</span>, <span class="tag">amount</span>: 2555, <span class="tag">spendDate</span>: <span class="string">"2020-10-29"</span>, <span class="tag">category</span>: <span class="string">"Entertainment"</span> },
   { <span class="tag">id</span>: 1, <span class="tag">name</span>: <span class="string">"Meals"</span>, <span class="tag">amount</span>: 300, <span class="tag">spendDate</span>: <span class="string">"2020-10-30"</span>, <span class="tag">category</span>: <span class="string">"Food"</span> },
   { <span class="tag">id</span>: 1, <span class="tag">name</span>: <span class="string">"Mobile"</span>, <span class="tag">amount</span>: 3500, <span class="tag">spendDate</span>: <span class="string">"2020-11-02"</span>, <span class="tag">category</span>: <span class="string">"Gadgets"</span> },
   { <span class="tag">id</span>: 1, <span class="tag">name</span>: <span class="string">"Exam Fees"</span>, <span class="tag">amount</span>: 1245, <span class="tag">spendDate</span>: <span class="string">"2020-11-04"</span>, <span class="tag">category</span>: <span class="string">"Academic"</span> }
];
  </code></pre>
</div>

<p class="contentText">Use ExpenseEntryItemList component by passing the items through items attributes.</p>
<div class="code-container">
  <pre><code id="htmlCode">
<span class="tag">ReactDOM.render</span>(
   <span class="tag">&lt;React.StrictMode&gt;</span>
      <span class="tag">&lt;ExpenseEntryItemList</span> items={items} <span class="tag">/&gt;</span>
   <span class="tag">&lt;/React.StrictMode&gt;</span>,
   <span class="tag">document.getElementById</span>(<span class="string">'root'</span>)
);
  </code></pre>
</div>
<p class="contentText">The complete code of index.js is as follows −</p>
<div class="code-container">
  <pre><code id="htmlCode">
<span class="tag">import</span> React <span class="tag">from</span> <span class="string">'react'</span>;
<span class="tag">import</span> ReactDOM <span class="tag">from</span> <span class="string">'react-dom'</span>;
<span class="tag">import</span> ExpenseEntryItemList <span class="tag">from</span> <span class="string">'./components/ExpenseEntryItemList'</span>;

<span class="tag">const</span> items = [
   { id: 1, name: <span class="string">"Pizza"</span>, amount: 80, spendDate: <span class="string">"2020-10-10"</span>, category: <span class="string">"Food"</span> },
   { id: 2, name: <span class="string">"Grape Juice"</span>, amount: 30, spendDate: <span class="string">"2020-10-12"</span>, category: <span class="string">"Food"</span> },
   { id: 3, name: <span class="string">"Cinema"</span>, amount: 210, spendDate: <span class="string">"2020-10-16"</span>, category: <span class="string">"Entertainment"</span> },
   { id: 4, name: <span class="string">"Java Programming book"</span>, amount: 242, spendDate: <span class="string">"2020-10-15"</span>, category: <span class="string">"Academic"</span> },
   { id: 5, name: <span class="string">"Mango Juice"</span>, amount: 35, spendDate: <span class="string">"2020-10-16"</span>, category: <span class="string">"Food"</span> },
   { id: 6, name: <span class="string">"Dress"</span>, amount: 2000, spendDate: <span class="string">"2020-10-25"</span>, category: <span class="string">"Cloth"</span> },
   { id: 7, name: <span class="string">"Tour"</span>, amount: 2555, spendDate: <span class="string">"2020-10-29"</span>, category: <span class="string">"Entertainment"</span> },
   { id: 8, name: <span class="string">"Meals"</span>, amount: 300, spendDate: <span class="string">"2020-10-30"</span>, category: <span class="string">"Food"</span> },
   { id: 9, name: <span class="string">"Mobile"</span>, amount: 3500, spendDate: <span class="string">"2020-11-02"</span>, category: <span class="string">"Gadgets"</span> },
   { id: 10, name: <span class="string">"Exam Fees"</span>, amount: 1245, spendDate: <span class="string">"2020-11-04"</span>, category: <span class="string">"Academic"</span> }
];

<span class="tag">ReactDOM.render</span>(
   <span class="tag">&lt;React.StrictMode&gt;</span>
      <span class="tag">&lt;ExpenseEntryItemList</span> items={items} <span class="tag">/&gt;</span>
   <span class="tag">&lt;/React.StrictMode&gt;</span>,
   <span class="tag">document.getElementById</span>(<span class="string">'root'</span>)
);
  </code></pre>
</div>

<div class="contentText">
<p class="contentText"><strong>ExpenseEntryItemList.css:</strong></p>
<p class="contentText">Open ExpenseEntryItemList.css and add style for the table.</p>
</div>
<div class="code-container">
  <pre><code id="htmlCode">
<span class="tag">html</span> {
   font-family: sans-serif;
}
<span class="tag">table</span> {
   border-collapse: collapse;
   border: 2px solid rgb(200,200,200);
   letter-spacing: 1px;
   font-size: 0.8rem;
}
<span class="tag">td</span>, <span class="tag">th</span> {
   border: 1px solid rgb(190,190,190);
   padding: 10px 20px;
}
<span class="tag">th</span> {
   background-color: rgb(235,235,235);
}
<span class="tag">td</span>, <span class="tag">th</span> {
   text-align: left;
}
<span class="tag">tr:nth-child(even) td</span> {
   background-color: rgb(250,250,250);
}
<span class="tag">tr:nth-child(odd) td</span> {
   background-color: rgb(245,245,245);
}
<span class="tag">caption</span> {
   padding: 10px;
}
  </code></pre>
</div>

<p class="contentText">Start the application using npm command.</p>
<div class="code-container">
  <pre><code>
npm start
  </code></pre>
</div>

<h1 class="contentText">Output</h1>
<p class="contentText">Finally, open the browser and enter http://localhost:3000 in the address bar and press enter.</p>
<table>
  <tr>
    <th>Item</th>
    <th>Amount</th>
    <th>Date</th>
    <th>Category</th>
  </tr>
  <tr>
    <td>Pizza</td>
    <td>80</td>
    <td>Sat Oct 10 2020	</td>
    <td>Food</td>
  </tr>
  <tr>
    <td>Grape Juice</td>
    <td>30</td>
    <td>Man Oct 12 2020</td>
    <td>Food</td>
  </tr>
  <tr>
    <td>Cinema</td>
    <td>210</td>
    <td>Fri Oct 16 2020	</td>
    <td>Entertainment</td>
  </tr>
  <tr>
    <td>Java Programming book</td>
    <td>242</td>
    <td>Thu Oct 15 2020	</td>
    <td>Academic</td>
  </tr>
  <tr>
    <td>Mango Juice</td>
    <td>35	</td>
    <td>Fri Oct 16 2020	</td>
    <td>Food</td>
  </tr>
  <tr>
    <td>Dress</td>
    <td>2000</td>
    <td>Sun Oct 25 2020	</td>
    <td>Cloth</td>
  </tr>
  <tr>
    <td>Tour</td>
    <td>2555</td>
    <td>Thu Oct 29 2020	</td>
    <td>Entertainment</td>
  </tr>
  <tr>
    <td>Meals</td>
    <td>300</td>
    <td>Fri Oct 30 2020	</td>
    <td>Food</td>
  </tr>
  <tr>
    <td>Mobile</td>
    <td>3500</td>
    <td>Mon Nov 02 2020</td>
    <td>Gadgets</td>
  </tr>
  <tr>
    <td>Exam Fees</td>
    <td>1245</td>
    <td>Wed Nov 04 2020	</td>
    <td>Academic</td>
  </tr>
  
</table>

`;
