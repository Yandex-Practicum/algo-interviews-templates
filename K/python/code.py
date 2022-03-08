from typing import List, Tuple


def get_intersection(first_sequence: List[Tuple[int]], second_sequence: List[Tuple[int]]) -> List[Tuple[int]]:
    # your code goes here
    return []

def read_sequence() -> List[Tuple[int]]:
    n = int(input())
    sequnce = []
    for i in range(n):
        start, end = map(int, input().split())
        sequnce.append((start, end))
    return sequnce


def print_sequence(sequence: List[Tuple[int]]) -> None:
    for segment in sequence:
        print(segment[0], segment[1])


first_sequence = read_sequence()
second_sequence = read_sequence()
intersection = get_intersection(first_sequence, second_sequence)
print_sequence(intersection)