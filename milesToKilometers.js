function MilesToKilometer(miles){
    const kilometere = miles*1.60934;
    return kilometere;
}
const nanirBari = 5;
const naniBarikilo = MilesToKilometer(nanirBari);
console.log (naniBarikilo);