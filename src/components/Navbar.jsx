import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setAuth } from '../../store/authSlice'

export function Navbar() {
    const dispatch = useDispatch()
    const { auth } = useSelector(state => state.auth)

    return (
        <nav className="bg-[#525252] text-white flex items-center justify-between px-5 h-16" >
            <div className="py-2 px-4 rounded hover:bg-[#78716c] hover:scale-110 ease-in duration-300 cursor-pointer">
                <Link to="/"> Home</Link>
            </div>
            <ul className="flex  gap-4">
                <li className=" py-2 px-4 rounded hover:bg-[#78716c] hover:scale-110 ease-in duration-300 cursor-pointer ">
                    <Link to="/about"> About</Link>
                </li>
                <li className=" py-2 px-4 rounded hover:bg-[#78716c] hover:scale-110 ease-in duration-300 cursor-pointer ">
                    <Link to="/blogs"> Blog</Link>

                </li>
                <li className=" py-2 px-4 rounded hover:bg-[#78716c] hover:scale-110 ease-in duration-300 cursor-pointer ">
                    <Link to="/login">
                        <button onClick={() => dispatch(setAuth())}>
                            {auth ? "Logout" : "Login"}
                        </button>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}
