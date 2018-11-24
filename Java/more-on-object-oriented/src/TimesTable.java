import java.util.Scanner;

public class TimesTable {

	/**
	 * static int[][]	generateTimesTable(int first, int second)
	 * Given two positive numbers first and second, produce a 
	 * multiplication table for numbers first through second, inclusive.	
	 */
	
	/** 
	 * static void	main(java.lang.String[] unused)	
	 * Solicits two integers from the user and print the resulting multiplication table. 
	 */	
	public static void main(String[] unused) {
		System.out.println("Enter two numbers on separate lines to generate a times table");
		Scanner lineScanner = new Scanner(System.in);
		int firstNumber = new Integer(lineScanner.nextLine());
		int secondNumber = new Integer(lineScanner.nextLine());
		
		int[][] timesTable = generateTimesTable(firstNumber, secondNumber);
	}
}

