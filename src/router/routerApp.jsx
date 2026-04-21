import Inicio from "../pages/Inicio";
import Filosofia from "../pages/Filosofia";
import Galeria from "../pages/Galeria";
import Reservas from "../pages/Reservas";
import { createBrowserRouter } from "react-router-dom";

export let routerApp = createBrowserRouter([
    {
        path:"/",
        element: <Inicio />
    },
    {
        path: "/filosofia",
        element: <Filosofia />
    },
    {
        path: "/reservas",
        element: <Reservas />
    },
    {
        path: "/galeria",
        element: <Galeria />
    }

]);
