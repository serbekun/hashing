import random

FILENAME = "newpasswhash.txt"

symbols = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789.?! @"
symbols_list = list(symbols)
random.shuffle(symbols_list)
result = ''.join(symbols_list)

with open(FILENAME, 'w') as file:
    file.write(result)

print(result)