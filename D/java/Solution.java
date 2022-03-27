import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

public class Solution{

    private static int getLongestIncreasingPath(List<List<Integer>> matrix) {
        // your code goes here
        return 0;
    }

    public static void main(String[] args) throws IOException {
        try (BufferedReader reader = new BufferedReader(new InputStreamReader(System.in))) {
            List<List<Integer>> matrix = readMatrix(reader);

            System.out.println(getLongestIncreasingPath(matrix));
        } 
        
    }

    private static List<List<Integer>> readMatrix(BufferedReader reader) throws IOException {
        String[] sizes = reader.readLine().strip().split(" ");
        int n = Integer.parseInt(sizes[0]);
        List<List<Integer>> matrix = new ArrayList<List<Integer>>(n);
        for (int i = 0; i < n; i++) {
            matrix.add(readList(reader));
        }
        return matrix;
    }

    private static List<Integer> readList(BufferedReader reader) throws IOException {
        return Arrays.asList(reader.readLine().strip().split(" "))
            .stream()
            .map(token -> Integer.parseInt(token))
            .collect(Collectors.toList());
    }
}