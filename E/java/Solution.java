import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;


public class Solution {

    private static int convertToArabic(String romanNumber) {
        // your code goes here
        return -1;
    }

    public static void main(String[] args) throws IOException {
        try (BufferedReader reader = new BufferedReader(new InputStreamReader(System.in))) {
            String romanNumber = reader.readLine().strip();
            System.out.println(convertToArabic(romanNumber));
        }
    }
}