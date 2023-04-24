pop1= 80000
pop2= 200000
temp=0 
while pop1 < pop2:
    pop1*= 1.03
    pop2*= 1.015
    temp+=1


print(f'populção 1 {pop1}\n')
print(f'populção 2 {pop2}\n')
print(f' anos={temp}')