from typing import List, Optional


class Node:
    def __init__(self) -> None:
        self.left = None
        self.right = None


def get_tree_border(root: Node) -> List[int]:
    # your code goes here
    return []

def read_tree() -> Node:
    size, root_id = map(int, input().split())
    nodes = [Node(None, None) for i in range(size)]
    for i in range(size):
        left, right = map(int, input().split())
        nodes[i].left = nodes[left] if left != -1 else None
        nodes[i].right = nodes[right] if right != -1 else None
    return nodes[root_id]


tree = read_tree()
