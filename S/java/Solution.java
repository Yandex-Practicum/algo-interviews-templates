import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;


public class Solution {

    private static final String IPV4 = "IPv4";
    private static final String IPV6 = "IPv6";
    private static final String ERROR = "Error";

    /**
     * @return R.java#IPV4, R.java#IPV6, or R.java#ERROR
     */
    private static String checkIpAddress(String ip) {
        // Your code here
        return ERROR;
    }

    public static void main(String[] args) throws IOException {
        try (BufferedReader reader = new BufferedReader(new InputStreamReader(System.in))) {
            String ipAddress = reader.readLine();
            System.out.println(checkIpAddress(ipAddress));   
        }
    }
}