import Admin from "../pages/Admin";
import Error404 from "../pages/errors/404";
import Main from "../pages/Main";

export const URL = "/Sweet-Bakery-React";

const routers = [
  { path: `${URL}/`, component: Main, exact: true },
  { path: `${URL}/admin`, component: Admin, exact: true },
  { path: `${URL}/error/404`, component: Error404, exact: true },
]

export default routers;