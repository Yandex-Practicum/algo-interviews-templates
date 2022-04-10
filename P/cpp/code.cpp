#include <iostream>
#include <vector>

using namespace std;

struct Vertex {
    int left;
    int right;

    Vertex(int left, int right) : left(left), right(right) {
    }
};


vector<int> getTreeBorder(const vector<Vertex>& tree, int root) {
    // your code goes here
    return {};
}

void outputAnswer(const vector<int>& treeBorder) {
    for (int elem : treeBorder) {
        cout << elem << " ";
    }
    cout << endl;
}

vector<Vertex> readTree(int n) {
    vector<Vertex> tree;
    for (int i = 0; i < n; i++) {
        int left, right;
        cin >> left >> right;
        tree.push_back(Vertex(left, right));
    }
    return tree;
}

int main() {
        int n;
        cin >> n;
        int root;
        cin >> root;
        vector<Vertex> tree = readTree( n);
        outputAnswer(getTreeBorder(tree, root));
}

