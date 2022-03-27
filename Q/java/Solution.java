import java.util.List;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.stream.Collectors;
import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;


public class Solution {

    private static boolean isOnOneLine(List<Point> points) {
        // your code goes here
        return false;
    }

    public static void main(String[] args) throws IOException {
        try (BufferedReader reader = new BufferedReader(new InputStreamReader(System.in))) {
            int n = readInt(reader);
            List<Point> points = new ArrayList<>();
            for (int i = 0; i < n; i++) {
                List<Integer> coordinates = readTwoNumbers(reader);
                points.add(new Point(coordinates.get(0), coordinates.get(1)));
            }
            if (isOnOneLine(points)) {
                System.out.println("YES");
            } else {
                System.out.println("NO");
            }
            
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

    public static class Point {
        public final int x;
        public final int y;

        public Point(int x, int y) {
            this.x = x;
            this.y = y;
        }
    }
}