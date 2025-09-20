import { createBrowserRouter } from "react-router-dom";
import AuthPage from "../pages/AuthPage";

const router = createBrowserRouter([
    { path: '/auth', element: <AuthPage /> },
]);
export default router;