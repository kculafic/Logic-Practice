# // ***************************** 5kyu: Break camelCase ************************
# // Complete the solution so that the function will
# // break up camel casing, using a space between words.
# //
# // solution('camelCasing') // => should return 'camel Casing'

def breakCam(str)
  chars = str.split('')
  arr = Array.new

  chars.each do |i|
    if i.downcase == i
      arr << i
    elsif i.upcase == i
      arr << ' '
      arr << i
    end
  end

  return arr.join()

end

breakCam('camelCasingDemo')

# ********* toPairs ********

def toPairs(obj)
  newArr = Array.new
  secondArr = Array.new

  obj.each do |key, val|
    secondArr << key
    secondArr << val
    newArr << secondArr
  end

  print newArr
end

toPairs({ a: 1, b: 2 })


# ********* Inversion ********

objB = Hash.new

objB = {
  "Zoran" => 61,
  "Boris" => 60,
  "Milos" => 62
}

def invert(o)
  puts o
  puts o.invert
end

invert(objB)

# ********* Calc distance between two coordinates ********

def distCalc(point1, point2)
  first = ((point2[:x] - point1[:x]) **2)
  second = ((point2[:y] - point1[:y]) **2)
  sum = (first + second)
  dist = Math.sqrt(sum)
  return dist
end

distCalc({ x: 3, y: 2 }, { x: 9, y: 7 })


# ********* Take an Array of strings to check for another string ********

def strCheck(arr, str)
  arr.each do |i|
    if str == i
      return true
    end
  end
  return false
end

strCheck(['something', 'else', 'something else', 'foo', 'bar'], 'foo')

# **************** Return Minimum ***********************
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
