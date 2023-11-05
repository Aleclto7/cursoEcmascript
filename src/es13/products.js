// Creando el modulo donde obtendremos los datos de la FakeApi de Platzi
import fetch from "node-fetch"; 

const response = await fetch('https://api.escuelajs.co/api/v1/products')    // Hacemos la peticion de los productos a la API 
const products = await response.json(); // Lo que recibimos de response lo vamos a transformar en un objeto JSON

export { products };