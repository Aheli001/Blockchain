docs.features = `
<h1 class="heading">ReactJS − Features</h1>
        <div class="contentText">
<p class="contentText">ReactJS slowly becoming one of the best JavaScript framework among web developers. It is playing an essential role in the front-end ecosystem. Following are the important features of ReactJS</p>
<ul>
          <li>
            Virtual DOM
          </li>
          <li>
            Components
          </li>
          <li>
            JSX
          </li>
          <li>
            One way data binding
          </li>
          <li>
            Scalable
          </li>
          <li>
            Flexible
          </li>
          <li>
            Modular
          </li>
        </ul>
</div>
        <h1 class="contentHeading">Virtual DOM</h1>
        <div style="display: flex; flex-direction: column; gap: 0.5rem;">
        <p class="contentText">Virtual DOM is a special DOM created by React. Virtual DOM represents the real DOM of the current HTML document. Whenever there is a change in the HTML document, React checks the updated virtual DOM with the previous state of the Virtual DOM and update only the different in th actual / real DOM. This improves the performance of the rendering of the HTML document.</p>
        <p class="contentText">For example, if we create a React component to show the current time by periodically updating the time through setInterval() method, then React will update only the current time instead of updating the whole content of the component.</p>
        </div>
        <h1 class="contentHeading">
  Components
</h1>
<p class="contentText">React is build upon the concept of components. All modern front end framework relies on the component architecture. Component architecture enables the developer to break down the large application into smaller components, which can be further break down into even smaller component. Breaking down the application into smaller component simplifies the application and make it more understandable and manageable.</p>
<h1 class="contentHeading">
  JSX
</h1>
<p class="contentText">JSX is a JavaScript extension to create arbitrary HTML element using syntax similar to HTML. This will simplify the HTML document creation as well as easy to understand the document. React will convert the JSX into JavaScript object consisting of React's createElement() function call before executing it. It improves the performance of the application. Also, React allows the HTML document creation using pure createElement() function without JSX as well. This enables the developer to directly create HTML document in a situation where JSX does not fit well.</p>
<h1 class="contentHeading">
  One way data binding
</h1>
<p class="contentText">One way data binding prevents the data in a component to flow backward. A component can pass the data to its child component only. The data cannot be passed by a component to its parent component in any situation. This will simplify the data handling and reduce the complexity. Two way data binding may seems mandatory at first but a closer look suggests that the application can be done with one way data binding only and this simplifies the application concept as well.</p>
<h1 class="contentHeading">
  Scalable
</h1>
<p class="contentText">React can be used to create application of any size. React component architecture, Virtual DOM and one way data binding properly handle large application in a reasonable time frame required for a front end application. These features make React a scalable solution.</p>
<h1 class="contentHeading">
  Flexible
</h1>
<p class="contentText">React only provides only few basic concept to create truly scalable application. React does not restrict the developer in any way to follow a rigid process. This enables the developer to apply their own architecture on top the basic concept and makes it flexible.</p>
<h1 class="contentHeading">
  Modular
</h1>
<p class="contentText">React component can be created in a separate JavaScript file and can be made exportable. This enables the developer to categories and group certain components into a module so that it can be imported and used wherever needed.</p>
        
`;
