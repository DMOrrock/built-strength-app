import { useLocation } from "react-router-dom";
import { useEffect } from 'react';
import Table from './Table'

export default function NewWorkout(props) {
	let location = useLocation();
	const workout = location.state?.workout;
	let date = new Date(workout.date);
	const pageTitle = `View Workout - ${date.toDateString()}`;
	const setPageTitle = props.setPageTitle;
	const setPageTitleVisibility = props.setPageTitleVisibility;

	useEffect(_ => {
		setPageTitle(pageTitle);
		setPageTitleVisibility(true);
	}, [setPageTitle, pageTitle, setPageTitleVisibility]);

	return (
		<div>
			<div className="flex flex-col">
				<div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
					<div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
						{workout.exercises.map((exercise, index) => {
							const tableData = [];
							exercise.sets.map((set) => (
								tableData.push({
									space: "",
									reps: set.reps,
									weight: set.weight + ` lbs`
								})
							))

							return (
								<Table
									key = {index}
									headers={[exercise.name, "Reps", "Weight"]}
									dataNames={["space", "reps", "weight"]}
									actions={[]}
									data={tableData}
								/>	
							)
						})}
					</div>
				</div>
			</div>
		</div>
	)
}