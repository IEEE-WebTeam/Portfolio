var studentCount = 0;

function response() {
  var profession = prompt("What is your profession: ");
  if (profession == "Student") {
    alert("In progress bro..!");
    studentCount++;
    for (i = 1; i < 10; i++) {
      console.log(studentCount);
    }
  } else {
    alert("Coming soon!");
  }
}
