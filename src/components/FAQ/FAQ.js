import React from 'react';

const FAQ = () => {
    return (
        <div>
            <h1 className='text-center text-2xl my-4 font-bold text-teal-500'>Frequently Asked Questions</h1>
            <div className='lg:w-4/6 lg:m-auto mx-3 '>
                <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mb-3">
                    <div className="collapse-title text-xl font-medium">
                        What is react?
                    </div>
                    <div className="collapse-content">
                        <p>React is a JavaScript library created by Facebook. <br />
                            React is a User Interface (UI) library. <br />
                            React is a tool for building UI components</p>
                    </div>
                </div>
                <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mb-3">
                    <div className="collapse-title text-xl font-medium">
                        What is Babel?
                    </div>
                    <div className="collapse-content">
                        <p>Babel is a JavaScript compiler that can translate markup or programming languages into JavaScript. <br />
                            With Babel, you can use the newest features of JavaScript (ES6 - ECMAScript 2015). <br />
                            Babel is available for different conversions. React uses Babel to convert JSX into JavaScript.</p>
                    </div>
                </div>
                <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mb-3">
                    <div className="collapse-title text-xl font-medium">
                        What is JSX?
                    </div>
                    <div className="collapse-content">
                        <p>JSX stands for JavaScript XML. <br />
                            JSX is an XML/HTML like extension to JavaScript.</p>
                    </div>
                </div>
                <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mb-3">
                    <div className="collapse-title text-xl font-medium">
                        What is react router?
                    </div>
                    <div className="collapse-content">
                        <p>React Router is a fully-featured client and server-side routing library for React, a JavaScript library for building user interfaces. React Router runs anywhere React runs; on the web, on the server with node.js, and on React Native.</p>
                    </div>
                </div>
                <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mb-3">
                    <div className="collapse-title text-xl font-medium">
                        What is a Firebase and how it works?
                    </div>
                    <div className="collapse-content">
                        <p>Google Firebase is a Google-backed application development software that enables developers to develop iOS, Android and Web apps. Firebase provides tools for tracking analytics, reporting and fixing app crashes, creating marketing and product experiment.</p>
                    </div>
                </div>
                <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mb-3">
                    <div className="collapse-title text-xl font-medium">
                        What is vercel?
                    </div>
                    <div className="collapse-content">
                        <p>Vercel is the platform for frontend developers, providing the speed and reliability innovators need to create at the moment of inspiration.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQ;