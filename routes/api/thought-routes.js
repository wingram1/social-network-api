const router = require("express").Router();

const {
  getAllThoughts,
  addThought,
  getThoughtById,
  updateThought,
  deleteThought,
  addReaction,
  deleteReaction,
} = require("../../controllers/thought-controller");

// set up GET all and POST at /api/Thoughts
router.route("/").get(getAllThoughts).post(addThought);

// set up GET one, PUT, and DELETE at /api/Thoughts/:id
router
  .route("/:id")
  .get(getThoughtById)
  .put(updateThought)
  .delete(deleteThought);

router.route("/:id/reaction").put(addReaction);

router.route("/:id/reaction/:reactionId").delete(deleteReaction);

module.exports = router;
