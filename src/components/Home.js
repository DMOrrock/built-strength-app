import { useEffect } from 'react';

export default function Home(props) {
	const setPageTitle = props.setPageTitle;
	useEffect(_=>{
		setPageTitle("Home");
	  },[setPageTitle]);

	return (
		<div>
			<div className="border-4 border-dashed border-gray-200 rounded-lg h-96"></div>
		</div>
	)
}