//Exemplo de funções
// const divElement = document.getElementById("div-box")

// divElement.addEventListener("click", ()=>{
//     console.log(divElement);
// });

// divElement.addEventListener("click", mostraElemento);
// function mostraElemento(){
//    console.log(divElement)
// }
// function soma (){
//     let n1 = 10
//     let n2 = 5
//     console.log(n1*n2)
// }
//Recuperando elementos do HTML com querrySelector
// const liElements = document.querySelectorAll("li");
// //Convertendo NODE LIST em array com spread
// const arrayElements =[...liElements];
// console.log(liElements);

const arrayElements = [...document.querySelectorAll("li")];
arrayElements.map((el,key)=>{
    console.log(el.textContent.lastIndexOf("1"))

      if(el.textContent.indexOf != (-1)) {
        el.textContent =`[${el.textContent}]`;
      }                                                
});
console.log(arrayElements);




