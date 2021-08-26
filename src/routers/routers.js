import Admin from "../pages/Admin";
import Error404 from "../pages/errors/404";
import Main from "../pages/Main";

const routers = [
  { path: "/", component: Main, exact: true },
  { path: "/admin", component: Admin, exact: true },
  { path: "/error/404", component: Error404, exact: true },
]

export default routers;