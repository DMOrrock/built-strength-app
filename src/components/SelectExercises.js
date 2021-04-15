import PageTitle from './PageTitle'
import { useState } from 'react';
import {Link} from 'react-router-dom'

export default function Exercises(props) {
	const [exerciseList, setExerciseList] = useState([]);

	const addToExerciseList = (exercise) => {		
		exercise.sets = [];
		exercise.newReps = "";
		exercise.newWeight = "";
		setExerciseList([ ...exerciseList, exercise]);
		document.getElementById(exercise.id + "-add-btn").classList.add('hidden');
		document.getElementById(exercise.id + "-remove-btn").classList.remove('hidden');
		document.getElementById(exercise.id + "-row").classList.add('bg-green-100');
	}

	const removeFromExerciseList = (exercise) => {
		let idxToRemove = 0;
		let counter = 0;
		let newList = JSON.parse(JSON.stringify(exerciseList));
		newList.forEach((exerciseObj) => {
			if (exerciseObj === exercise) idxToRemove = counter;
			counter++
		})
		newList.splice(idxToRemove, 1);
		setExerciseList(newList);
		document.getElementById(exercise.id + "-remove-btn").classList.add('hidden');
		document.getElementById(exercise.id + "-add-btn").classList.remove('hidden');
		document.getElementById(exercise.id + "-row").classList.remove('bg-green-100');
	}

	return (
		<div>
			<PageTitle title="Select Exercises" />
			<div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
				<div className="px-4 py-1 sm:px-0">
					<div className="flex flex-col">
						<div className="-my-1 overflow-x-auto sm:-mx-6 lg:-mx-8">
							<div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
								<div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
									<table className="min-w-full divide-y divide-gray-200">
										<thead className="bg-gray-50">
											<tr>
												<th scope="col" className="w-1/4 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
													Name
              									</th>
												<th scope="col" className="w-1/4 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
													Category
              									</th>
												<th scope="col" className="w-1/4 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
													Sub Category
              									</th>
												<th scope="col" className="w-1/4 px-6 py-3">
													<span className="sr-only">Edit</span>
												</th>
											</tr>
										</thead>
										<tbody className="bg-white divide-y divide-gray-200">
											{props.exercises.map((exercise) => {
												return (
													<tr key={exercise.id} id={exercise.id + "-row"}>
														<td className="px-6 py-4 whitespace-nowrap">
															<div className="flex items-center">
																{/* <div className="flex-shrink-0 h-10 w-10">
																		<img className="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60" alt="" />
																	</div> */}
																<div className="text-sm font-medium text-gray-900">{exercise.name}</div>
															</div>
														</td>
														<td className="px-6 py-4 whitespace-nowrap">
															<div className="text-sm text-gray-900">{exercise.category}</div>
														</td>
														<td className="px-6 py-4 whitespace-nowrap">
															<span className="text-sm text-gray-900">
																{exercise.subCategory}
															</span>
														</td>
														<td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
															<button
																id={exercise.id + "-add-btn"} 
																onClick={() => addToExerciseList(exercise)} 
																className="ml-4 text-indigo-600 hover:text-indigo-900 font-bold"
															>Add To Workout</button>
															<button
																id={exercise.id + "-remove-btn"} 
																onClick={() => removeFromExerciseList(exercise)} 
																className="hidden ml-4 text-red-600 hover:text-red-900 font-bold"
															>Remove From Workout</button>
														</td>
													</tr>
												)
											})}
										</tbody>
									</table>
								</div>
								<div className="ml-4 mt-4 inline-flex justify-center align-center pb-1 px-3 border border-green-500 shadow-sm font-medium rounded-full text-green-500 bg-white hover:bg-green-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
								<Link to={{pathname:`/new-workout/`, state: {exerciseList: exerciseList, exercises:props.exercises}}} className="py-1 px-2 text-lg">Start Workout</Link>

								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}