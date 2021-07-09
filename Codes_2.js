//To print FIZZBUZZ upto 100

for (i=1; i<=100; i++)
{
  a = i / 15
  b = i / 3
  c = i / 5
  if (Number.isInteger(a))
  {
    console.log("FizzBuzz")
  }
  else if (Number.isInteger(b))
  {
    console.log("Fizz")
  }
  else if (Number.isInteger(c))
  {
    console.log("Buzz")
  }
  else
  {
    console.log(i)
  }
}



//To find palindrome word in a string
str = "madam is present today and radar was today's topic. "
str1 = ""
str2 = ""
for (s of str) {
    if (s != " ") {
        str2 = str2 + s
        str1 = s + str1
    }
    else {
        if (str1 == str2)
        {
          console.log(str1)
        }
        str1 = ""
        str2 = ""
    }
}
//OUTPUT

//madam
//radar

