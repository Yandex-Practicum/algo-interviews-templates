#include <iostream>
#include <vector>

using namespace std;


struct Building {
    int needCapital;
    int addedCapital;

    Building(int c, int p) {
        needCapital = c;
        addedCapital = p;
    }
};


long long getMaxFinalCapital(const vector<Building>& buildings, int startCapital, int maxNumberOfBuildings) {
    // your code goes here
    return 0;
}


vector<Building> readBuildings(int n) {
    vector<Building> buildings;
    for (int i = 0; i < n; i++) {
        int c, p;
        cin >> c >> p;
        buildings.push_back(Building(c, p));
    } 
    return buildings;
}

int main() {
        int n;
        cin >> n;
        int k;
        cin >> k;
        vector<Building> buildings = readBuildings(n);
        int M;
        cin >> M;
        cout << getMaxFinalCapital(buildings, M, k) << endl;
}




