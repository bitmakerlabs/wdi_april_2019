from peewee import SqliteDatabase, Model, CharField, TextField

db = SqliteDatabase('crm.sqlite3')

class Contact(Model):
  first_name = CharField()
  last_name = CharField()
  email_address = CharField()
  note = TextField()

  class Meta:
    database = db # This model uses the "crm.sqlite3" database.

  def full_name(self):
    return "{} {}".format(self.first_name, self.last_name)

db.connect()
db.create_tables([Contact])
contact = Contact.create(first_name='Natalie', last_name='Black', email_address='natalie@bitmaker.co', note='teaches WDI')
print(contact)

