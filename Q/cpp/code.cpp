#include <iostream>
#include <vector>

using namespace std;

struct Point {
    int x;
    int y;

    Point(int x, int y): x(x), y(y) {
    }
};


bool isOnOneLine(const vector<Point>& points) {
    // your code goes here
    return false;
}

int main() {
    int n;
    cin >> n;
    vector<Point> points;
    for (int i = 0; i < n; i++) {
        int x, y;
        cin >> x >> y;
        points.push_back(Point(x, y));
    }
    if (isOnOneLine(points)) {
        cout << "YES";
    } else {
        cout << "NO";
    }
}