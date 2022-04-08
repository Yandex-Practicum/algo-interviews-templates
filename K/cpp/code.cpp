#include <vector>
#include <iostream>

using namespace std;

bool stringMatchesTemplate(const string& stringToCheck, const string& templateString) {
    // your code goes here
    return false;
}

int main() {
    string templateString;
    cin >> templateString;
    string stringToCheck;
    cin >> stringToCheck;

    if (stringMatchesTemplate(stringToCheck, templateString)) {
        cout << "YES" << endl;
    } else {
        cout << "NO" << endl;
    }
}




