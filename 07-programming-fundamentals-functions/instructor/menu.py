def calculate_total(order=['glass of water']):
    total = 0
    for item in order:
        total += convert_name_to_price(item)

    return total

# MAKE THIS FUNCTION RETURN PROPER PRICE


def convert_name_to_price(item):
    if item == 'veggie bacon':
        print(2)
    elif item == 'bacon':
        print(3)
    elif item == 'orange juice':
        print(1)


def print_bill(order):
    print('B IS FOR BACON')
    print()
    print('-----------------')

    for item in order:
        print('${} {}'.format(convert_name_to_price(item), item))

    print('-----------------')
    print(f'${calculate_total(order)} Total')
    print()
    print('Please Come Again!')
    print()


order = ['veggie bacon', 'bacon', 'orange juice']

print_bill(order)
