
const Tweeter = function() {

  // An array of posts - this should be private. Use the dummy data below to get started

  const _posts = [
    {
        text: "First post!",
        id: "p1",
        comments: [
            { id: "c1", text: "First comment on first post!" },
            { id: "c2", text: "Second comment on first post!!" },
            { id: "c3", text: "Third comment on first post!!!" }
        ]
    },
    {
        text: "Aw man, I wanted to be first",
        id: "p2",
        comments: [
            { id: "c4", text: "Don't wory second poster, you'll be first one day." },
            { id: "c5", text: "Yeah, believe in yourself!" },
            { id: "c6", text: "Haha second place what a joke." }
        ]
    }    
  ]

// A variable postIdCounter to count the number of total posts

  let _postIdCounter =  2

// A variable commentIdCounter to count the number of total comments

  let _commentIdCounter = 6

// A getPosts function that returns the posts array

  const getPosts = () => _posts 

// An addPost function that receives some text and adds a post object to posts
// Each object should have three properties: id, text, and comments
// You should generate the next id correctly for each post: "p4", "p5", ...
// The comments array should be empty initially

  const addPost = (text) => {
    _postIdCounter++
    const id = _postIdCounter
    _posts.push({text: text, id: "p" + id, comments: []})
  }

// A removePost function that receives a postID and removes the relevant post from posts

  const removePost = id => {
    for (i in _posts) {
      if (_posts[i].id === id) {
          _posts.splice(i, 1)
      }
    }
  }
  

  // An addComment function that receives a postID and text. It should push an object to the relevant post's comments array
    // The object should have two properties: text and id - this is the comment's ID
    // You should generate the next id correctly for each comment:"c7", "c8", ...
  
  const addComment = (text, postID) => {
    _commentIdCounter++
    const commentID = _commentIdCounter
    for (i in _posts) {
      if (_posts[i].id === postID) {
        _posts[i].comments.push({id: "c" + commentID, text: text})
      }
    }
  }
  
  // A removeComment function that receives a postID and a commentID - you understand what it should do
  const removeComment = (postID, commentID) => {
    for (p in _posts) {
      if (_posts[p].id === postID) {
        for(c in _posts[p].comments){
          if(_posts[p].comments[c].id === commentID){
            _posts[p].comments.splice(c, 1)  
          } 
        }
      }
    }
  }
  return {
      getPosts: getPosts,
      addPost: addPost,
      removePost: removePost,
      addComment: addComment,
      removeComment: removeComment
    }
  }

   
// const tweeterlogic = Tweeter()

// tweeterlogic.addPost("This is my own post!")

// console.log(tweeter.getPosts())
//This should be added to the posts array:
//{text: "This is my own post!", id: "p3", comments: []}

// tweeter.removePost("p1")
// console.log(tweeterlogic.getPosts())

//There should only be two posts in the post's array:
//{text: "Aw man, I wanted to be first", id: "p2", comments: Array(3)}
//{text: "This is my own post!", id: "p3", comments: []}
  
// tweeterlogic.addComment("Damn straight it is!", "p3")
// tweeterlogic.addComment("Second the best!", "p2")
// console.log(tweeter.getPosts())
//This should be added to the third post's comments array:
//{id: "c7", text: "Damn straight it is!"}

//This should be added to the second post's comments array:
//{id: "c8", text: "Second the best!"}

// tweeterlogic.removeComment("p2", "c6")
// console.log(tweeterlogic.getPosts())
//This comment should be removed:
//{id: "c6", text: "Haha second place what a joke."