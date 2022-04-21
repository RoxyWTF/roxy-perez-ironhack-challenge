Chart.defaults.color = '#fff';
Chart.defaults.borderColor = '#444';

fetch('https://multiapi-app.herokuapp.com/foods')
    .then(response => response.json())
    .then(foods => printFoodsCharts(foods));


function printFoodsCharts(foods) {

    const [carrot, pumpkin, corn, avocado, beef, pork, cod, milk, rice] = foods;     // Tendrás que hacer uso también de los datos de los demás alimentos: aguacate, ternera...

    printCaloriesChart(carrot, pumpkin, corn, avocado, beef, pork, cod, milk, rice);
    printProteinsChart(carrot, pumpkin, corn, avocado, beef, pork, cod, milk, rice);
    printFatsChart(carrot, pumpkin, corn, avocado, beef, pork, cod, milk, rice);
    printCalciumChart(carrot, pumpkin, corn, avocado, beef, pork, cod, milk, rice);
    printProVsCalChart(carrot, pumpkin, corn, avocado, beef, pork, cod, milk, rice);

}


//Calorías
function printCaloriesChart(carrot, pumpkin, corn, avocado, beef, pork, cod, milk, rice) {


    const foodsArray = [carrot, pumpkin, corn, avocado, beef, pork, cod, milk, rice];

    let data = {
        labels: foodsArray.map(eachFood => eachFood.name),
        datasets: [{
            data: foodsArray.map(eachFood => eachFood.kcal),
            label: 'kcal',
            borderWidth: 2,
            borderColor: ['rgba(233, 105, 44, 1)', 'rgba(255, 140, 0, 1)', 'rgba(255, 244, 79, 1)', 'rgba(50, 205, 50, 1)', 'rgba(178, 34, 34, 1)', 'rgba(255, 188, 244, 1)', 'rgba(65, 105, 255, 1)', 'rgba(253, 255, 245, 1)', 'rgba(246, 248, 237, 1)'],
            backgroundColor: ['rgba(233, 105, 44, 0.4)', 'rgba(255, 140, 0, 0.4)', 'rgba(255, 244, 79, 0.5)', 'rgba(50, 205, 50, 0.4)', 'rgba(178, 34, 34, 0.4)', 'rgba(255, 188, 244, 0.6)', 'rgba(65, 105, 255, 0.5)', 'rgba(253, 255, 245, 0.7)', 'rgba(246, 248, 237, 0.5)']

        }]

    }

    let options = {
        plugins: {
            legend: {
                display: false
            },
            title: {
                display: true,
                text: 'kcal por cada 100g',
                position: 'bottom'
            }
        }
    }

    new Chart('chart-kcal', { type: 'bar', data, options });


}

//Proteínas
function printProteinsChart(carrot, pumpkin, corn, avocado, beef, pork, cod, milk, rice) {


    const foodsArray = [carrot, pumpkin, corn, avocado, beef, pork, cod, milk, rice];

    let data = {
        labels: foodsArray.map(eachFood => eachFood.name),
        datasets: [{
            data: foodsArray.map(eachFood => eachFood.protein),
            label: 'kcal',
            borderColor: ['rgba(233, 105, 44, 1)', 'rgba(255, 140, 0, 1)', 'rgba(255, 244, 79, 1)', 'rgba(50, 205, 50, 1)', 'rgba(178, 34, 34, 1)', 'rgba(255, 188, 244, 1)', 'rgba(65, 105, 255, 1)', 'rgba(253, 255, 245, 1)', 'rgba(246, 248, 237, 1)'],
            backgroundColor: ['rgba(233, 105, 44, 0.4)', 'rgba(255, 140, 0, 0.4)', 'rgba(255, 244, 79, 0.5)', 'rgba(50, 205, 50, 0.4)', 'rgba(178, 34, 34, 0.4)', 'rgba(255, 188, 244, 0.6)', 'rgba(65, 105, 255, 0.5)', 'rgba(253, 255, 245, 0.7)', 'rgba(246, 248, 237, 0.5)']

        }]

    }

    let options = {
        plugins: {
            legend: {
                display: true,
                position: 'left'
            }
        }
    }

    new Chart('chart-protein', { type: 'doughnut', data, options });


}

//Grasas
function printFatsChart(carrot, pumpkin, corn, avocado, beef, pork, cod, milk, rice) {


    const foodsArray = [carrot, pumpkin, corn, avocado, beef, pork, cod, milk, rice];

    let data = {
        labels: foodsArray.map(eachFood => eachFood.name),
        datasets: [{
            data: foodsArray.map(eachFood => eachFood.fat),
            label: 'kcal',
            borderColor: ['rgba(233, 105, 44, 1)', 'rgba(255, 140, 0, 1)', 'rgba(255, 244, 79, 1)', 'rgba(50, 205, 50, 1)', 'rgba(178, 34, 34, 1)', 'rgba(255, 188, 244, 1)', 'rgba(65, 105, 255, 1)', 'rgba(253, 255, 245, 1)', 'rgba(246, 248, 237, 1)'],
            backgroundColor: ['rgba(233, 105, 44, 0.4)', 'rgba(255, 140, 0, 0.4)', 'rgba(255, 244, 79, 0.5)', 'rgba(50, 205, 50, 0.4)', 'rgba(178, 34, 34, 0.4)', 'rgba(255, 188, 244, 0.6)', 'rgba(65, 105, 255, 0.5)', 'rgba(253, 255, 245, 0.7)', 'rgba(246, 248, 237, 0.5)']

        }]

    }

    let options = {
        plugins: {
            legend: {
                display: true,
                position: 'left'
            }
        }
    }

    new Chart('chart-fat', { type: 'doughnut', data, options });


}

//Calcio
function printCalciumChart(carrot, pumpkin, corn, avocado, beef, pork, cod, milk, rice) {

    const foodsArray = [carrot, pumpkin, corn, avocado, beef, pork, cod, milk, rice];

    let data = {
        labels: foodsArray.map(eachFood => eachFood.name),
        datasets: [{
            data: foodsArray.map(eachFood => eachFood.calcium),
            label: 'kcal',
            borderColor: ['rgba(233, 105, 44, 1)', 'rgba(255, 140, 0, 1)', 'rgba(255, 244, 79, 1)', 'rgba(50, 205, 50, 1)', 'rgba(178, 34, 34, 1)', 'rgba(255, 188, 244, 1)', 'rgba(65, 105, 255, 1)', 'rgba(253, 255, 245, 1)', 'rgba(246, 248, 237, 1)'],
            backgroundColor: ['rgba(233, 105, 44, 0.4)', 'rgba(255, 140, 0, 0.4)', 'rgba(255, 244, 79, 0.5)', 'rgba(50, 205, 50, 0.4)', 'rgba(178, 34, 34, 0.4)', 'rgba(255, 188, 244, 0.6)', 'rgba(65, 105, 255, 0.5)', 'rgba(253, 255, 245, 0.7)', 'rgba(246, 248, 237, 0.5)']

        }]

    }

    let options = {
        plugins: {
            legend: {
                display: true,
                position: 'left'
            },
            subtitle: {
                display: true,
                text: '* El arroz no contiene Calcio',
                position: 'bottom',
                color: 'gray',
                font: {
                    size: 10,
                    family: 'sans-serif',
                    weight: 'normal',
                    style: 'italic'
                }
            }
        }
    }

    new Chart('chart-cal', { type: 'doughnut', data, options });


}

//Comparativa calorías - proteínas
function printProVsCalChart(carrot, pumpkin, corn, avocado, beef, pork, cod, milk, rice) {

    const foodsArray = [carrot, pumpkin, corn, avocado, beef, pork, cod, milk, rice];

    let data = {

        labels: foodsArray.map(eachFood => eachFood.name),
        datasets: [

            {
                data: foodsArray.map(eachFood => eachFood.kcal),
                label: 'kcal',
                borderWidth: 2,
                borderColor: 'rgba(73, 176, 245, 1)',
                backgroundColor: 'rgba(73, 176, 245, 0.5)',
            },
            {
                data: foodsArray.map(eachFood => eachFood.protein),
                label: 'proteínas',
                borderWidth: 2,
                borderColor: 'rgba(253, 191, 68, 1)',
                backgroundColor: 'rgba(253, 191, 68, 0.4)',

            },
        ]
    }


    const options = {
        plugins: {
            legend: {
                display: false
            }
        }
    }


    new Chart('chart-compare', { type: 'bar', data, options });

}