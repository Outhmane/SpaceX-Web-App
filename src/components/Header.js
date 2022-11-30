import React from 'react'
import { Link } from 'react-router-dom'
import {SiSpacex} from "react-icons/si"

export default function Header() {
  return (
    <>
    <header className="absolute flex items-center 
    justify-between px-5 w-full">
        <div>
            <Link to="/">
                {/* Icon */}
                <SiSpacex className="text-8xl text-white"/>
            </Link>
        </div>

        <nav>
            <ul className='lg:flex lg:items-center lg:justify-items lg:gap-10'>
                <li>
                    <Link to="/capsules" className="text-white text-sm">
                      Capsules
                    </Link>
                </li>

                <li>
                    <Link to="/cores" className="text-white text-sm">
                      Cores
                    </Link>
                </li>

                <li>
                    <Link to="/crew" className="text-white text-sm">
                      Crew
                    </Link>
                </li>
                <li>
                    <Link to="/launches" className="text-white text-sm">
                      Launches
                    </Link>
                </li>

                
            </ul>
        </nav>
    </header>
    </>
  )
}
