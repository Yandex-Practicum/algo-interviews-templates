#include <iostream>
#include <vector>

using namespace std;


long getCardCount(int n, int k, const vector<long long> &cards) {
    // your code goes here
    return 0;
}

int readInt() {
    int x;
    cin >> x;
    return x;
}

vector<long long> readList(int n) {
    vector<long long> res(n);
    for (int i = 0; i < n; i++) {
        cin >> res[i];
    }
    return res;
}

int main() {
    int n = readInt();
    int k = readInt();
    vector<long long> cards = readList(n);
    cout << getCardCount(n, k, cards);
}