import sys
from os import listdir
from os.path import isfile, join

PATH = './images'

onlyfiles = [f for f in listdir(PATH) if isfile(join(PATH, f))]

print('I\'m on it boss!')

textDump = open('./src/c/image_names.txt', "w+")

textDump.write('[')

for name in onlyfiles:
    textDump.write('\'' + './images/' + name + '\',' +'\n')

textDump.write(']')
textDump.close()