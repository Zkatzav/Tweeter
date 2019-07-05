const Renderer = function () {

  const renderPosts = function (posts) {
    
    
    
    $('#posts').empty()
    
    for (p of posts) {
      let post =  `<div class='post' data-id=${p.id}><p>${p.text}</p>`
      let comment = ''
      
      
      for(c of p.comments) {
        const deleteC = `<span class='delete-comment'>x  </span>`
        comment += `<div class='comment' data-id=${c.id}>${deleteC}${c.text}</div>`
      }
      
      let addC = `<div><input type="text" class='input-comment' placeholder='Got something to say?'>`
      const postC = `<input type="button" value='comment' class='post-comment'></div>`
      addC += ` ` + postC

      const deleteP = `<p><input class='delete' type="button" value='Delete Post'></p>`

      post += `${comment + addC + deleteP}</div>`

      $('#posts').append(post)
    }
  }
  return { renderPosts: renderPosts }
}

  
  // Use jQuery to create and add the elements
  // Functions are your friends
  // Notice that each post has its own text, as well as the text of its comments
  // You need to generate the HTML for both
  // Make sure you're adding each post and comment's ID in a data-id attribute
  // Use the CSS below for styling - you should be able to figure out which elements receive which class