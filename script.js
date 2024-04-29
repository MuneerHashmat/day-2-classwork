let h1=React.createElement("h1",null,"Learn web development");


let para1=React.createElement("p",null,"Welcome to the MDN learning area. This set of articles aims to guide complete beginners to web development with all that they need to start coding websites coding websites.");
let div1=React.createElement("div",null,para1);

let span1=React.createElement("span",null,`The aim is not to take you from "beginner" to "expert" but to take you from "beginner" to "comfortable." From there, you should be able to start making your way, learning from `);
let hyperLink=React.createElement("a", {href:"https://developer.mozilla.org/en-US/",target:"_blank"}, "the rest of MDN");
let span2=React.createElement("span",null," and other intermediate to advanced resources that assume a lot of previous knowledge.");
let para2=React.createElement("p",null,[span1,hyperLink,span2]);
let div2=React.createElement("div",null,para2);

let para3=React.createElement("p",null,"If you are a complete beginner, web development can be challenging — we will hold your hand and provide enough detail for you to feel comfortable and learn the topics properly. You should feel at home whether you are a student learning web development (on your own or as part of a class), a teacher looking for class materials, a hobbyist, or someone who just wants to understand more about how web technologies work.");
let div3=React.createElement("div",null,para3);


let outerDiv=React.createElement("div",null,[h1,div1,div2,div3]);

ReactDOM.render(outerDiv,document.querySelector("body"));