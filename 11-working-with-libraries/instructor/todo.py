# let user specify due date for item
  # datetime.date class
# display how much time is left until it's due
  # today() looks useful
# e.g. _____ due in _____ days
import arrow
import datetime
class ToDo:
  """ Represents an item on a to-do list """

  def __init__(self, description, due_date):
    self.description = description
    self.completed = False
    self.due_date = due_date 

  def complete(self):
    self.completed = True

  def __str__(self):
    return "To do: {} - due {}".format(self.description, self.due_date.humanize())

