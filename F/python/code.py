from typing import Dict

class Node:
    # feel free to change fields
    def __init__(self, weight, parent) -> None:
        self.weight = weight
        self.parent = parent
        self.children = []


def get_number_of_upgoing_paths(root: Node, x: int) -> int:
    # your code goes here
    return 0

def read_tree(tree_size: int) -> Node:
    nodes = []
    root = None
    for i in range(tree_size):
        p, w = map(int, input().split())
        nodes.append(Node(w, p))
        if p == -1:
            root = nodes[i]
    for i in range(tree_size):
        if nodes[i].parent != -1:
            nodes[nodes[i].parent].children.append(nodes[i])
    return root


n, x = map(int, input().split())
tree = read_tree(n)
print(get_number_of_upgoing_paths(tree, x))
