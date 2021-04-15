import PageTitle from './PageTitle'
import {Link} from 'react-router-dom'

export default function Exercises(props) {
	return (
		<div>
			<PageTitle title="Exercises" />
			<div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
				<div className="px-4 py-1 sm:px-0">
					<div className="flex flex-col">
						<div className="-my-1 overflow-x-auto sm:-mx-6 lg:-mx-8">
							<div className="py-2 align-middle inline-block min-w-full sm:px-2 lg:px-8">
								<Link 
									className="mb-4 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
									to="/add-exercise"
								>
									Add New Exercise
            					</Link>
								<div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
									<table className="min-w-full divide-y divide-gray-200">
										<thead className="bg-gray-50">
											<tr>
												<th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
													Name
              									</th>
												<th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden md:block">
													Category
              									</th>
												<th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden md:block">
													Sub Category
              									</th>
												<th scope="col" className="relative px-6 py-3">
													<span className="sr-only">Edit</span>
												</th>
											</tr>
										</thead>
										<tbody className="bg-white divide-y divide-gray-200">
											{props.exercises.map((exercise) => {
												return (
													<tr key={exercise.id} >
														<td className="px-6 py-4 whitespace-nowrap">
															<div className="flex items-center">
																{/* <div className="flex-shrink-0 h-10 w-10">
																		<img className="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60" alt="" />
																	</div> */}
																<div className="text-sm font-medium text-gray-900">{exercise.name}</div>
															</div>
														</td>
														<td className="px-6 py-4 whitespace-nowrap hidden md:block">
															<div className="text-sm text-gray-900">{exercise.category}</div>
														</td>
														<td className="px-6 py-4 whitespace-nowrap hidden md:block">
															<span className="text-sm text-gray-900">
																{exercise.subCategory}
															</span>
														</td>
														<td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
															<Link to={{pathname:`/edit-exercise/`, state: {exercise: exercise}}} className="text-indigo-600 hover:text-indigo-900">Edit</Link>
															<button onClick={() => props.removeExercise(exercise.id)} className="ml-4 text-red-600 hover:text-red-900">Delete</button>
														</td>
													</tr>
												)
											})}
										</tbody>
									</table>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}