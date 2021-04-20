import { Link } from 'react-router-dom'

export default function Table(props) {
	const headers = props.headers;
	const dataNames = props.dataNames;
	const data = props.data;
	const actions = props.actions;
	return (
		<div className="flex flex-col">
			<div className="-my-1 overflow-x-auto sm:-mx-6 lg:-mx-8">
				<div className="py-2 align-middle inline-block min-w-full sm:px-2 lg:px-8">
					<div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
						<table className="min-w-full divide-y divide-gray-200">
							<thead className="bg-gray-50">
								<tr>
									{headers.map((header, hdIndex) => {
										const width = `w-1/${headers.length} `
										return (
											<th
												key={hdIndex + "-Hdr"}
												scope="col"
												className={width + "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"}
											>{header}</th>
										)
									})}
								</tr>
							</thead>
							<tbody className="bg-white divide-y divide-gray-200">
								{data.map((item, trIndex) => {
									return (
										<tr key={trIndex} >
											{dataNames.map((dataName, tdIndex) => {
												if (tdIndex === 0) {
													return (
														<td key={trIndex + "-" + tdIndex} className="px-6 py-4 whitespace-nowrap">
															<div className="flex items-center">
																<div>
																	<p className="text-sm font-medium text-gray-900">{item[dataName]}</p>
																</div>
															</div>
														</td>
													)
												}
												else {
													return (
														<td key={trIndex + "-" + tdIndex} className="px-6 py-4 whitespace-nowrap">
															<div className="flex items-center">
																<div>
																	<p className="text-sm text-gray-900">{item[dataName]}</p>
																</div>
															</div>
														</td>
													)
												}
											})}
											{actions.length !== 0 ? (
												<td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
													{actions.map((action, actIndex) => {
														if (action.type === "Link" && action.passState) {
															return (
																<Link
																	key={trIndex + "-" + toString(1 + dataNames.length) + "link"}
																	to={{ pathname: action.pathname, state: { [action.statePropName]: item } }}
																	className={action.className}
																>{action.text}</Link>
															)
														}
														else if (action.type === "Button") {
															return (
																<button
																	key={trIndex + "-" + toString(1 + dataNames.length) + "btn"}
																	onClick={() => action.onClickMethod(item[action.paramPropName])}
																	className={action.className}
																>{action.text}</button>
															)
														}
														else {
															return (
																<span></span>
															)
														}
													})}
												</td>
											) : (null)}
										</tr>
									)
								})}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	)
}