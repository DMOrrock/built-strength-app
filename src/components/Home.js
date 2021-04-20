import { useEffect } from 'react';
import '../styles/home.css';
import CoverPhoto from '../images/cover-photo.jpg'
import { Link } from 'react-router-dom';


export default function Home(props) {
	const setPageTitle = props.setPageTitle;
	const setPageTitleVisibility = props.setPageTitleVisibility;
	useEffect(_ => {
		setPageTitle("Home");
		setPageTitleVisibility(false);
	}, [setPageTitle, setPageTitleVisibility]);

	return (
		<div className="m-auto max-w-6xl p-12">
			<div className="flex flex-col md:flex-row">
				<div className="md:w-1/2 max-w-md flex flex-col justify-center">
					<div className="md:text-5xl text-2xl uppercase font-black">Built Strength App</div>
					<div className="text-xl mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
					<div className="my-5 h-16">
						<Link to="/select-exercises" className="shadow-md font-medium py-2 px-4 text-red-100 cursor-pointer bg-red-600 hover:bg-red-500 rounded text-lg text-center w-48">Start New Workout</Link>
					</div>
				</div>
				<div className="flex md:justify-end w-full md:w-1/2 -mt-5">
					<div className="bg-dots">
						<div className="shadow-2xl max-w-md z-10 rounded-full mt-6 ml-4">
							<img alt="card img" className="rounded-t" src={CoverPhoto} />
							<div className="text-2xl p-10 bg-white"><img alt="quote" className="float-left mr-1" src="https://assets-global.website-files.com/5b5a66e9f3166b36708705fa/5cf8fb1f994fb7168d0d66fb_quote-intro.svg" /> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}