eclipse photon: https://www.eclipse.org/photon/
uses material sourced from https://cs125.cs.illinois.edu

# AP CS Prep Lesson 1, Basic Java and Introduction to Object Oriented Programming (OOP)

## Java Review

Before we jump into the basics of object oriented programming, let’s do a little Java programming review to warm up.

Java is a programming language designed around things called "classes" (more on this later), but for now, the main thing you need to know is that all the code you write will be executed within clases.Here's a quick example to demonstrate.

```java
public class MyFirstClass {
    public static void main (String[] args) {
        // your code here
    }
}
```

### Class Declarations

There’s a lot going on in there! Let's break it down a bit:

First is the class declaration
```java
public class MyFirstClass {...
```

The `class` keyword is what we use to declare a new class. These declarations must exist at the "top level" of a file, which essentially means that these declarations cannot be nested within any curly braces. For example, this is invalid:
```java
public class MyFirstClass {
    class MySecondClass {...}   // doesn’t work!
}
```

Another important thing to note is that `public` keyword. That just means that the class can be used elsewhere in your project (for example, a different file). In Java, there can only be one *public* class per file, and that public class must have the same name as the class name. You can still declare multiple classes per file, but only one can be public. Here are some examples.
```java
// filename: MyFirstClass.java
// This works fine!

public class MyFirstClass {
    ...
}

class MySecondClass {

}
```

```java
// filename: MyFirstClass.java
// This doesn’t work
public class MyFirstClass {

}

public class MySecondClass {

}
```


### Function Declarations

Next let’s take a look at what’s inside that class.
```java
...
    public static void main(String[] args) {
        // your code here
    }
...
```

First, there’s the `public` keyword. This, like in the class declaration, is used to tell the compiler that we can use this function elsewhere in our project. The first word in a function declaration must always be one of `public`, `private`, or `protected`, what are different levels of permissions for how the function can be used.

Next, there's the `static` keyword. This pertains to whether or not this function exists as part of the class, or part of the instance of a class. More on this later, but for now, just know that the second word in a function declaration can *optionally* be static. We can leave the static keyword out and the program will still be valid, although the absence of the static means the program will behave differently.
```java
...
// These two are both valid function declarations, but they do *different* things
public static void someFunction() {}
public void someFunction() {}
...
```

Now let's take a look at the `void` word. This is the return type of the function, which we must declare explicitly. `void` just means that this function doesn’t return anything. This word can be any valid type (e.g. `int`, `String`, or even a class that you declare!).

Then there’s `main`. This is just the name of our function. Within the public class of a file, we can declare a special function called `main` which will be run when we execute that file. Think of this as the "entry point" for our program. The word `main` is what distinguishes this entry point. We can create more functions with different names, they just won’t be called by our program when we press run unless we explicitly tell our program to run it in `main`.

Finally, there's `(String[] args)`. These are the arguments of the function, or what the function takes in to do its work. We can take in any number of arguments. In this case we just take in one argument called `args` of type `String[]` (read as "string array"). Here are some more examples of function declarations just to get more familiar with the syntax.


```java
public static int addTwoNumbers(int first, int second) {...}
public void toString() {...}
public String changeName(String newName) {}
```


## Introduction to Object Oriented Programming (OOP)
One of the great questions in Computer Science is "how do we write software effectively?" where "effectively" is defined as bug-free, understandable, and flexible enough for future changes. One (and I stress *just one*) of the approaches to answering this question is OOP. OOP allows us to construct our programs in a way that is easy to understand as they grow in size. The primary tools OOP leverage are "objects" and "inheritance". Objects are simply collections of data and functions that are bundled together in a way that makes sense. The classes we’ve discussed above are "blueprints" for creating these objects (through the `new Classname(arg1, arg2, ...)` syntax.). Objects in OOP are tied together through inheritance. As the name implies, one object can "inherit" attributes from another. This allows us to find bugs quickly, make changes easily, and build larger projects. Let's take a look at some examples to see how objects and inheritance works.

### The Concept of Classes 

```java
class Car {
    public String color;

    Car(String color) {
        this.color = color;
    }
}

public class Playground {
    public static void main(String[] unused) {
        Car myCar = new Car("Red");
    }
}
```

Above I've created a blueprint for a Car object. This car object has a color `public String color` and a _constructor_, which is a special function inside a class that is run when we create a new _instance_ of that class. Think of the constructor as the entry point for a _class_ similar to how `main` is the entry point for a program. Here you can also see that we’ve used the `new` syntax inside `main` to invoke the Car’s constructor. Let’s see another example that leverages inheritance.

### Inheritance


```
class SportsCar extends Car {
    public int topSpeed;

    SportsCar(int topSpeed) {
        super("Red");
        this.topSpeed = topSpeed;
    }
}

public class Playground {
    public static void main(String[] unused) {
        SportsCar myCar = new SportsCar(150);
    }
}
```

Now I've created a new blueprint for a more specific kind of car, a sports car. I do this by using the `extends` keyword in the class declaration. In Java, each class can only have one "parent". In this case, the `SportsCar` has the `Car` as its parent, and therefore inherits attributes of the `Car`, such as color. Also notice that in the constructor for the SportsCar, we are invoking a special function called `super`. This tells Java to invoke the constructor of the current class’ parent. In this case, we are invoking the constructor of `Car` with the color `"Red"` from the `SportsCar`'s constructor. This effectively means that all sports cars are red.


### Access Through `public`, `private`, and `protected`

Finally, let’s talk about the `public` keyword that we’ve been using a lot lately. `public`, and its siblings `private` and `static` are used to tell Java who has permissions to use something. `public` means that the thing can be used anywhere in the project. On the other hand, `private` means that the thing can only be used within the class where the thing is declared. Let’s see an example.

```java
public class MyFirstClass {
    private int secretNumber = 42;
}

public class Playground {
    public static void main(String[] args) {
        MyFirstClass someInstance = new MyFirstClass();

        System.out.println(someInstance.secretNumber);   // this doesn’t work!
    }
}
```

The reason the above code doesn’t work is because I’ve declared `secretNumber` as private. This means that I can only use that number within the `MyFirstClass` class. Let’s see an example of how we can safely expose that secret number.


```java
public class MyFirstClass {
    private int secretNumber = 42;

    public void printMySecretNumber(boolean accessAllowed) {
        if (accessAllowed) System.out.println("My secret number is " + this.secretNumber);
        else System.out.println("You’re not allowed!");
    }
}

public class Playground {
    public static void main(String[] args) {
        MyFirstClass someInstance = new MyFirstClass();

        System.out.println(someInstance.secretNumber);      // this doesn’t work!
        someInstance.printMySecretNumber(true)              // but this does work!
    }
}
```

There’s also the `protected` keyword, which lies somewhere in between `public` and `private`. `protected` means that the thing can only be used if the thing that’s trying to use it is within the inheritance tree. For example, if `SportsCar` inherits from `Car`, and `Car` has a protected attribute, `SportsCar` will be allowed to use that protected attribute. If another thing outside the inheritance tree, like `Animal` tries to use `Car`'s protected attribute, an exception will be thrown
