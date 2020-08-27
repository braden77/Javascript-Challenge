// from data.js
var tableData = data;

// Console.log the weather data from data.js
console.log(tableData);

var tbody = d3.select("tbody");

tableData.forEach((ufoReport) => {
    var row = tbody.append("tr");
    Object.entries(ufoReport).forEach(([key,value]) => {
        var cell = row.append("td");
        cell.text(value);
    });
    
});


// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("#filters");

// Create event handlers 
button.on("click", runEnter);
form.on("submit",runEnter);


// Complete the event handler function for the form
function runEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();
    
    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
  
    // Get the value property of the input element
    var inputValue = inputElement.property("value");
  
    // Console.log the inputValue and table data 
    console.log(inputValue);
    console.log(tableData);
  
    // filter the table by input value
    var filteredData = tableData.filter(ufo => ufo.datetime === inputValue);
  
    // console.log the filtered result
    console.log(filteredData);


    // delete the table shown in the html
    var table = document.getElementById("ufo-table");

    while (table.rows.length > 1) {
        table.deleteRow(1);
    };

    // show the table for filtered rows
    filteredData.forEach((ufoReport) => {
        var row = tbody.append("tr");
        Object.entries(ufoReport).forEach(([key,value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });



};