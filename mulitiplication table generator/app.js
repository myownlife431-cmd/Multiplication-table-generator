function generateTable(){

    const number = document.getElementById("number").value;
    const result = document.getElementById("result");

    if(number === ""){
        result.innerHTML = "<p>Please enter a number.</p>";
        return;
    }

    let table = "";

    for(let i = 1; i <= 10; i++){

        table += `${number} × ${i} = ${number * i}<br>`;

    }

    result.innerHTML = table;

}