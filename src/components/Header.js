import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo-white.png';

export default function Header() {
	return (
		<nav className="bg-gray-800 shadow">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between h-16">
					<div className="flex items-center">
						<div className="flex-shrink-0">
							<img className="h-8 w-10" src={logo} alt="logo" />
						</div>
						<div className="hidden md:block">
							<div className="ml-2 flex items-baseline space-x-4 content-center">
								<h2 className="text-red-500 pr-3 py-2 mr-10 rounded-md text-2xl font-bold">B U I L T</h2>

								<Link to='/' className="text-gray-300 hover:bg-gray-700 hover:text-red-500 px-3 py-2 rounded-md text-sm font-medium">Home</Link>

								<Link to='/select-exercises' className="text-gray-300 hover:bg-gray-700 hover:text-red-500 px-3 py-2 rounded-md text-sm font-medium">New Workout</Link>

								<Link to='/history' className="text-gray-300 hover:bg-gray-700 hover:text-red-500 px-3 py-2 rounded-md text-sm font-medium">Workout History</Link>
								
								<Link to='/exercises' className="text-gray-300 hover:bg-gray-700 hover:text-red-500 px-3 py-2 rounded-md text-sm font-medium">Exercises</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="md:hidden" id="mobile-menu">
				<div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">

					<Link to='/' className="text-gray-300 hover:bg-gray-700 hover:text-red-500 block px-3 py-2 rounded-md text-base font-medium">Home</Link>

					<Link to='/select-exercises' className="text-gray-300 hover:bg-gray-700 hover:text-red-500 block px-3 py-2 rounded-md text-base font-medium">New Workout</Link>

					<Link to='/history' className="text-gray-300 hover:bg-gray-700 hover:text-red-500 block px-3 py-2 rounded-md text-base font-medium">Workout History</Link>

					<Link to='/exercises' className="text-gray-300 hover:bg-gray-700 hover:text-red-500 block px-3 py-2 rounded-md text-base font-medium">Exercises</Link>
				</div>
			</div>
		</nav>
	)
}