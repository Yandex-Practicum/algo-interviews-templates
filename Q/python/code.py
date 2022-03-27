from typing import List, Tuple


def is_on_one_line(points: List[Tuple[int]]) -> bool:
    # your code goes here
    return False

n = int(input())
points = []
for i in range(n):
    x, y = map(int, input().split())
    points.append((x, y))

if is_on_one_line(points):
    print('YES')
else:
    print('NO')