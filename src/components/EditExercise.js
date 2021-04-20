import { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom"

export default function EditExercise(props) {
	const location = useLocation();
	const exercise = location.state?.exercise;
	const pageTitle = `Edit ${exercise.name}`;
	const [name, setName] = useState([exercise.name]);
	const [category, setCategory] = useState([exercise.category]);
	const [subCategory, setSubCategory] = useState([exercise.subCategory]);
	const setPageTitle = props.setPageTitle;
	const setPageTitleVisibility = props.setPageTitleVisibility;
	
	useEffect(_=>{
		setPageTitle(pageTitle);
		setPageTitleVisibility(true);
	  },[setPageTitle, pageTitle, setPageTitleVisibility]);

	const updateName = (event) => {
		setName(event.target.value);
	};

	const updateCategory = (event) => {
		setCategory(event.target.value);
	};

	const updateSubCategory = (event) => {
		setSubCategory(event.target.value);
	};

	const submitHandler = (e) => {
		e.preventDefault();

		let newExercise = {
			id: exercise.id,
			name: name,
			category: category,
			subCategory: subCategory
		}

		props.updateExercise(newExercise);
	}
	props.setPageTitle(pageTitle)
	return (
		<div>
			<div className="mt-10 sm:mt-0">
				<div className="md:grid md:grid-cols-5 md:gap-6">
					<div className="md:col-span-1"></div>
					<div className="mt-5 md:mt-0 md:col-span-3">
						<form onSubmit={submitHandler}>
							<div className="shadow overflow-hidden sm:rounded-md">
								<div className="px-4 py-5 bg-white sm:p-6">
									<div className="grid grid-cols-6 gap-6">
										<div className="col-span-6 sm:col-span-4">
											<label htmlFor="exercise_name" className="block text-sm font-medium text-gray-700">Exercise Name</label>
											<input
												type="text"
												value={name}
												onChange={updateName}
												name="exercise_name"
												id="exercise_name"
												className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
											/>
										</div>

										<div className="col-span-6 sm:col-span-3">
											<label htmlFor="category" className="block text-sm font-medium text-gray-700">Category</label>
											<input
												type="text"
												value={category}
												onChange={updateCategory}
												name="category"
												id="category"
												className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
											/>
										</div>

										<div className="col-span-6 sm:col-span-3">
											<label htmlFor="sub_category" className="block text-sm font-medium text-gray-700">Sub Category</label>
											<input
												type="text"
												value={subCategory}
												onChange={updateSubCategory}
												name="sub_category"
												id="sub_category"
												className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
											/>
										</div>
									</div>
								</div>
								<div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
									<button
										type="submit"
										className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
									>Update</button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	)
}