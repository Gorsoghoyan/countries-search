import { GoSignIn } from "react-icons/go";
import { GiEarthAfricaEurope } from "react-icons/gi";
import { MdDashboard } from "react-icons/md";

export const navItemsConfig = {
    private: [
        { text: "Dashboard", icon: <MdDashboard />, link: "/admin/countries" },
    ],
    public: [
        { text: "Countries", icon: <GiEarthAfricaEurope />, link: "/countries" },
        { text: "Sign in", icon: <GoSignIn />, link: "/signin" }
    ]
};