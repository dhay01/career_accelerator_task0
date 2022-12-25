
import './App.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMoon, faUser} from "@fortawesome/free-solid-svg-icons";

//
function Navbar() {
    return (

        <div className="navbar">
            <div className="">
                <div className="container bg-indigo w-full ">
                    <div className="flex flex-row py-1 item-center">
                        <div className="basis-1/4">
                            <ul className="flex fles-row space-x-4 p-2 text-2xl justify-end items-center">

                                <li>
                                    <h1 className="logo-home font-poppins">GENDERIZE.IO</h1>
                                </li>

                            </ul>

                        </div>
                        <div className="basis-1/3">
                            <ul className="flex flex-row space-x-4 p-2 text-2xl justify-end items-center">
                                <li>
                                    <h1 className="font-poppins color-cyan">
                                        HOME
                                    </h1>

                                </li>
                                <li>
                                    JOKES
                                </li>
                                <li>
                                    ABOUT
                                </li>
                            </ul>
                        </div>
                        <div className="basis-1/3">
                            <ul className="flex flex-row space-x-4 p-2 text-2xl justify-end items-center">

                                <li>

                                    <FontAwesomeIcon className="icons-darkmood" icon={faMoon} size="xl" />

                                </li>
                                <li className="user-container">
                                   <h2>DHAY SALIH   <span>
                                         <FontAwesomeIcon className="icons-user" icon={faUser} />
                                   </span>
                                   </h2>

                                </li>
                            </ul>
                        </div>

                    </div>

                </div>


            </div>


        </div>

    );
}

export default Navbar;
