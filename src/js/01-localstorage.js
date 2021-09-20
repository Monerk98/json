// const  user = {
//     name : "Mango",
//     age : 2,
// }
// console.log(JSON.stringify(user))


// const savedUserData = '{"name": "Mango", "age": 2 }'

// console.log(JSON.parse(savedUserData))

console.log(localStorage);
//                   это ключ   второе значеине это всегда строка, даже если массив или объект, их нужно привести к строке 
localStorage.setItem('my-data', JSON.stringify({ name: 'Mango', age: 2 }));

// чтобы прочитать что находится внутри локал сторэдж юзаем getitem
// в него пишем только один ключ 
// но это еще нужно распаристь
const savedData = localStorage.getItem('my-data');
console.log('savedData', savedData);


// распарсеныцй объект
const parsedData = JSON.parse(savedData);
console.log('parsedData', parsedData);