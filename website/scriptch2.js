// Questions will be asked
const Questions = [{
    //addition with images
    id: 0,
    q: "Q1. Count and fill the circle",
    im: "chapter2img/kite34.png",
    a: [{ text: "2+1=3", isCorrect: false },
        { text: "3+4=7", isCorrect: false },
        { text: "3+2=5", isCorrect: true },
        { text: "2+7=9", isCorrect: false }
    ]

},
{
    id: 1,
    q: "Q2. Count and fill the circle",
    im: "chapter2img/key34.png",
    a: [{ text: "6+2=8", isCorrect: false },
        { text: "3+1=4", isCorrect: false },
        { text: "5+2=7", isCorrect: true },
        { text: "4+4=8", isCorrect: false}
    ]

},
{
    id: 2,
    q: "Q3. Count and fill the circle",
    im: "chapter2img/candies34.png",
    a: [{ text: "4+2=6", isCorrect: false },
        { text: "4+1=5", isCorrect: true },
        { text: "5+2=7", isCorrect: false},
        { text: "6+2=8", isCorrect: false }
    ]

},
{
    id: 3,
    q: "Q4. Count and fill the circle",
    im: "chapter2img/rats34.png",
    a: [{ text: "4+4=8", isCorrect: true },
        { text: "3+1=4", isCorrect: false },
        { text: "1+2=3", isCorrect: false},
        { text: "2+2=4", isCorrect: false }
    ]

},
//addition with number exercise page 36
{
    id: 4,
    q: "Q1. Add",
    im: "chapter2img/add136.png",
    a: [{ text: "6", isCorrect: false },
        { text: "4", isCorrect: false },
        { text: "5", isCorrect: true},
        { text: "2", isCorrect: false }
    ]

},
{
    id: 5,
    q: "Q2. Add",
    im: "chapter2img/add236.png",
    a: [{ text: "9", isCorrect: true },
        { text: "1", isCorrect: false },
        { text: "4", isCorrect: false},
        { text: "7", isCorrect: false }
    ]

},
{
    id: 6,
    q: "Q3. Add",
    im: "chapter2img/add336.png",
    a: [{ text: "7", isCorrect: false },
        { text: "9", isCorrect: true },
        { text: "6", isCorrect: false},
        { text: "2", isCorrect: false }
    ]

},
{
    id: 7,
    q: "Q4. Add",
    im: "chapter2img/add436.png",
    a: [{ text: "2", isCorrect: false },
        { text: "9", isCorrect: false },
        { text: "6", isCorrect: true},
        { text: "3", isCorrect: false }
    ]

},
{
    id: 8,
    q: "Q5. Add",
    im: "chapter2img/add536.png",
    a: [{ text: "8", isCorrect: true },
        { text: "4", isCorrect: false },
        { text: "5", isCorrect: false},
        { text: "6", isCorrect: false }
    ]

},
{
    id: 9,
    q: "Q6. Add",
    im: "chapter2img/add636.png",
    a: [{ text: "7", isCorrect: true },
        { text: "3", isCorrect: false },
        { text: "6", isCorrect: false},
        { text: "2", isCorrect: false }
    ]

},
{
    id: 10,
    q: "Q7. Add",
    im: "chapter2img/add736.png",
    a: [{ text: "8", isCorrect: false },
        { text: "4", isCorrect: false },
        { text: "6", isCorrect: true},
        { text: "3", isCorrect: false }
    ]

},
{
    id: 11,
    q: "Q8. Add",
    im: "chapter2img/add836.png",
    a: [{ text: "2", isCorrect: false },
        { text: "9", isCorrect: true},
        { text: "5", isCorrect: false},
        { text: "4", isCorrect: false }
    ]

},
//page 37
{
    id: 12,
    q: "Q9. Add",
    im: "chapter2img/add137.png",
    a: [{ text: "7", isCorrect: false },
        { text: "8", isCorrect: true },
        { text: "3", isCorrect: false},
        { text: "1", isCorrect: false }
    ]

},
{
    id: 13,
    q: "Q10. Add",
    im: "chapter2img/add237.png",
    a: [{ text: "8", isCorrect: false },
        { text: "7", isCorrect: false },
        { text: "6", isCorrect: true},
        { text: "9", isCorrect: false }
    ]

},
{
    id: 14,
    q: "Q11. Add",
    im: "chapter2img/add337.png",
    a: [{ text: "1", isCorrect: false },
        { text: "9", isCorrect: true},
        { text: "3", isCorrect: false},
        { text: "2", isCorrect: false }
    ]

},
//page 38 adding
{
    id: 15,
    q: "Q12. Add",
    im: "chapter2img/add138.png",
    a: [{ text: "3", isCorrect: false},
        { text: "5", isCorrect: true},
        { text: "6", isCorrect: false},
        { text: "2", isCorrect: false}
    ]

},
{
    id: 16,
    q: "Q13. Add",
    im: "chapter2img/add238.png",
    a: [{ text: "4", isCorrect: false},
        { text: "1", isCorrect: false},
        { text: "6", isCorrect: true},
        { text: "3", isCorrect: false}
    ]

},
{
    id: 17,
    q: "Q14. Add",
    im: "chapter2img/add338.png",
    a: [{ text: "3", isCorrect: false},
        { text: "7", isCorrect: true},
        { text: "4", isCorrect: false},
        { text: "9", isCorrect: false}
    ]

},
{
    id: 18,
    q: "Q15. Add",
    im: "chapter2img/add438.png",
    a: [{ text: "9", isCorrect: true},
        { text: "1", isCorrect: false},
        { text: "7", isCorrect: false},
        { text: "8", isCorrect: false}
    ]

},
{
    id: 19,
    q: "Q16. Add",
    im: "chapter2img/add538.png",
    a: [{ text: "7", isCorrect: false},
        { text: "9", isCorrect: false},
        { text: "4", isCorrect: false},
        { text: "8", isCorrect: true}
    ]

},
{
    id: 20,
    q: "Q17. Add",
    im: "chapter2img/add638.png",
    a: [{ text: "1", isCorrect: false},
        { text: "6", isCorrect: false},
        { text: "9", isCorrect: true},
        { text: "3", isCorrect: false}
    ]

},
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
    op1.style.backgroundColor = "#5E17EB";
    op2.style.backgroundColor = "#00DF02";
    op3.style.backgroundColor = "#00DF02";
    op4.style.backgroundColor = "#00DF02";
    selected = op1.value;
})

// Show selection for op2
op2.addEventListener("click", () => {
    op2.style.backgroundColor = "#5E17EB";
    op1.style.backgroundColor = "#00DF02";
    op3.style.backgroundColor = "#00DF02";
    op4.style.backgroundColor = "#00DF02";
    selected = op2.value;
})

// Show selection for op3
op3.addEventListener("click", () => {
    op3.style.backgroundColor = "#5E17EB";
    op1.style.backgroundColor = "#00DF02";
    op2.style.backgroundColor = "#00DF02";
    op4.style.backgroundColor = "#00DF02";
    selected = op3.value;
})

op4.addEventListener("click", () => {
    op4.style.backgroundColor = "#5E17EB";
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
if (id < 20) { //no of iterations thro image
    id++;
    iterate(id);
    console.log(id);
}

})

function zoomin() {
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

function zoomout() {
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