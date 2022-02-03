const mongoose = require('mongoose')

const Post = require('./models/Post')

mongoose.connect('mongodb://127.0.0.1/nodeblog_test_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})



/* Post.findByIdAndDelete('61d0643b7a41bb5ade4f6a1b', (error,post)=>{
  console.log(error,post)
}) */


/* Post.findByIdAndUpdate('61cf4376b9eae64daf2e6ce1', {
  title: 'Benim 1. postum'
},(error,post)=>{
  console.log(error,post)
})
 */


/* Post.findById('61cf4376b9eae64daf2e6ce1', (error,post)=>{
  console.log(error,post)
}) */


/*  Post.find({ },(error,post)=>{
  console.log(error,post)
}) */
 

/* Post.create({
    title: 'İkinci post başlığım',
    content: 'İkinci post içeriği, lorem ipsum text'
},(error,post) => {
    console.log(error,post)
}) */