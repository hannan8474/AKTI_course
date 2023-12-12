function myfunction1(arr1, display_text)
{
    for (i = 0; i < arr1.length; i++)
    display_text += arr1[i] + "<br>";
    document.getElementById("content1").innerHTML = display_text; // it'll give all elements of the array
} 
function myfunction2(arr1)
{
    arr1.push(5);// add element at last of array
    // pop removes element from last of array
    document.getElementById("content2").innerHTML = arr1[arr1.length-1];
}
function myfunction3(arr1, display_text1)
{
    for (i = 0; i < arr1.length; i++)
        display_text1 += arr1[i] + "<br>"; 
    document.getElementById("content3").innerHTML = display_text1;
}
function myfunction4(arr1)
{
    let element = arr1.shift()
    document.getElementById("content4").innerHTML = element; // removes first element from array and returns the removed element.
}
function myfunction5(arr1)
{
    arr1.unshift(5);
    document.getElementById("content5").innerHTML = arr1[0];// adds element to first index of array.
}
function myfunction6(arr1, display_text2)
{
    for (i = 0; i < arr1.length; i++)
    display_text2 += arr1[i] + "<br>";
    document.getElementById("content6").innerHTML = display_text2;
}
function myfunction7(arr1)
{
    document.getElementById("content7").innerHTML = arr1.pop(); // removes last element from array and returns the removed element
}
let arr1 = [1, 2, 3, 4, 'hurrairah', 'qasim', 'shahmeer Waqar'];
let i;
let display_text = "";// ye hmne bta dia ha ke ye aik string is trah wo isay as a number nhi read krega
let display_text1 = "";// ye hmne bta dia ha ke ye aik string is trah wo isay as a number nhi read krega
let display_text2 = "";// ye hmne bta dia ha ke ye aik string is trah wo isay as a number nhi read krega
document.getElementById("paragraph1").addEventListener("mouseover", function(){
    myfunction1(arr1, display_text);
});
document.getElementById("heading1").addEventListener("mouseover", function(){
    myfunction2(arr1);
});
document.getElementById("heading2").addEventListener("mouseover", function(){
    myfunction3(arr1, display_text1);
});
document.getElementById("heading3").addEventListener("mouseover", function(){
    myfunction4(arr1);
});
document.getElementById("heading4").addEventListener("mouseover", function(){
    myfunction5(arr1);
});
document.getElementById("heading5").addEventListener("mouseover", function(){
    myfunction6(arr1, display_text2);
});
document.getElementById("heading6").addEventListener("mouseover", function(){
    myfunction7(arr1);
});
arr1.splice(2, 0, "hannan", "faizan"); //splice(at index this, without removing Any Element, add this, add this). To add element at any index
for (i = 0; i < arr1.length; i++)
    console.log(arr1[i]);
let obj = {
    name: "Abdul-Hannan",
    email: "abdul-hannan@gmail.com",
    phone: 3190619346,
};
console.log(obj); //it'll give the object
console.log(Object.keys(obj)); //it'll give the object keys only by using Object.values we can get the attributes also

let arr2 = [1, 2, 3, "rehman", "rehman@gmail.com", "54", 64];
for (i = 0; i < arr2.length; i++)
{
    console.log(arr2[i]);
}