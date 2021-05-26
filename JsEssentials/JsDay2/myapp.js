//creating objects in JS

var car ={
    color: "red", //- properties 
    speed: 200, 
    make: "ford",
    drive: function (){//- methods
        return "drive";
    }
};
//arrays in JS
var shoppinglist = [
    "apple", 
    "orange", 
    "pear"
];

var car1 = { 
    color: "grey",
    make: "tesla",
    modelName: "Model 3",
    engine:{
        size: 200.0,
        make: "tesla",
        fuel: "electricity",
        pistons:[{maker: "tesla"}, {countryShipping: "USA"}]
    }
};

var array = [
    "string", 
    100,
    ["embeded", 200], 
    {car:"ford"},
    function(){return "drive";}
];

var phone ={
    manufacturer: "Apple",
    modelName: "Iphone 12 Pro",
    color: "Graphite",
    cameras: [{primaryCamera: "12 MP sensor"},{ultraWide:"12 MP 1/3.6 sensor"},{telePhoto:"12 MP 1/3.4″ sensor"}], 
    chipset:{
        chip: ["Apple A14 Bionic","Apple M14"],
        cpu:["Hexa-core FireStorm cores","Low-power Icestorm cores"],
        bits: 64,
        gpu: "Quad-core Apple-designed GPU",
        modem: "Qualcomm X55 5G"
    },
    makeCall: function (){//- methods
        return "Hello";
    },
    surfWeb: function(){
        return "google.com";
    },
    sendText: function(){
        return "ayoo";
    }

};