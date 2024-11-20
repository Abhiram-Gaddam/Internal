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

const credits = {
    mech: {
        "1.1": [[3, 3, 3, 3], [1.5, 1.5, 3, 1.5]],
        "1.2": [[3, 3, 3, 3, 3], [1.5, 1.5, 1.5]],
        "2.1": [[3, 3, 3, 3, 3], [1.5, 1.5, 1.5, 2]],
        "2.2": [[3, 3, 3, 3, 3], [1.5, 1.5, 1.5, 2]],
        "3.1": [[3, 3, 3, 3, 3], [1.5, 1.5, 1.5, 2]],
        "3.2": [[3, 3, 3, 3, 3], [1.5, 1.5, 1.5, 2]],
        "4.1": [[3, 3, 3, 3, 3, 3], [3, 2]]
    },
    civil: {
        "1.1": [[3, 3, 3, 3], [1.5, 1.5, 3, 1.5]],
        "1.2": [[3, 3, 3, 3], [1.5, 1.5, 3, 1.5]],
        "2.1": [[3, 3, 3, 3, 3], [1.5, 1.5, 1.5, 2]],
        "2.2": [[3, 3, 3, 3, 3], [1.5, 1.5, 1.5, 2]],
        "3.1": [[3, 3, 3, 3, 3], [1.5, 1.5, 1.5, 2]],
        "3.2": [[3, 3, 3, 3, 3], [1.5, 1.5, 1.5, 2]],
        "4.1": [[3, 3, 3, 3, 3, 3], [3, 2]]
    },
    chemical: {
        "1.1": [[3, 3, 3, 3], [1.5, 1.5, 1.5, 3]],
        "1.2": [[3, 3, 3, 3], [1.5, 1.5, 3, 1.5]],
        "2.1": [[3, 3, 3, 3, 3], [1.5, 1.5, 1.5, 2]],
        "2.2": [[3, 3, 3, 3, 3], [1.5, 1.5, 1.5, 2]],
        "3.1": [[3, 3, 3, 3, 3], [1.5, 1.5, 1.5, 2]],
        "3.2": [[3, 3, 3, 3, 3], [1.5, 1.5, 2]],
        "4.1": [[3, 3, 3, 3, 3, 3], [3, 1.5, 2]]
    },
    cse: {
        "1.1": [[3, 3, 3, 3], [1.5, 1.5, 3, 1.5]],
        "1.2": [[3, 3, 3, 3, 2], [1.5, 1, 1.5, 1.5]],
        "2.1": [[3, 3, 3, 3, 3], [1.5, 1.5, 1.5, 2]],
        "2.2": [[3, 3, 3, 3, 3], [1.5, 1.5, 1.5, 2]],
        "3.1": [[3, 3, 3, 3, 3], [1.5, 1.5, 1.5, 2]],
        "3.2": [[3, 3, 3, 3, 3], [1.5, 1.5, 1.5, 2]],
        "4.1": [[3, 3, 3, 3, 3, 3], [3, 2]]
    },
    it: {
        "1.1": [[3, 3, 3, 3], [1.5, 1.5, 3, 1.5]],
        "1.2": [[3, 3, 3, 3, 2], [1.5, 1, 1.5, 1.5]],
        "2.1": [[3, 3, 3, 3, 3], [1.5, 1.5, 1.5, 2]],
        "2.2": [[3, 3, 3, 3, 3], [1.5, 1.5, 1.5, 2]],
        "3.1": [[3, 3, 3, 3, 3], [1.5, 1.5, 1.5, 2]],
        "3.2": [[3, 3, 3, 3, 3], [1.5, 1.5, 1.5, 2]],
        "4.1": [[3, 3, 3, 3, 3, 3], [3, 2]]
    },
    csm: {
        "1.1": [[3, 3, 3, 3], [1.5, 1.5, 3, 1.5]],
        "1.2": [[3, 3, 3, 3, 2], [1.5, 1.5, 1.5, 1]],
        "2.1": [[3, 3, 3, 3, 3], [1.5, 1.5, 1.5, 2]],
        "2.2": [[3, 3, 3, 3, 3], [1.5, 1.5, 1.5, 2]],
        "3.1": [[3, 3, 3, 3, 3], [1.5, 1.5, 1.5, 2]],
        "3.2": [[3, 3, 3, 3, 3], [1.5, 1.5, 1.5, 2]],
        "4.1": [[3, 3, 3, 3, 3, 3], [3, 2]]
    },
    csbs: {
        "1.1": [[3, 3, 3, 3, 3], [1, 1, 1, 1.5]],
        "1.2": [[3, 3, 3, 3, 3], [1, 1, 1, 1.5]],
        "2.1": [[3, 3, 3, 3, 3], [1.5, 1.5, 1.5, 2]],
        "2.2": [[3, 3, 3, 3, 3], [1.5, 1.5, 1.5, 2]],
        "3.1": [[3, 3, 3, 3, 3], [1.5, 2, 1.5, 2]],
        "3.2": [[2, 3, 3, 3, 3, 3], [1, 1, 2]],
        "4.1": [[2, 3, 3, 3, 3, 3], [1, 3, 2]]
    },
    ece: {
        "1.1": [[3, 3, 3, 3], [1.5, 1, 3, 2]],
        "1.2": [[3, 3, 3, 3], [1.5, 2, 3, 1]],
        "2.1": [[3, 4, 3, 3, 3], [1, 1.5, 1, 2]],
        "2.2": [[3, 3, 4, 3, 3], [1.5, 1, 1, 2]],
        "3.1": [[3, 3, 3, 3, 3], [1.5, 2, 1.5, 2]],
        "3.2": [[3, 3, 3, 3, 3], [2, 1.5, 1.5, 2]],
        "4.1": [[3, 3, 3, 3, 2, 1.5],[ 3, 2]]
    },cso: {
        "1.1": [[3, 3, 3, 3], [1.5, 1.5, 3, 1.5]],
        "1.2": [[3, 3, 3, 3, 2], [1.5, 1, 1.5, 1.5]],
        "2.1": [[3, 3, 3, 3, 3], [1.5, 1.5, 1.5, 2]],
        "2.2": [[3, 3, 3, 3, 3], [1.5, 1.5, 1.5, 2]],
        "3.1": [[3, 3, 3, 3, 3], [1.5, 1.5, 1.5, 2]],
        "3.2": [[3, 3, 3, 3, 3], [1.5, 1.5, 1.5, 2]],
        "4.1": [[3, 3, 3, 3, 3, 3], [3, 2]]
    },
    eee: {
        "1.1": [[3, 3, 3, 3], [1.5, 1.5, 3, 1.5]],
        "1.2": [[3, 3, 3, 3], [1.5, 1.5, 3, 1.5]],
        "2.1": [[3, 3, 3, 3, 3], [1.5, 1.5, 1.5, 2]],
        "2.2": [[3, 3, 3, 3, 3], [1.5, 1.5, 1.5, 2]],
        "3.1": [[3, 3, 3, 3, 3], [1.5, 1.5, 1.5, 2]],
        "3.2": [[2, 3, 3, 3, 3], [3, 1.5, 1, 2]],
        "4.1": [[3, 3, 3, 3, 3, 3],[ 3, 2]]
    },
    csd: {
        "1.1": [[3, 3, 3, 3], [1.5, 1.5, 3, 1.5]],
        "1.2": [[3, 3, 3, 3, 2], [1.5, 1, 1.5, 1.5]],
        "2.1": [[3, 3, 3, 3, 3], [1.5, 1.5, 1.5, 2]],
        "2.2": [[3, 3, 3, 3, 3], [1.5, 1.5, 1.5, 2]],
        "3.1": [[3, 3, 3, 3, 3], [1.5, 1.5, 1.5, 2]],
        "3.2": [[3, 3, 3, 3, 3], [1.5, 1.5, 1.5, 2]],
        "4.1": [[3, 3, 3, 3, 3, 3], [3, 2]]
    }
};

// Grade values corresponding to the grades selected
// Grade values for each grade option
const gradeValues = {
    "A+": 10,
    "A": 9,
    "B": 8,
    "C": 7,
    "D": 6,
    "E": 5,
    "F": 0
};

// Function to dynamically generate subject and lab input fields
function generateSubjectInputs() {
    const branch = document.getElementById("branch").value;
    const sem = `${document.getElementById("year").value}.${document.getElementById("sem").value}`;
    document.getElementById("subjectInputs").innerHTML = "";

    const semesterCredits = getSemesterCredits(branch, sem);
    const subjects = semesterCredits[0] || []; // Subject credits
    const labs = semesterCredits[1] || [];     // Lab credits

    // Generate subject input fields
    subjects.forEach((credit, index) => {
        const subjectDiv = document.createElement("div");
        subjectDiv.classList.add("subject-input", "sm:col-span-3");

        const label = document.createElement("label");
        label.classList.add("block", "text-[25px]", "font-medium", "text-gray-900");
        label.textContent = `Subject ${index + 1}`;
        subjectDiv.appendChild(label);

        const gradeSelect = document.createElement("select");
        gradeSelect.id = `subject${index + 1}`;
        gradeSelect.classList.add(
            "block", "w-full", "rounded-md", "border-0", "py-1.5", 
            "text-gray-900", "shadow-sm", "ring-1", "ring-inset", 
            "ring-gray-300", "focus:ring-2", "focus:ring-indigo-600"
        );

        Object.keys(gradeValues).forEach(grade => {
            const option = document.createElement("option");
            option.value = grade;
            option.textContent = grade;
            gradeSelect.appendChild(option);
        });

        subjectDiv.appendChild(gradeSelect);
        document.getElementById("subjectInputs").appendChild(subjectDiv);
    });

    // Generate lab input fields
    labs.forEach((credit, index) => {
        const labDiv = document.createElement("div");
        labDiv.classList.add("lab-input", "sm:col-span-3");

        const label = document.createElement("label");
        label.classList.add("block", "text-[25px]", "font-medium", "text-gray-900");
        label.textContent = `Lab ${index + 1}`;
        labDiv.appendChild(label);

        const gradeSelect = document.createElement("select");
        gradeSelect.id = `lab${index + 1}`;
        gradeSelect.classList.add(
            "block", "w-full", "rounded-md", "border-0", "py-1.5", 
            "text-gray-900", "shadow-sm", "ring-1", "ring-inset", 
            "ring-gray-300", "focus:ring-2", "focus:ring-indigo-600"
        );

        Object.keys(gradeValues).forEach(grade => {
            const option = document.createElement("option");
            option.value = grade;
            option.textContent = grade;
            gradeSelect.appendChild(option);
        });

        labDiv.appendChild(gradeSelect);
        document.getElementById("subjectInputs").appendChild(labDiv);
    });

    // Add calculate button
    const calculateButton = document.createElement("button");
    calculateButton.textContent = "Calculate SGPA";
    calculateButton.type = "button";
    calculateButton.classList.add(
        "rounded-md", "bg-indigo-600", "px-3", "py-2", 
        "text-sm", "font-semibold", "text-white", "shadow-sm", 
        "hover:bg-indigo-500", "focus:ring-2", "focus:ring-indigo-600"
    );
    calculateButton.onclick = calculateSGPA; // Fix: assigning function as callback

    document.getElementById("subjectInputs").appendChild(calculateButton);
}

// Function to fetch credits based on branch and semester
function getSemesterCredits(branch, sem) {
    return credits[branch] && credits[branch][sem]
        ? credits[branch][sem]
        : [[], []];
}

// Function to calculate SGPA based on input values
function calculateSGPA() {
    const branch = document.getElementById("branch").value;
    const sem = `${document.getElementById("year").value}.${document.getElementById("sem").value}`;
    const semesterCredits = getSemesterCredits(branch, sem);
    const subjects = document.querySelectorAll(".subject-input select");
    const labs = document.querySelectorAll(".lab-input select");

    let totalCredits = 0;
    let totalGradePoints = 0;

    subjects.forEach((subjectSelect, index) => {
        const grade = subjectSelect.value;
        const gradePoint = gradeValues[grade];
        const credit = semesterCredits[0][index];

        if (gradePoint !== undefined && credit !== undefined) {
            totalCredits += credit;
            totalGradePoints += gradePoint * credit;
        }
    });

    labs.forEach((labSelect, index) => {
        const grade = labSelect.value;
        const gradePoint = gradeValues[grade];
        const credit = semesterCredits[1][index];

        if (gradePoint !== undefined && credit !== undefined) {
            totalCredits += credit;
            totalGradePoints += gradePoint * credit;
        }
    });

    const sgpa = totalCredits > 0 ? (totalGradePoints / totalCredits) : 0;
    document.getElementById("sgpaDisplay").textContent = `SGPA: ${sgpa.toFixed(2)}`;
}


function generateInputFields() {
    const container = document.getElementById('inputFieldsContainer');
    const numFields = parseInt(document.getElementById('numSelect').value);
    container.innerHTML = ''; // Clear previous inputs

    for (let i = 1; i <= numFields; i++) {
      const inputDiv = document.createElement('div');
      inputDiv.innerHTML = `
        <label class="block text-sm font-medium text-gray-700">SGPA of Semester ${i}</label>
        <input type="number" id="marks${i}" 
          class="block w-full p-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" 
          placeholder="(0-10)" 
          oninput="validateInput(this)" required>
      `;
      container.appendChild(inputDiv);
    }
  }

  function validateInput(input) {
    const value = parseFloat(input.value);
    if (isNaN(value) || value < 0 || value > 10) {
      input.classList.add('border-red-500');
      input.classList.remove('border-gray-300');
    } else {
      input.classList.remove('border-red-500');
      input.classList.add('border-gray-300');
    }
  }

  function calculateCGPA() {
    const numFields = parseInt(document.getElementById('numSelect').value);
    let total = 0;
    let count = 0;
    let valid = true;

    for (let i = 1; i <= numFields; i++) {
      const marksInput = document.getElementById(`marks${i}`);
      const marks = parseFloat(marksInput.value);

      if (isNaN(marks) || marks < 0 || marks > 10) {
        marksInput.classList.add('border-red-500');
        valid = false;
      } else {
        total += marks;
        count++;
      }
    }

    if (valid && count > 0) {
      const cgpa = (total / count).toFixed(2);
      document.getElementById('result').innerText = `CGPA: ${cgpa}`;
    } else {
      document.getElementById('result').innerText = 'Please correct invalid inputs.';
    }
  }
