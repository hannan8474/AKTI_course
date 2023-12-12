// // let obj1 = {
// //     "name": "Abdul-Hannan",
// //     "email": "abdul-hannan@gmail.com",
// //     "phone": 3190619346, // [pure json]
// // }
// // // for in loop: this will give the indexes of the array or objects 
// // for (let i in obj1)
// // {
// //     console.log(i);
// //     console.log(obj1[i]);
// // }

// // let arr1 = [1,2,3,4,5,6,7,8,9]
// // for (let i in arr1)
// // { //es6
// //     console.log(i);
// //     console.log(arr1[i]);
// // }
// // // for of loop: this will give the elements of the array or strings

// // // for (let i of obj1) for of loop can't be used with pure objects
// // // {
// // //     console.log(i);
// // // }

// // let arr3 = [1,2,3,4,5,6,7] // array is also an object

// // let obj4 = {
// //     "name": "Abdul-Hannan",
// //     "email": "abdul-hannan@gmail.com",
// //     "phone": 3190619346, // [pure json]
// // }

// // console.log(Array.isArray(obj4));//it'll give false
// // console.log(Array.isArray(arr3));//it'll give true

// let obj5 = {
//     "name": "Abdul-Hannan",
//     "email": "abdul-hannan@gmail.com",
//     "phone": 3190619346, // end wala type without "," ho tw usay pure json kehte hen
// }
// console.log(obj5);
// let obj6 = obj5;
// console.log(obj6); 
// obj6.name = "Faizan";
// console.log(obj6);
// console.log(obj5);   
// //This will also change the name of obj5, this is because of the pass by reference. Changes will be made at addresses in case of objects
// //To avoid this situation, we use concept of cloning.
// let obj7 = {
//     "name": "Abdul-Hannan",
//     "email": "abdul-hannan@gmail.com",
//     "phone": 3190619346, // end wala type without "," ho tw usay pure json kehte hen
// }
// let obj8 = {...obj7};
// obj7.name = "faizan";
// console.log(obj8);
// console.log(obj7);
//An array having onjects at their indexes, and objects can also contain other objects on their values or can also contains arrays at their values.
// let arrayofobjects = [
//     {users: ["hannan bhai", "moon bhai", "chand bhai"]},
//     {emails: ["hannan@gmail.com", "moon@gmail.com", "chand@gmail.com"]},
//     {passwords: [123, 456, 789]}
// ]
// let i, j;
// for(i = 0; i < 1; i++) 
// {
//     console.log("Name:")
//     for (j = 0; j < 3; j++)
//     {
//         console.log(arrayofobjects[i].users[j]);
//     }
// }
// for (i = 1; i < 2; i++)
// {
//     console.log("Emails:")
//     for (j = 0; j < 3; j++)
//     {
//         console.log(arrayofobjects[i].emails[j]);
//     }
// }
// for (i = 2; i < 3; i++)
// {
//     console.log("Passwords:")
//     for (j = 0; j < 3; j++)
//     {
//         console.log(arrayofobjects[i].passwords[j]);
//     }
// }

let fbUser = {
    englishExpert: {
        name: "ee",
        email: "ee@example.com",
        password: "password", 
        friendlist: ["abdul-hannan", "faizan", "nauman"],
        messenger: {
            salman: ["hi", "kesy ho", "lift hi nhi ha koi"],
            hannan: ["hi", "kesy ho", "lift hi nhi ha koi"]
        }
    },
    turkeyexpert: {
        name: "ee",
        email: "ee@example.com",
        password: "password", 
        friendlist: ["abdul-hannan", "faizan", "nauman"],
        messenger: {
            salman: ["hi", "kesy ho", "lift hi nhi ha koi"],
            hannan: ["hi", "kesy ho", "lift hi nhi ha koi"]
        }
    }
}
// console.log(fbUser);
console.log(fbUser.englishExpert.friendlist);