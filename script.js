var cmt = document.getElementById("comment");
let button = document.getElementById("btn");
let list = JSON.parse(localStorage.getItem("comments")) || [];

button.addEventListener("click", function(event) {
   event.preventDefault();
    if (cmt.value === "") {
        alert("Please add comment first before submitting");
    } else {
        list.push(cmt.value);
        window.location.href = "Message.html";
        localStorage.setItem("comments", JSON.stringify(list));
        cmt.value = "";
    }

});
