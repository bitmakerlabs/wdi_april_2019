class AGO:

    collection = []

    @classmethod
    def add(cls, name_of_artwork):
        cls.collection.append(name_of_artwork)


AGO.add('Starry')
AGO.add('Wounded Deer')

print(AGO.collection)

# breakpoint()


# class Artwork:

#     collection = []

#     def __init__(self, name):
#         self.name = name
#         Artwork.collection.append(self)

#     def __str__(self):
#         return "I am string"

#     def __repr__(self):
#         return "I am repr"


# Artwork('Starry Night')
# Artwork('Infinity Mirrors')

# print(Artwork.collection)
