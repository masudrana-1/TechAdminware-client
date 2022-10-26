import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blogs from './components/Blogs/Blogs';
import Course from './components/Course/Course';
import CourseDetails from './components/CourseDetails/CourseDetails';
import CourseLink from './components/CourseLink/CourseLink';
import Courses from './components/Courses/Courses';
import ErrorPage from './components/ErrorPage/ErrorPage';
import FAQ from './components/FAQ/FAQ';
import LogIn from './components/LogIn/LogIn';
import Register from './components/Register/Register';
import Main from './layout/Main';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      errorElement: <ErrorPage></ErrorPage>,
      element: <Main></Main>,
      children: [
        {
          path: '/courses',
          loader: () => {
            return fetch('http://localhost:5000/course')
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
          path: '/course/:id',
          loader: ({ params }) => fetch(`http://localhost:5000/course/${params.id}`),
          element: <CourseDetails></CourseDetails>
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
