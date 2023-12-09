let arr1 = [1, 2, 3, 4, 'hurrairah', 'qasim', 'shahmeer Waqar'], i;
for (i = 0; i < arr1.length; i++)
    document.getElementById("paragraph1").innerHTML = arr1[i];
document.getElementById("heading1").innerHTML = arr1.push(5);// add element at last of array
// pop removes element from last of array

for (i = 0; i < arr1.length; i++)
    document.getElementById("heading2").innerHTML = arr1[i];

document.getElementById("heading2").innerHTML = arr1.shift(); // removes first element from array and returns the removed element.
document.getElementById("heading3").innerHTML = arr1.unshift(5);// adds element to first index of array.
for (i = 0; i < arr1.length; i++)
    document.getElementById("heading4").innerHTML = arr1[i];
document.getElementById("heading5").innerHTML = arr1.pop(); // removes last element from array and returns the removed element
arr1.splice(2, 0, "hannan", "faizan"); //splice(at index this, without removing Any Element, add this, add this). To add element at any index
for (i = 0; i < arr1.length; i++)
    console.log(arr1[i]);
let obj = {
    name: "Abdul-Hannan",
    email: "abdul-hannan@gmail.com", 
    phone: 3190619346,
}
console.log (obj);
console.log (Object.keys(obj));//Now it has become an array, we can access it through indexes.
for (i = 0; i < 3; i++)
    console.log (Object.values(obj)[i]);