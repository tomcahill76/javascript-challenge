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
button.on("click",function(){0
    var inputElement = d3.select("#datetime");
    var filtered_date_Data = tableData.filter(tableData=>tableData.datetime === inputElement);

    $tbody.html("");
        let repsone = {
            filtered_date_Data
        }

        if (repsone.filtered_date_Data.lenght ! == 0) {
            addData(filtered_date_Data);
        }

        else { 
            $tbody.append("tr").append("td").text("No records");
        }
})

