
public class Playground {

	public static void main(String[] args) {
		
		/**
		 * --- 1 ---
		 * Example code to get started on some of the challenges.
		 */
		
		int[] exampleArray = new int[3];
		int[] exampleArray2 = {1, 2, 3};
		
		String someCharacters = "abcdefg";
		boolean stringMembership = someCharacters.indexOf('d') != -1;
		char[] characterArray = someCharacters.toCharArray();
		
	
	
		/**
		 * --- 2 ---
		 * Let's talk about polymorphism and casting
		 */
		Animal testAnimal = new Animal("Todd");
		System.out.println(testAnimal);		// -- what will this print out? Will this even work?
		
		Cat testCat = new Cat("Max", "Tabby");
		System.out.println(testCat);		// -- what will this print out? Will this even work?
		
		
		// What if I want an array with both animals and cats? or cats and dogs?
		
	}

}


class Animal {
	
	private String name;
	
	Animal(String name) {
		this.name = name;
	}
	
}

class Cat extends Animal {
	
	public String type;
	
	Cat(String name, String type) {
		super(name);
		
		this.type = type;
	}
	
}

class Dog extends Animal {
	
	private String type;
	
	Dog(String name, String type) {
		super(name);
		
		this.type = type;
	}
	
}