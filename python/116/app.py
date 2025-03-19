import random   

class Die:

    def __init__(self, sides=6):
        self.sides=sides
    
    def roll(self):
        return random.randint(1,self.sides)
    
    
d6 = Die()

for i in range(10):
    print("Rolling a d6:", 'you rolled a', d6.roll())