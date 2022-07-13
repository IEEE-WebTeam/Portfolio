var studentCount = 0;

function response() {
  var profession = prompt("What is your profession: ");
  if (profession == "Student") {
    alert("In progress bro..!");
    studentCount++;
  } else {
    alert("Coming soon!");
  }
}
function showStudentCount(){
      console.log(studentCount);
}
