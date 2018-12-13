import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileReader;
import java.io.FileWriter;
import java.util.ArrayList;

public class FileIOMain {

	public static void main(String[] args) {
		String inFileName = "sample";
		String currentLine = null;
		
		System.out.println("cwd: " + System.getProperty("user.dir"));
		
		try {
			// reading
			FileReader fileReader = new FileReader(inFileName);
			BufferedReader bufferedReader = new BufferedReader(fileReader);
			
			ArrayList<int[]> numArrays = new ArrayList<int[]>();
			
			while((currentLine = bufferedReader.readLine()) != null) {
				String[] charArray = currentLine.split(" ");
				int[] numArray = new int[charArray.length];
				
				for (int i = 0; i < charArray.length; i++) {
					String currentChar = charArray[i];
					numArray[i] = Integer.parseInt(currentChar) + 1;
				}
				
				numArrays.add(numArray);
			}
			
			bufferedReader.close();
			
			// writing
			String outFileName = "output";
			FileWriter fileWriter = new FileWriter(outFileName);
			BufferedWriter bufferedWriter = new BufferedWriter(fileWriter);
			
			for (int i = 0; i < numArrays.size(); i++) {
				int[] currentNumArray = numArrays.get(i);
				String[] charArray = new String[currentNumArray.length];
				
				for (int j = 0; j < currentNumArray.length; j++) {
					charArray[j] = Integer.toString(currentNumArray[j]); 
				}
				
				String stringToWrite = String.join(" ", charArray);
				bufferedWriter.write(stringToWrite);
				bufferedWriter.newLine();
			}
			
			bufferedWriter.close();
		}
		catch (Exception ex) {
			ex.printStackTrace();
		}
		

	}

}
