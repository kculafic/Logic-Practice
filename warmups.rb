
# **************** Return MaxiMinimum ***********************
def findMin(arr)
  minimum = 0
  arr.each do |num|
    if num <= minimum
      minimum = num
    end
  end
  return minimum
end

findMin([1, 2, -3, 4])


# **************** Return Maximum ***********************
def findMax(arr)
  maximum = 0
  arr.each do |num|
    if num >= maximum
      maximum = num
    end
  end
  return maximum
end

findMax([1, 2, -3, 4])


# **************** Convert 'from' elements to 'to' ***********************

def fromTo(arr, from, to)
  resultArr = Array.new
  arr.each do |int|
    if int == from
      resultArr << to
    else
      resultArr << int
    end
  end
  return resultArr
end

fromTo([1, 3, 2, 1, 3], 1, 4)


# **************** filter passing grades ***********************

def filterPassingGrades(arr)
  result = Array.new
  arr.each do |grade|
    if grade >= 70
    result << grade
    end
  end

  return result
end

filterPassingGrades([88, 67, 70, 92, 53])


# **************** Repeater ***********************

def repeater(str, i)
  newStr = ""
  i.times do
    newStr << str
  end
  return newStr
end

repeater('yo', 4)

# **************** Concatenate **************************

def concatenate(arr)
  arr = arr.join
  puts arr.class
  return arr
end

concatenate(['hello', 'my', 'name', 'is', 'ken'])

# **************** Sum of all integers in an Array ********

def sumArr()
  ArrThing = [1, 2, 3, 4, 5, 6, 7, 8]
  sum = 0
  ArrThing.each { |a| sum+=a }
  print ArrThing
  print sum
end

sumArr()
# ****************
