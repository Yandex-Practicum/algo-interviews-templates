import java.io.BufferedReader;
import java.io.InputStreamReader;

/**
 * J
 */
public class J {

    private static boolean stringMatchesTemplate(String stringToCheck, String template) {
        // your code goes here
        return false;
    }
    
    public static void main(String[] args) {
        try (BufferedReader reader = new BufferedReader(new InputStreamReader(System.in))) {
            String template = reader.readLine().strip();
            String stringToCheck = reader.readLine().strip();

            if (stringMatchesTemplate(stringToCheck, template)) {
                System.out.println("YES");
            } else {
                System.out.println("NO");
            }
        }
    }    
}