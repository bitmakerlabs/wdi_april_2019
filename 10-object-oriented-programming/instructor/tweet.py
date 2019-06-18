class Tweet:
    """ A post on twitter """
 
    def __init__(self, content, date, reply=False, original_tweet=None):
        self.content = content
        self.date = date
        self.is_it_a_reply = reply
        self.original_tweet = original_tweet 

    def __str__(self):
        return self.content

    def display_with_original(self):
        if self.is_it_a_reply:
            return "{} \n\n {}".format(self.original_tweet.content, self.content)
        else:
            return None
  
first_tweet = Tweet("hello world", "2019-05-10")
print(first_tweet)

reply_tweet = Tweet("I have something to say about what you just said",
                    "2019-05-10", 
                    True, 
                    first_tweet)

# print(reply_tweet.display_with_original())