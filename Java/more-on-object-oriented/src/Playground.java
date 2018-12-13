
public class Playground {

	public static void main(String[] args) {
		
//		/**
//		 * --- 1 ---
//		 * Example code to get started on some of the challenges.
//		 */
//		
//		int[] exampleArray = new int[3];
//		int[] exampleArray2 = {1, 2, 3};
//		
//		String someCharacters = "abcdefg";
//		boolean stringMembership = someCharacters.indexOf('d') != -1;
//		char[] characterArray = someCharacters.toCharArray();
		
	
	
		/**
		 * --- 2 ---
		 * Let's talk about polymorphism and casting
		 */
		Animal testAnimal = new Animal("Todd");
//		System.out.println(testAnimal);		// -- what will this print out? Will this even work?
		
		Cat testCat = new Cat("Max", "Tabby");
//		System.out.println(testCat);		// -- what will this print out? Will this even work?
		
		Dog testDog = new Dog("Gary", "Greyhound");
//		System.out.println(testDog);
		
		
//		// What if I want an array with both animals and cats? or cats and dogs?
//		Animal[] arrayOfAnimals = new Animal[3];
//		arrayOfAnimals[0] = (Animal) testCat;
//		arrayOfAnimals[1] = (Animal) testDog;
//		arrayOfAnimals[2] = testAnimal;
//		
//		testCat.speak();
//		Cat testCat2 = (Cat) arrayOfAnimals[0];
//		testCat2.speak();
//		
//		Animal someAnimal3 = new Cat("James", "Tabby");
		
		
		
//		double myDouble = 2.5;
//		int myInt = (int) myDouble;
//		System.out.println(myInt);
//		System.out.println((double)myInt);
	
	
		Animal[] arrayOfAnimals = new Animal[3];
		arrayOfAnimals[0] = (Animal) testCat;
		arrayOfAnimals[1] = (Animal) testDog;
		arrayOfAnimals[2] = testAnimal;
		
		for (int i = 0; i < arrayOfAnimals.length; i++) {
			System.out.println(arrayOfAnimals[i].toString());
//			arrayOfAnimals[i].speak();
		}
	}

}


class Animal {
	
	protected String name;
	
	Animal(String name) {
		this.name = name;
	}
	
	public String toString() {
		return "The name of the animal is " + this.name;
	}
	
}

class Cat extends Animal {
	
	private String type;
	
	Cat(String name, String type) {
		super(name);
		
		this.type = type;
	}
	
	public String toString() {
		return "This is a " + this.type + " cat named " + this.name;
	}
	
	public void speak() {
		System.out.println("meow");
	}
	
}

class Dog extends Animal {
	
	private String type;
	
	Dog(String name, String type) {
		super(name);
		
		this.type = type;
	}
	
	public String toString() {
		return "This is a " + this.type + " dog named " + this.name;
	}
	
}