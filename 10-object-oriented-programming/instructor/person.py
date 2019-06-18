class Position:
    """ A class representing latitude and longitude coordinates """

    def __init__(self, x, y):
        self.x = x
        self.y = y

    def __str__(self):
        return "{}, {}".format(self.x, self.y)

    def move_north(self):
        self.y += 1
    
    def move_south(self):
        self.y -= 1

    def move_east(self):
        self.x += 1

    def move_west(self):
        self.x -= 1

class Person:
    """ A class that represents a human being """

    def __init__(self, fname, lname, x_coord, y_coord):
        self.first_name = fname
        self.last_name = lname
        self.position = Position(x_coord, y_coord)


    def __str__(self):
        return "Person object: {} positioned at {}".format(self.full_name(), self.position)

    def full_name(self):
        return "{} {}".format(self.first_name, self.last_name)

    def move(self, direction):
        if direction == 'N':
            self.position.move_north()
        elif direction == 'S':
            self.position.move_south()
        elif direction == 'E':
            self.position.move_east()
        elif direction == 'W':
            self.position.move_west()


betty = Person("Betty", "Li", 0, 0)
print(betty)
print(betty.first_name)
betty.move('N')
betty.move('N')
betty.move('N')
print(betty)

natalie = Person("Natalie", "Black", 1, 1)
print(natalie)
natalie.move('W')
natalie.move('S')
print(natalie)





