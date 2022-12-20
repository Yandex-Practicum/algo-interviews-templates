#include <iostream>
#include <vector>

using namespace std;

struct Point {
    long long x;
    long long y;

    Point(long long x, long long y): x(x), y(y) {
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
        long long x, y;
        cin >> x >> y;
        points.push_back(Point(x, y));
    }
    if (isOnOneLine(points)) {
        cout << "YES";
    } else {
        cout << "NO";
    }
}
