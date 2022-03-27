class HistoricalArray:
    def __init__(self, size) -> None:
        # your code goes here
        pass

    def set(self, index, value) -> None:
        # your code goes here
        pass

    def get(self, index, era_id) -> int:
        # your code goes here
        pass

    def begin_new_era(self, era_id) -> None:
        # your code goes here
        pass

size = int(input())
q = int(input())
historical_array = HistoricalArray(size)
for i in range(q):
    query = input().split()
    query_type = query[0]
    if query_type == "set":
        historical_array.set(int(query[1]), int(query[2]))
    elif query_type == "begin_new_era":
        historical_array.begin_new_era(int(query[1]))
    else:
        print(historical_array.get(int(query[1]), int(query[2])))