// import { createBrowserRouter } from "react-router-dom";
// import ErrorPage from "../pages/error";
// import HomePage from "../pages/home";
// import EventPage from "../pages/events";
// import AboutPage from "../pages/about";
// import SponsorsPage from "../pages/sponsers";
// import TeamPage from "../pages/team";
// import OneEvent from "../pages/events/oneevent";
// import PrivateRoute from "../components/privateroutes";
// import routesconfig from "../configs/routesconfig";
// import SuccessPage from "../pages/auth/succespage";
// import Signin from "../pages/auth/signinPage";
// import ProfilePage from "../pages/profile/profile";
// import RegisterPage from "../pages/auth/registerPage";
// import EventRegisterPage from "../pages/auth/eventRegisterPage";
// import HighlightsPage from "../pages/events/highligtspage";
// import { Suspense } from "react";
// import Loading from "../components/ui/loading";
// export const mainRouter = createBrowserRouter([
//     {
//         path:"/login",
//         element:<Signin/>,
//         errorElement :<ErrorPage/>
//     },
//     {
//         path:"/register",
//         element: <RegisterPage/>,
//         errorElement :<ErrorPage/>
//     },
//     {
//         path:"/success",
//         element: <SuccessPage/>,
//         errorElement :<ErrorPage/>
//     },
//     {
//         path: routesconfig.home,
//         element:  <HomePage/> ,
//         errorElement:<ErrorPage/>
//     },
//     {
//         path: routesconfig.events,
//         element:<EventPage/>,
//         errorElement:<ErrorPage/>,
//     },
//     {
//         path: `${routesconfig.events}/:eventId`, // Dynamic route for event details
//         element: <OneEvent />,
//         errorElement: <ErrorPage />,
//     },
//     {
//         path: routesconfig.about,
//         element:<AboutPage/>,
//         errorElement:<ErrorPage/>
//     },
//     {
//         path: routesconfig.team,
//         element:<TeamPage/>,
//         errorElement:<ErrorPage/>
//     },
//     {
//         path: routesconfig.sponsors,
//         element:<SponsorsPage/>,
//         errorElement:<ErrorPage/>
//     },
//     {
//         element: <PrivateRoute/>,//wraps the routes below and protect them
//         children : [
           
//             {
//                 path: routesconfig.profile,
//                 element:<ProfilePage/>,
//                 errorElement:<ErrorPage/>
//             },
//             {
//                 path: `${routesconfig.events}/:id/register`,
//                 element:<EventRegisterPage/>,
//                 errorElement:<ErrorPage/>
//             },
//             {
//                 path: `${routesconfig.highlight}/:id`,
//                 element:<HighlightsPage/>,
//                 errorElement:<ErrorPage/>
//             },
//         ]
//     },
    
// ])


import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
import Loading from "../components/ui/loading";
import PrivateRoute from "../components/privateroutes";
import routesconfig from "../configs/routesconfig";
import WinnersPage from "../pages/winners";


// Lazy-loaded pages
const ErrorPage = lazy(() => import("../pages/error"));
const HomePage = lazy(() => import("../pages/home"));
const EventPage = lazy(() => import("../pages/events"));
const AboutPage = lazy(() => import("../pages/about"));
const SponsorsPage = lazy(() => import("../pages/sponsers"));
const TeamPage = lazy(() => import("../pages/team"));
const OneEvent = lazy(() => import("../pages/events/oneevent"));
const SuccessPage = lazy(() => import("../pages/auth/succespage"));
const Signin = lazy(() => import("../pages/auth/signinPage"));
const ProfilePage = lazy(() => import("../pages/profile/profile"));
const RegisterPage = lazy(() => import("../pages/auth/registerPage"));
const EventRegisterPage = lazy(() => import("../pages/auth/eventRegisterPage"));
const HighlightsPage = lazy(() => import("../pages/events/highligtspage"));
// const ForgotPage = lazy(()=> import("../pages/auth/ForgotPage.jsx"));
// const ForgotEmail=lazy(()=>import("../pages/auth/Forgotemailpage"));

const ForgotPage = lazy(() => import("../pages/auth/forgotPage"));
const ForgotEmail = lazy(() => import("../pages/auth/Forgotemailpage"));
const VerifyEmail=lazy(()=>import("../pages/auth/VerifyEmail"));
const LaunchPage = lazy(() => import("../pages/launchpage/index"));
const SportsPage = lazy(() => import("../pages/sports"));
export const mainRouter = createBrowserRouter([
  {
    path: "/launch",
    element: (
      <Suspense fallback={<Loading />}>
        <LaunchPage/>
      </Suspense>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: (
      <Suspense fallback={<Loading />}>
        <Signin />
      </Suspense>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: `${routesconfig.forgot}/:id`,
    element: (
      <Suspense fallback={<Loading />}>
        <ForgotPage />
      </Suspense>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: `verify-email/:id`,
    element: (
      <Suspense fallback={<Loading />}>
        <VerifyEmail />
      </Suspense>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/register",
    element: (
      <Suspense fallback={<Loading />}>
        <RegisterPage />
      </Suspense>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/success",
    element: (
      <Suspense fallback={<Loading />}>
        <SuccessPage />
      </Suspense>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/forgot-password",
    element: (
      <Suspense fallback={<Loading />}>
        <ForgotEmail/>
      </Suspense>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: routesconfig.home,
    element: (
      <Suspense fallback={<Loading />}>
        <HomePage />
      </Suspense>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: routesconfig.winners,
    element: (
      <Suspense fallback={<Loading />}>
        <WinnersPage />
      </Suspense>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: routesconfig.events,
    element: (
      <Suspense fallback={<Loading />}>
        <EventPage />
      </Suspense>
    ),
    errorElement: <ErrorPage />,
  },
  // {
  //   path: `${routesconfig.events}/:eventId`, // Dynamic route for event details
  //   element: (
  //     <Suspense fallback={<Loading />}>
  //       <OneEvent />
  //     </Suspense>
  //   ),
  //   errorElement: <ErrorPage />,
  // },
  {
    path: routesconfig.about,
    element: (
      <Suspense fallback={<Loading />}>
        <AboutPage />
      </Suspense>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: routesconfig.team,
    element: (
      <Suspense fallback={<Loading />}>
        <TeamPage />
      </Suspense>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: routesconfig.sponsors,
    element: (
      <Suspense fallback={<Loading />}>
        <SponsorsPage />
      </Suspense>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/sports",
    element: (
      <Suspense fallback={<Loading />}>
        <SportsPage/>
      </Suspense>
    ),
    errorElement: <ErrorPage />,
  },
  {
    element: <PrivateRoute />, // Wraps the routes below and protects them
    children: [
      {
        path: routesconfig.profile,
        element: (
          <Suspense fallback={<Loading />}>
            <ProfilePage />
          </Suspense>
        ),
        errorElement: <ErrorPage />,
      },
      {
        path: `${routesconfig.events}/:id/register`,
        element: (
          <Suspense fallback={<Loading />}>
            <EventRegisterPage />
          </Suspense>
        ),
        errorElement: <ErrorPage />,
      },
      {
        path: `${routesconfig.highlight}/:id`,
        element: (
          <Suspense fallback={<Loading />}>
            <HighlightsPage />
          </Suspense>
        ),
        errorElement: <ErrorPage />,
      },
    ],
  },
]);
