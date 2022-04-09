#include <iostream>
#include <vector>

using namespace std;

void outputAnswer(const vector<string>& sequences) {
    for (const string& sequence : sequences) {
        cout << sequence << " ";
    }
}

vector<string> generateSequences(int n) {
    // Your code here
    return {};
}

int main() {
    int n;
    cin >> n;
    outputAnswer(generateSequences(n));
}