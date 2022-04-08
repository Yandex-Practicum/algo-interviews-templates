#include <vector>
#include <iostream>

using namespace std;

struct Vertex {
    int w;
    int p;

    Vertex(int w, int p) {
        w = w;
        p = p;
    }
};


int getNumberOfUpgoingPaths(vector<Vertex> tree, int x) {
    // your code goes here
    return 0;
}

vector<Vertex> readTree(int n) {
    vector<Vertex> tree;
    for (int i = 0; i < n; i++) {
        int parent, weight;
        cin >> parent >> weight;
        tree.push_back(Vertex(weight, parent));
    }
    return tree;
}

int main() {
    int n;
    cin >> n;
    int x;
    cin >> x;
    vector<Vertex> tree = readTree(n);
    cout << getNumberOfUpgoingPaths(tree, x);

}