tasks = []
for i in range(ord('B'), ord('U') + 1):
    from_ = chr(i)
    x = chr(i - 1)
    print('cd {}/java'.format(from_))
    print('pwd')
    print('mv {}.java Solution.java | true'.format(x))
    print('cd ../..')