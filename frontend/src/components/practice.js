import { BrowserRouter, Link } from "react-router-dom";

fetch('/api').then(res=> res.json()).then(data=> console.log(data));


// async/await

async function getData(){
    const res = await fetch('/api');
    const data = res.json();
    console.log(data);
}

const getData = async()=> {
try {
    const res = await fetch('/api');
    const data = res.json();
    console.log(data);
} catch (error) {
    message(error.message)
}
}

const arr =[1,2,3,4,5]

arr.map(x => x*2)  //[2,4,6,8]
arr.filter(x=> x%2===0) //[2,4]
arr.reduce((a,b) => a+b,0) //15

GET /api/users
POST /api/users

{user.map(user=> <li key={user.id}>{user.name}</li>)}

<BrowserRouter>
<Routes>
    <Route path='/' element={<Home />}/>
</Routes>
</BrowserRouter>

function reverseString(str){
    return str.split('').reverse().join('');
}

console.log(reverseString('hello'));

const nums = [1,2,3,4];
const even = nums.filter(num=> num%2===0);
console.log(even);

const max= Math.max(...[1,2,3,10,16]);
console.log(max);

function isPalindrome(str){
    return str === str.split('').reserve().join('');
}
console.log(isPalindrome('madam'));

const sum = [1,2,3,4].reduce((a,b)=> a+b,0);
console.log(sum);
