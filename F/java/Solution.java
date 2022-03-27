import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;


public class Solution {

    private static String convertToGoodString(String probablyBadString) {
        // your code goes here
        return "";
    }   

    public static void main(String[] args) throws IOException {
        try (BufferedReader reader = new BufferedReader(new InputStreamReader(System.in))) {
            String probablyBadString = reader.readLine().strip();
            System.out.println(convertToGoodString(probablyBadString));
        }
    } 
}