import { GiEarthAfricaEurope } from "react-icons/gi";
import { MdDashboard } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { GoSignOut, GoSignIn } from "react-icons/go";
import { FiSettings } from "react-icons/fi";
import { AiOutlineUserAdd } from "react-icons/ai";

export const publicItems = [
    {
        title: "Countries",
        icon: <GiEarthAfricaEurope />,
        path: "/countries"
    },
    {
        title: "Sign in",
        icon: <GoSignIn />,
        path: "/signin"
    }
];  

export const privateItems = [
    {
        title: "Dashboard",
        icon: <MdDashboard />,
        path: "/admin/countries"
    },
    {
        title: "Settings",
        icon: <FiSettings />,
        children: [
            {
                title: "Profile",
                icon: <CgProfile />,
                path: "/profile"
            },
            {
                title: "Add user",
                icon: <AiOutlineUserAdd />,
                path: "/add-user",
                type: "adduser"
            },
            {
                title: "Sign out",
                icon: <GoSignOut />,
                path: null,
                type: "signout"
            }
        ]
    }
];