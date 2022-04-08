#include <iostream>
#include <vector>

using namespace std;


struct HistoricalArray {
    int size;
    HistoricalArray(int n) : size(n) {

    }
    
    void beginNewEra(int eraId) {

    }

    void set(int index, int value) {

    }

    int get(int index, int eraId) {
        return -1;
    }
};


int main(int argc, char const *argv[]) {
    int n;
    cin >> n;
    HistoricalArray arr(n);
    int q;
    cin >> q;
    for (int i = 0; i < q; i++) {
        string queryType;
        cin >> queryType;
        if (queryType == "set") {
            int index, value;
            cin >> index >> value;
            arr.set(index, value);
        } else if (queryType == "begin_new_era") {
            int eraId;
            cin >> eraId;
            arr.beginNewEra(eraId);
        } else if (queryType == "get") {
            int index, eraId;
            cin >> index >> eraId;
            cout << arr.get(index, eraId) << endl;
        }
    }
}
