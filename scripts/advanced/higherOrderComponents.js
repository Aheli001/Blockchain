docs.higherOrderComponents = `
<h1 class="heading">ReactJS − Higher Order Components</h1>
        <div style="display: flex; flex-direction: column; gap: 0.5rem;">
        <p class="contentText">Since react components are interconnected by composition (having one component inside another) rather than by inheritance, logic used in a react component will not be shared to an another component directly. React community provides multiple option to share the logic between components and one such option is Higher Order Component. HOC is not react api, per se, but a design pattern with no side effects.</p>
        <p class="contentText">Let us learn how to use Higher Order Component in this chapter.</p>
        </div>


<h1 class="contentHeading">How to Create a HOC</h1>
<div style="display: flex; flex-direction: column; gap: 0.5rem;">
    <p class="contentText">Here's a basic example of creating a HOC:</p>
    <div class="code-container">
        <pre><code>
<span class="keyword">function</span> <span class="function-name">withLogging</span>(WrappedComponent) {
    <span class="keyword">return</span> <span class="keyword">function</span> <span class="function-name">WithLoggingComponent</span>(props) {
        console.log(<span class="string">'Component rendered:'</span>, WrappedComponent.name);
        <span class="keyword">return</span> <span class="tag">&lt;WrappedComponent</span> {...props} <span class="tag">/&gt;</span>;
    };
}
        </code></pre>
    </div>
</div>

<h1 class="contentHeading">Common Use Cases for HOCs</h1>
<div class="contentText">
    <ul>
        <li>Adding logging or debugging functionality</li>
        <li>Handling authentication and authorization</li>
        <li>Managing loading states</li>
        <li>Providing data fetching capabilities</li>
        <li>Implementing error boundaries</li>
        <li>Adding styling or layout wrappers</li>
    </ul>
</div>

<h1 class="contentHeading">Example: Authentication HOC</h1>
<div style="display: flex; flex-direction: column; gap: 0.5rem;">
    <p class="contentText">Here's a practical example of an authentication HOC:</p>
    <div class="code-container">
        <pre><code>
<span class="keyword">function</span> <span class="function-name">withAuth</span>(WrappedComponent) {
    <span class="keyword">return</span> <span class="keyword">function</span> <span class="function-name">WithAuthComponent</span>(props) {
        <span class="keyword">const</span> [isAuthenticated, setIsAuthenticated] = useState(<span class="keyword">false</span>);
        
        useEffect(() => {
            <span class="comment">// Check authentication status</span>
            checkAuthStatus().then(authenticated => {
                setIsAuthenticated(authenticated);
            });
        }, []);
        
        <span class="keyword">if</span> (!isAuthenticated) {
            <span class="keyword">return</span> <span class="tag">&lt;LoginPage</span> <span class="tag">/&gt;</span>;
        }
        
        <span class="keyword">return</span> <span class="tag">&lt;WrappedComponent</span> {...props} <span class="tag">/&gt;</span>;
    };
}

<span class="comment">// Usage:</span>
<span class="keyword">const</span> ProtectedDashboard = withAuth(Dashboard);
        </code></pre>
    </div>
</div>

<h1 class="contentHeading">Example: Data Fetching HOC</h1>
<div style="display: flex; flex-direction: column; gap: 0.5rem;">
    <p class="contentText">Here's an example of a HOC that handles data fetching:</p>
    <div class="code-container">
        <pre><code>
<span class="keyword">function</span> <span class="function-name">withData</span>(WrappedComponent, fetchData) {
    <span class="keyword">return</span> <span class="keyword">function</span> <span class="function-name">WithDataComponent</span>(props) {
        <span class="keyword">const</span> [data, setData] = useState(<span class="keyword">null</span>);
        <span class="keyword">const</span> [loading, setLoading] = useState(<span class="keyword">true</span>);
        <span class="keyword">const</span> [error, setError] = useState(<span class="keyword">null</span>);
        
        useEffect(() => {
            fetchData()
                .then(response => {
                    setData(response);
                    setLoading(<span class="keyword">false</span>);
                })
                .catch(err => {
                    setError(err);
                    setLoading(<span class="keyword">false</span>);
                });
        }, []);
        
        <span class="keyword">if</span> (loading) <span class="keyword">return</span> <span class="tag">&lt;LoadingSpinner</span> <span class="tag">/&gt;</span>;
        <span class="keyword">if</span> (error) <span class="keyword">return</span> <span class="tag">&lt;ErrorMessage</span> error={error} <span class="tag">/&gt;</span>;
        
        <span class="keyword">return</span> <span class="tag">&lt;WrappedComponent</span> data={data} {...props} <span class="tag">/&gt;</span>;
    };
}

<span class="comment">// Usage:</span>
<span class="keyword">const</span> UserListWithData = withData(UserList, fetchUsers);
        </code></pre>
    </div>
</div>

<h1 class="contentHeading">Best Practices for HOCs</h1>
<div class="contentText">
    <ul>
        <li>Don't mutate the original component</li>
        <li>Pass through unrelated props</li>
        <li>Use displayName for better debugging</li>
        <li>Don't use HOCs inside the render method</li>
        <li>Handle refs properly using forwardRef</li>
        <li>Consider using composition over inheritance</li>
    </ul>
</div>

<h1 class="contentHeading">Example: Composing Multiple HOCs</h1>
<div style="display: flex; flex-direction: column; gap: 0.5rem;">
    <p class="contentText">Here's how to compose multiple HOCs together:</p>
    <div class="code-container">
        <pre><code>
<span class="keyword">const</span> EnhancedComponent = withAuth(
    withData(
        withLogging(UserProfile),
        fetchUserData
    )
);

<span class="comment">// Or using a compose utility:</span>
<span class="keyword">const</span> compose = (...hocs) => component => 
    hocs.reduce((acc, hoc) => hoc(acc), component);

<span class="keyword">const</span> EnhancedComponent = compose(
    withAuth,
    withData(fetchUserData),
    withLogging
)(UserProfile);
        </code></pre>
    </div>
</div>

<h1 class="contentHeading">When to Use HOCs</h1>
<div class="contentText">
    <ul>
        <li>When you need to share common functionality between multiple components</li>
        <li>When you want to add behavior to components without modifying their code</li>
        <li>When you need to handle cross-cutting concerns like authentication, logging, or data fetching</li>
        <li>When you want to enhance components with additional props or state</li>
    </ul>
</div>

<h1 class="contentHeading">Alternatives to HOCs</h1>
<div class="contentText">
    <ul>
        <li>Custom Hooks (React 16.8+)</li>
        <li>Render Props pattern</li>
        <li>Context API</li>
        <li>Component composition</li>
    </ul>
</div>
`;  