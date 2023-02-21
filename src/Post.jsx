export default function Post() {
    return(
        <div className="post">
        <div className="image">
          <img
            src="https://images.unsplash.com/photo-1676958906645-fc187a6c6481?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=400&q=60"
            alt=""
          />
        </div>
        <div className="text">
          <h2>Ful House for rent</h2>
          <p className="info">
            <a className="author">Jhon XYZ</a>
            <time>2023-01-06 16:45</time>
          </p>
          <p className="summary">
            Node.js provides a runtime environment to execute JavaScript code
            from outside a browser. NPM, the Node package manager is used for
            managing and sharing the packages for either React or Angular.
          </p>
        </div>
      </div>
    );
}