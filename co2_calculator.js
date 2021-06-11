
const emission = {
    'small-diesel-car' : '142',
    'small-petrol-car': '154',
    'small-plugin-hybrid-car': '73',
    'small-electric-car': '50',
    'medium-diesel-car': '171',
    'medium-petrol-car':  '192',
    'medium-plugin-hybrid-car': '110',
    'medium-electric-car': '58',
    'large-diesel-car': '209',
    'large-petrol-car': '282',
    'large-plugin-hybrid-car': '126',
    'large-electric-car': '73',
    'bus' : '27',
    'train' :'6'
}
var distance = 0;
var unit_of_distance = 'km';
var transportation_method = '';
var output = 'g';

const args = require('yargs').argv;

//validating the transportation_method

if(args.transportation_method !== undefined) {   
    
    var co2 = emission[args.transportation_method];

    if (co2) {
        transportation_method = args.transportation_method;
    } else {
        console.log('transportation_method is invalid');
    }

} else {
    console.log('transportation_method is required');
}

//validating the distance

if(args.distance !== undefined) {
    distance = args.distance;
} else {
    console.log('distance is required');
}
//validating the unit_of_distance

if(args.unit_of_distance !== undefined) {
    validDistance = ['km','m','kilometer','meter'];

    if(validDistance.includes(args.unit_of_distance)){

        unit_of_distance = args.unit_of_distance;

        //if meter or m, convert distance to km (validation already done upfront)
    if(unit_of_distance.startsWith('m')) {
    distance = distance/1000;
     }

    } else {
        console.log('unit_of_distance is invalid');
    }
}else{
    console.log('unit_of_distance is required');
}



//validating the output

if(args.output !== undefined) {
    validOutput = ['kg','g','kilogram','gram'];
    if(validOutput.includes(args.output)){
        output = args.output;
    } else {
        console.log('Output is invalid');
    }
}else{
    console.log('Output is required');
}

if(co2 && distance && output){

    emission_total(co2, distance);
}

function emission_total(co2 , distance){
    
    var total_co2 = (co2 * distance).toFixed(1);

     
     //checking the output unit
    if(output.startsWith('k')){
    total_co2 = (total_co2/1000).toFixed(1);

    console.log('Your trip caused ' + total_co2 + 'kg of CO2-equivalent.');

    }
    else{
        console.log('Your trip caused ' + total_co2 + 'g of CO2-equivalent.');
    }

}








