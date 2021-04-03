// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");
console.log(data);

data.forEach(function(ufo_data) {
    console.log(ufo_data);
    var row = tbody.append("tr");

    Object.entries(ufo_data).forEach(function([key, value]) {
        console.log(key, value);
      });
    });
    data.forEach((ufo_data) => {
        var row = tbody.append("tr");
        Object.entries(ufo_data).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
        });
      });

    var button = d3.select("filter-btn");
    button.on("click",function(){
          var inputElement = d3.select("#datetime");
          var filtered_date_Data = tableData.filter(function(event){
              if(inputElement !==null && inputElement !==''){
                  return event.datatime === inputValue;};
              return event.datatime;
          });
      

function resetpage(element) {
    element.form.reset();
    showTable(tableData)
};

showTable(filtered_date_Data);
});