function openDataGov () {
    let adjudicado = [];
    let precio_base = [];
    let mes = [];

    fetch('https://www.datos.gov.co/resource/bqgi-b496.json')
        .then(responseSuccess => responseSuccess.json())
        .then(function(data) {
            console.log(data)
            for (let index = 0; index <= data.length; index++ ) {
                console.log(data[index])
            }
            let yes = 0
            let not = 0
            data.forEach(element => {
                if (element.adjudicado != undefined && element.precio_base != undefined && element.fecha_de_publicacion_del != undefined ) {
                    adjudicado.push(element.adjudicado);
                    precio_base.push(element.precio_base);
                    let listSplit = element.fecha_de_publicacion_del.split("-")
                    mes.push(listSplit[1]);
                    if (element.adjudicado == "Si") {
                        yes ++;
                    } else { not ++;}
                }
            });

            let chart1 = {
                y: precio_base,
                x: adjudicado,
                name: 'precio_base',
                type: 'bar'
            }

            let chart2 = {
                values: [yes, not],
                labels: ['Adjudicado', 'No Adjudicado'],
                name: 'Adjudicado',
                type: 'pie'
            }

            let dataChats = [chart1];
            let dataChats2 = [chart2];

            let layout = {
                barmode: 'stack',
                title : {
                    text: 'Valor por procesos secop'
                },
            };

            let layout2 = {
                barmode: 'stack',
                title : {
                    text: 'Porcentaje Adjudicados'
                },
                height: 750,
                width: 850
            };

            Plotly.newPlot('divChar1', dataChats, layout)
            Plotly.newPlot('divChar2', dataChats2, layout2)
        });    
}

openDataGov () 