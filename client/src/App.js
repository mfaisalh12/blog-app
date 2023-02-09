import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Content from "./pages/Content/Content";
import Write from "./pages/Write/Write";
import Dashboard from "./pages/Dashboard/Dashboard";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";

import "./App.css";

const Layout = () => {
	return (
		<>
			<Navbar />
			<Outlet />
			<Footer />
		</>
	);
};

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/post/:id",
				element: <Content />,
			},
			{
				path: "/write",
				element: <Write />,
			},
			{
				path: "/dashboard",
				element: <Dashboard />,
			},
		],
	},
	{
		path: "/signup",
		element: <Register />,
	},
	{
		path: "/signin",
		element: <Login />,
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
