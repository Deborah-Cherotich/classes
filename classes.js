
// 1) Create a Car class or function constructor that has the following properties: a. make (string): The make of the car, e.g., "Toyota". 
// b. model (string): The model of the car, e.g., "Camry". 
// c. year (number): The year the car was manufactured, e.g., 2020. 
// d. isAvailable (boolean): Indicates if the car is currently available for rent. 
// The Car class or function constructor should also have a method called toggleAvailability that changes the isAvailable property to its opposite value (true to false, false to true) 
class Car {
    constructor(make, model, year, isAvailable) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.isAvailable = isAvailable;
    }
    toggleAvailability() {
        this.isAvailable = !this.isAvailable;
    }
}
const harrier= new Car('Harrier', 'v8', 2019, 'true')
console.log({harrier});

// Create a Rental class or function constructor that has the following properties: ● car (Car object): The car that has been rented. 
// ● renterName (string): The name of the person who rented the car. ● rentalStartDate (Date object): The start date of the rental period. ● rentalEndDate (Date object): The end date of the rental period. 
// The Rental class or function constructor should also have a method called calculateRentalDuration that returns the rental duration in days. 


class Rental {
    constructor(car, renterName, rentalStartDate, rentalEndDate) {
        this.car = car;
        this.renterName = renterName;
        this.rentalStartDate = new Date(rentalStartDate);
        this.rentalEndDate = new Date(rentalEndDate);
    }
    calculateRentalDuration() {
        const  differenceInMilliseconds = this.rentalEndDate - this.rentalStartDate;
        const differenceInDays = differenceInMilliseconds / (1000 * 60 * 60 * 24);
        return differenceInDays;
    }
}
const Audi = new Rental ('Subaru', 'Deborah', "2024-4-25", "2024-8-9")
console.log({Audi});



//2 question class

// You are building a simple quiz app that contains multiple-choice questions. 
// Your task is to create
//  two JavaScript classes: Question and Quiz. The Question class will 
//  represent individual questions, and the Quiz class will manage a collection 
//  of questions and the user's progress. 

class question{
    constructor(text, options, correctAnswer){
        this.text = text;
        this.option = option;
        this.correctAnswer = correctAnswer;
    }
    checkAnswer(answer){
        if(answer != this.correctAnswer ){
            return false;
        }
    }
}

class quiz{
    constructor(){
        this.questions = ["a","b","c","d","e"];
        this.cureentQuestionIndex=(3);
        this.score = (0);
    }
    addQuestion(quiz){
        this.questions.push(quiz)
    }
    nextQuestion(){
        this.cureentQuestionIndex++;
    }
    submitAnswer(answer){
        const currentQuestion= this.questions
        if(currentQuestion.checkAnswer(answer)){
            answer++
            console.log(currentQuestion);
        }
        else{
            console.log("try again");
        }
        return answer
    }
    
    
}
