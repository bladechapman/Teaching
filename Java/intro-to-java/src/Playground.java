
public class Playground {	
	public static void main(String[] args) {
		Vehicle someVehicle = new Vehicle("Blue", 3, 2);
		System.out.println(someVehicle.toString());
	}
}



class Vehicle {
	
	String color;
	int numberOfDoors;
	int numberOfWheels;
	
	Vehicle(String givenColor, int givenNumberOfDoors, int givenNumberOfWheels) {
		this.color = givenColor;
		this.numberOfDoors = givenNumberOfDoors;
		this.numberOfWheels = givenNumberOfWheels;
	}
	
	public String toString() {
		return "Vehicle with " + this.numberOfDoors + " doors, " + this.numberOfWheels + " wheels, and colored " + this.color;
	}
}



class Car extends Vehicle {
	
	Car(String givenColor, int givenNumberOfDoors) {
		super(givenColor, givenNumberOfDoors, 4);
	}
	
	public void paint(String newColor) {
		this.color = newColor;
	}
}