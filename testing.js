//THIS WEEK'S DISCUSSION

// 1. How to filter, I forgot to include map after the filter :D!
function myFilter(
  scores = [{ name: "", subject: "", marks: 0, classIdentity: 0 }]
) {
  scores
    .filter((person) => person.classIdentity % 2 === 0)
    .map((p) => console.log(p));
}

//test code
myFilter([
  { name: "James", subject: "Maths", marks: 12, classIdentity: 88 },
  { name: "Mary", subject: "Maths", marks: 13, classIdentity: 87 },
  { name: "Jonathan", subject: "Maths", marks: 13, classIdentity: 86 },
  { name: "Chinedu", subject: "Maths", marks: 12, classIdentity: 37 },
  { name: "Oluchi", subject: "Maths", marks: 14, classIdentity: 17 },
]);

// 2. How to calculate total scores of students and their average using input elements

function studentScores(numStudents) {
  // assign the input value to our numStudent parameter
  const myStudentPopulation = document.getElementById("my-input").value;
  numStudents = myStudentPopulation;

  const scoreWrapper = document.querySelector(".score-wrapper");

  // we must make sure that number of students yields the same number of inputs which will collect our score values
  // if the number of students is 0 or empty, no inputs are rendered
  // example: 7 students would yield 7 input forms for collecting data

  let scoreStorage = [];
  for (let i = 0; i < numStudents; i++) {
    let scoreInputElement = document.createElement("input");
    let output = document.querySelector("output");
    scoreInputElement.className = "scores";
    scoreInputElement.placeholder = `Student ${i + 1} score`;
    scoreWrapper.append(scoreInputElement);

    //we use an event listener to obtain the values of the newly rendered input elements and save them in the initialized array scoreStorage
    scoreInputElement.addEventListener("change", () => {
      scoreStorage.push(parseFloat(scoreInputElement.value)); //parseFloat is used to convert value into fractional numbers (a.k.a decimal-like numbers).
      //it might be much safer to use parseFloat instead of parseInt (for integers), so that we can accomodate both integers and fractional numbers. (read this to know the differences!)

      const totalstudentScore = scoreStorage
        .map((scores) => scores)
        .reduce((prev, curr) => prev + curr);

      output.textContent = `Average class score for ${numStudents} number of students was ${
        totalstudentScore / numStudents
      }.`;
      //play around with the variables num students and totalStudentscore
    });
  }
}

// 3. How to calculate average scores of students using prompt, alert, and string.split() methods

function calcStudentScoreByPrompt() {
  let population = prompt(
    "How many students are there? (Please do not forget!)"
  );

  let scores = prompt(
    "List their scores here. WARNING!! Give one space with space tab for every number input!"
  );

  let num = parseInt(population.split(" "));
  let scoreList = scores.split(" ", num); // we split the input on prompt and set a limit with num. The limits controls the quality of data input
  scoreList = scoreList.map((item) => parseInt(item)); // we must map and return an integer version of the array

  let totalStudentscore = scoreList.reduce((prev, curr) => prev + curr);
  let averageScore = totalStudentscore / num;

  alert(
    "Finally, the total number of students were: " +
      num +
      ". Their total score was: " +
      totalStudentscore +
      " and their average score was: " +
      averageScore
  );
}

//remember to callback function
calcStudentScoreByPrompt();
