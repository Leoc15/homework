import random   

class Die:

    def __init__(self, sides=6):
        self.sides=sides
    
    def roll(self):
        return random.randint(1,self.sides)
    
    
d6 = Die()

for i in range(10):
    print("Rolling a 6 sided:", 'you rolled a', d6.roll())

d12 =Die(12)

for i in range(10):
    print("Rolling a 12 sided die:", 'you rolled a', d12.roll())