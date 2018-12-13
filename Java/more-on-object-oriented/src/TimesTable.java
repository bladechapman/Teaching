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
		
		int[][] timesTable = TimesTable.generateTimesTable(firstNumber, secondNumber);
	}
	public static int[][] generateTimesTable(int firstNumber, int secondNumber) {
		int smallerNumber;
		int greaterNumber;
		if(firstNumber <= secondNumber) {
			smallerNumber = firstNumber;
			greaterNumber = secondNumber;
		}else {
			smallerNumber = secondNumber;
			greaterNumber = firstNumber;
		}
		if(firstNumber <= 0 || secondNumber <= 0) {
			return new int[0][0];
		}else{
			int[][] TimesTable= new int[Math.abs(secondNumber-firstNumber+1)][Math.abs(secondNumber-firstNumber+1)];
			for(int i = smallerNumber; i<=greaterNumber; i++ ) {
				for(int j= smallerNumber; j<=greaterNumber; j++) {
					TimesTable[i-smallerNumber][j-smallerNumber]=i*j;
				}
			}
			return TimesTable;
		}
		
	}
}

