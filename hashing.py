symbols1 = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789.?! \n"
symbols2 = "WuQakwFp?NyY4eB7AMR.bOSlZ6 G9VjIvtThqg12@fXd3J5CnzKrHPxsL8o!iEUc0Dm"

INPUT_FILENAME = "hashing_dot_file/input.txt"
ENCODE_FILENAME = "hashing_dot_file/encoded.txt"
DECODE_FILENAME = "hashing_dot_file/decoded.txt"

def encode():

    print("read content from ", INPUT_FILENAME)
    with open(INPUT_FILENAME, 'r', encoding='utf-8') as file:
        string = file.read()

    result = ""
    for ch in string:
        if ch in symbols1:
            idx = symbols1.index(ch)
            result += symbols2[idx]
        else:
            result += ch

    with open (ENCODE_FILENAME, 'w', encoding='utf-8') as file:
        file.write(result)

    print("encode content in encoded.txt")

def decode():
    print("read date from ", ENCODE_FILENAME)
    with open (ENCODE_FILENAME, 'r', encoding='utf-8') as file:
        string = file.read()

    result = ""
    for ch in string:
        if ch in symbols2:
            idx = symbols2.index(ch)
            result += symbols1[idx]
        else:
            result += ch

    with open (DECODE_FILENAME, 'w', encoding='utf-8') as file:
        file.write(result)

    print("decode content int", DECODE_FILENAME)

def main():
    while True:
        print("\n1. encode")
        print("2. decode")
        print("0. exit")
        answer = input(": ")

        if answer == "1":
            encode()
        elif answer == "2":
            decode()
        elif answer == "0":
            exit(0)
        else:
            print("Invalid choice:", answer)

main()
