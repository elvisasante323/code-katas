# Learning about regex
import re

# Search the string to see if it starts with 'The' and ends with 'Spain'
text = 'The rain in Spain'
expression = re.search('^The.*Spain$', text)

if expression:
    print('We have a match!\n')
else:
    print('There is no match!\n')

# Find all lower case characters alphabetically between 'a' and 'm'
expression = re.findall('[a-m]', text)
print(expression, '\n')

# Find all digit characters
text = 'That will be 59 dollars'
expression = re.findall('\d', text)
print(expression)
