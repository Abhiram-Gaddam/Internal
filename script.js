function toggleMenu() {
    const mobileMenu = document.getElementById("mobile-menu");
    const menuOpenIcon = document.getElementById("menu-open-icon");
    const menuCloseIcon = document.getElementById("menu-close-icon");
    mobileMenu.classList.toggle("hidden");
    menuOpenIcon.classList.toggle("hidden");
    menuCloseIcon.classList.toggle("hidden");
}



function submitForm() {
    event.preventDefault(); // Prevent the default form submission behavior

    // Get the form input values and store them in variables
    var sm1 = parseFloat(document.getElementById("sm1").value);
    var sm2 = parseFloat(document.getElementById("sm2").value);
    var as1 = parseFloat(document.getElementById("as1").value);
    var as2 = parseFloat(document.getElementById("as2").value);
    var q1 = parseFloat(document.getElementById("q1").value);
    var q2 = parseFloat(document.getElementById("q2").value);
    var at = parseFloat(document.getElementById("at").value);

    // Calculate the internal marks based on the input values
    var int = calculateInternalMarks(sm1, sm2, as1, as2, q1, q2, at);

    // Display the result in the result div
    var resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "YOUR INTERNALS ARE: " + int;
    console.log("REsult is :",int)
}

function resetForm() {
    document.getElementById("myForm").reset();
}

function calculateInternalMarks(sm1, sm2, as1, as2, q1, q2, at) {
    var atte = att(at);
    var int = 0;

    if (sm1 > sm2) {
        sm1 = sm1 * 0.8;
        sm2 = sm2 * 0.2;
    } else if (sm1 < sm2) {
        sm1 = sm1 * 0.2;
        sm2 = sm2 * 0.8;
    } else if (sm1 === sm2) {
        sm1 = sm1 * 0.8;
        sm2 = sm2 * 0.2;
    }

    if (as1 > as2) {
        as1 = (as1 / 12) * 2.8;
        as2 = (as2 / 12) * 0.7;
    } else if (as1 < as2) {
        as1 = (as1 / 12) * 0.7;
        as2 = (as2 / 12) * 2.8;
    } else if (as1 === as2) {
        as1 = (as1 / 12) * 2.8;
        as2 = (as2 / 12) * 0.7;
    }
    if (q1 > q2) {
        q1 = (q1 / 12) * 2.8;
        q2 = (q2 / 12) * 0.7;
    } else if (q1 < q2) {
        q1 = (q1 / 12) * 0.7;
        q2 = (q2 / 12) * 2.8;
    } else if (q1 === q2) {
        q1 = (q1 / 12) * 2.8;
        q2 = (q2 / 12) * 0.7;
    }
    int = sm1 + sm2 + as1 + as2 + q1 + q2 + atte;
    return int;
}

function att(a) {
    if (a >= 90 && a <= 100)
        return 5;
    else if (a >= 80 && a < 90)
        return 4;
    else if (a >= 70 && a < 80)
        return 3;
    else if (a >= 60 && a < 70)
        return 2;
    else if (a >= 50 && a < 60)
        return 1;
    else if (a < 50)
        return 0;
    else
        return 0;
}
function Cgpa(){
    event.preventDefault();
    var cgpa = parseFloat(document.getElementById("cgpa").value);
    var pcgpa =parseFloat(document.getElementById("pcgpa").value);
    if(pcgpa==0)
    {
        cgpa=cgpa+0;
    }
    else{
    cgpa=(pcgpa+cgpa)/2;
    }
    var resultDiv=document.getElementById("resultss");
    resultDiv.innerHTML="YOUR CGPA IS :"+cgpa;
}


function sgpa_reset() {
    document.getElementById("sgpaform1").reset();
    document.getElementById("sgpaform2").reset();
    document.getElementById("sgpaform3").reset();
}

function sgpa_submit()
{
    event.preventDefault();

    var branch=(document.getElementById("branch").value);
    var sem=(document.getElementById("sem").value);
    var year=(document.getElementById("year").value);
    var pr=getcredits(branch,sem,year);
    pr=Math.round(pr * (10 ** 2)) / (10 ** 2);
    console.log("Branch:", branch, "Year:", year, "Semester:", sem, "Credits:", pr);

 
    var foo=document.getElementById("footer");
    foo.innerHTML="Your SGPA is :"+pr;
    
}

function getcredits(branch,sem,year)
{
    var sb1=0,sb2=0,sb3=0,sb4=0,sb5=0,sb6=0;
    var lb1=0,lb2=0,lb3=0,lb4=0,lb5=0;
    var sgpa_res;
    sb1=parseFloat(document.getElementById("sub-gpa1").value);
    lb1=parseFloat(document.getElementById("lab1").value);
    sb2=parseFloat(document.getElementById("sub-gpa2").value);
    lb2=parseFloat(document.getElementById("lab2").value);
    sb3=parseFloat(document.getElementById("sub-gpa3").value);
    lb3=parseFloat(document.getElementById("lab3").value);
    sb4=parseFloat(document.getElementById("sub-gpa4").value);
    lb4=parseFloat(document.getElementById("lab4").value);
    sb5=parseFloat(document.getElementById("sub-gpa5").value);
    sb6=parseFloat(document.getElementById("sub-gpa6").value);
    lb5=parseFloat(document.getElementById("lab5").value);

    const credits = {
        mech: {
            "1.1": [3, 3, 3, 3, 1.5, 1.5, 3, 1.5],
            "1.2": [3, 3, 3, 3, 3, 1.5, 1.5, 1.5],
            "2.1": [3, 3, 3, 3, 3, 1.5, 1.5, 1.5, 2],
            "2.2": [3, 3, 3, 3, 3, 1.5, 1.5, 1.5, 2],
            "3.1": [3, 3, 3, 3, 3, 1.5, 1.5, 1.5, 2],
            "3.2": [3, 3, 3, 3, 3, 1.5, 1.5, 1.5, 2],
            "4.1": [3, 3, 3, 3, 3, 3, 3, 2]
        },
        civil: {
            "1.1": [3, 3, 3, 3, 1.5, 1.5, 3, 1.5],
            "1.2": [3, 3, 3, 3, 1.5, 1.5, 3, 1.5],
            "2.1": [3, 3, 3, 3, 3, 1.5, 1.5, 1.5, 2],
            "2.2": [3, 3, 3, 3, 3, 1.5, 1.5, 1.5, 2],
            "3.1": [3, 3, 3, 3, 3, 1.5, 1.5, 1.5, 2],
            "3.2": [3, 3, 3, 3, 3, 1.5, 1.5, 1.5, 2],
            "4.1": [3, 3, 3, 3, 3, 3, 3, 2]
        },
        chemical: {
            "1.1": [3, 3, 3, 3, 1.5, 1.5, 1.5, 3],
            "1.2": [3, 3, 3, 3, 1.5, 1.5, 3, 1.5],
            "2.1": [3, 3, 3, 3, 3, 1.5, 1.5, 1.5, 2],
            "2.2": [3, 3, 3, 3, 3, 1.5, 1.5, 1.5, 2],
            "3.1": [3, 3, 3, 3, 3, 1.5, 1.5, 1.5, 2],
            "3.2": [3, 3, 3, 3, 3, 1.5, 1.5, 2],
            "4.1": [3, 3, 3, 3, 3, 3, 3, 1.5, 2]
        },
        cse: {
            "1.1": [3, 3, 3, 3, 1.5, 1.5, 3, 1.5],
            "1.2": [3, 3, 3, 3, 2, 1.5, 1, 1.5, 1.5],
            "2.1": [3, 3, 3, 3, 3, 1.5, 1.5, 1.5, 2],
            "2.2": [3, 3, 3, 3, 3, 1.5, 1.5, 1.5, 2],
            "3.1": [3, 3, 3, 3, 3, 1.5, 1.5, 1.5, 2],
            "3.2": [3, 3, 3, 3, 3, 1.5, 1.5, 1.5, 2],
            "4.1": [3, 3, 3, 3, 3, 3, 3, 2]
        },
        it: {
            "1.1": [3, 3, 3, 3, 1.5, 1.5, 3, 1.5],
            "1.2": [3, 3, 3, 3, 2, 1.5, 1, 1.5, 1.5],
            "2.1": [3, 3, 3, 3, 3, 1.5, 1.5, 1.5, 2],
            "2.2": [3, 3, 3, 3, 3, 1.5, 1.5, 1.5, 2],
            "3.1": [3, 3, 3, 3, 3, 1.5, 1.5, 1.5, 2],
            "3.2": [3, 3, 3, 3, 3, 1.5, 1.5, 1.5, 2],
            "4.1": [3, 3, 3, 3, 3, 3, 3, 2]
        },
        csm: {
            "1.1": [3, 3, 3, 3, 1.5, 1.5, 3, 1.5],
            "1.2": [3, 3, 3, 3, 2, 1.5, 1.5, 1.5, 1],
            "2.1": [3, 3, 3, 3, 3, 1.5, 1.5, 1.5, 2],
            "2.2": [3, 3, 3, 3, 3, 1.5, 1.5, 1.5, 2],
            "3.1": [3, 3, 3, 3, 3, 1.5, 1.5, 1.5, 2],
            "3.2": [3, 3, 3, 3, 3, 1.5, 1.5, 1.5, 2],
            "4.1": [3, 3, 3, 3, 3, 3, 3, 2]
        },
        csbs: {
            "1.1": [3, 3, 3, 3, 3, 1, 1, 1, 1.5],
            "1.2": [3, 3, 3, 3, 3, 1, 1, 1, 1.5],
            "2.1": [3, 3, 3, 3, 3, 1.5, 1.5, 1.5, 2],
            "2.2": [3, 3, 3, 3, 3, 1.5, 1.5, 1.5, 2],
            "3.1": [3, 3, 3, 3, 3, 1.5, 2, 1.5, 2],
            "3.2": [2, 3, 3, 3, 3, 3, 1, 1, 2],
            "4.1": [2, 3, 3, 3, 3, 3, 1, 3, 2]
        },
        ece: {
            "1.1": [3, 3, 3, 3, 1.5, 1, 3, 2],
            "1.2": [3, 3, 3, 3, 1.5, 2, 3, 1],
            "2.1": [3, 4, 3, 3, 3, 1, 1.5, 1, 2],
            "2.2": [3, 3, 4, 3, 3, 1.5, 1, 1, 2],
            "3.1": [3, 3, 3, 3, 3, 1.5, 2, 1.5, 2],
            "3.2": [3, 3, 3, 3, 3, 1.5, 1.5, 1, 2],
            "4.1": [3, 3, 3, 3, 3, 3, 3, 2]
        },
        cso: {
            "1.1": [3, 3, 3, 3, 1.5, 1.5, 3, 1.5],
            "1.2": [3, 3, 3, 3, 2, 1.5, 1, 1.5, 1.5],
            "2.1": [3, 3, 3, 3, 3, 1.5, 1.5, 1.5, 2],
            "2.2": [3, 3, 3, 3, 3, 1.5, 1.5, 1.5, 2],
            "3.1": [3, 3, 3, 3, 3, 1.5, 1.5, 1.5, 2],
            "3.2": [3, 3, 3, 3, 3, 1.5, 1.5, 1.5, 2],
            "4.1": [3, 3, 3, 3, 3, 3, 3, 2]
        },
        eee: {
            "1.1": [3, 3, 3, 3, 1.5, 1.5, 3, 1.5],
            "1.2": [3, 3, 3, 3, 1.5, 1.5, 3, 1.5],
            "2.1": [3, 3, 3, 3, 3, 1.5, 1.5, 1.5, 2],
            "2.2": [3, 3, 3, 3, 3, 1.5, 1.5, 1.5, 2],
            "3.1": [3, 3, 3, 3, 3, 1.5, 1.5, 1.5, 2],
            "3.2": [2, 3, 3, 3, 3, 3, 1.5, 1, 2],
            "4.1": [3, 3, 3, 3, 3, 3, 3, 2]
        },
        csd: {
            "1.1": [3, 3, 3, 3, 1.5, 1.5, 3, 1.5],
            "1.2": [3, 3, 3, 3, 2, 1.5, 1, 1.5, 1.5],
            "2.1": [3, 3, 3, 3, 3, 1.5, 1.5, 1.5, 2],
            "2.2": [3, 3, 3, 3, 3, 1.5, 1.5, 1.5, 2],
            "3.1": [3, 3, 3, 3, 3, 1.5, 1.5, 1.5, 2],
            "3.2": [3, 3, 3, 3, 3, 1.5, 1.5, 1.5, 2],
            "4.1": [3, 3, 3, 3, 3, 3, 3, 2]
        }
    };
    const semesterCredits = credits[branch][year + "." + sem];
    //document.writeln(semesterCredits);
    var i;
    var sum=0;
    for(i=0;i<semesterCredits.length;i++)
    {
        sum+=semesterCredits[i];
    }
    if(sb5==0||sb5==null)
        {
        sgpa_res=(sb1*semesterCredits[0])+(sb2*semesterCredits[1])+(sb3*semesterCredits[2])+(sb4*semesterCredits[3])+(lb1*semesterCredits[4])+(lb2*semesterCredits[5])+(lb3*semesterCredits[6])+(lb4*semesterCredits[7]);
        sgpa_res=sgpa_res/sum;
        return sgpa_res;

        }
        else if(year==4 && sem==1 && (branch=="chemical" || branch=="csbs")){
            sgpa_res=(sb1*semesterCredits[0])+(sb2*semesterCredits[1])+(sb3*semesterCredits[2])+(sb4*semesterCredits[3])+(sb5*semesterCredits[4])+(sb6*semesterCredits[5])+(lb1*semesterCredits[6])+(lb2*semesterCredits[7])+(lb3*semesterCredits[8]);
        }
        else if(year==4 && sem==1){
            sgpa_res=(sb1*semesterCredits[0])+(sb2*semesterCredits[1])+(sb3*semesterCredits[2])+(sb4*semesterCredits[3])+(sb5*semesterCredits[4])+(sb6*semesterCredits[5])+(lb1*semesterCredits[6])+(lb2*semesterCredits[7]);
        }
        else if(year==3 && (branch=="csbs" || branch=="eee") && sem==2)
        {
            sgpa_res=(sb1*semesterCredits[0])+(sb2*semesterCredits[1])+(sb3*semesterCredits[2])+(sb4*semesterCredits[3])+(sb5*semesterCredits[4])+(sb6*semesterCredits[5])+(lb1*semesterCredits[6])+(lb2*semesterCredits[7])+(lb3*semesterCredits[8]);
        }
        else{
        sgpa_res=(sb1*semesterCredits[0])+(sb2*semesterCredits[1])+(sb3*semesterCredits[2])+(sb4*semesterCredits[3])+(sb5*semesterCredits[4])+(lb1*semesterCredits[5])+(lb2*semesterCredits[6])+(lb3*semesterCredits[7])+(lb4*semesterCredits[8]);
        sgpa_res=sgpa_res/sum;
        return sgpa_res;
        }


    
}