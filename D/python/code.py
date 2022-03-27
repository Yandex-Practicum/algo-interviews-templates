from typing import List


def get_longest_increasing_path(matrix: List[List[int]]) -> int:
    # your code goes here
    return 0

def read_matrix() -> List[List[int]]:
    n, m = map(int, input().split())
    matrix = []
    for i in range(n):
        matrix.append(list(map(int, input().split())))
    return matrix

matrix = read_matrix()
print(get_longest_increasing_path(matrix))