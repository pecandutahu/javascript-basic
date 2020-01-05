// alert("Hallo Javascript");

// variabel di javascript

// var
// var buah = 'Mangga';
// console.log(buah);


// variable constant
// const buah = 'Mangga';
// buah = 'jeruk'; ===> ini error karena constant
// console.log(buah);

// let
// let buah = 'Mangga';
// buah = 'jeruk'; 
// console.log(buah);

// let x = 1;
// let y = 2;
// let a = 'buah';

// penambahan integer
// let z =  x+y;
// hasil penambahan string
// let z = a + y + x;
// console.log(z);

// ===========================================================
// array dan object (tipe data khusus)

// array
// let buah = ['mangga','jeruk','aple'];
// console.log(buah['0'])

// object
// let buah = {
//     buah1 : 'mangga',
//     buah2 : 'jeruk',
//     buah3 : 'apel',
// }
// console.log(buah.buah1);

// object didalam boject
// let buah = {
//     buah1 : 'mangga',
//     buah2 : 'jeruk',
//     buah3 : 'apel',
//     buah4 : ['mangga','jeruk','aple'],
//     buah5 : {mangga1 : 'gedong',mangga2 : 'aromanis'},
//     buah6 : function(){ return 'buah6 gedong '}
// }
// console.log(buah.buah1);
// console.log(buah.buah4[2]);
// console.log(buah.buah5.mangga2);
// console.log(buah.buah6());

// data dalam array dan object di javascript
// const lists = [{id:1,text:'text1'},{id:2,text:'text2'}];
// console.log(lists[0].text);

// JSON

// const lists = [{'id':'1','text':'text1'},{'id':'2','text':'text2'}];
// console.log(lists);

// fungsi

// function buah(){
//     return 'mangga';
// }
// const buah1=buah(); //panggil fungsi didalam variable
// console.log(buah());
// console.log(buah1);

// function add(){
//     const a = 1;
//     const b = 2;
//     return a+b;
// }
// console.log(add())

// arrow function

// const add = (x,y) => {
//     return x+y;
// }
// console.log(add(2,4));


// statement

// const x = 2;
// if (x===2){
//     console.log('bagus')
// }else{
//     console.log('salah')
// }


// ternary Operator (Ekspresion)
// const x = 3;
// const data = x === 2 ?  console.log('bagus') : console.log('salah')


// loop
// for

// let buah = ['mangga','jeruk','aple'];
// let i;
// for (i=0; i < buah.length; i++){
//     console.log(buah[i]);
// }

// foreach
// let buahs = ['mangga','jeruk','aple'];
// buahs.forEach((buah)=>{
//     console.log(buah)
// });

// map
// let buahs = ['mangga','jeruk','aple'];
// buahs.map((buah)=>{
//     console.log(buah)
// });

// const buah1 = buahs.map((buah)=>{
//     return `${buah} enak`;
// });
// console.log(buah1)


// const x = 'mangga';
// const z = `${buah1} enak`;

// console.log(z); 


// jalan pintas memanggil object
// let buah = {
//         buah1 : 'mangga',
//         buah2 : 'jeruk',
//         buah3 : 'apel'
//     }
// const {buah1,buah3} = buah;
// console.log(buah3);

// literal data
// let data1 = [{id:1,text:'text1'},{id:2,text:'text2'}];
// let data2 = [data1, {id:3,text:'text3'}];
// let data3 = [...data1, {id:3,text:'text3'}];

// console.log(data2);
// console.log(data3);


// ===========================================
// DOM Document Object Model
// dom lngsung
// const h1 = document.querySelector('h1');
// h1.innerHTML += ` <p> Woiii </p> `;
// // dom with even
// const button =document.querySelector('#submit');
// const text =document.querySelector('#text');


// button.addEventListener('click', function(e){
//     textclassList.remove('hide');
// });