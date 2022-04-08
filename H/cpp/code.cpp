#include <vector>
#include <iostream>

using namespace std;

long long getEnergyForUnion(const vector<int>& stones) {
    // your code goes here
    return 0;
}

vector<int> readList(int n) {
    vector<int> res(n);
    for (int i = 0; i < n; i++) {
        cin >> res[i];
    }
    return res;
}

int main() {
    int n;
    cin >> n;
    vector<int> stones = readList(n);

    cout << getEnergyForUnion(stones);
}

