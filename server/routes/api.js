const express = require("express")
const WorkoutsController = require("../controllers/WorkoutsController")

const router = express.Router()

// GET all workouts
router.get('/', WorkoutsController.index)

// GET single workout
router.get("/:id", WorkoutsController.show)

// POST a new workout
router.post('/', WorkoutsController.store)

// DELETE a workout
router.delete("/:id", WorkoutsController.destroy)

// UPDATE a workout
router.patch("/:id", WorkoutsController.update)

module.exports = router