const router = require("express").Router();
const {
    getAllThoughts,
    getSingleThought,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    removeReaction,
} = require("../../controllers/userController");

// /api/thoughts
router.route("/").get(getAllThoughts).post(createThought);

// /api/thoughts/:thoughtId
router
    .route("/:userId")
    .get(getSingleThought)
    .put(updateThought)
    .delete(deleteThought);

// /api/thoughts/:thoughtId/friends
router.route("/:thoughtId/friends").post(addReaction);

// /api/thoughts/:thoughtId/friends/:friendId
router.route("/:thoughtId/friends/:friendsId").delete(removeReaction);

module.exports = router;
