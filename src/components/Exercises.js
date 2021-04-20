import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Table from './Table'

export default function Exercises(props) {
	const setPageTitle = props.setPageTitle;
	const setPageTitleVisibility = props.setPageTitleVisibility;

	useEffect(_ => {
		setPageTitle("Exercises");
		setPageTitleVisibility(true);
	}, [setPageTitle, setPageTitleVisibility]);
	return (
		<div>
			<Link
				className="mb-4 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
				to="/add-exercise"
			>Add New Exercise</Link>
			<Table
				headers={["Name", "Category", "Sub Category", ""]}
				dataNames={["name", "category", "subCategory"]}
				actions={[
					{
						type: "Link",
						pathname: `/edit-exercise/`,
						passState: true,
						statePropName: "exercise",
						className: "text-indigo-600 hover:text-indigo-900",
						text: "Edit"
					},
					{
						type: "Button",
						onClickMethod: props.removeExercise,
						paramPropName: "id	",
						className: "ml-4 text-red-600 hover:text-red-900",
						text: "Delete"
					}
				]}
				data={props.exercises}
			/>
		</div>
	)
}