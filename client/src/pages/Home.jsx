import { useCallback, useEffect } from "react"
import { useWorkoutsContext } from "../hooks/useWorkoutsContext"
import WorkoutDetail from "../components/WorkoutDetail"
import WorkoutForm from "../components/WorkoutForm"

function Home() {
    const {workouts, dispatch} = useWorkoutsContext()

    const fetchWorkouts = useCallback(async function() {
        const response = await fetch("/api/workouts")
        const json = await response.json()

        if(response.ok) {
            dispatch({type: "SET_WORKOUTS", payload: json})
        }
    }, [dispatch])

    useEffect(function() {
        fetchWorkouts()
    }, [fetchWorkouts])

    return (
        <div className="home">
            <div className="workouts">
                {workouts && workouts.map((workout) => (
                    <WorkoutDetail key={workout._id} workout={workout}/>
                ))}
            </div>
            <WorkoutForm />
        </div>
    )
}

export default Home