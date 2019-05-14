# class Widget:

#     widgets = []

#     def __init__(self, name, price):
#         self.name = name
#         self.price = price

#     @classmethod
#     def find(cls, name):
#         for widget in cls.widgets:
#             if name == widget.name:
#                 return widget

#     @classmethod
#     def create(cls, name, price):
#         existing_widget = cls.find(name)

#         if existing_widget:
#             print(f'{name} already exists')
#         else:
#             cls.widgets.append(Widget(name, price))

#     @classmethod
#     def read(cls):
#         pass

#     @classmethod
#     def update(cls):
#         pass

#     @classmethod
#     def delete(cls):
#         pass

#     @classmethod
#     def index(cls):
#         print()
#         print("WIDGETS")
#         for widget in cls.widgets:
#             print(widget.name)


# item = Widget.create('tea pot', 1.99)
# item = Widget.create('orange', 0.50)
# item = Widget.create('tea pot', 2.99)
# Widget.index()

# class City:

#     def __init__(self, name, number_of_galleries):
#         self.name = name
#         self.number_of_galleries = number_of_galleries

#     def __repr__(self):
#         return f"{self.name}: {self.number_of_galleries}"

#     def __lt__(self, other):
#         return self.number_of_galleries < other.number_of_galleries


# cities = [
#     City('Toronto', 1),
#     City('Paris', 3),
#     City('New York', 2)
# ]

# print(sorted(cities))

class Gallery:

    galleries = []

    def __init__(self, name, city):
        self.name = name
        self.city = city
        Gallery.galleries.append(self)

    @classmethod
    def cities(cls):
        result = {}
        for gallery in cls.galleries:
            if result.get(gallery.city):
                result[gallery.city] += 1
            else:
                result[gallery.city] = 1

        return result

    @classmethod
    def report(cls):
        for city, number in cls.cities().items():
            print(f"{city}: {number}")


ago = Gallery('Art Gallery of Ontario', 'Toronto')
louvre = Gallery('Louvre', 'Paris')
paris_modern = Gallery('Paris Museum of Modern Art', 'Paris')
pompidou = Gallery('The Centre Pompidou', 'Paris')
nyc_modern = Gallery('The Metropolitan Museum of Art', 'New York')
guggenheim = Gallery('Guggenheim Museum', 'New York')
Gallery.report()
