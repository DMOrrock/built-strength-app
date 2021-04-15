import PageTitle from './PageTitle';
import { useLocation } from "react-router-dom"

export default function NewWorkout(props) {
	let location = useLocation();
	const workout = location.state?.workout;
	let date = new Date(workout.date);
	const pageTitle = `View Workout - ${date.toDateString()}`;

	return (
		<div>
			<PageTitle title={pageTitle} />
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
													<tr>
														<th scope="col" className="w-1/4 px-6 py-3 text-left text-xs font-extrabold text-gray-700 uppercase tracking-wider">
															{exercise.name}
														</th>
														<th scope="col" className="w-1/4 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider text-center">
															Reps
              												</th>
														<th scope="col" className="w-1/4 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider text-center">
															Weight
              												</th>
														<th scope="col" className="w-1/4 relative px-6 py-3 text-center">
														</th>
													</tr>
												</thead>
												<tbody className="bg-white divide-y divide-gray-200">
													{exercise.sets.map((set, index) => {
														return (
															<tr key={index}>
																<td className="px-6 py-4 whitespace-nowrap">
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
																</td>
															</tr>
														)
													})}
												</tbody>
											</table>
										</div>
									)
								})}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}