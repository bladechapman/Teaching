import java.util.Scanner;

/**
 * A class that validates a password based on rules.
 *
 * @see <a href="https://cs125.cs.illinois.edu/MP/2/">MP2 Documentation</a>
 */
public class CheckPassword {

    /** Password letters. */
    private static final String CAPITAL_LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    /** Password numbers. */
    private static final String NUMBERS = "0123456789";

    /** Password special characters. */
    private static final String SPECIAL = "!@#$%^_*";

    /**
     * Given a potential password check it against provided rules.
     * <p>
     * The function is passed a length and capital letter, number, and special character counts.
     * It should return true if the password is the appropriate length and has the required number of capital letters,
     * numbers, and special characters, and false otherwise. !,@,#,$,%,^,_,
     * and * count as special characters.
     * <p>
     * The counts may be zero, in which case there are no requirements for that rule. For example, if
     * numberCount == 0 then the password does not have to contain a number. Of course, it still can.
     * <p>
     * The passed password string may be empty but will not be null.
     *
     * Hint: You may want to use String.toCharArray() and String.indexOf 
     *
     * @param password the password to check
     * @param minLength the minimum length for the password
     * @param minCapitalLetter the minimum number of capital letters the password must contain
     * @param minNumber the minimum number of numbers that the password must contain
     * @param minSpecial the minimum number of special characters that the password must contain
     * @return true if the password follows the rules, false otherwise
     */

    /* ********************************************************************************************
     * You do not need to modify code below this comment.
     * ********************************************************************************************/

    /**
     * Solicits a password from the user and checks it using static rules.
     * <p>
     * You are free to review this function, but should not modify it. Note that this function is
     * not tested by the test suite, as it is purely to aid your own interactive testing.
     *
     * @param unused unused input arguments
     */
    public static void main(final String[] unused) {
        Scanner lineScanner = new Scanner(System.in);
        System.out.println("The rules are the password must be 10 characters "
                        + "and contain two digits and one special character");
        System.out.println("Enter a password to check: ");
        String password = lineScanner.nextLine();
        final int minLength = 10;
        if (checkAPassword(password, minLength, 0, 2, 1)) {
            System.out.println("The password is valid");
        } else {
            System.out.println("The password is invalid");
        }
    }
    public static boolean checkAPassword (String password, int minLength, int minCapitalLetter, int minNumber, int minSpecial) {
    	int countCapitalLetter = 0;
    	int countSpecial = 0;
    	int countNumber = 0;
    	for(int i =0; i<password.length(); i++)
    	{
    		if(CheckPassword.checkCharInString(CAPITAL_LETTERS, password, i)) {
    			countCapitalLetter = countCapitalLetter + 1;
    		}
    		if(password.length()<minLength) {
    			return false;
    		}
    		if(CheckPassword.checkCharInString(SPECIAL, password, i)) {
    			countSpecial= countSpecial + 1;
    		}
    		if(CheckPassword.checkCharInString(NUMBERS, password, i)) {
    			countNumber =countNumber + 1;
    		}
    	}
    	if(countCapitalLetter<minCapitalLetter) {
    		return false;
    	}
    	if(countSpecial < minSpecial) {
    		return false;
    	}
    	if(countNumber < minNumber) {
    		return false;
    	}
    	return true;
    }
   public static boolean checkCharInString (String Reference, String Test, int charIndex) {
	   if(Reference.indexOf(Test.charAt(charIndex))!= -1) {
		   return true;
	   }else {
		   return false;
	   }
   }
}