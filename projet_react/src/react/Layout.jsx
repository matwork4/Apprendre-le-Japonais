import { Outlet, Link } from "react-router-dom";
import '../styles/main.css';
const Layout = () => {
    return (

        <body>
            <div class="header">
                <Link to="/">Accueil</Link>
                <h1>Apprendre le Japonais</h1>
                <Link to="/aide">Aide</Link>
            </div>


            <Outlet />

            <div class="footer">
                <p>C. Jordan - M. Ruffieux - M2 MIASHS - 2022/2023</p>
            </div>
        </body>

    )
};

export default Layout;