import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div>
                <div className="card lg:w-1/2 lg:m-auto mx-6 bg-base-100 shadow-xl mb-4">
                    <figure className="">
                        <img src="https://miro.medium.com/max/1400/1*TKYFiZnIhfHi_PAFcG0geg.jpeg" alt="Shoes" className="rounded-xl w-full" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">What is cors?</h2>
                        <div className="card-actions">
                            {/* The button to open modal */}
                            <label htmlFor="my-modal-6" className="btn modal-button">See Answer</label>

                            {/* Put this part before </body> tag */}
                            <input type="checkbox" id="my-modal-6" className="modal-toggle" />
                            <div className="modal modal-bottom sm:modal-middle">
                                <div className="modal-box">
                                    <h3 className="font-bold text-lg">Cross-origin resource sharing (CORS) is a browser security feature that restricts cross-origin HTTP requests that are initiated from scripts running in the browser. If your REST API's resources receive non-simple cross-origin HTTP requests, you need to enable CORS support.</h3>
                                    <div className="modal-action">
                                        <label htmlFor="my-modal-6" className="btn">Okay...</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="card lg:w-1/2 lg:m-auto mx-6 bg-base-100 shadow-xl mb-4">
                    <figure className="">
                        <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--ytGTW9Vg--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://thepracticaldev.s3.amazonaws.com/i/cufhvx44o66bb32ll2l8.png" alt="Shoes" className="rounded-xl w-full" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Why are you using firebase?</h2>
                        <p className="card-title">What other options do you have to implement authentication?</p>
                        <div className="card-actions">
                            {/* The button to open modal */}
                            <label htmlFor="my-modal-7" className="btn modal-button">See Answer</label>

                            {/* Put this part before </body> tag */}
                            <input type="checkbox" id="my-modal-7" className="modal-toggle" />
                            <div className="modal modal-bottom sm:modal-middle">
                                <div className="modal-box">
                                    <h3 className="font-bold text-lg">Firebase helps you develop high-quality apps, grow your user base, and earn more money. Each feature works independently, and they work even better together.</h3>
                                    <p className="">Usually, authentication by a server entails the use of a user name and password. Other ways to authenticate can be through cards, retina scans, voice recognition, and fingerprints.</p>
                                    <div className="modal-action">
                                        <label htmlFor="my-modal-7" className="btn">Okay...</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="card lg:w-1/2 lg:m-auto mx-6 bg-base-100 shadow-xl mb-4">
                    <figure className="">
                        <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--sbmJX9BV--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/d2kflp5t0kl302gfq567.jpg" alt="Shoes" className="rounded-xl w-full" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">How does the private route work?</h2>
                        <div className="card-actions">
                            {/* The button to open modal */}
                            <label htmlFor="my-modal-8" className="btn modal-button">See Answer</label>

                            {/* Put this part before </body> tag */}
                            <input type="checkbox" id="my-modal-8" className="modal-toggle" />
                            <div className="modal modal-bottom sm:modal-middle">
                                <div className="modal-box">
                                    <h3 className="font-bold text-lg">The react private route component renders child components ( children ) if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property.</h3>
                                    <div className="modal-action">
                                        <label htmlFor="my-modal-8" className="btn">Okay...</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="card lg:w-1/2 lg:m-auto mx-6 bg-base-100 shadow-xl">
                    <figure className="">
                        <img src="https://railsware.com/blog/wp-content/uploads/2018/09/2400%D1%851260-rw-blog-node-js.png" alt="Shoes" className="rounded-xl w-full" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">What is Node?</h2>
                        <h4 className="card-title">How does Node work?</h4>
                        <div className="card-actions">
                            {/* The button to open modal */}
                            <label htmlFor="my-modal-9" className="btn modal-button">See Answer</label>

                            {/* Put this part before </body> tag */}
                            <input type="checkbox" id="my-modal-9" className="modal-toggle" />
                            <div className="modal modal-bottom sm:modal-middle">
                                <div className="modal-box">
                                    <h3 className="font-bold text-lg">As an asynchronous event-driven JavaScript runtime, Node.js is designed to build scalable network applications. In the following "hello world" example, many connections can be handled concurrently. Upon each connection, the callback is fired, but if there is no work to be done, Node.js will sleep.</h3>
                                    <p className="">It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.</p>
                                    <div className="modal-action">
                                        <label htmlFor="my-modal-9" className="btn">Okay...</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;