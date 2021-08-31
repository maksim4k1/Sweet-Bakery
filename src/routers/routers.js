import Admin from "../pages/Admin";
import Error404 from "../pages/errors/404";
import Main from "../pages/Main";

const routers = [
  { path: "/Sweet-Bakery-React", component: Main, exact: true },
  { path: "/Sweet-Bakery-React/admin", component: Admin, exact: true },
  { path: "/Sweet-Bakery-React/error/404", component: Error404, exact: true },
]

export default routers;