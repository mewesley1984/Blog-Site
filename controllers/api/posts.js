const router = require('express').Router();
const { Post, Comment } = require('../../models');

router.get('/', async (req, res) => {
  try {
    const posts = await Post.findAll({include: Comment})
    res.send(posts);
  } catch (err) {
    res.status(500).json(err);
  }
})

router.get('/:id', async (req, res) => {
  try {
    const postData = await Post.findOne({where: {id: req.params.id}});
    res.status(200).json(postData);

  } catch (err) {
    res.status(400).json(err);
  }
})

router.post('/', async (req, res) => {
  try {
    const loggedInUserId = 1 // TODO: get REAL logged in user
    const created = await Post.create({userId: 1, ...req.body});
    return res.send(created)
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
