docs.staticTypeCheck = `
<h1 class="heading">ReactJS − Static Type Check</h1>

<h1 class="contentHeading">What is Static Type Checking?</h1>
<p>Static type checking is a process that helps catch errors in your code before it runs. In React, it helps ensure that your components receive the correct props and that your state is properly typed. The two most popular static type checkers for React are Flow and TypeScript.</p>

<div style="background-color: #EDEDED; padding: 10px; border-radius: 5px; margin-bottom: 20px;">
<ul style="margin: 0;">
  <li>Catch errors during development</li>
  <li>Improve code documentation</li>
  <li>Enhance IDE support and autocompletion</li>
  <li>Make refactoring safer</li>
</ul>
</div>

<h1 class="subHeading">Flow</h1>
<p>Flow is a static type checker for JavaScript developed by Facebook. It can be incrementally adopted and works well with React.</p>

<div class="code-container">
  <pre><code>
<span class="comment">// Basic Flow usage in React</span>
<span class="keyword">import</span> React <span class="keyword">from</span> <span class="string">'react'</span>;

<span class="keyword">type</span> Props = {
   name: string,
   age: number,
   isActive?: boolean,  <span class="comment">// Optional prop</span>
   onClick: () => void
};

<span class="keyword">class</span> <span class="function-name">UserProfile</span> <span class="keyword">extends</span> React.Component<Props> {
   render() {
      <span class="keyword">const</span> { name, age, isActive, onClick } = this.props;
      <span class="keyword">return</span> (
         <span class="tag">&lt;div</span> <span class="attr">onClick=</span>{onClick}<span class="tag">&gt;</span>
            <span class="tag">&lt;h2&gt;</span>{name}<span class="tag">&lt;/h2&gt;</span>
            <span class="tag">&lt;p&gt;</span>Age: {age}<span class="tag">&lt;/p&gt;</span>
            {isActive && <span class="tag">&lt;p&gt;</span>Active User<span class="tag">&lt;/p&gt;</span>}
         <span class="tag">&lt;/div&gt;</span>
      );
   }
}

<span class="comment">// Using the component</span>
<span class="tag">&lt;UserProfile</span>
   <span class="attr">name=</span><span class="string">"John Doe"</span>
   <span class="attr">age=</span><span class="number">30</span>
   <span class="attr">onClick=</span>{() => console.log(<span class="string">'clicked'</span>)}
<span class="tag">/&gt;</span>
  </code></pre>
</div>

<h1 class="subHeading">TypeScript</h1>
<p>TypeScript is a typed superset of JavaScript that compiles to plain JavaScript. It's widely used in the React ecosystem and provides excellent type checking capabilities.</p>

<div class="code-container">
  <pre><code>
<span class="comment">// Basic TypeScript usage in React</span>
<span class="keyword">import</span> React, { useState } <span class="keyword">from</span> <span class="string">'react'</span>;

<span class="keyword">interface</span> User {
   id: number;
   name: string;
   email: string;
}

<span class="keyword">interface</span> Props {
   initialUser: User;
   onUpdate: (user: User) => void;
}

<span class="keyword">const</span> <span class="function-name">UserForm</span>: React.FC<Props> = ({ initialUser, onUpdate }) => {
   <span class="keyword">const</span> [user, setUser] = useState<User>(initialUser);

   <span class="keyword">const</span> handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      <span class="keyword">const</span> { name, value } = e.target;
      setUser(prev => ({
         ...prev,
         [name]: value
      }));
   };

   <span class="keyword">return</span> (
      <span class="tag">&lt;form</span> <span class="attr">onSubmit=</span>{(e) => {
         e.preventDefault();
         onUpdate(user);
      }}<span class="tag">&gt;</span>
         <span class="tag">&lt;input</span>
            <span class="attr">type=</span><span class="string">"text"</span>
            <span class="attr">name=</span><span class="string">"name"</span>
            <span class="attr">value=</span>{user.name}
            <span class="attr">onChange=</span>{handleChange}
         <span class="tag">/&gt;</span>
         <span class="tag">&lt;input</span>
            <span class="attr">type=</span><span class="string">"email"</span>
            <span class="attr">name=</span><span class="string">"email"</span>
            <span class="attr">value=</span>{user.email}
            <span class="attr">onChange=</span>{handleChange}
         <span class="tag">/&gt;</span>
         <span class="tag">&lt;button</span> <span class="attr">type=</span><span class="string">"submit"</span><span class="tag">&gt;</span>Update<span class="tag">&lt;/button&gt;</span>
      <span class="tag">&lt;/form&gt;</span>
   );
};

<span class="comment">// Using the component</span>
<span class="keyword">const</span> initialUser: User = {
   id: 1,
   name: <span class="string">'John Doe'</span>,
   email: <span class="string">'john@example.com'</span>
};

<span class="tag">&lt;UserForm</span>
   <span class="attr">initialUser=</span>{initialUser}
   <span class="attr">onUpdate=</span>{(user) => console.log(<span class="string">'Updated user:'</span>, user)}
<span class="tag">/&gt;</span>
  </code></pre>
</div>

<h1 class="subHeading">Comparing Flow and TypeScript</h1>
<div style="background-color: #EDEDED; padding: 10px; border-radius: 5px; margin-bottom: 20px;">
<ul style="margin: 0;">
  <li><strong>Flow:</strong>
    <ul>
      <li>Developed by Facebook</li>
      <li>Can be incrementally adopted</li>
      <li>More flexible type inference</li>
      <li>Smaller community</li>
    </ul>
  </li>
  <li><strong>TypeScript:</strong>
    <ul>
      <li>Developed by Microsoft</li>
      <li>More mature and widely adopted</li>
      <li>Better tooling and IDE support</li>
      <li>Larger ecosystem and community</li>
    </ul>
  </li>
</ul>
</div>

<h1 class="subHeading">Summary</h1>
<p>Static type checking with Flow or TypeScript brings significant benefits to React development. Flow offers a more flexible, incremental approach, while TypeScript provides a more comprehensive, enterprise-ready solution. Both tools help catch errors early, improve code quality, and enhance developer experience through better IDE support. The choice between them often depends on project requirements, team preferences, and existing infrastructure. For new projects, TypeScript is generally recommended due to its maturity and widespread adoption in the React ecosystem.</p>
`;  