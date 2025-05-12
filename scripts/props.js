docs.props = `
<h1 class="heading">ReactJS − Properties (props)</h1>
<div class="contentText">
<p class="contentText">React enables developers to create dynamic and advanced component using properties. Every component can have attributes similar to HTML attributes and each attribute's value can be accessed inside the component using properties (props).</p>
<p class="contentText">For example, Hello component with a name attribute can be accessed inside the component through this.props.name variable.</p>

<div class="code-container">
  <pre><code>
// Usage in JSX
<span class="keyword">&lt;Hello name</span>=<span class="keyword">"React"</span> /&gt;

</div>
<p class="contentText">React properties supports attribute's value of different types. They are as follows,</p>
<div style="background-color: #EDEDED; padding: 10px; border-radius: 5px; margin-bottom: 20px;">
<ul style="margin: 0;">
  <li>String</li>
  <li>Number</li>
  <li>Datetime</li>
  <li>Array</li>
  <li>List</li>
  <li>Objects</li>
</ul>
</div>

<h1 class="contentHeading">Using Props in Components</h1>
<p class="contentText">Props (short for properties) are the main way to pass data from parent to child components in React. Here's how to use them effectively:</p>

<div class="code-container">
  <pre><code>
// Parent Component
<span class="keyword">class</span> ParentComponent <span class="keyword">extends</span> React.Component {
   <span class="keyword">render</span>() {
      <span class="keyword">const</span> user = {
         name: 'John Doe',
         age: 30,
         skills: ['React', 'JavaScript', 'HTML']
      };
      
      <span class="keyword">return</span> (
         &lt;ChildComponent 
            name={user.name}
            age={user.age}
            skills={user.skills}
            isActive={true}
            onUpdate={() => console.log('Updated')}
         /&gt;
      );
   }
}

// Child Component
<span class="keyword">class</span> ChildComponent <span class="keyword">extends</span> React.Component {
   <span class="keyword">render</span>() {
      <span class="keyword">const</span> { name, age, skills, isActive, onUpdate } = <span class="keyword">this</span>.props;
      
      <span class="keyword">return</span> (
         &lt;div&gt;
            &lt;h2&gt;User Details&lt;/h2&gt;
            &lt;p&gt;Name: {name}&lt;/p&gt;
            &lt;p&gt;Age: {age}&lt;/p&gt;
            &lt;p&gt;Skills: {skills.join(', ')}&lt;/p&gt;
            &lt;p&gt;Status: {isActive ? 'Active' : 'Inactive'}&lt;/p&gt;
            &lt;button onClick={onUpdate}&gt;Update&lt;/button&gt;
         &lt;/div&gt;
      );
   }
}
  </code></pre>
</div>

<p class="contentText">Key points about using props:</p>
<div style="background-color: #EDEDED; padding: 10px; border-radius: 5px; margin-bottom: 20px;">
<ul style="margin: 0;">
  <li>Props are read-only and cannot be modified by the child component</li>
  <li>Props can be of any JavaScript type (string, number, object, function, etc.)</li>
  <li>Props can be destructured for cleaner code</li>
  <li>Default props can be set using static defaultProps</li>
  <li>Prop types can be validated using PropTypes</li>
</ul>
</div>

<p class="contentText">Setting default props and prop types:</p>
<div class="code-container">
  <pre><code>
<span class="keyword">import</span> PropTypes from <span class="keyword">'prop-types'</span>;

<span class="keyword">class</span> ChildComponent <span class="keyword">extends</span> React.Component {
   <span class="keyword">static</span> defaultProps = {
      name: 'Guest',
      age: 0,
      skills: [],
      isActive: false
   };

   <span class="keyword">static</span> propTypes = {
      name: PropTypes.string.isRequired,
      age: PropTypes.number,
      skills: PropTypes.arrayOf(PropTypes.string),
      isActive: PropTypes.bool,
      onUpdate: PropTypes.func.isRequired
   };

   <span class="keyword">render</span>() {
      // Component code
   }
}
  </code></pre>
</div>

<p class="contentText">Remember that props are one-way data flow in React. If you need to update data, it should be done in the parent component and passed down as new props to the child components.</p>

<h1 class="contentHeading">Default Props</h1>
<p class="contentText">Default props allow you to specify default values for props in case they are not provided by the parent component. This helps prevent errors and makes components more robust.</p>

<div class="code-container">
  <pre><code>
// Using static defaultProps
<span class="keyword">class</span> UserProfile <span class="keyword">extends</span> React.Component {
   <span class="keyword">static</span> defaultProps = {
      name: 'Guest User',
      age: 18,
      role: 'user',
      isActive: true,
      preferences: {
         theme: 'light',
         notifications: true
      }
   };

   <span class="keyword">render</span>() {
      <span class="keyword">const</span> { name, age, role, isActive, preferences } = <span class="keyword">this</span>.props;
      
      <span class="keyword">return</span> (
         &lt;div&gt;
            &lt;h2&gt;{name}&lt;/h2&gt;
            &lt;p&gt;Age: {age}&lt;/p&gt;
            &lt;p&gt;Role: {role}&lt;/p&gt;
            &lt;p&gt;Status: {isActive ? 'Active' : 'Inactive'}&lt;/p&gt;
            &lt;p&gt;Theme: {preferences.theme}&lt;/p&gt;
         &lt;/div&gt;
      );
   }
}

// Usage without providing all props
&lt;UserProfile /&gt;  // Will use all default values
&lt;UserProfile name="John" age={25} /&gt;  // Will use default values for role, isActive, and preferences
  </code></pre>
</div>

<p class="contentText">Key points about default props:</p>
<div style="background-color: #EDEDED; padding: 10px; border-radius: 5px; margin-bottom: 20px;">
<ul style="margin: 0;">
  <li>Default props are only used when a prop is not provided</li>
  <li>They can be set using static defaultProps property</li>
  <li>Default props work with both class and functional components</li>
  <li>They can include complex objects and nested values</li>
  <li>Default props are merged with provided props</li>
</ul>
</div>

<p class="contentText">Using default props with functional components:</p>
<div class="code-container">
  <pre><code>
// Functional component with default props
<span class="keyword">const</span> Button = ({ 
   text = 'Click me', 
   type = 'button',
   disabled = false,
   onClick = () => console.log('Clicked!')
}) => {
   <span class="keyword">return</span> (
      &lt;button
         type={type}
         disabled={disabled}
         onClick={onClick}
      &gt;
         {text}
      &lt;/button&gt;
   );
};

// Usage examples
&lt;Button /&gt;  // Uses all default values
&lt;Button text="Submit" /&gt;  // Overrides only the text prop
&lt;Button text="Delete" type="submit" disabled={true} /&gt;  // Overrides multiple props
  </code></pre>
</div>

<p class="contentText">Remember that default props are a great way to make your components more resilient and easier to use, but they should be used thoughtfully. Always consider what makes sense as a default value for each prop in your specific use case.</p>

<h1 class="contentHeading">State vs Props</h1>
<p class="contentText">Understanding the difference between state and props is crucial for React development. Here's a detailed comparison:</p>

<div style="padding: 10px; border-radius: 5px; margin-bottom: 20px;">
<table style="width: 100%; border-collapse: collapse;">
  <tr>
    <th style="padding: 8px; text-align: left; border-bottom: 1px solid #ddd;">Aspect</th>
    <th style="padding: 8px; text-align: left; border-bottom: 1px solid #ddd;">State</th>
    <th style="padding: 8px; text-align: left; border-bottom: 1px solid #ddd;">Props</th>
  </tr>
  <tr>
    <td style="padding: 8px; border-bottom: 1px solid #ddd;">Definition</td>
    <td style="padding: 8px; border-bottom: 1px solid #ddd;">Internal data managed by the component</td>
    <td style="padding: 8px; border-bottom: 1px solid #ddd;">External data passed to the component</td>
  </tr>
  <tr>
    <td style="padding: 8px; border-bottom: 1px solid #ddd;">Mutability</td>
    <td style="padding: 8px; border-bottom: 1px solid #ddd;">Can be changed using setState()</td>
    <td style="padding: 8px; border-bottom: 1px solid #ddd;">Read-only, cannot be modified</td>
  </tr>
  <tr>
    <td style="padding: 8px; border-bottom: 1px solid #ddd;">Scope</td>
    <td style="padding: 8px; border-bottom: 1px solid #ddd;">Component-specific</td>
    <td style="padding: 8px; border-bottom: 1px solid #ddd;">Passed from parent to child</td>
  </tr>
  <tr>
    <td style="padding: 8px; border-bottom: 1px solid #ddd;">Initialization</td>
    <td style="padding: 8px; border-bottom: 1px solid #ddd;">In constructor or using useState()</td>
    <td style="padding: 8px; border-bottom: 1px solid #ddd;">Set by parent component</td>
  </tr>
  <tr>
    <td style="padding: 8px; border-bottom: 1px solid #ddd;">Purpose</td>
    <td style="padding: 8px; border-bottom: 1px solid #ddd;">Manage component's internal data</td>
    <td style="padding: 8px; border-bottom: 1px solid #ddd;">Configure component behavior</td>
  </tr>
</table>
</div>

<p class="contentText">Practical Example:</p>
<div class="code-container">
  <pre><code>
// Parent Component
<span class="keyword">class</span> ParentComponent <span class="keyword">extends</span> React.Component {
   <span class="keyword">constructor</span>(props) {
      <span class="keyword">super</span>(props);
      <span class="keyword">this</span>.state = {
         count: 0,
         items: ['Item 1', 'Item 2']
      };
   }

   handleIncrement = () => {
      <span class="keyword">this</span>.setState(prevState => ({
         count: prevState.count + 1
      }));
   };

   <span class="keyword">render</span>() {
      <span class="keyword">return</span> (
         &lt;div&gt;
            &lt;h2&gt;Parent Component&lt;/h2&gt;
            &lt;p&gt;Count: {<span class="keyword">this</span>.state.count}&lt;/p&gt;
            &lt;button onClick={<span class="keyword">this</span>.handleIncrement}&gt;Increment&lt;/button&gt;
            
            &lt;ChildComponent 
               items={<span class="keyword">this</span>.state.items}
               count={<span class="keyword">this</span>.state.count}
            /&gt;
         &lt;/div&gt;
      );
   }
}

// Child Component
<span class="keyword">class</span> ChildComponent <span class="keyword">extends</span> React.Component {
   <span class="keyword">render</span>() {
      <span class="keyword">const</span> { items, count } = <span class="keyword">this</span>.props;
      
      <span class="keyword">return</span> (
         &lt;div&gt;
            &lt;h3&gt;Child Component&lt;/h3&gt;
            &lt;p&gt;Received count: {count}&lt;/p&gt;
            &lt;ul&gt;
               {items.map((item, index) => (
                  &lt;li key={index}&gt;{item}&lt;/li&gt;
               ))}
            &lt;/ul&gt;
         &lt;/div&gt;
      );
   }
}
  </code></pre>
</div>

<p class="contentText">Key Differences in Practice:</p>
<div style="background-color: #EDEDED; padding: 10px; border-radius: 5px; margin-bottom: 20px;">
<ul style="margin: 0;">
  <li>State is used for data that changes over time within a component</li>
  <li>Props are used to pass data and event handlers down to child components</li>
  <li>State changes trigger re-renders of the component and its children</li>
  <li>Props changes trigger re-renders only in the receiving component</li>
  <li>State should be lifted up to the nearest common ancestor when multiple components need to share it</li>
</ul>
</div>

<p class="contentText">Remember: While props and state serve different purposes, they work together to create dynamic and interactive React applications. Choose state for data that changes within a component, and props for passing data between components.</p>
`;
