const router = require("express").Router();

const {
  getAllThoughts,
  addThought,
} = require("../../controllers/thought-controller");

// set up GET all and POST at /api/Thoughts
router.route("/").get(getAllThoughts).post(addThought);

// set up GET one, PUT, and DELETE at /api/Thoughts/:id
// router.route("/:id").get(getThoughtById).put(updateThought).delete(deleteThought);

module.exports = router;
