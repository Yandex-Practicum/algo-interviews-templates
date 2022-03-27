import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.util.List;


public class Solution {

    private static List<List<Integer>> getAllPeacefulCombinations(int n) {
        // your code goes here
        return List.of();
    }


    public static void main(String[] args) throws IOException {
        try (BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));
             BufferedWriter writer = new BufferedWriter(new OutputStreamWriter(System.out))) {
            int n = readInt(reader);
            List<List<Integer>> possibleCombinations = getAllPeacefulCombinations(n);

            outputAnswer(writer, possibleCombinations);
        }
    }


    private static void outputAnswer(BufferedWriter writer, List<List<Integer>> possibleCombinations) throws IOException {
        writer.write(possibleCombinations.size() + "\n");
        for (List<Integer> combination : possibleCombinations) {
            printArray(writer, combination);
        }
    }


    private static void printArray(BufferedWriter writer, List<Integer> combination) throws IOException {
        for (int elem : combination) {
            writer.write(elem + " ");
        }
        writer.write("\n");
    }


    private static int readInt(BufferedReader reader) throws IOException {
        return Integer.parseInt(reader.readLine());
    } 
}