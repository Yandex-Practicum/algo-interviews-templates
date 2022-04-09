#include <iostream>
#include <vector>

using namespace std;


long long getMaxXOR(const vector<int>& list) {
    // your code goes here
    return 0;
}

vector<int> readList() {
    int n;
    cin >> n;
    vector<int> res(n);
    for (int i = 0; i < n; i++) {
        cin >> res[i];
    }
    return res;
}

int main() {
    vector<int> list = readList();
    cout << getMaxXOR(list);
}

