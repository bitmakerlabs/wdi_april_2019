# Problem: Get the total sum of a list of numbers
# 1 2 5 11 1

# go through the number one by one, adding them to a total
# then present the total

# define function add_up_list(){
#     numbers = [1,2,5,11,1]
#     total = 0
#     for each number in list numbers {
#         total = total + number
#     }

#     return total
# }

def sum_numbers():
    numbers = [1,2,5,11,1]
    total = 0
    for number in numbers:
        total += number

    return total

print(sum_numbers())