// Questions will be asked
const Questions = [{
		id: 0,
		q: "How many elephants are in this image?",
        im: "chapter1img/1elephant.png",
		a: [{ text: "3", isCorrect: false },
			{ text: "2", isCorrect: false },
			{ text: "1", isCorrect: true },
			{ text: "4", isCorrect: false }
		]

	},
	{
		id: 1,
		q: "Count the number of peacocks in this image.",
		im: "chapter1img/peacocks.png",
		a: [{ text: "4", isCorrect: false, isSelected: false },
			{ text: "3", isCorrect: false },
			{ text: "5", isCorrect: false },
			{ text: "6", isCorrect: true }
		]

	},
	{
		id: 2,
		q: "What is the number of stars in this image?",
		im: "chapter1img/7stars.png",
		a: [{ text: "4", isCorrect: false },
			{ text: "5", isCorrect: false },
			{ text: "7", isCorrect: true },
			{ text: "6", isCorrect: false }
		]

	}

]


// Set start
var start = true;

// Iterate
function iterate(id) {

	// Getting the result display section
	var result = document.getElementsByClassName("result");
	result[0].innerText = "";

	// Getting the question
	const question = document.getElementById("question");


	// Setting the question text
	question.innerText = Questions[id].q;
	
	//Setting the question Image
	
    const imageElem = document.getElementById("image");
    imageElem.src=Questions[id].im;

	// Getting the options
	const op1 = document.getElementById('op1');
	const op2 = document.getElementById('op2');
	const op3 = document.getElementById('op3');
	const op4 = document.getElementById('op4');


	// Providing option text
	op1.innerText = Questions[id].a[0].text;
	op2.innerText = Questions[id].a[1].text;
	op3.innerText = Questions[id].a[2].text;
	op4.innerText = Questions[id].a[3].text;

	// Providing the true or false value to the options
	op1.value = Questions[id].a[0].isCorrect;
	op2.value = Questions[id].a[1].isCorrect;
	op3.value = Questions[id].a[2].isCorrect;
	op4.value = Questions[id].a[3].isCorrect;
	
	op1.style.backgroundColor = "#00DF02";
	op2.style.backgroundColor = "#00DF02";
	op3.style.backgroundColor = "#00DF02";
	op4.style.backgroundColor = "#00DF02";
	var selected = "";

	// Show selection for op1
	op1.addEventListener("click", () => {
		//op1.style.backgroundColor = "lightgoldenrodyellow";
		//op2.style.backgroundColor = "lightskyblue";
		//op3.style.backgroundColor = "lightskyblue";
		//op4.style.backgroundColor = "lightskyblue";
		op1.style.backgroundColor = "#5E17EB";
		//op1.style.color="white";
		op2.style.backgroundColor = "#00DF02";
		op3.style.backgroundColor = "#00DF02";
		op4.style.backgroundColor = "#00DF02";
		selected = op1.value;
	})

	// Show selection for op2
	op2.addEventListener("click", () => {
		//op1.style.backgroundColor = "lightskyblue";
		//op2.style.backgroundColor = "lightgoldenrodyellow";
		//op3.style.backgroundColor = "lightskyblue";
		//op4.style.backgroundColor = "lightskyblue";
		op2.style.backgroundColor = "#5E17EB";
		//op2.style.color="white";
		op1.style.backgroundColor = "#00DF02";
		op3.style.backgroundColor = "#00DF02";
		op4.style.backgroundColor = "#00DF02";
		selected = op2.value;
	})

	// Show selection for op3
	op3.addEventListener("click", () => {
		//op1.style.backgroundColor = "lightskyblue";
		//op2.style.backgroundColor = "lightskyblue";
		//op3.style.backgroundColor = "lightgoldenrodyellow";
		//op4.style.backgroundColor = "lightskyblue";
		op3.style.backgroundColor = "#5E17EB";
		//op3.style.color="white";
		op1.style.backgroundColor = "#00DF02";
		op2.style.backgroundColor = "#00DF02";
		op4.style.backgroundColor = "#00DF02";
		selected = op3.value;
	})

	// Show selection for op4
	op4.addEventListener("click", () => {
		//op1.style.backgroundColor = "lightskyblue";
		//op2.style.backgroundColor = "lightskyblue";
		//op3.style.backgroundColor = "lightskyblue";
		//op4.style.backgroundColor = "lightgoldenrodyellow";
		op4.style.backgroundColor = "#5E17EB";
		//op4.style.color="white";
		op1.style.backgroundColor = "#00DF02";
		op2.style.backgroundColor = "#00DF02";
		op3.style.backgroundColor = "#00DF02";
		selected = op4.value;
	})

	// Grabbing the evaluate button
	const evaluate = document.getElementsByClassName("evaluate");
	
	// Evaluate method
	evaluate[0].addEventListener("click", () => {
		if (selected == "true") {
			result[0].innerHTML = "True";
			result[0].style.color = "green";
		} else {
			result[0].innerHTML = "False";
			result[0].style.color = "red";
		}
		
	})
}

if (start) {
	iterate("0");
}


// Next button and method
const previous = document.getElementsByClassName("previous");
var id = 0;

previous[0].addEventListener("click", () => {
	if (id==0){
			start=true;
	}

	else if (id>0){
		--id;
		iterate(id);
		console.log(id);
	}
})
const next = document.getElementsByClassName('next')[0];


next.addEventListener("click", () => {
	start = false;
	if (id < 2) {
		id++;
		iterate(id);
		console.log(id);
	}

})

function zoomin() {
    //const panel= document.getElementsByClassName("panel");
	//document.body.style.zoom= document.body.style.zoom + 1.1;
	//panel.zoom=panel.zoom+1.1;
	//this.blur();    
	
	var queszoom = document.getElementById("question");
    var currHeight = queszoom.clientHeight;
    queszoom.style.height = (currHeight + 40) + "px";
    //increase fontsize
    txt = document.getElementById('question');
    style = window.getComputedStyle(txt, null).getPropertyValue('font-size');
    currentSize = parseFloat(style);
    txt.style.fontSize = (currentSize + 20) + 'px';
    
	opZoom();
	
}
function opZoom(){
	var opTxt=document.getElementsByClassName("option");
	style = window.getComputedStyle(txt, null).getPropertyValue('font-size');
	currentSize = parseFloat(style);
    opTxt.style.fontSize = (currentSize + 20) + 'px';
}
// function increaseFontSizeBy100px() {
//     txt = document.getElementById('a');
//     style = window.getComputedStyle(txt, null).getPropertyValue('font-size');
//     currentSize = parseFloat(style);
//     txt.style.fontSize = (currentSize + 100) + 'px';
// }
function zoomout() {
	//const panel= document.getElementsByClassName("panel");
	//panel.zoom=panel.zoom-1.1;
    //document.body.style.zoom=1.0;
	//this.blur();
	
	var queszoom = document.getElementById("question");
    var currHeight = queszoom.clientHeight;
    queszoom.style.height = (currHeight - 40) + "px";
    txt = document.getElementById('question');
    style = window.getComputedStyle(txt, null).getPropertyValue('font-size');
    currentSize = parseFloat(style);
    txt.style.fontSize = (currentSize - 20) + 'px';
    var optionzoom = document.getElementsByClassName("option");
    var currHeight = optionzoom.clientHeight;
    optionzoom.style.height = (currHeight - 40) + "px";
    txt = document.getElementsByClassName('option');
    style = window.getComputedStyle(txt, null).getPropertyValue('font-size');
    currentSize = parseFloat(style);
    txt.style.fontSize = (currentSize - 20) + 'px';
}