'use strict';
// function Cs142TemplateProcessor(template) {
//     let this.template = template;
// }

class Cs142TemplateProcessor{
    constructor(template) {
        this.template = template;
    }
    fillIn(dictionary) {
        let str = this.template; 
        Object.keys(dictionary).forEach(key => {
            const reg = new RegExp(`{{${key}}}`, 'g');
            str = str.replace(reg, dictionary[key]);
        });
        str = str.replace(/{{.*}}/g, ""); 
        return str;
    }
}

// var template = 'My favorite month is {{month}} but not the day {{day}} or the year {{year}}';
// var dateTemplate = new Cs142TemplateProcessor(template);

// var dictionary = {month: 'July', day: '1', year: '2016'};
// var str = dateTemplate.fillIn(dictionary);

// console.log(str)
// // assert(str === 'My favorite month is July but not the day 1 or the year 2016');

// //Case: property doesn't exist in dictionary
// var dictionary2 = {day: '1', year: '2016'};
// var str = dateTemplate.fillIn(dictionary2);

// console.log(str)
// // assert(str === 'My favorite month is  but not the day 1 or the year 2016');