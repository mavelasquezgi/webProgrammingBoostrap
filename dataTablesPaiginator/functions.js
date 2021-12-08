function openDataGov () {
    var department = [];
    var year = [];
    var age = [];
    fetch('https://www.datos.gov.co/resource/r39m-rntv.json')
        .then(responseSuccess => responseSuccess.json())
        .then(function(data) {
            console.log(data)
            for (let index = 0; index <= data.length; index++ ) {
                console.log(data[index])
            }
            data.forEach(element => {
                if (element.codptore != undefined && element.ano != undefined && element.age != undefined ) {
                    department.push(element.codptore);
                    year.push(element.ano);
                    age.push(element.age);
                }
            });
        
            var chart1 = {
                y: year,
                x: department,
                name: 'year',
                type: 'bar'
            }

            var chart2 = {
                y: age,
                x: department,
                name: 'age',
                type: 'bar'
            }

            let dataChats = [chart1,chart2];

            let layout = {
                barmode: 'stack',
                title : {
                    text: 'Pruebas PCR en Colombia'
                },
            };

            Plotly.newPlot('divChar1', dataChats, layout)
        });    
}

openDataGov () 