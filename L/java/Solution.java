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

    private static List<Segment> getIntersection(List<Segment> firstSequence, List<Segment> secondSequence) {
        // your code goes here
        return List.of();
    }

    public static void main(String[] args) throws IOException {
        try (BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));
            BufferedWriter writer = new BufferedWriter(new OutputStreamWriter(System.out))) {
            List<Segment> firstSequence = readSegments(reader);
            List<Segment> secondSequence = readSegments(reader);

            List<Segment> intersection = getIntersection(firstSequence, secondSequence);
            outputAnswer(intersection, writer);
        }
    }

    private static void outputAnswer(List<Segment> intersection, BufferedWriter writer) throws IOException {
        for (Segment segment : intersection) {
            writer.write(segment.left + " " + segment.right + "\n");
        }
    }

    private static List<Segment> readSegments(BufferedReader reader) throws IOException {
        int n = readInt(reader);
        List<Segment> segments = new ArrayList<>(n);
        for (int i = 0; i < n; i++) {
            List<Integer> borders = readTwoNumbers(reader);
            segments.add(new Segment(borders.get(0), borders.get(1)));
        }
        return segments;
    }

    private static class Segment {
        public final int left;
        public final int right;

        public Segment(int left, int right) {
            this.left = left;
            this.right = right;
        }
    }

    private static int readInt(BufferedReader reader) throws IOException {
        return Integer.parseInt(reader.readLine());
    }

    private static List<Integer> readTwoNumbers(BufferedReader reader) throws IOException {
        return Arrays.asList(reader.readLine().strip().split(" "))
            .stream()
            .map(elem -> Integer.parseInt(elem))
            .collect(Collectors.toList());
    }
}