let i = 0, display_student, display_father, display_rollNo, display_p_no, length;
let StudentData = {
    studentsName: ["Abdul-Hannan", "Nawazish", "Taha Ismaeel", "Khizer Tauseef"],
    fatherName: ["Khalique Ahmad", "Not Known", "Khalid Ismaeel", "Tauseef Ahmad"],
    rollNo: [505, 510, 501, 503],
    phoneNo: [5454, 54421, 5548621, 4813]
}
length = StudentData.studentsName.length;
display_student = "";
display_father = "";
display_rollNo = "";
display_p_no = "";
while (i < length)
{
    display_student += StudentData.studentsName[i] + "<br>";
    display_father += StudentData.fatherName[i] + "<br>";
    display_rollNo += StudentData.rollNo[i] + "<br>";
    display_p_no += StudentData.phoneNo[i] + "<br>";
    i++;
}
document.querySelector("#s_name").innerHTML = display_student;
document.querySelector("#f_name").innerHTML = display_father;
document.querySelector("#r_nos").innerHTML = display_rollNo;
document.querySelector("#p_nos").innerHTML = display_p_no;
