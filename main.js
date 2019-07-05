
const tweeter = Tweeter()
const renderer = Renderer()

renderer.renderPosts(tweeter.getPosts())


// Specifically, we want to add a listener on the following elements:

// The Twit button
// When the user clicks on the Twit button, you should grab the value from the big input and create a new post
// Notice that you already have an addPost function in your Tweetermodule - invoke it!

const Post = function() {
  tweeter.addPost($('#input').val())

  renderer.renderPosts(tweeter.getPosts())
}

// The Delete Post button
// When the Delete Post button is clicked, grab the ID of the post using what you
//  learned about DOM Traversal and invoke the removePost function in your logic module

$('#posts').on('click','.delete', function(){
  tweeter.removePost($(this).closest('.post').data().id)

  renderer.renderPosts(tweeter.getPosts())
})

// The Comment button

$('#posts').on('click', '.post-comment', function(){
  tweeter.addComment(
    $(this).siblings('.input-comment').val(), 
    $(this).closest('.post').data().id
    )
  
  renderer.renderPosts(tweeter.getPosts())
})
 
// The X next to each comment

$('#posts').on('click', '.delete-comment', function(){
  tweeter.removeComment(
    $(this).closest('.post').data().id,
    $(this).closest('.comment').data().id    
  )

  renderer.renderPosts(tweeter.getPosts())
})


// Remember how we add listeners on dynamic elements? If not, refer back to the jQuery