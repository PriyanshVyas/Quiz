// document.querySelector("#idP").innerHTML = "This is in JS"

// document.getElementById("idP").innerHTML = "This is JS"

// document.getElementsByClassName("myP")[0].innerHTML = "JS"
// document.getElementsByClassName("myP")[1].innerHTML = "JS"

// for(let i of  document.getElementsByClassName("myP")) {
// 	i.innerHTML = "JDS";
// 	i.style.color = "red";
// }

// DOM JS

// document.querySelector("#idP").addEventListener("click", function() {
// 	// document.querySelector("#idP").style.color = "yellow";
// 	for (let a of document.querySelector("#idP").classList) {
// 		if (a == "clicked") {
// 			document.querySelector("#idP").classList.remove("clicked");

// 		}
// 		else {
// 			document.querySelector("#idP").classList.add("clicked");
// 		}
// 	}
// 	console.log(document.querySelector("#idP").classList)

// })

var question = [
  '1. In 1768, Captain James Cook set out to explore which ocean?', '2. What is actually electricity?', '3. Which of the following is not an international organisation?', '4. Which of the following disorders is the fear of being alone?'
];

var options = [
  ['Pacific Ocean', 'Atlantic Ocean', 'Antarctic Ocean', 'Indian Ocean'],
  ['A flow of water', 'A flow of air', 'A flow of electrons', 'A flow of atoms'],
  ['NASA', 'ASEAN', 'FBI', 'ICC'],
  ['Arachnophobia', 'Aerophobia', 'Acrophobia', 'Agoraphobia'],

];

var answer = [
  "Pacific Ocean", 'A flow of electrons', 'FBI', 'Agoraphobia',
];

var index = -1;
var score = 0;

function nextquestion() {
  index++;
  if (index <= answer.length - 1) {

    document.querySelector(".question").innerHTML = question[index];
    document.querySelector(".o1").innerHTML = options[index][0];
    document.querySelector(".o2").innerHTML = options[index][1];
    document.querySelector(".o3").innerHTML = options[index][2];
    document.querySelector(".o4").innerHTML = options[index][3];
  }

  else {
		document.querySelector(".fs").innerHTML = score
    document.querySelector(".quiz").style.display = "none";
    document.querySelector(".end").style.display = "block";
		
  }
}
document.querySelector(".restart").addEventListener("click", function() {
  location.reload();
});



document.querySelector(".skip").addEventListener("click", function() {

  nextquestion();

});

document.querySelector(".start").addEventListener("click", function() {
  document.querySelector(".quiz").style.display = "block";
  document.querySelector(".start").style.display = "none";
  nextquestion();
});



document.querySelector(".o1").addEventListener("click", function() {
  if (answer[index] == document.querySelector(".o1").innerHTML) {
    alert("CORRECT");
    score++;
    document.querySelector(".score").innerHTML = "Score " + score + "/10"
    // document.querySelector(".fs").innerHTML = score
    console.log(score);
    nextquestion();

  }
  console.log(index);

  // console.log(document.querySelector(".o1").innerHTML,answer[index])
});

document.querySelector(".o2").addEventListener("click", function() {
  if (answer[index] == document.querySelector(".o2").innerHTML) {
    alert("CORRECT");
    score++;
    document.querySelector(".score").innerHTML = "Score " + score + "/10"
    // document.querySelector(".fs").innerHTML = score
    console.log(score);
    nextquestion();
  }
  console.log(index);

  // console.log(document.querySelector(".o1").innerHTML,answer[index])
});

document.querySelector(".o3").addEventListener("click", function() {
  if (answer[index] == document.querySelector(".o3").innerHTML) {
    alert("CORRECT");
    score++;
    document.querySelector(".score").innerHTML = "Score " + score + "/10"
    // document.querySelector(".fs").innerHTML = score

    console.log(score);
    nextquestion();
  }
  console.log(index);

  // console.log(document.querySelector(".o1").innerHTML,answer[index])
});

document.querySelector(".o4").addEventListener("click", function() {
  if (answer[index] == document.querySelector(".o4").innerHTML) {
    alert("CORRECT");
    score++;
    document.querySelector(".score").innerHTML = "Score " + score + "/10"
    // document.querySelector(".fs").innerHTML = score
    console.log(score);
    nextquestion();
  }
  console.log(index);

  // console.log(document.querySelector(".o1").innerHTML,answer[index])
});
