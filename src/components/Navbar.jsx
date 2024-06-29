import { Link } from "react-router-dom"

export default function Navbar() {
    return <div>
        <div className="flex justify-between p-6 bg-slate-900">
            <div>
                <Link to='/'>
                    <div className="text-2xl text-white font-bold font-mono">RISHU.COM</div>

                </Link>
            </div>
            <div className="text-white">
                <Link to='/about' className="px-3 hover:text-blue-500">About</Link>
                <Link to='/contact' className="px-3 hover:text-blue-500">Contact Me</Link>
                <Link to='/donate' className="px-3 hover:text-blue-500">Donate</Link>

            </div>
        </div>
    </div>
}