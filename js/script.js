// Retrieve Elements

const ececuteCodeBtn = document.getElementById('run')
const resetCodeBtn = document.getElementById('reset')
const outputText = document.querySelector('.output')

// Setup Ace
let codeEditor = ace.edit("editorCode")

let editorLib = {
    init(){
        // Congigure Ace

        // Theme
        codeEditor.setTheme("ace/theme/dracula")
        //Set Lanauage 
        codeEditor.session.setMode("ace/mode/python")
        // Set Options
        codeEditor.setOptions({
            // fontFamily: 'Inconsolata',
            // fontSize: '12pt',
            // enableBasicAutocompletion: true,
            // enableLiveAutocompletion: true,
        })
    }
}

// Create a submission to get token
const createSubmission = (data)=>{
    fetch("https://judge0-ce.p.rapidapi.com/submissions?base64_encoded=true", {
	"method": "POST",
	"headers": {
		"content-type": "application/json",
		"x-rapidapi-host": "judge0-ce.p.rapidapi.com",
		"x-rapidapi-key": "e1617c8842msh4daf2261d4a05bcp1db3e7jsn3ab93dfacb24"
	},
	"body": data
    })
    .then(response =>{
        if(response.ok){
          return response.json();
        }
        throw new Error('Request failed!');
      }, networkError=>{
        console.log(networkError.message);
      })
      .then(jsonResponse=>{
        // console.log(jsonResponse.token);
        getSubmission(jsonResponse.token);
      })
}

// Get the result using token
const getSubmission = (token)=>{
    fetch("https://judge0-ce.p.rapidapi.com/submissions/"+token, 
    {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "judge0-ce.p.rapidapi.com",
		"x-rapidapi-key": "e1617c8842msh4daf2261d4a05bcp1db3e7jsn3ab93dfacb24"
	    }
    })
    .then(response => {
        if(response.ok){
            return response.json();
          }
    })
    .then(jsonResponse=>{
        if(jsonResponse.status.id == 3){
            console.log(jsonResponse.stdout)
            outputText.value = jsonResponse.stdout
        }
        else{
            console.log(jsonResponse.status.description);
            outputText.value = jsonResponse.status.description
        }
      });
}
const submission = ()=>{
    // Get input from the code editor
    const userCode = codeEditor.getValue();
    // Encode with base64
    const encodeUserCode = btoa(userCode)
    const data = JSON.stringify({
        "language_id": 71,
        "source_code": encodeUserCode,
        // "stdin": "SnVkZ2Uw"
    });
    createSubmission(data)
    
}
// Events
ececuteCodeBtn.addEventListener('click', submission)
resetCodeBtn.addEventListener('click',()=>{
    // Clear ace editor
    codeEditor.setValue('')
})

editorLib.init();