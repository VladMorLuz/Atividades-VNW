const pets = [
    {
        name: "Scooby",
        description: "Scooby é um cão leal e protetor. Ama crianças e é muito obediente. Precisa de espaço para correr e brincar. Ideal para famílias ativas.",
        image: "./assets/scooby.png"
    },
    {
        name: "Pantera",
        description: "Pantera é uma gata misteriosa e brincalhona. Ela adora caçar brinquedos e se aninhar com seus donos. Perfeita para uma família que lhe dê muito amor e atenção.",
        image: "./assets/pantera.png"
    },
    {
        name: "Thor",
        description: "Thor é um cão cheio de energia e lealdade. Adora brincar e estar perto da família, sempre demonstrando carinho e proteção. Procura um lar onde possa receber amor.",
        image: "./assets/thor.png"
    },
    {
        name: "Garfield",
        description: "Garfield é um gato independente, mas carinhoso. Gosta de explorar e tirar cochilos. Ideal para quem quer um companheiro amável.",
        image: "./assets/garfield.png"
    }
];

const petNameElement = document.getElementById("pet-name");
const petDescElement = document.getElementById("pet-description");
const petImgElement = document.getElementById("pet-img");
const thumbButtons = document.querySelectorAll(".thumb");

function changePet(index) {
    const selectedPet = pets[index];
    
    petNameElement.innerText = selectedPet.name;
    petDescElement.innerText = selectedPet.description;
    petImgElement.src = selectedPet.image;
    petImgElement.alt = `Foto do ${selectedPet.name}`;

    thumbButtons.forEach(btn => btn.classList.remove("active"));
    thumbButtons[index].classList.add("active");
}

changePet(0);