secret_number = (25,35,45,55,65,75)
guess_count = 0
guess_limit = 3
score = 0
numbers = range(15,100)

clue1 = '''\n\nHint: Multiples of 5(Range:20-80)
Good Luck!'''
clue2='''\n\nHint: Divisible by 5(Range:25-75)
Good Luck!'''
clue3='''\n\nHint: Increases by 10 (Range:20-80)\nFor example :- 103,113,123,133..so on
Good Luck!'''
hint = (clue1,clue2,clue3)

guess_count += 1 

while guess_count <= guess_limit: 
    print(hint[guess_count])
    guess = int(input('\nfirst player: '))
    guess = int(input('\nsecond player: '))
    
    if guess in secret_number:
        score +=100
        print("\nfirst player wins\nscore: ",score)
        break
    elif guess is not  secret_number:
        score -= 10
        print("\nfirst player lose\nscore: ",score)
    else :
        print("you can do it")
        
    if guess in secret_number:
        score += 100
        print("\nsecond player wins\nscore: ",score)
        break
    elif guess is not secret_number:
        score -= 10
        print("\nsecond player lose\nscore: ",score)
    else:
        score -= 10
        print("you can do it")
        
else:
    print("\nYOU LOSE!\n Score: ",score)


