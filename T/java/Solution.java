import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;


public class Solution {

    private static long getMaxXOR(List<Integer> list) {
        // your code goes here
        return 0;
    }

    public static void main(String[] args) throws IOException {
        try (BufferedReader reader = new BufferedReader(new InputStreamReader(System.in))) {
            List<Integer> list = readList(reader);
            System.out.println(getMaxXOR(list));
        } 
    }

    private static List<Integer> readList(BufferedReader reader) throws IOException {
        reader.readLine();
        return Arrays.asList(reader.readLine().strip().split(" "))
            .stream()
            .map(token -> Integer.parseInt(token))
            .collect(Collectors.toList());
    }
}