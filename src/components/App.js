import React from 'react'
import uuid from 'react-uuid'
import { Switch, Route, useHistory } from 'react-router-dom'
import History from './History';
import Home from './Home';
import NewWorkout from './NewWorkout';
import Exercises from './Exercises';
import EditExercise from './EditExercise';
import AddExercise from './AddExercise';
import SelectExercises from './SelectExercises';
import ViewWorkout from './ViewWorkout';
import PageTitle from './PageTitle'
import '../styles/App.css';
import api from '../api/api'
import { useEffect, useState } from 'react';

export default function App() {
  const [exercises, setExercises] = useState([]);
  const [workouts, setWorkouts] = useState([]);
  const [pageTitle, setPageTitle] = useState("Home")
  const [pageTitleVisibility, setPageTitleVisibility] = useState(true)
  let history = useHistory();

  useEffect(() => {
    const getData = async () => {
      const exerciseResponse = await api.get("/exercises");
      const workoutResponse = await api.get("/workouts");

      if (exerciseResponse.data) setExercises(exerciseResponse.data);
      if (workoutResponse.data) setWorkouts(workoutResponse.data);
    }
    getData();
  }, []);

  // CRUD Funcitons for Exercises
  const addExercise = async (exercise) => {
    const request = {
      id: uuid(),
      ...exercise,
    };

    const response = await api.post("/exercises", request);
    setExercises([...exercises, response.data]);
    history.push('/exercises');
  }

  const removeExercise = async (id) => {
    await api.delete(`/exercises/${id}`);
    const newExerciseList = exercises.filter((exercise) => {
      return exercise.id !== id;
    })

    setExercises(newExerciseList);
  }

  const updateExercise = async (exercise) => {
    const response = await api.put(`/exercises/${exercise.id}`, exercise);
    const { id } = response.data;
    setExercises(
      exercises.map((exercise) => {
        return exercise.id === id ? { ...response.data } : exercise;
      })
    );
    history.push('/exercises');
  }

  // CRUD Funcitons for Workouts
  const addWorkout = async (workout) => {
    const request = {
      ...workout,
    };

    const response = await api.post("/workouts", request);
    setWorkouts([...workouts, response.data]);
    history.push('/history');
  }

  const removeWorkout = async (id) => {
    await api.delete(`/workouts/${id}`);
    const newWorkoutList = workouts.filter((workout) => {
      return workout.id !== id;
    })

    setWorkouts(newWorkoutList);
  }

  return (
    <div className="bg-gray-100 min-h-screen h-full">
      <PageTitle title={pageTitle} visibility={pageTitleVisibility} />
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <Switch>
            <Route path="/add-exercise">
              <AddExercise
                addExercise={addExercise}
                setPageTitle={setPageTitle}
                setPageTitleVisibility={setPageTitleVisibility}
              />
            </Route>
            <Route path="/edit-exercise">
              <EditExercise
                updateExercise={updateExercise}
                setPageTitle={setPageTitle}
                setPageTitleVisibility={setPageTitleVisibility}
              />
            </Route>
            <Route path="/exercises">
              <Exercises
                exercises={exercises}
                removeExercise={removeExercise}
                setPageTitle={setPageTitle}
                setPageTitleVisibility={setPageTitleVisibility}
              />
            </Route>
            <Route path="/history">
              <History
                workouts={workouts}
                removeWorkout={removeWorkout}
                setPageTitle={setPageTitle}
                setPageTitleVisibility={setPageTitleVisibility}
              />
            </Route>
            <Route path="/new-workout">
              <NewWorkout
                addWorkout={addWorkout}
                setPageTitle={setPageTitle}
                setPageTitleVisibility={setPageTitleVisibility}
              />
            </Route>
            <Route path="/select-exercises">
              <SelectExercises
                exercises={exercises}
                setPageTitle={setPageTitle}
                setPageTitleVisibility={setPageTitleVisibility}
              />
            </Route>
            <Route path="/view-workout">
              <ViewWorkout
                setPageTitle={setPageTitle}
                setPageTitleVisibility={setPageTitleVisibility}
              />
            </Route>
            <Route path="/">
              <Home
                setPageTitle={setPageTitle}
                setPageTitleVisibility={setPageTitleVisibility}
              />
            </Route>
          </Switch>
        </div>
      </div>
    </div >
  );
}
