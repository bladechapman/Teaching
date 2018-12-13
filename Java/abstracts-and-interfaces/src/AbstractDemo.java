
public class AbstractDemo {

	public static void main(String[] args) {
		Animal someAnimal = new Dog("Fido");
//		someAnimal.doAction();
//		System.out.println(someAnimal.toString());
	}

}


//class Animal {
//	String name;
//	
//	Animal(String name) {
//		this.name = name;
//	}
//	
//	public void doAction() {
//		System.out.println("Not Implemented!");
//	}
//}
//
//
//class Dog extends Animal {
//	
//	Dog(String name) {
//		super(name);
//	}
//	
//	public void doAction() {
//		System.out.println("Jump!");
//	}
//}

abstract class Animal {
	String name;
	
	Animal(String name) {
		this.name = name;
	}
//	
	abstract void doAction();
	
	public String toString() {
		return "Hey";
	}
}


class Dog extends Animal {
	
	Dog(String name) {
		super(name);
	}

	public void doAction() {
		System.out.println("Bark");
	}
	
}