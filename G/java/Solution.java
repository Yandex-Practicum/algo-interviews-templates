import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;


public class Solution {

    private static int getNumberOfUpgoingPaths(List<Vertex> tree, int x) {
        // your code goes here
        return 0;
    }

    public static void main(String[] args) throws IOException {
        try (BufferedReader reader = new BufferedReader(new InputStreamReader(System.in))) {
            List<Integer> firstLine = readTwoNumbers(reader);
            int n = firstLine.get(0);
            int x = firstLine.get(1);
            List<Vertex> tree = readTree(reader, n);
            System.out.println(getNumberOfUpgoingPaths(tree, x));
        }
    }

    private static List<Vertex> readTree(BufferedReader reader, int n) throws IOException {
        List<Vertex> tree = new ArrayList<>(n);
        for (int i = 0; i < n; i++) {
            List<Integer> parentAndWeight = readTwoNumbers(reader);
            tree.add(new Vertex(parentAndWeight.get(1), parentAndWeight.get(0)));
        }
        return tree;
    }

    private static List<Integer> readTwoNumbers(BufferedReader reader) throws IOException {
        return Arrays.asList(reader.readLine().strip().split(" "))
            .stream()
            .map(elem -> Integer.parseInt(elem))
            .collect(Collectors.toList());
    }

    private static class Vertex {
        public final int w;
        public final int p;

        public Vertex(int w, int p) {
            this.w = w;
            this.p = p;
        }
    }
}