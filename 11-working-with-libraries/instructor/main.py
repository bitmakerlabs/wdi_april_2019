from todo import ToDo, datetime, Arrow
from arrow.arrow import Arrow

print('When is this item due?')

due_year = 2019
due_month = 5
due_day = 25

due_date = Arrow(due_year, due_month, due_day)
todo = ToDo('buy groceries', due_date)
print(todo)

past_due = Arrow(2019, 5, 12)
todo2 = ToDo('dishes', past_due)
print(todo2)

todays_date = Arrow(2019,5,13)
due_today = ToDo('mow lawn', todays_date)
print(due_today)