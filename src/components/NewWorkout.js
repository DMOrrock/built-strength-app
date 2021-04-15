import PageTitle from './PageTitle';
import uuid from 'react-uuid'
import { useLocation } from "react-router-dom"
import { useState } from 'react';

export default function NewWorkout(props) {
	let location = useLocation();
	const exerciseList = location.state?.exerciseList;
	// const exercises = location.state?.exercises;
	const [workout, setWorkout] = useState({
		id: uuid(),
		date: new Date().toString(),
		exercises: exerciseList,
	})

	const cloneWorkout = () => {
		// Deep Clone one liner
		return JSON.parse(JSON.stringify(workout));
	}

	const deleteExercise = (index) => {
		let newWorkout = cloneWorkout();
		newWorkout.exercises.splice(index, 1);
		setWorkout(newWorkout);
	}

	const deleteSet = (exerciseId, index) => {
		let newWorkout = cloneWorkout();
		newWorkout.exercises.forEach((exercise) => {
			if (exercise.id === exerciseId) {
				exercise.sets.splice(index, 1);
			}
		})

		setWorkout(newWorkout);
	}

	const setsSubmitHandler = exerciseId => event => {
		event.preventDefault();
		let newWorkout = cloneWorkout();
		newWorkout.exercises.forEach((exercise) => {
			if (exercise.id === exerciseId) {
				exercise.sets.push({ reps: exercise.newReps, weight: exercise.newWeight });
			}
		})

		setWorkout(newWorkout);
	}

	const updateNewReps = exerciseId => event => {
		let newWorkout = cloneWorkout();
		newWorkout.exercises.forEach((exercise) => {
			if (exercise.id === exerciseId) exercise.newReps = parseInt(event.target.value);
		})
		setWorkout(newWorkout);
	}

	const updateNewWeight = exerciseId => event => {
		let newWorkout = cloneWorkout();
		newWorkout.exercises.forEach((exercise) => {
			if (exercise.id === exerciseId) exercise.newWeight = parseInt(event.target.value);
		})
		setWorkout(newWorkout);
	}

	return (
		<div>
			<PageTitle title="New Workout" />
			<div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
				<div className="px-4 py-6 sm:px-0">
					<div className="flex flex-col">
						<div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
							<div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
								{workout.exercises.map((exercise, index) => {
									return (
										<div key={exercise.id} className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg mt-3">
											<table className="min-w-full divide-y divide-gray-200 table-fixed border-gray-300 border-b-2">
												<thead className="bg-gray-50">
													<div className="table-row md:hidden">
														<div className="table-cell w-full text-left px-3 pt-3 font-extrabold text-gray-700 uppercase md:tracking-wider">{exercise.name}</div>
														<div className="table-cell"></div>
														<div className="table-cell"></div>
													</div>
													<tr>
														<th scope="col" className="hidden md:block md:w-1/4 md:px-6 py-3 text-left text-xs font-extrabold text-gray-700 uppercase md:tracking-wider">
															{exercise.name}
														</th>
														<th scope="col" className="md:w-1/4 px-6 py-3 text-xs font-medium text-gray-500 uppercase md:tracking-wider text-left md:text-center">
															Reps
              												</th>
														<th scope="col" className="md:w-1/4 px-6 py-3 text-xs font-medium text-gray-500 uppercase md:tracking-wider text-left md:text-center">
															Weight
              												</th>
														<th scope="col" className="md:w-1/4 px-6 py-3 text-right md:text-center">
															<button
																onClick={() => { deleteExercise(index) }}
																className="inline-flex justify-center pb-1 px-3 border border-red-500 shadow-sm text-xs font-medium rounded-full text-red-500 bg-white hover:bg-red-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
															>Remove Exercise</button>
														</th>
													</tr>
												</thead>
												<tbody className="bg-white divide-y divide-gray-200">
													{exercise.sets.map((set, index) => {
														return (
															<tr key={index}>
																<td className="px-6 py-4 whitespace-nowrap hidden md:block">
																</td>
																<td className="px-6 py-4 whitespace-nowrap text-center">
																	<div className="text-sm text-gray-900">
																		{set.reps}
																	</div>
																</td>
																<td className="px-6 py-4 whitespace-nowrap text-center">
																	<div className="text-sm text-gray-900">
																		{set.weight}
																		<span className="inline-flex items-center px-3 ml-2 rounded-md border border-gray-300 bg-gray-50 text-gray-500 text-sm">
																			lbs
                  															</span>
																	</div>
																</td>
																<td className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
																	<button
																		onClick={() => { deleteSet(exercise.id, index) }}
																		className="inline-flex justify-center pb-1 px-3 border border-red-500 shadow-sm text-xl font-medium rounded-full text-red-500 bg-white hover:bg-red-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
																	>-</button>
																</td>
															</tr>
														)
													})}
												</tbody>
											</table>
											<form onSubmit={setsSubmitHandler(exercise.id)}>
												<div className="table-row-group bg-gray-50 border-gray-300 border-t-4">
													<div className="table-row">
														<div className="table-cell w-1/4 px-6 py-4 whitespace-nowrap hidden md:block">
														</div>
														<div className="table-cell w-1/4 text-center md:px-28 py-4 whitespace-nowrap">
															<input
																type="number"
																value={exercise.newReps}
																onChange={updateNewReps(exercise.id)}
																className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
															/>
														</div>
														<div className="table-cell w-1/4 md:px-20 py-4 md:pl-16 whitespace-nowrap">
															<div className="mt-1 flex rounded-md shadow-sm">
																<input
																	type="number"
																	value={exercise.newWeight}
																	onChange={updateNewWeight(exercise.id)}
																	name="reps"
																	id="reps"
																	className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-l-md sm:text-sm border-gray-300"
																/>
																<span className="inline-flex items-center px-3 rounded-r-md border border-l-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
																	lbs
                  													</span>
															</div>
														</div>
														<div className="table-cell w-1/4 px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
															<button
																type="submit"
																className="inline-flex justify-center pt-.5 pb-1 px-2.5 border border-green-500 shadow-sm text-xl font-medium rounded-full text-green-500 bg-white hover:bg-green-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
															>+</button>
														</div>
													</div>
												</div>

											</form>
										</div>
									)
								})}
							</div>
							<button
								onClick={() => { props.addWorkout(workout) }}
								className="mx-8 my-4 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
							>
								Save Workout
            				</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}