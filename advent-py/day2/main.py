input_data = open("example.txt", "r")
raw = input_data.readlines()
d = []

for x in range(0, len(raw)):
  result = raw[x].strip()
  d.append(result)

# print(d)
main_counter = {
  'ones': 0,
  'twos': 0,
  'threes': 0,
}

def solve_one(string):
  local_high_count = 0
  local_high_val = False

  local_holder = {
    'max_count': 0,
    'max_val': False
    }

  for x in range(0, len(string)):
      local_holder[string[x]] = 0

  for y in range(0, len(string)):
      local_holder[string[y]] += 1

  for k, v in local_holder.items():
    if(v > local_high_count):
      local_high_count = v
      local_high_val = k

  local_holder['max_count'] = local_high_count
  local_holder['max_val'] = local_high_val
  print(local_holder)

  if(local_high_count == 1):
    main_counter['ones'] += 1
  elif(local_high_count == 2):
    main_counter['twos'] += 1
  elif(local_high_count == 3):
    main_counter['threes'] += 1


  # print('main_counter (inside) = ',main_counter)

def solve_more(array):
  for x in range(0, len(array)):
    solve_one(array[x])

# test1 = 'abcdef'
# test2 = 'bababc'
# test3 = 'abbcde'
# test4 = 'icxjqbroqtcnleyzpgmfksahgw'
# test5 = [test1, test2, test3 ]

# solve_one(test3)
solve_more(d)

print('main_counter (outside) = ',main_counter)
# solve(d)
