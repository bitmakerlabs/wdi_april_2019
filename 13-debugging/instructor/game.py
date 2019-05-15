from player import Player
import random
class Game:

  def __init__(self, number_of_players, width, height):
      self.players = []
      self.height = height
      self.width = width
      for n in range(number_of_players):
          player_x = random.randint(0, width)
          player_y = random.randint(0, height)
          player = Player(player_x, player_y)
          self.players.append(player)

  @classmethod
  def start(self):
      print("It's adventure time!")
      print("How many people are adventuring?")
      number_of_players = int(input())

      game = Game(number_of_players, 10, 11)
      game.turn()

  def turn(self):
      moves = [1, -1]

      for player in self.players:
          print("Player {} moved!".format(player.id))
          new_x = random.choice(moves)
          new_y = random.choice(moves)

          if new_x >= 0 and new_x < self.width:
              player.x += new_x

          if new_y >= 0 and new_y < self.height:
              player.y += new_y

Game.start()