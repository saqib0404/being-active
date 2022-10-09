import React from 'react';
import './Blogs.css'

const Blogs = () => {

    return (
        <section className='blogs-section'>
            <div className='blog'>
                <h2 style={{ textAlign: "center" }}><i>Blog-1</i></h2>
                <h3>How Does React Work?</h3>
                <p>Answer: In react we create Components and react renders the components and we can see them on the web.
                    Along this, react creates a virtual dom and put these on the virtual dom corresponding to the actual dom.
                    Whenever we change anything, react creates a new virtual dom and compares it to the previous one.
                    It identifies the changed component and renders only the changed one.
                    As a result the hole page is not reloaded and it saves a lot of time. It is a short description how reacts work.
                </p>
            </div>
            <div className='blog'>
                <h2 style={{ textAlign: "center" }}><i>Blog-2</i></h2>
                <h3>What are the differences Between Props and state in react?</h3>
                <p>Answer: <br /> <br />
                    <table>
                        <thead>
                            <tr>
                                <th>Props</th>
                                <th>State</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>The Data is passed from one component to another.</td>
                                <td>The Data is passed within the component only.</td>
                            </tr>
                            <tr>
                                <td>It is Immutable (cannot be modified).</td>
                                <td>It is Mutable ( can be modified).</td>
                            </tr>
                            <tr>
                                <td>Props can be used with state and functional components.</td>
                                <td>State can be used only with the state components/class component (Before 16.0).</td>
                            </tr>
                            <tr>
                                <td>Props are read-only.</td>
                                <td>State is both read and write.</td>
                            </tr>
                        </tbody>
                    </table>
                </p>
            </div>
            
        </section>
    );
};

export default Blogs;