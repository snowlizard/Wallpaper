from os import listdir
from os.path import isfile, join

PATH = './public/Wall_Images'

onlyfiles = [f for f in listdir(PATH) if isfile(join(PATH, f))]

print(onlyfiles)