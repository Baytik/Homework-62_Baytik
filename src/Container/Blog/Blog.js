import React, {Component, Fragment} from 'react';
import './Blog.css';

class Blog extends Component {
    render() {
        return (
            <Fragment>
                <header>
                    <nav className="main-nav">
                        <ul>
                            <li><a href="s">About us</a></li>
                            <li><a href="s">Contacts</a></li>
                            <li><a href="s">Home</a></li>
                            <li><a href="s">Messages</a></li>
                            <li><a href="s">Profile</a></li>
                        </ul>
                    </nav>
                </header>
                <div className="main-pic">
                    <h1 className="main-title">Welcome Home</h1>
                    <p className="main-text">Home Sweet Home</p>
                    <p className="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Consectetur iure mollitia possimus quasi ullam. Ad alias animi
                        architecto beatae dignissimos doloremque doloribus ducimus, illum
                        nostrum obcaecati provident quidem sequi. Aliquid distinctio, dolore
                        eveniet molestiae praesentium quos reiciendis saepe tenetur
                        voluptas.</p>
                </div>
                <div className="blocks">
                    <div className="block block-1">
                        <h3 className="main-txt">About Company</h3>
                        <p className="txt">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Consectetur iure mollitia possimus quasi ullam. Ad alias animi
                            architecto beatae dignissimos doloremque doloribus ducimus, illum
                            nostrum obcaecati provident quidem sequi. Aliquid distinctio, dolore
                            eveniet molestiae praesentium quos reiciendis saepe tenetur
                            voluptas.</p>
                    </div>
                    <div className="block block-2">
                        <h3 className="main-txt">Our Projects</h3>
                        <p className="txt">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Consectetur iure mollitia possimus quasi ullam. Ad alias animi
                            architecto beatae dignissimos doloremque doloribus ducimus, illum
                            nostrum obcaecati provident quidem sequi. Aliquid distinctio, dolore
                            eveniet molestiae praesentium quos reiciendis saepe tenetur
                            voluptas.</p>
                    </div>
                    <div className="block block-3">
                        <h3 className="main-txt">About us</h3>
                        <p className="txt">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Consectetur iure mollitia possimus quasi ullam. Ad alias animi
                            architecto beatae dignissimos doloremque doloribus ducimus, illum
                            nostrum obcaecati provident quidem sequi. Aliquid distinctio, dolore
                            eveniet molestiae praesentium quos reiciendis saepe tenetur
                            voluptas.</p>
                    </div>
                    <div className="block block-4">
                        <h3 className="main-txt">Some Companies</h3>
                        <p className="txt">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Consectetur iure mollitia possimus quasi ullam. Ad alias animi
                            architecto beatae dignissimos doloremque doloribus ducimus, illum
                            nostrum obcaecati provident quidem sequi. Aliquid distinctio, dolore
                            eveniet molestiae praesentium quos reiciendis saepe tenetur
                            voluptas.</p>
                    </div>
                </div>
                <footer>
                    <p className="footer-text">Copyright @HomeSweetHome</p>
                </footer>
            </Fragment>
        );
    }
}

export default Blog;