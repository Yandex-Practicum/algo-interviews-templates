#include <iostream>
#include <vector>

using namespace std;

struct Segment {
    int left;
    int right;

    Segment(int left, int right) : left(left), right(right) {
    }
};

vector<Segment> readSegments() {
    int n;
    cin >> n;
    vector<Segment> segments ;
    for (int i = 0; i < n; i++) {
        int left, right;
        cin >> left >> right;
        segments.push_back(Segment(left, right));
    }
    return segments;
}
    
vector<Segment> getIntersection(const vector<Segment>& firstSequence, const vector<Segment>& secondSequence) {
    // your code goes here
    return {};
}


void outputAnswer(const vector<Segment>& intersection) {
    for (const Segment& segment : intersection) {
        cout << segment.left << " " << segment.right << endl;
    }
}

int main() {
    vector<Segment> firstSequence = readSegments();
    vector<Segment> secondSequence = readSegments();

    vector<Segment> intersection = getIntersection(firstSequence, secondSequence);
    outputAnswer(intersection);
}