//: Playground - noun: a place where people can play

import UIKit

// Conditionals
let someBoolean = false
if (someBoolean == true) {
    print("Some boolean is true!")
}
else {
    print ("Some boolean is false")
}

// Guard statements
func getSomeOptionalValue() -> AnyObject? {
    return nil
}
//guard let someValue = getSomeOptionalValue() else {
//    print ("some value was null!")
//    throw  // guard statements cannot fall through
//}

//guard let someValue = getSomeOptionalValue() as? AnyObject else {
//    "hmmm"
//}

// Casting
class SomeObject: NSObject {}
class SomeSubClass: SomeObject {}
func getSomething() -> SomeObject {
    return SomeSubClass()
}
let someSubClassInstance = getSomething() as! SomeSubClass
func maybeSomething() -> SomeObject? {
    return nil
}
let someSubClassInstanceOrNil = maybeSomething() as? SomeSubClass

// ?? syntax
let something: String? = nil
let newthing = something ?? "nothing there!"

// Structs
struct MyStruct {
    static let structMember = "declared a lot like a class member"
    
    let instanceMember: String
    
    subscript(index: Int) -> String {
        return "cool overridable feature \(index)"
    }
}
MyStruct(instanceMember: "implicit init")

// switch statements
struct OptionsStruct {
    static let OptionOne = "1"
    static let OptionTwo = "2"
    static let OptionThree = "3"
}

func switchItUp(structVal: String) {
    switch(structVal) {
    case OptionsStruct.OptionOne:
        print("one")
    case OptionsStruct.OptionTwo:
        print("two")
    case OptionsStruct.OptionThree:
        print("three")
    default:
        print("default")
    }
}
switchItUp(structVal: OptionsStruct.OptionOne)

// inheritance
