

function createCommentBody(comment) {
  var bodyDiv = document.createElement("div");
  var bodyPara = document.createElement("li");
  bodyPara.innerHTML = comment;
  bodyDiv.appendChild(bodyPara);
  return bodyDiv;
}


function postNewComment(body) {
  var commentsDiv = document.getElementById("comments");
  var newCommentDiv = document.createElement("div");
  newCommentDiv.appendChild(body);
   commentsDiv.appendChild(newCommentDiv)
}

function addComment() {
  event.preventDefault();
  var bodyText = document.getElementById("commentText").value;
  if( bodyText.trim() === "") {
    alert("Please write somthing");
} else {
  bodyText 
}
    var commentBody = createCommentBody(bodyText);
    postNewComment(commentBody);
}

function removeDummy() {
var elem = document.getElementById("comments");
elem.parentNode.removeChild(elem)
}