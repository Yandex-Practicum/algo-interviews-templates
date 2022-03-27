from typing import List


class Building:
    def __init__(self, need_capital, added_capital) -> None:
        self.need_capital = need_capital
        self.added_capital = added_capital



def get_max_final_capital(buildings: List[Building], start_capital: int, max_buildings: int) -> int:
    # your code goes here
    return 0

n, k = map(int, input().split())
buildings = []
for i in range(n):
    c, p = map(int, input().split())
    buildings.append(Building(c, p))
M = int(input())
print(get_max_final_capital(buildings, M, k))
