// Quiz Questions
const categories = {
    "General Knowledge": [
        { question: "1).What is the capital of France?", options: ["Berlin", "Madrid", "Paris", "Rome"], answer: "Paris" },

        { question: "2).Who wrote 'To Kill a Mockingbird'?", options: ["Harper Lee", "J.K. Rowling", "Ernest Hemingway", "Jane Austen"], answer: "Harper Lee" },
        
        { question: "3).What is the largest planet in our solar system?", options: ["Mars", "Jupiter", "Saturn", "Venus"], answer: "Jupiter" },

        { question: "4).How many days are there in a week?", options: ["5", "6", "7", "8"], answer: "7" },

        { question: "5).What is the opposite of hot?", options: ["Cold", "Warm", "Wet", "Dry"], answer: "Cold" },

        { question: "6).Which animal is known as the King of the Jungle?", options: ["Elephant", "Zebra", "Tiger", "Lion"], answer: "Lion" },

        { question: "7).What is the largest ocean on Earth?", options: ["Arctic Ocean", "Pacific Ocean", "Atlantic Ocean", "Indian Ocean"], answer: "Pacific Ocean" },

        { question: "8).What is the currency of the United States?", options: ["Euro", "Pound", "Dollar", "Yen"], answer: "Dollar" },

        { question: "9).How many sides does a square have?", options: ["3", "4", "5", "6"], answer: "4" },

        
        { question: "10).Which planet is known as the Red Planet?", options: ["Mercury", "Venus", "Mars", "Jupiter"], answer: "Mars" },

        { question: "11).What is the largest land mammal on Earth?", options: ["Elephant", "Giraffe", "Rhino", "Hippopotamus"], answer: "Elephant" },

        { question: "12).What is the capital city of Australia?", options: ["Sydney", "Melbourne", "Canberra", "Brisbane"], answer: "Canberra" },

        { question: "13).What is the chemical symbol for water?", options: ["H2O", "CO2", "O2", "N2"], answer: "H2O" },

        { question: "14).Which country is known as the Land of the Rising Sun?", options: ["Japan", "Korea", "India", "China"], answer: "Japan" },

        { question: "15).What is the name of the largest desert in the world?", options: ["Gobi Desert", "Sahara Desert", "Kalahari Desert", "Atacama Desert"], answer: "Sahara Desert" }
   
      // Add more if you want up to 15 for the perfect15 animation
    ],
    "Technology": [
      
        { question: "1).What does CPU stand for?", options: ["Central Processing Unit", "Computer Personal Unit", "Central Personal Unit", "Central Process Unit"], answer: "Central Processing Unit" },
  
        { question: "2).What is the primary language used for web development?", options: ["Python", "Java", "JavaScript", "C++"], answer: "JavaScript" },
    
        { question: "3).What does HTML stand for?", options: ["Hyper Transfer Markup Language", "Hyper Text Markup Language", "High Tech Modern Language", "Hyperlink and Text Markup Language"], answer: "Hyper Text Markup Language" },
    
        { question: "4).Which company developed the first graphical web browser?", options: ["Microsoft", "Netscape", "CERN", "Mosaic"], answer: "Mosaic" },
    
        { question: "5).Who is known as the father of the computer?", options: ["Alan Turing", "Charles Babbage", "Bill Gates", "Steve Jobs"], answer: "Charles Babbage" },
    
        { question: "6).Which scientist developed the theory of relativity?", options: ["Isaac Newton", "Albert Einstein", "Nikola Tesla", "Galileo Galilei"], answer: "Albert Einstein" },

        { question: "7).What is the boiling point of water at sea level?", options: ["100°C", "90°C", "110°C", "120°C"], answer: "100°C" },
        
        { question: "8).Which company created the Android operating system?", options: ["Samsung", "Apple", "Google", "Microsoft"], answer: "Google" },
    
        { question: "9).What is the primary function of a router?", options: ["Store data", "Process graphics", "Direct network traffic", "Encrypt passwords"], answer: "Direct network traffic" },
    
        { question: "10).Which of the following is NOT a programming language?", options: ["Swift", "Ruby", "Linux", "Kotlin"], answer: "Linux" },
    
        { question: "11).What does 'IoT' stand for in technology?", options: ["Internet of Technology", "Internet of Things", "Integration of Tools", "Interface of Transmission"], answer: "Internet of Things" },
    
        { question: "12).Which company developed the Windows operating system?", options: ["Apple", "Microsoft", "IBM", "Google"], answer: "Microsoft" },
    
        { question: "13).Which of the following is a cloud computing service?", options: ["Google Drive", "Photoshop", "VLC Media Player", "CPU"], answer: "Google Drive" },
    
        { question: "14).What is the primary function of a firewall in cybersecurity?", options: ["Speed up the internet", "Block unauthorized access", "Store passwords", "Optimize system performance"], answer: "Block unauthorized access" },
    
        { question: "15).Which company is known for developing the first smartphone?", options: ["Apple", "IBM", "Nokia", "Samsung"], answer: "IBM" }
    
],
"Science": [
    { question: "1).What is the chemical symbol for water?", options: ["H2O", "CO2", "O2", "NaCl"], answer: "H2O" },

    { question: "2).What planet is known as the Red Planet?", options: ["Earth", "Mars", "Jupiter", "Venus"], answer: "Mars" },

    { question: "3).What gas do plants absorb from the atmosphere?", options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"], answer: "Carbon Dioxide" },

    { question: "4).What is the powerhouse of the cell?", options: ["Nucleus", "Mitochondria", "Ribosome", "Chloroplast"], answer: "Mitochondria" },

    { question: "5).What force keeps us on the ground?", options: ["Magnetism", "Gravity", "Friction", "Inertia"], answer: "Gravity" },

    { question: "6).Which element has the atomic number 1?", options: ["Oxygen", "Carbon", "Hydrogen", "Helium"], answer: "Hydrogen" },

    { question: "7).What part of the human body produces insulin?", options: ["Liver", "Pancreas", "Heart", "Lungs"], answer: "Pancreas" },

    { question: "8).Which gas is most abundant in Earth's atmosphere?", options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Argon"], answer: "Nitrogen" },

    { question: "9).What is the hardest natural substance on Earth?", options: ["Gold", "Iron", "Diamond", "Platinum"], answer: "Diamond" },

    { question: "10).Which planet has the most moons?", options: ["Earth", "Jupiter", "Saturn", "Neptune"], answer: "Saturn" },

    { question: "11).Which organ in the human body is responsible for pumping blood?", options: ["Lungs", "Liver", "Brain", "Heart"], answer: "Heart" },

    { question: "12).What type of energy is produced by the Sun?", options: ["Kinetic", "Nuclear", "Solar", "Thermal"], answer: "Solar" },

    { question: "13).What is the chemical symbol for gold?", options: ["Ag", "Au", "Pb", "Fe"], answer: "Au" },

    { question: "14).What is the process by which plants make their food?", options: ["Respiration", "Photosynthesis", "Digestion", "Fermentation"], answer: "Photosynthesis" },

   { question: "15).Which part of the atom carries a positive charge?", options: ["Electron", "Neutron", "Proton", "Nucleus"], answer: "Proton" }


],  "Car": [
            
    { question: "1).Which company produces the Mustang?", options: ["Chevrolet", "Ford", "Dodge", "Toyota"], answer: "Ford" },

    { question: "2).What does 'SUV' stand for?", options: ["Speed Utility Vehicle", "Sports Ultimate Vehicle", "Sport Utility Vehicle", "Super Urban Vehicle"], answer: "Sport Utility Vehicle" },

    { question: "3).Which country is home to the car brand Ferrari?", options: ["Germany", "Italy", "USA", "France"], answer: "Italy" },

    { question: "4).What is the top-selling electric car brand?", options: ["Nissan", "BMW", "Tesla", "Audi"], answer: "Tesla" },

    { question: "5).Which car brand has a logo featuring a charging bull?", options: ["Ferrari", "Lamborghini", "Maserati", "Porsche"], answer: "Lamborghini" },

    { question: "6).What is the fastest production car in the world as of 2024?", options: ["Bugatti Chiron Super Sport 300+", "Koenigsegg Jesko Absolut", "Tesla Roadster", "Hennessey Venom F5"], answer: "Koenigsegg Jesko Absolut" },

    { question: "7).Which German brand is known for its slogan 'The Ultimate Driving Machine'?", options: ["Mercedes-Benz", "BMW", "Audi", "Volkswagen"], answer: "BMW" },

    { question: "8).What does ABS stand for in a car's braking system?", options: ["Advanced Braking System", "Anti-Lock Braking System", "Auto Brake System", "Automatic Braking Safety"], answer: "Anti-Lock Braking System" },

    { question: "9).Which car brand manufactures the 'Model S'?", options: ["Tesla", "Ford", "Toyota", "BMW"], answer: "Tesla" },

    { question: "10).Which Japanese car company produces the Supra?", options: ["Honda", "Mazda", "Subaru", "Toyota"], answer: "Toyota" },

    { question: "11).Which car is often called the 'People’s Car'?", options: ["Volkswagen Beetle", "Ford Model T", "Mini Cooper", "Toyota Corolla"], answer: "Volkswagen Beetle" },

    { question: "12).Which company produces the Challenger and Charger muscle cars?", options: ["Chevrolet", "Ford", "Dodge", "Pontiac"], answer: "Dodge" },

    { question: "13).What fuel type do most Formula 1 cars use?", options: ["Diesel", "Ethanol", "Unleaded Gasoline", "Hybrid Power"], answer: "Hybrid Power" },

    { question: "14).Which country is home to the car manufacturer Bugatti?", options: ["France", "Germany", "Italy", "USA"], answer: "France" },

    { question: "15).What is the most popular car color worldwide?", options: ["Black", "White", "Red", "Blue"], answer: "White" }

    
],
"Art": [

    { question: "1).Who painted the Mona Lisa?", options: ["Vincent van Gogh", "Leonardo da Vinci", "Pablo Picasso", "Claude Monet"], answer: "Leonardo da Vinci" },

    { question: "2).Which art movement is Salvador Dalí associated with?", options: ["Cubism", "Impressionism", "Surrealism", "Realism"], answer: "Surrealism" },

    { question: "3).What is the primary material used in watercolor painting?", options: ["Oil paint", "Acrylic paint", "Water-based pigments", "Charcoal"], answer: "Water-based pigments" },

    { question: "4).Which artist is known for painting 'The Starry Night'?", options: ["Claude Monet", "Vincent van Gogh", "Edvard Munch", "Michelangelo"], answer: "Vincent van Gogh" },

    { question: "5).Which country is famous for its ancient cave paintings in Lascaux?", options: ["France", "Spain", "Italy", "India"], answer: "France" },

    { question: "6).What is the term for a painting made on wet plaster?", options: ["Fresco", "Oil painting", "Etching", "Acrylic"], answer: "Fresco" },

    { question: "7).Which of the following is NOT a primary color?", options: ["Red", "Yellow", "Green", "Blue"], answer: "Green" },

    { question: "8).Who sculpted 'David'?", options: ["Donatello", "Michelangelo", "Auguste Rodin", "Gian Lorenzo Bernini"], answer: "Michelangelo" },

    { question: "9).Which modern art movement is known for using geometric shapes and bright colors?", options: ["Impressionism", "Cubism", "Abstract Expressionism", "Pop Art"], answer: "Cubism" },

    { question: "10).What is the technique of creating images using small dots of color called?", options: ["Pointillism", "Stippling", "Hatching", "Cross-hatching"], answer: "Pointillism" },

    { question: "11).Which artist is famous for painting 'The Persistence of Memory'?", options: ["Pablo Picasso", "Salvador Dalí", "Jackson Pollock", "Henri Matisse"], answer: "Salvador Dalí" },

    { question: "12).What type of art is Banksy known for?", options: ["Oil painting", "Graffiti and street art", "Sculpture", "Digital art"], answer: "Graffiti and street art" },

    { question: "13).Which Renaissance artist painted 'The Birth of Venus'?", options: ["Raphael", "Sandro Botticelli", "Titian", "Leonardo da Vinci"], answer: "Sandro Botticelli" },

    { question: "14).What is the term for a painting that depicts natural scenery?", options: ["Portrait", "Still Life", "Abstract", "Landscape"], answer: "Landscape" },
    
    { question: "15).Which artist is known for painting large-scale, colorful soup cans?", options: ["Jackson Pollock", "Andy Warhol", "Mark Rothko", "Keith Haring"], answer: "Andy Warhol" }

    
]
};
  // Home Screen
  const homeScreen = document.getElementById("home");
  const quizScreen = document.getElementById("quiz");
  
  // Score & Restart
  const scoreElement = document.getElementById("score");
  const restartButton = document.getElementById("restart-btn");
  
  // Category selection
  const categoryButtons = document.querySelectorAll(".category-btn");
  const categoryOutput = document.getElementById("category-output");
  
  // Quiz Elements
  const questionElement = document.getElementById("question");
  const optionsElement = document.getElementById("options");
  const nextButton = document.getElementById("next-btn");
  
  let currentCategory = [];
  let currentQuestionIndex = 0;
  let score = 0;
  let selectedAnswers = {};
  
  // Select a category
  categoryButtons.forEach(button => {
    button.addEventListener("click", function () {
      const selectedCategory = button.getAttribute("data-category");
      
  
      // Keep the same background for all categories
      // So no background change here
  
      currentCategory = categories[selectedCategory] || [];
  
      if (currentCategory.length > 0) {
        startQuiz();
      }
    });
  });
  
  // Start the quiz
  function startQuiz() {
    homeScreen.classList.add("hidden");
    quizScreen.classList.remove("hidden");
  
    currentQuestionIndex = 0;
    score = 0;
    selectedAnswers = {};
    loadQuestion();
  }
  
  // Load a question
  function loadQuestion() {
    if (currentQuestionIndex >= currentCategory.length) {
      showScore();
      return;
    }
  
    const currentQuestion = currentCategory[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    optionsElement.innerHTML = "";
  
    currentQuestion.options.forEach((option, index) => {
      const btn = document.createElement("button");
      btn.textContent = option;
      btn.classList.add("option");
      btn.addEventListener("click", () => selectAnswer(index));
      
      // Highlight previously selected answer if user goes back
      if (selectedAnswers[currentQuestionIndex] === index) {
        btn.classList.add("selected");
      }
  
      optionsElement.appendChild(btn);
    });
  
    nextButton.classList.remove("hidden");
    scoreElement.classList.add("hidden");
    restartButton.classList.add("hidden");
  }
  
  // When user selects an answer
  function selectAnswer(index) {
    selectedAnswers[currentQuestionIndex] = index;
  
    // Highlight selected option
    const optionButtons = document.querySelectorAll(".option");
    optionButtons.forEach((btn, i) => {
      btn.classList.toggle("selected", i === index);
    });
  }
  
  // Move to next question
  nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    loadQuestion();
  });
  
  // Show final score below question & option
  function showScore() {
    // Calculate final score
    score = 0;
    for (let i = 0; i < currentCategory.length; i++) {
      const correctAnswer = currentCategory[i].answer;
      const userChoiceIndex = selectedAnswers[i];
      if (currentCategory[i].options[userChoiceIndex] === correctAnswer) {
        score++;
      }
    }
    
  
    // Hide question area
    questionElement.textContent = "Quiz Finished!";
    optionsElement.innerHTML = "";
  
    // Show final score
    scoreElement.textContent = `Your Score: ${score} / ${currentCategory.length}`;
    scoreElement.classList.remove("hidden");
  
    // Show Restart button
    restartButton.classList.remove("hidden");
  
    // If score > 10 => add "congrats" animation
    if (score > 10) {
      scoreElement.classList.add("congrats");
    }
  
    // If score == 15 => add "perfect15" animation (requires 15 Qs)
    if (score === 15) {
      scoreElement.classList.add("perfect15");
      scoreElement.textContent += " | 15/15 Perfect Score!";
    }
  
    // If user got all correct but not necessarily 15
    if (score === currentCategory.length) {
      scoreElement.classList.add("perfect");
      scoreElement.textContent += " | All Correct!";
    }
  
    // Hide the Next button
    nextButton.classList.add("hidden");
  }
  
  // Restart Quiz
  restartButton.addEventListener("click", () => {
    location.reload();
  });
  