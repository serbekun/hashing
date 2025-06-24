symbols = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789.?! \n"

def init_array_with_number():
    return {char: f"{index:02d}" for index, char in enumerate(symbols)}

def gen_seed(s, char_to_code):
    return ''.join([char_to_code.get(char, '00') for char in s])

def create_new_hash(seed):
    total = int(seed) if seed else 0
    
    arr = list(symbols)
    n = len(arr)
    if n == 0:
        return ""

    a = 1664525
    c = 1013904223
    m = 2**32
    
    for i in range(n-1, 0, -1):
        total = (a * total + c) % m
        r = total % (i + 1)
        arr[i], arr[r] = arr[r], arr[i]
    
    for i in range(len(arr)):
        if arr[i] == '\n':
            arr[i] = '@'

    return ''.join(arr)

def main():
    char_to_code = init_array_with_number()
    
    old_hash = input("Input old hash to create new hash: ")
    
    seed = gen_seed(old_hash, char_to_code)
    print(f"Generated seed: {seed}")
    
    new_hash = create_new_hash(seed)
    print(f"New hash: {new_hash}")

if __name__ == "__main__":
    main()