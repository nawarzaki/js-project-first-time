function postNewComment(body) {
  var commentsDiv = document.getElementById("comments");
  var newCommentDiv = document.createElement("li");
  newCommentDiv.innerHTML = body;
  commentsDiv.appendChild(newCommentDiv)
}

function addComment() {
  event.preventDefault();
  var bodyText = document.getElementById("commentText").value;
  if (bodyText.trim() === "") {
    alert("Please write somthing");
  } else {
    bodyText
    commentText.value = ""
  }
  var commentBody = postNewComment(bodyText);

}

function removeDummy() {
  var elem = document.getElementById("comments");
  elem.parentNode.removeChild(elem)
}



