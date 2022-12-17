#Imports
import math
 
#Inputs
print("(a+bX^2)^c")
A=int(input('a = '))
B=int(input('b = '))
C=int(input('c = '))
 
#Binomial Expansion
x=2
expansion=str(A**C)+' + '+str(B*C)+'x'
while x<(C+1):
    nCr=(math.factorial(C))/((math.factorial(x))*(math.factorial(C-x)))
    expansion=expansion+' + '+str((B**x)*int(nCr))+'x^'+str(x)
    x=x+1
print(expansion)