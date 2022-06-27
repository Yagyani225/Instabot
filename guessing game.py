import random as ran
name=["zoo","apple","brilliant","better"]
name=ran.choice(name)
print(name)
chances = 10
guess=""
while chances > 0:
    fail=0
    for char in name:
        if char in guess:
            print(char, end="")
        else:
            print("_", end="")
            fail+=1
    if fail==0:
            print("\nYou Wins :)\nThe Word is: ",name)
            break
    guesses=input("\nInput the character of the word: ")
    guess += guesses 
    if guess not in name:
        chances-=1
        print("\nWrong Guess\nTry Again!!\nChances left: ",chances)
    
        if chances == 0:
              print("\nYou Lose!!! :(")