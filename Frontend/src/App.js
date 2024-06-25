import { Route, Routes } from "react-router-dom";
import React, { Suspense } from "react";
import "./App.css";
import Home from "./pages/Home";
import Navbar from "./components/common/Navbar";
import OpenRoute from "./components/core/Auth/OpenRoute";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import ForgotPassword from "./pages/ForgotPassword";
import UpdatePassword from "./pages/UpdatePassword";
import VerifyEmail from "./pages/VerifyEmail";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ProtectedRoute from "./components/core/Auth/ProtectedRoute";
import Settings from "./components/core/Dashboard/settings/Settings";
import EnrolledCourses from "./components/core/Dashboard/EnrolledCourses";
import Cart from "./components/core/Dashboard/cart/Cart";
import { ACCOUNT_TYPE } from "./data/constants";
import { useSelector } from "react-redux";
import AddCourse from "./components/core/Dashboard/addCourse/addCourse";
import MyCourses from "./components/core/Dashboard/MyCourses";
import EditCourse from "./components/core/Dashboard/EditCourse";
import Catalog from "./pages/Catalog";
import CourseDetails from "./pages/CourseDetails";
import ViewCourse from "./pages/ViewCourse";
import VideoDetails from "./components/core/ViewCourse/VideoDetails";
import Instructor from './components/core/Dashboard/InstructorDashboard/Instructor'
const Dashboard = React.lazy(() => import("./pages/Dashboard"));
const Error = React.lazy(() => import("./pages/Error"));
const MyProfile = React.lazy(() =>
  import("./components/core/Dashboard/MyProfile")
);

function App() {
  const { user } = useSelector((state) => state.profile);
  return (
    <div className="w-screen min-h-screen  bg-richblack-900 flex flex-col font-inter">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/catalog/:catalogName" element={<Catalog />} />
        <Route path="/courses/:courseId" element={<CourseDetails />} />
        <Route
          path="/Login"
          element={
            <OpenRoute>
              <Login />
            </OpenRoute>
          }
        />
        <Route
          path="/Signup"
          element={
            <OpenRoute>
              <SignUp />
            </OpenRoute>
          }
        />
        <Route
          path="/forgot-password"
          element={
            <OpenRoute>
              <ForgotPassword />
            </OpenRoute>
          }
        />
        <Route
          path="/update-password/:id"
          element={
            <OpenRoute>
              <UpdatePassword />
            </OpenRoute>
          }
        />
        <Route
          path="/verify-email"
          element={
            <OpenRoute>
              <VerifyEmail />
            </OpenRoute>
          }
        />
        <Route
          path="/about"
          element={
            <OpenRoute>
              <About />
            </OpenRoute>
          }
        />
        <Route path="/contact" element={<Contact />} />

        <Route
          element={
            <Suspense
              fallback={
                <div className="grid flex-1 place-items-center">
                  <div className="spinner"></div>
                </div>
              }
            >
              <Dashboard />
            </Suspense>
          } 
        >
          <Route
            path="/dashboard/my-profile"
            element={
              <Suspense
                fallback={
                  <div className="grid flex-1 place-items-center">
                    <div className="spinner"></div>
                  </div>
                }
              >
                <ProtectedRoute>
                  <MyProfile />
                </ProtectedRoute>
              </Suspense>
            }
          />
          <Route path="/dashboard/Settings" element={<Settings />} />
          {user?.accountType === ACCOUNT_TYPE.STUDENT && (
            <>
              <Route
                path="/dashboard/enrolled-courses"
                element={<EnrolledCourses />}
              />
              <Route path="/dashboard/cart" element={<Cart />} />
            </>
          )}
          {user?.accountType === ACCOUNT_TYPE.STUDENT && (
            <>
              <Route
                path="/dashboard/enrolled-courses"
                element={<EnrolledCourses />}
              />
              <Route path="/dashboard/cart" element={<Cart />} />
            </>
          )}
          {user?.accountType === ACCOUNT_TYPE.INSTRUCTOR && (
            <>
              <Route path="/dashboard/add-course" element={<AddCourse />} />
              <Route path="/dashboard/my-courses" element={<MyCourses />} />
              <Route path="/dashboard/cart" element={<Cart />} />
              <Route
                path="/dashboard/edit-course/:courseId"
                element={<EditCourse />}
              />
               <Route path="/dashboard/instructor" element={<Instructor />} />
            </>
          )}
        </Route>

        <Route
          element={
            <ProtectedRoute>
              <ViewCourse />
            </ProtectedRoute>
          }
        >
          {user?.accountType === ACCOUNT_TYPE.STUDENT && (
            <>
              <Route
                path="view-course/:courseId/section/:sectionId/sub-section/:subSectionId"
                element={<VideoDetails />}
              />
            </>
          )}
        </Route>

        <Route
          path="*"
          element={
            <Suspense fallback={<div className="spinner w-full h-full"></div>}>
              <Error />
            </Suspense>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
