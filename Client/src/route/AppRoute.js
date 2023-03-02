import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom';
import ErrorPage from '../components/errorpage/ErrorPage';
import Loader from '../components/loader/Loader';
import AttendanceCalendar from '../screen/attendanceCalendar/AttendanceCalendar';
import Home from '../screen/home/Home';
import LeaveApplication from '../screen/leave/LeaveApplication';
import LeaveStatus from '../screen/leavestatus/LeaveStatus';
import Login from '../screen/login/Login';
import AttendanceReport from '../screen/monthlyreport/AttendanceReport';
import Punch from '../screen/punch/Punch';
import Signup from '../screen/signup/Signup';
import '../App.css'

function AppRoute() {
    const [isLoading, setIsLoading] = React.useState(false)
    const loader = {
        onLoding: (status) => {
            setIsLoading(status)
        },
        isLoading: isLoading
    }
    useEffect(() => {
        loader.onLoding(true)
        setTimeout(() => {
            loader.onLoding(false)
        }, 1000)
    }, [])

    // const router = createBrowserRouter([
    //     {
    //         path: "/",
    //         element: <Login loader={loader} />,
    //         errorElement: <ErrorPage />,

    //     },
    //     {
    //         path: "/home",
    //         element: <Home />,
    //     },
    //     {
    //         path: "/signup",
    //         element: <Signup />,
    //     },
    //     {
    //         path: "/leaveApp",
    //         element: <LeaveApplication />,
    //     },
    //     {
    //         path: "/punch",
    //         element: <Punch />,
    //     },
    //     {
    //         path: "/calendar",
    //         element: <AttendanceCalendar />,
    //     },
    //     {
    //         path: "/leaveStatus",
    //         element: <LeaveStatus />,
    //     },
    //     {
    //         path: "/attendanceReport",
    //         element: <AttendanceReport />,
    //     },

    // ]);
    return (
        <>
            {isLoading ?
                <div className='loader-route'>
                    <Loader />
                </div>
                :
                <Routes>
                    <Route exact path="/" element={<Login loader={loader} />} />
                    <Route exact path="/home" element={<Home loader={loader}/>} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/leaveApp" element={<LeaveApplication loader={loader}/>} />
                    <Route path="/punch" element={<Punch />} />
                    <Route path="/calendar" element={<AttendanceCalendar />} />
                    <Route path="/leaveStatus" element={<LeaveStatus />} />
                    <Route path="/attendanceReport" element={<AttendanceReport />} />
                </Routes>}
        </>
    )
}
export default AppRoute