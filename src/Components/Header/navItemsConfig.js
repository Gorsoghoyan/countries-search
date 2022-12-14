import { GiEarthAfricaEurope } from "react-icons/gi";
import { MdDashboard, MdManageAccounts } from "react-icons/md";
import { GoSignOut, GoSignIn } from "react-icons/go";
import { FiSettings } from "react-icons/fi";

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
                title: "Accounts",
                icon: <MdManageAccounts />,
                path: "/admin/accounts"
            },
            {
                title: "Sign out",
                icon: <GoSignOut />,
                type: "signout"
            }
        ]
    }
];