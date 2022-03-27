import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;


public class Solution {

    private static List<String> generateSequences(int n) {
        // Your code here
        return List.of();
    }

    public static void main(String[] args) throws IOException {
        try (BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));
            BufferedWriter writer = new BufferedWriter(new OutputStreamWriter(System.out))) {
            int n = readInt(reader);
            outputAnswer(generateSequences(n), writer);
        }
    }

    private static void outputAnswer(List<String> sequences, BufferedWriter writer) throws IOException {
        for (String sequence : sequences) {
            writer.write(sequence + "\n");
        }
    }

    private static int readInt(BufferedReader reader) throws IOException {
        return Integer.parseInt(reader.readLine());
    }
}