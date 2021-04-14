import React from 'react'
import uuid from 'react-uuid'
import { Switch, Route, useHistory } from 'react-router-dom'
import History from './History';
import Home from './Home';
import NewWorkout from './NewWorkout';
import Exercises from './Exercises';
import EditExercise from './EditExercise';
import AddExercise from './AddExercise';
import '../styles/App.css';
import api from '../api/exercises'
import { useEffect, useState } from 'react';

export default function App() {
  const [exercises, setExercises] = useState([]);
  const [workouts, setWorkouts] = useState([]);
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

  return (
    <div className="bg-gray-100 h-screen">
      <Switch>
        <Route path="/new-workout">
          <NewWorkout />
        </Route>
        <Route path="/history">
          <History workouts={workouts} />
        </Route>
        <Route path="/exercises">
          <Exercises exercises={exercises} removeExercise={removeExercise} />
        </Route>
        <Route path="/add-exercise">
          <AddExercise addExercise={addExercise} />
        </Route>
        <Route path="/edit-exercise">
          <EditExercise updateExercise={updateExercise} />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}
