function animalCount(miles) {
    const animalInFirst10Miles = 10;
    const animalInSecond10Miles = 50;
    const animalInRestMiles = 100;
    if (miles <= 10) {
        const count = miles * animalInFirst10Miles;
        return count;
    }
    else if (miles <= 20) {
        const firstDensityAnimal = 10 * animalInFirst10Miles;
        const restMiles = miles - 10;
        const secondDensityAnimal = restMiles * animalInSecond10Miles;
        const totalAminals = firstDensityAnimal + secondDensityAnimal;
        return totalAminals;
    }
    else {
        const firstDensityAnimal = 10 * animalInFirst10Miles;
        const secondDensityAnimal = 10 * animalInSecond10Miles;
        const restMiles = miles - 20;
        const restDensityAnimal = restMiles * animalInRestMiles;
        const totalAminals = firstDensityAnimal + secondDensityAnimal + restDensityAnimal;
        return totalAminals;
    }
}
const animal = animalCount(75);
console.log(animal);