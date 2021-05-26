// This key word!!!

var object = {
    prop: this, 
    embed:{
        embed: true, 
        method: function(){return this; }
    }
    
};

var array =[
    this, 
    function(){return this; }
];

function global(){

    console.log('from global', this);

    function sub(){
        console.log('from sub',this)
    };

     sub();

};

global.call(object);

new global();

var video = {
    title:'a',
    tags:['a','b','c'],
    showTags(){
        this.tags.forEach(function(tag){
            console.log(video.title,':', tag);
        });
    }
};

video.showTags();

// Constructor functions 

// in JS constructors build things 
// these are called constructor functions

// you need Function Apple(){return object}; is teh blue print of Apple
//instance of Apple(); is basically like a copy of the blue print