input_data = open("example.txt", "r")
raw = input_data.readlines()
d = []

for x in range(0, len(raw)):
  result = int(raw[x])
  d.append(result)

def solve(stuff):
  sum = 0
  for x in range(0, len(stuff)):
    sum += stuff[x]

  print(sum)
  return sum

test1 = [-1, -2, -3]
test2 = [+1, +1, -2]
test3 = [+1, +1, +1]

solve(d)
