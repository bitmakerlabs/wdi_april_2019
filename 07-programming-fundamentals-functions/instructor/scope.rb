print('scope')

a = 3

def my_func():
  print(a)
  b = 2

def my_func2():
  print(b)

my_func()
my_func2()
