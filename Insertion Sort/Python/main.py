def insertion_sort(x):
    i = 1
    while i < len(x):
        key = x[i]
        j = i - 1
        while j >= 0:
            if x[j] > key:
                x[j + 1] = x[j]
                j -= 1
            else:
                break
        x[j + 1] = key
        i += 1

    print(x)


insertion_sort([9, 3, 4, 1, 5, 7, 6])
