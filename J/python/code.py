from typing import List


def get_all_peaceful_combinations(n) -> List[List[int]]:
    # your code goes here
    return [[]]

n = int(input())
combinations = get_all_peaceful_combinations(n)

print(len(combinations))
for combination in combinations:
    print(*combination)