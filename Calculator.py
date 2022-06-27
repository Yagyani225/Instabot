#addition
#subtraction
#division
#multiplication

def add(a,b):
     result = a+b
     print(result)
def sub(a,b):
     result = a-b
     print(result)
def multiply(a,b):
     result = a*b
     print(result)
def division(a,b):
     result = a/b
     print(result)

a = int(float(input("enter first number:")))
b = int(float(input("enter another number:")))
op = input("enter the operator:")

if op=='+':
     add(a,b)
elif op=='-':
     sub(a,b)
elif op=='*':
     multiply(a,b)
elif op=='/':
     division(a,b)
else:
     print("invalid operator")
   
     