import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import Blogs from './components/Blogs/Blogs';
import CheckOut from './components/CheckOut/CheckOut';
import Course from './components/Course/Course';
import CourseDetails from './components/CourseDetails/CourseDetails';
import CourseLink from './components/CourseLink/CourseLink';
import Courses from './components/Courses/Courses';
import ErrorPage from './components/ErrorPage/ErrorPage';
import FAQ from './components/FAQ/FAQ';
import LogIn from './components/LogIn/LogIn';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Profile from './components/Profile/Profile';
import ReactPdf from './components/ReactPdf/ReactPdf';
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
          path: '/',
          loader: () => {
            return fetch('https://techadminware-server-assignment.vercel.app/course')
          },
          element: <Courses></Courses>
        },
        {
          path: '/courses',
          loader: () => {
            return fetch('https://techadminware-server-assignment.vercel.app/course')
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
          loader: ({ params }) => fetch(`https://techadminware-server-assignment.vercel.app/course/${params.id}`),
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
        },
        {
          path: '/profile',
          element: <Profile></Profile>
        },
        {
          path: '/checkout',
          element: <PrivateRoute><CheckOut></CheckOut></PrivateRoute>
        },
        {
          path: '/course/:id/pdf',
          loader: ({ params }) => fetch(`https://techadminware-server-assignment.vercel.app/course/${params.id}`),
          element: <ReactPdf></ReactPdf>
        }
      ]
    }
  ])

  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
