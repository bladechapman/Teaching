//import Cocoa

// Begin Lesson 1

var str = "Hello, playground"

print("This is a test")

// variables can change after being set
var myVariable = 42

// constants cannot change after being set
let myConstant = "constant"

let anotherConstant = 0; var anotherVariable = "Hello World"


// Optionals
// Optionals are denoted by a ?
// Options either contain a value, or contain nothing (nil)
var someOptional: String? = "some optional"

if someOptional != nil {
    let unwrappedValue = someOptional!
    print(unwrappedValue)
}
else {
    print("No value!")
}

// // Careful! Unwrapping a nil-ed optional using ! results in an exception
//someOptional = nil
//let unwrappedValue = someOptional!
//print(unwrappedValue)


// Array
var shoppingList = ["catfish", "water", "lemons"]
shoppingList[1] = "bottle of water"
print(shoppingList)

let immutableShoppingList = ["apples", "oranges", "bananas"]
//immutableShoppingList[1] = "tangerines"
print(immutableShoppingList)


var arraysMustBeTyped = Array<String>();
//arraysMustBeTyped.append(1)
print(arraysMustBeTyped)



// Dictionaries
var occupations = [
    "Blade": "Apple Engineer",
    "Angela": "Medical Student"
]
occupations["Connor"] = "Menlo Student"
print(occupations["Connor"]!)

let immutableOccupations = [
    "Blade": "Apple Engineer",
    "Angela": "Medical Student",
]
//immutableOccupations["Connor"] = "Menlo Student"

// Like arrays, dictionaries must be typed
var emptyDictionary = Dictionary<String, String>()



// Control flow
let someNumber: Int? = 7
if let unwrappedNumber = someNumber, unwrappedNumber > 3 {
    print("Number is non-nil and greater than 3")
}

let testArray = ["a", "b", "c", "d", "e"]
for value in testArray {
    print(value)
}
print("---")
for value in 1...5 {
    print(value)
}
print("---")
for value in 0..<testArray.count {
    print(testArray[value])
}
print("---")

let testDict = ["one": 1, "two": 2]
for (key, value) in testDict {
    print(String(key) + ": " + String(value))
}

// End Lesson 1


// Begin Lesson 2

// Functions
func greet(name: String, day: String) {
    print("Hello \(name), today is \(day)")
    return
}
greet(name: "Connor", day: "Monday")

func greet2(name: String, day: String) -> String {
    return "Hello \(name), today is \(day)"
}
print(greet2(name: "Connor", day: "Monday"))

// Like in JS, functions are first class objects
func makeIncrementer() -> ((Int) -> Int) {
    func addOne(number: Int) -> Int {
        return 1 + number
    }
    return addOne
}
let incrementer = makeIncrementer()
print(incrementer(3))

// Structs
struct NamesTable {
    let names: [String]
    
    func structFunction() -> String {
        return "Hello World!"
    }
    
    func getNameAtIndex(index: Int) -> String? {
        if index >= 0 && index < names.count {
            return names[index]
        }
        else {
            return nil
        }
    }
}
let namesTable = NamesTable(names: ["Me", "Them"])
let name = namesTable.names[0]
print(name)
print(namesTable.structFunction())
print(namesTable.getNameAtIndex(index: 0)!)



// Classes

// classes can be internal, public, or private
public class Shape {
    init() {
        print("Initializing a shape!")
    }
    
    public func getArea() -> Int {
        return 0
    }
    
}

// End Lesson 2
class Rect: Shape {
    var sideLength: Int = 1
    
    init(sideLength: Int) {
        self.sideLength = sideLength
        super.init()
    }
    
    override func getArea() -> Int {
        return self.sideLength * self.sideLength
    }
}

// Enums
enum MyEnum {
    case Me
    case You
}
print(MyEnum.Me)
print(MyEnum.You)

enum MyEnumWithValues {
    case Me
    case You(name: String)
}
print(MyEnumWithValues.You(name: "Connor"))
