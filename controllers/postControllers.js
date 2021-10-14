const Post = require('../models/Post');

exports.getAllPosts = async (req, res, next) => {
  try {
    const [posts, _] = await Post.findAll();

    res.status(200).json({count: posts.length, posts})
  } catch (error) {
      console.log(error);
      next(error);
  }
}

exports.createNewPost = async (req, res, next) => {
  try {
    //add uuid
    let { title, body } = req.body;
    const post = new Post(title, body);
    await post.save();
    res.status(201).json({message: "Post created"})
  } catch (error) {
      console.log
      next(error); 
  }
}

exports.getPostById = async (req, res, next) => {
  try {
    let postId = req.params.id;
    let [post, _] = Post.findById(postId);

    res.status(200).json({post: post[0]});
  } catch (error) {
      console.log
      next(error); 
  }
}