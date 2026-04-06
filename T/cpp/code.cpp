#include <iostream>
#include <vector>

using namespace std;


long long getMaxXOR(const vector<long long>& list) {
    // your code goes here
    return 0;
}

vector<long long> readList() {
    int n;
    cin >> n;
    vector<long long> res(n);
    for (int i = 0; i < n; i++) {
        cin >> res[i];
    }
    return res;
}

int main() {
    vector<long long> list = readList();
    cout << getMaxXOR(list);
}
