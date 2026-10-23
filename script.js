const classes = [
    {
        id: "gentle",
        description: "Gentle Yoga is great for beginners.  Simple poses designed to get you relaxed and build towards more advanced practice."
    },
    {
        id: "vinyasa",
        description: "A dynamic style of yoga that links continuous physical postures (asanas) with the breath in a flowing sequence."
    },
    {
        id: "restorative",
        description: "A gentle, meditative, and low-energy style of yoga that focuses on deep physical, mental, and emotional relaxation."
    }
];
const classChoice = document.getElementById("class-choice");
const classDescription = document.getElementById("class-description");

function updateClassDescription() {
    const selectedClass = classes.find(function (yogaClass) {
        return yogaClass.id === classChoice.value;
    });

    localStorage.setItem("preferredClass", classChoice.value);
    if (selectedClass) {
        classDescription.textContent = selectedClass.description;
    } else {
        classDescription.textContent = "Select a class to see its description.";
    }
}

classChoice.addEventListener("change", updateClassDescription);

const savedClass = localStorage.getItem("preferredClass");

if (savedClass !== null) {
    classChoice.value = savedClass;
    updateClassDescription();
}