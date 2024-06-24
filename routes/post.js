const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  
  image: {
    type:String,
  },
  user:{
    type: mongoose.Schema.Types.ObjectId,
    ref:'User'
  },

  title:String,
  description:String,
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
