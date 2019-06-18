# count = 0

# while count <= 10:
#   print(count)
#   count = count + 1

# print('after the loop')


print("Do you want to log in?")
wants_to_log_in = input().lower()
if wants_to_log_in == 'yes' or wants_to_log_in == 'y':

    password = "please"
    print("What's the password?")
    user_guess = input()

    while user_guess != password:
        print("That's not right")
        user_guess = input()

    print("That's right!")

else:
  print("ok")