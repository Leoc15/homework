var express = require('express');
var router = express.Router();
const { MongoClient } = require('mongodb');
const uri = 'mongodb://localhost:27017';

router.use(async (req, res, next) => {
  const client = new MongoClient(uri);
  const database = client.db('blog');
  req.posts = database.collection('posts');

  next();
});


/* GET home page. */
router.get('/', async (req, res, next) => {
  const posts = await req.posts.find().toArray();
  res.render('layout',
    {
      subtitle: 'Posts',
      posts,
      partials: {
        content: 'index'
      }
    });
});

router.get('/addPost', (req, res, next) => {
  res.render('layout',
    {
      subtitle: 'Add Post',
      partials: {
        content: 'addPost'
      }
    });
});

router.post('/addPost',async (req, res, next) => {
  try{
  await req.posts.insertOne({
    name:req.body.name,
    author:'The greatest showman',
    date: new Date(),
    body:req.body.body
    
  });
  res.redirect('/')
}catch{

}
});

router.post('/addPost2',async (req, res, next) => {
  req.body.author ='The greatest showman';
  req.body.date= new Date();
  try{
  await req.posts.insertOne({
    name:req.body.name,
    author:req.body.author,
    date: req.body.date,
    body:req.body.body 
  });
  res.status(201);
  res.send(req.body)
}catch{

}
});
module.exports = router;
