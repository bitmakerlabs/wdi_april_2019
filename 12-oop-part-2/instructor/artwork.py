# class Gallery:

#     def __init__(self, name, location):
#         self.name = name
#         self.location = location
#         self.collection = []

#     def add(self, art):
#         self.collection.append(art)

#     def add_multiple(self, *artworks):
#         for art in artworks:
#             self.add(art)

#     def print_inventory(self):
#         print(f"{self.name} Inventory")
#         for art in self.collection:
#             print(art.name)


# class Art:
#     def __init__(self, piece, artist, value):
#         self.name = piece
#         self.artist = artist
#         self.value = value

#     def __str__(self):
#         return f"{self.name} by {self.artist} valued at ${self.value:.2f}"


# starry = Art("The Starry Night",  "Vincent van Gogh",   10.00)
# mirrors = Art("Infinity Mirrors", "Yayoi Kusama",  50.00)
# deer = Art("The Wounded Deer",  "Frida Kahlo",  35.99)

# ago = Gallery('Art Gallery of Ontario', 'Toronto')
# # ago.add(mirrors)
# # ago.add(deer)
# ago.add_multiple(mirrors, deer)
# ago.print_inventory()
