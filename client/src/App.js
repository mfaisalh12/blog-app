import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home/Home";
import Content from "./pages/Content/Content";
import Write from "./pages/Write/Write";
import Dashboard from "./pages/Dashboard/Dashboard";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import MainLayout from "./pages/Layout/Main/MainLayout";

import "./App.css";

const router = createBrowserRouter([
	{
		path: "/",
		element: <MainLayout />,
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
