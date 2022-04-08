#include <vector>
#include <iostream>

using namespace std;

vector<vector<int>> getAllPeacefulCombinations(int n) {
    // your code goes here
    return {};
}

void printArray(const vector<int>& combination) {
    for (int elem : combination) {
        cout << elem << " ";
    }
    cout << endl;
}

void outputAnswer(const vector<vector<int>>& possibleCombinations) {
    cout << possibleCombinations.size() << endl;
    for (const vector<int>& combination : possibleCombinations) {
        printArray(combination);
    }
}

int main() {
    int n;
    cin >> n;
    vector<vector<int>> possibleCombinations = getAllPeacefulCombinations(n);
    outputAnswer(possibleCombinations);
}




