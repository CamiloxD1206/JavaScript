// let srt = ("Camilo");
// alert(srt);
// let srt2 = ('Tacue');
// alert(srt2);
// let srt3=`"Estos son mi nombre y apellido ${srt + srt2}" `;
// console.log(srt3);
//---------------------------------------------------------------------------------------
// alert(`10+20=+" "${10 + 20}`);
// let estudiantes = `estudiantes ADSO 2556678 
// 1. Manuel Camacho
// 2. Manuel Solarte
// 3. Yecid Pardo`;
// console.log(estudiantes)
//-------------------------------------------------------------------------------------------
// let estudiantes2='Grupo RPM ADSO :\n1.Camilo\n2.Alvaro';
// console.log(estudiantes2)
// console.log('latitud 20\'');
// let ciudad =("Cundinamarca");
// console.log(ciudad.length);
// let ciudad =("Cundinamarca y Popayan");
// console.log(ciudad.indexOf("Popayan"));
// let ciudad =("Cundinamarca y Popayan");
// console.log(ciudad.includes("Popayan"));
// let nombre =("Camilo");;
// let apellido=("Tacue");
// console.log(nombre.concat(apellido));
// let nombre =("Camilo");
// // console.log(nombre.concat(" ola"));
// let nombre =("Camilo");
// let apellido=("Tacue");
// console.log(nombre+(" Estevan "+apellido));
// let programa =("                             Tecnolo Analisis y Desarrollo de Software                                         ");
// // console.log(programa.trimStart().trimEnd());
// console.log(programa.trim());
// let mensaje=("Tecnolo Analisis y Desarrollo de Software ")
// console.log(mensaje.replace('Tecnolo','Tecnologo'));
// let mensaje=("Tecnolo Analisis y Desarrollo de Software ")
// console.log(mensaje.slice(0,5));
// let mensaje=("Tecnolo Analisis y Desarrollo de Software ")
// console.log(mensaje.slice(8));
// let monitor=("monito 20'");
// let dias =("solo por hoy Jueves");
// let descuen =("90% de descuento!!!!!!!!\n".repeat(10));
// console.log(`${monitor},${dias},${descuen}`);
// let texto=("Sena Centro de Teleinformatica y Produccion Industrial");
// console.log(texto.split(" "));

// let correo=("CETACUE@MISENA.EDU.CO");
// console.log(correo.toLocaleLowerCase());
// let nombre=("camilo tacue salazar");
// // console.log(nombre.toLocaleUpperCase());
// -------------------------------------------------------------numeros------------------------------------------------------------------------------
// let valor = (5);
// valor+=5;
// console.log(valor);
// valor+=5;
// console.log(valor);
// valor+=5;
// console.log(valor);
// valor+=5;
// console.log(valor);
// valor+=5;
// console.log(valor);
// valor+=5;
// console.log(valor);
// valor+=5;
// console.log(valor);
// valor+=5;
// console.log(valor);
// --------------------------------------------------------------------------------------------------------
// let num1=(50);
// let num2=(40);
// let resultado;
// resultado=Number.parseInt(num1) + Number.parseInt(num2);
// console.log(num1 + num2);
// --------------------------------------------------------------------------------------------------------
//=== (es inteligente)
//que aparezca un alert que diga (FACTURA DE VENTA JS.COM)
//Promp que pida nombre cliente
//Promp que pida  el numero de producto a comprar(4 veces)
//cuanto vale(en cada producto(precio unitario))
//que se sume todo y se forme la factura en consola
// Descuento de 10% =30000
// 19%=1.19 IVA
//---------------------boolean------------------------------------
// let boleano1=(true);
// let boleano2=(false);
// console.log(typeof boleano1);
// console.log(typeof boleano2);
// let numerito=(25);
// console.log(typeof numerito);
// //-----------------------------------------------------------------
// let sesion =(true);
// console.log(sesion? `si esta autenticado`:`no esta autentocado`);
//----objetos------
// console.log(`INFORMACION DE MOTOPOSADA`);
// console.log(`ADMINISTRADOR`);
// const administradormotoposada={
//     nombre :"Camilo",
//     apellido:"Tacue",
//     correo:"cetacue@misena.edu.co",
//     numero:3023534006,
//     fecha:"12/06/2003",
//     motoposada :{
//         direccion:"Callefalsa123",
//        ubicacion:"latitud 20'",
//       foto:"1 foto",
//       placa:"xxx-ddd"
        
//     }
//  }
// console.log(administradormotoposada);
// const{nombre,apellido,motoposada:{placa}}=administradormotoposada;
// console.log(administradormotoposada.nombre);


//---------------------------------------------------------------------


//delete motoposada.foto
//-----------------------------------------------------------------------------------------
// const estudiante={
//     nombre: "Camilo",
//     apellido:"Tacue"
// }
// const profesor={
//     nombre: "ola",
//     apellido:"mundo"
// }
// const ola={...estudiante,...profesor};
// console.log(ola);
 
//--------------------------------------------------------------------------------------------

 

//--------------------------------------------------------------------desarrollo---------------------------------------------------------------------------------------\\
// alert("FACTURA DE VENTA JS.COM");
// let a =prompt("Nombre de cliente");
// let product1=prompt("Nombre de producto.1");
// let valor1=parseInt(prompt("valor de producto.1"));
// let product2=prompt("Nombre de producto.2");
// let valor2=parseInt(prompt("valor de producto.3"));
// let product3=prompt("Nombre de producto.3");
// let valor3=parseInt(prompt("valor de producto.3"));
// let product4=prompt("Nombre de producto.4");
// let valor4=parseInt(prompt("valor de producto.4"));
// let sub=(valor1+valor2+valor3+valor4);
// console.log("SUPERMERCADO ADSO")
// console.log(`${product1}`,`${valor1}`);
// console.log(`${product2} `,`${valor2}`);
// console.log(`${product3}`,`${valor3}`);
// console.log(`${product4}`,`${valor4}`);
// console.log(`subtotal ${sub}`);   
// let iva=(sub*0.19);
// console.log(`EL IVA DE LA FACTURA ES ${iva}`);
// let descuento=(sub*0.10);
// console.log(`EL DESCUENTO DE LA FACTURA ES ${descuento}`);
// let total=(sub+iva-descuento);
// console.log( `el valor total que de de pagar el señor  ${a} es de  ${total}`);
//-------------------------------------------------------------------------------------------------




