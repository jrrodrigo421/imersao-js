const obj = { a: 1, b: '165115', c: 3, soma() { return a + b + c } }
console.log(JSON.stringify(obj));

console.log(JSON.parse('{"a":"1", "b":"3", "c":"2" }'));
console.log(JSON.parse('{"a":1.7, "b":"string", "c":true, "d":{}, "e":[]}'));