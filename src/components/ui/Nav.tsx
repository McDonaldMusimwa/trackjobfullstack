import { Link } from "@tanstack/react-router"
type ROUTES = {
    link: string
    route: string
}
export default function Navbar() {

    const routes:ROUTES[] = [
        { link: "/", route: "Home" },
        { link: "/features", route: "Features" },
        { link: "/howitworks", route: "How it works" },
        { link: "/pricing", route: "Pricing" }
    ]

    return (<header className="w-full py-6 px-8 flex justify-between items-center shadow-sm bg-white">
        <h1 className="text-2xl font-bold">TrekJob</h1>
        <nav className="space-x-6 text-gray-700 font-medium hidden md:flex">
            {routes.map(route=> <Link key={route.link} to={route.link}>{route.route}</Link>)}
        </nav>
       <Link to="/login" >
      <button className="rounded-2xl px-6 font-medium">Sign In</button> </Link>
    </header>)
}