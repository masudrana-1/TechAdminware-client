import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blogs from './components/Blogs/Blogs';
import Course from './components/Course/Course';
import CourseLink from './components/CourseLink/CourseLink';
import Courses from './components/Courses/Courses';
import FAQ from './components/FAQ/FAQ';
import LogIn from './components/LogIn/LogIn';
import Register from './components/Register/Register';
import Main from './layout/Main';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/courses',
          loader: () => {
            return fetch('http://localhost:5000/category')
          },
          element: <Courses></Courses>
        },
        {
          path: '/course',
          element: <Course></Course>
        },
        {
          path: '/courselink',
          element: <CourseLink></CourseLink>
        },
        {
          path: '/faq',
          element: <FAQ></FAQ>
        },
        {
          path: '/blogs',
          element: <Blogs></Blogs>
        },
        {
          path: '/login',
          element: <LogIn></LogIn>
        },
        {
          path: '/register',
          element: <Register></Register>
        }
      ]
    }
  ])

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
