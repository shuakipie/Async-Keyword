// // REGULAR function returns a string:
// // function greet() {
// // 	return 'HELLO!!!';
// // }

// // THE ASYNC KEYWORD!
// // This function now returns a promise!
// async function greet() {
// 	return 'HELLO!!!'; //resolved with the value of 'HELLO!!!'
// }
// greet().then((val) => {
// 	console.log('PROMISE RESOLVED WITH: ', val);
// });

// async function add(x, y) {
// 	if (typeof x !== 'number' || typeof y !== 'number') {
// 		throw 'X and Y must be numbers!';
// 	}
// 	return x + y;
// }

// // Equivalent non-async function...
// // function add(x, y) {
// // 	return new Promise((resolve, reject) => {
// // 		if (typeof x !== 'number' || typeof y !== 'number') {
// // 			reject('X and Y must be numbers!');
// // 		}
// // 		resolve(x + y);
// // 	});
// // }

// add(6, 7)
// 	.then((val) => {
// 		console.log('PROMISE RESOLVED WITH: ', val);
// 	})
// 	.catch((err) => {
// 		console.log('PROMISE REJECTED WITH: ', err);
// 	});


// function getData() {
//  const data = axios.get('https://swapi.dev/api/planets')
//  console.log(data)
// }

// function greet() {
// 	return "Hello"
// }
// async function greet() {
// 	return "Hello"
// }

// greet().then((val) => {
// 	console.log('PROMISE RESOLVED WITH:', val)
// })

// async function add(x, y) {


// }

// function add(x, y) {
// 	return new Promise((resolve, reject) => {
// 		if (typeof x !== 'number' || typeof y !== 'number') {
// 			reject('X and Y must be numbers')
// 		}
// 		resolve(x + y)
// 	})
// }


// add('4', '5').then((val) => {
// 	console.log('PROMISE RESOLVE WITH:', val)

// }).catch((err) => {
// 	console.log('PROMISE REJECTED WITH:', err)
// })

// add(4, 5).then((val) => {
// 	console.log('PROMISE RESOLVE WITH:', val)

// }).catch((err) => {
// 	console.log('PROMISE REJECTED WITH:', err)
// })

// function getPlanets(){
//  return axios.get('https://swapi.dev/api/planets')
// }

// getPlanets().then(({data})=>{
// console.log(data)
// }) // easier way to use async and await

async function getPlanets(){
	try {
		const res = await axios.get('https://swapi.dev/api/planetss')
	const data = res.data
	for (let planet of data.results){
		console.log(planet.name)
	}
	} catch (e){
		console.log('IN CATCH ERROR', e)
	}
	
	// handling error
}

// getPlanets().catch((err)=>{
// 	console.log('ERROR', err)
// }) // another wawy to catch error
getPlanets()