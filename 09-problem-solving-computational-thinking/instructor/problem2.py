# Problem: Pig Latin
# Pig Latin
 # "apple" => "appleay"
 # "plum" => "umplay"
 # grape => apegray
 # Natalie => atalieNay
#  "squeeze" => "eezesquay"



#  define vowels and consonants (use list(s))
#  go through the characters in the word one by one
#  check if character is in list of vowels
#  if it's a vowel, just append "ay" at end of word
#     if it's a consonant, take that character out and append it to end of word
#  and then append ay at the end

# define function pig_latinify(string word) {
#     vowels = [a e i o u]
#     for each character in word {
#         if character exists in vowels
#             stop looping
#         else 
#             word.remove_from_beginning(character)
#             word.add_suffix(character)

#     }
#     word.add_suffix("ay")
# }

def pig_latinify(word):
    vowels = ['a', 'e', 'i', 'o', 'u']
    for character in word:
        if character.lower() in vowels:
            break
        else:
            word = word[1:] + word[0]

    return word + "ay"

user_word = input()
print(pig_latinify(user_word))
