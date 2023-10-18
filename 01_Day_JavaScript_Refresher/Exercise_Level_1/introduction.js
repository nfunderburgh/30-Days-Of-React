

//1.Declare an empty array
const arr = Array()
console.log(arr) // []

//2.Declare an array with more than 5 number of elements
const numList = [1,2,3,4,5,6,7]
console.log(numList)

//3.Find the length of your array
console.log(numList.length)

//4.Get the first item, the middle item and the last item of the array
console.log("first = " + numList[0] + ", middle = " + numList[3] + ", last = " + numList[numList.length-1])

//5.Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
const mixedDataTypes = [1, "2", 3, "4", 5, 6.1, 7]
console.log(mixedDataTypes.length)

//6.Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
const itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]
console.log(itCompanies)

//7.Print the array using console.log()
console.log(itCompanies)

//8.Print the number of companies in the array
console.log(itCompanies.length)

//9.Print the first company, middle and last company
console.log("first = " + itCompanies[0] + ", middle = " + itCompanies[3] + ", last = " + itCompanies[itCompanies.length-1])

//10.Print out each company
console.log(itCompanies[0])
console.log(itCompanies[1])
console.log(itCompanies[2])
console.log(itCompanies[3])
console.log(itCompanies[4])
console.log(itCompanies[5])
console.log(itCompanies[6])

//11.Change each company name to uppercase one by one and print them out
console.log(itCompanies[0].toUpperCase())
console.log(itCompanies[1].toUpperCase())
console.log(itCompanies[2].toUpperCase())
console.log(itCompanies[3].toUpperCase())
console.log(itCompanies[4].toUpperCase())
console.log(itCompanies[5].toUpperCase())
console.log(itCompanies[6].toUpperCase())

//12.Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
console.log(itCompanies[0] + ", " + itCompanies[1] + ", " + itCompanies[2] + ", " + itCompanies[3] + ", " + itCompanies[4] + ", " + itCompanies[5] + " and " + itCompanies[6] + " are big IT companies")

//13.Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
var fakeCompany = "Tesla"
if(itCompanies.lastIndexOf(fakeCompany) == -1){
    console.log("Company is not found")
}
else{
    console.log(fakeCompany)
}

var realCompany = "Facebook"
if(itCompanies.lastIndexOf(realCompany) == -1){
    console.log("Company is not found")
}
else{
    console.log(realCompany)
}

//14.Filter out companies which have more than one 'o' without the filter method
const zeroContaineCompany = []
for(let i=0; i<itCompanies.length; i++){
    if(itCompanies[i].includes('o')){
        const zeroCount = itCompanies[i].toLowerCase().split('');
        let count = 0
        for(let j=0; j< zeroCount.length; j++){
            if( zeroCount[j] === 'o'){
                count += 1
            }
        }
        if(count>1){
            zeroContaineCompany.push(itCompanies[i])
        }
    }
}
console.log(zeroContaineCompany)

//15.Sort the array using sort() method
itCompanies.sort()
console.log(itCompanies)

//16.Reverse the array using reverse() method
itCompanies.reverse()
console.log(itCompanies)