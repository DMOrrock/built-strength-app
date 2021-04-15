import PageTitle from './PageTitle';
import { Link } from 'react-router-dom';

export default function History(props) {
	return (
		<div>
			<PageTitle title="Workout History" />
			<div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
				<div className="px-4 py-6 sm:px-0">
					<div className="flex flex-col">
						<div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
							<div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
								<div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
									<table className="min-w-full divide-y divide-gray-200">
										<thead className="bg-gray-50">
											<tr>
												<th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
													Date
              									</th>
												<th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden md:block">
													Number of Exercises
              									</th>
												<th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden md:block">
													Exercises
              									</th>
												<th scope="col" className="relative px-6 py-3">
													<span className="sr-only">View Details</span>
												</th>
											</tr>
										</thead>
										<tbody className="bg-white divide-y divide-gray-200">
											{props.workouts.map((workout) => {
												let date = new Date(workout.date);
												return (
													<tr key={workout.id} >
														<td className="px-6 py-4 whitespace-nowrap">
															<div className="flex items-center">
																{/* <div className="flex-shrink-0 h-10 w-10">
																		<img className="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60" alt="" />
																	</div> */}
																<div className="text-sm font-medium text-gray-900">{date.toDateString()}</div>
															</div>
														</td>
														<td className="px-6 py-4 whitespace-nowrap hidden md:block">
															<div className="text-sm text-gray-900">
																{workout.exercises.length}
															</div>
														</td>
														<td className="px-6 py-4 whitespace-nowrap hidden md:block">
															<div className="text-sm text-gray-900">
																{workout.exercises.map((exercise) => {
																	return (
																		<span key={exercise.id}> {exercise.name},</span>
																	)
																})}
															</div>
														</td>
														<td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
															<Link
																to={
																	{
																		pathname: `/view-workout/`,
																		state: { workout }
																	}
																}
																className="ml-4 text-indigo-600 hover:text-indigo-900 text-sm font-medium"
															>
																View Details
															</Link>
															<button
																onClick={() => { props.removeWorkout(workout.id) }}
																className="ml-4 text-red-600 hover:text-red-900 text-sm font-medium"
															>
																Delete
															</button>
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