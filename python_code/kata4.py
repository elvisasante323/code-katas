"""
Given: an array containing hashes of names
Return: a string formatted as a list of names separated by commas except for the last two names, which should be
separated by an ampersand.
"""


def namelist(names):
    if not names:
        return ''

    if len(names) == 1:
        return names[0]['name']

    new_word = ''

    for name in names:
        new_word += name['name']
        new_word += ' & ' if name == names[-2] else ', '

    comma = new_word.rfind(',')
    new_word = new_word[:comma] + '' + new_word[comma + 1]

    return new_word


print(namelist([{'name': 'Bart'}, {'name': 'Lisa'}, {'name': 'Maggie'}, {'name': 'Homer'}, {'name': 'Marge'}]))
