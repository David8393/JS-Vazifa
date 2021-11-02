// Task-1

// 1

//  function a() {
//     const numStr = '230.000';
//     var number = Number(numStr);
//     console.log(number);
// }

// a();

// 2

// function a() {
//     const numStr = "00402";
//     var number = Number(numStr);
//     console.log(number);
// }

// a();

// 3

// function a() {
//     const numStr = "03.1400";
//     var number = Number(numStr);
//     console.log(number);
// }

// a();

// function tubson(son){  
//     for (i=2; i<=son; i++  ){
//         let tubson = true;
//         for(j=2; j<i; j++ ){
//          if(i % j === 0){
//              tubson = false;
//          }       
//         }
//         if(tubson){
//             console.log(i)
//         }
//     }
// }
// tubson(210);



// function son(){
//     let a = "03.1400";
//     console.log(parseFloat(a));
// }
// son();



// function sum(){
// let a = '12';
// let b = a.split("");
// let juft = 0;
// let toq = 0;
// for(i=0; i<b.length; i++){
//     if(i%2 === 1){
//         bvc = parseFloat(b[i]);
//        juft = juft + bvc;
//     }if(i%2===0){
//         bcc = parseFloat(b[i]);
//         toq = toq + bcc;
//         }  
// }
// console.log(juft, 'juft');
// console.log(toq, 'toq');
// }
// sum();


// function toqjuft(){
// let a = '12sss';
// let b = a.split("");
// let juft = 0;
// let toq = 0;
// for(i=0; i<b.length; i++){
//     if(i%2 === 1){
//        console.log(b[i], 'juft')
//     }if(i%2===0){
//         console.log(b[i], 'toq')
//         }  
// }
// }
// toqjuft();


// let a = ['a','a','a','a','a','a','a'];
// function teng(a){
//     let c = 0;
//     for(j=0; j<a.length; j++ ){        
//         if(a[0]===a[j]){
//             c= c+1;
//        }       
//     }
//    if(a.length===c){
//        console.log(true);
//    }else{
//     console.log(false);
//    }   
// } 
// teng(a);




// function rev(r){
//     let a = `${r}`;
//     let b = a.split('');
//     let c = b.reverse();
//     let d = c.toString(" ");
//     let k = d.replace(/,/g,"" )
//     let e = a.concat(k)
//     console.log(e);
// }
// rev(12345);






// function WP(){
//     let a = `WelcomeToWebBrainAcademi`;
//     let s = a.replace(/([A-Z])/g, ' $1').trim();
//     console.log(s);
    
// }
// WP();

// function aaa(){
//         let b = '';
//         let a = 'absabs';
//     for(i=0; i<a.length; i++){
//     console.log(a[i]);
      
//     }
    
// }
// aaa();
