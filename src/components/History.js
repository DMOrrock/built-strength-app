import { useEffect } from 'react';
import Table from './Table'

export default function History(props) {
	const tableData = [];
	const setPageTitle = props.setPageTitle;
	useEffect(_ => {
		setPageTitle("Workout History");
	}, [setPageTitle]);

	props.workouts.forEach(workout => {
		let date = new Date(workout.date);
		let exerciseNames = "";
		workout.exercises.forEach((exercise) => {
			exerciseNames = exerciseNames + exercise.name + ", ";
		})
		tableData.push({
			...workout,
			date: date.toDateString(),
			number: workout.exercises.length,
			exerciseNames: exerciseNames
		})
	})

	return (
		<Table
			headers={["Date", "Number of Exercises", "Exercises", ""]}
			dataNames={["date", "number", "exerciseNames"]}
			actions={[
				{
					type: "Link",
					pathname: `/view-workout/`,
					passState: true,
					statePropName: "workout",
					className: "ml-4 text-indigo-600 hover:text-indigo-900",
					text: "View Details"
				},
				{
					type: "Button",
					onClickMethod: props.removeWorkout,
					paramPropName: "id",
					className: "ml-4 text-red-600 hover:text-red-900",
					text: "Delete"
				}
			]}
			data={tableData}
		/>
	)
}