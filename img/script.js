// element Attribute

let nav = document.querySelector('.navbar');
// undefined
nav.style.background ="red";
// 'red'
nav.attributes[0]
// class=​"navbar fixed-top bg-white py-4 px-5"
nav.attributes[1]
// style=​"background:​ red;​"
nav.attributes[0].name;
// 'class'
nav.attributes[0].value;
// 'navbar fixed-top bg-white py-4 px-5'
nav.attributes[1].value
// 'background: red;'




// element ChildNode

let footer = document.querySelector('footer');
    // undefined
footer.attributes;
    // NamedNodeMap {0: class, class: class, length: 1}
footer.attributes[0].name;
    // 'class'
footer.attributes[0].value;
    // 'border-top1 p-5 bg-black'
footer.childNodes.length;
    // 3
footer.childNodes[0].nodeName;
    // '#text'
footer.childNodes;
   // NodeList(3) [text, div.d-flex.justify-content-between.align-baseline.px-5.mx-5, text]
let body = document.querySelector('.body');
//   undefined
 body.childNodes.length;
//   7
body.childNodes[1].style.display = "none";
//   'none'
 body.childNodes[1].style.background ="red";
//   'red'
body.childNodes[3].style.displ
//   undefined
body.childNodes[3].style.display= "null";
//   'null'


//  className


body.className;
//  'position-relative container-fluid body pt-5'
body.className.length;
//    43    return array

nav.className;
// 'navbar fixed-top bg-white py-4 px-5'
nav.className.length;
// 35
if(nav.className = "navbar"){}
// undefined
if(nav.className = "navbar"){console.log("This class is content in which");}else{console.log("This class is not content in which")}
// This class is content in which



//  element.clientHeight


body.clientHeight;
//  570
body.clientWidth;
//  1263
body.clientLeft;
//  0
body.clientTop
//  0


nav.clientHeight;
// 105
nav.clientWidth
// 1136
nav.clientLeft
// 0

//  element.children

body.children;
//  HTMLCollection(3) [img.w-100, div.body-c.position-absolute, div.bottom.col-10.px-5.position-absolute]
body.children[0].style.display = "none";
//  'none'
body.children.length;
//  3


nav.children.length
// 1
nav.children[0].nodeName;
// 'DIV'
nav.children[0].style.display="none"
// 'none'




// element dataset


nav.dataset.id = "Hello";
//'Hello'
nav.dataset.userName = "Hasnain Iqbal";
//'Hasnain Iqbal'
nav.dataset.dateOfBirth = "21-12-2001";
// '21-12-2001'

// element Id 


body.id
//  'body'
body.id.length;
// 4        return array



//  innerHTML

body.childNodes[3].innerHTML="hello";
// 'hello'
nav.innerHTML="this is innerHTML";
//'this is innerHTML'

nav.innerText = "this is innerText there are tag only text of elemment"
// 'this is innerText there are tag only text of elemment'

// nodeName
nav.nodeName
// 'NAV'
nav.nodeType
// 1
if(nav.nodeType =="1"){
    console.log("this element node type is div");
}else{
    console.log("this is not a div not")
}
// this element node type is div
body.nodeName;
// 'DIV'


//      heightOff


nav.clientHeight;
// 105
nav.offsetHeight
// 105
nav.offsetWidth
// 1136
nav.offsetWidth
// 1136
nav.children[0].offsetHeight
// 57
nav.children[0].clientHeight
// 57
nav.children[0].offsetWidth
// 1040
nav.children[0].clientWidth
// 1040



//      outerHTML

let navBrand = document.querySelector('.navbar-brand ');
// undefined
navBrand.outerHTML = "<h1>hello </h1>";
// '<h1>hello </h1>'

navBar.outerText ="<h2>outertext</h2>"
// '<h2>outertext</h2>'




//      parentElement

navBar.parentElement
// <div class=​"main container-fluid position-relative">​…​</div>​




//      element.scrollHeight




let body = document.querySelector("body");
// undefined
body.scrollHeight
// 1792
body.scrollWidth;
// 1136


//  tagName



nav.tagName
// 'NAV'
nav.children[0].tagName;
// 'DIV'