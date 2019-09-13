#!/usr/bin/python
# Copyright 2010 Google Inc.
# Licensed under the Apache License, Version 2.0
# http://www.apache.org/licenses/LICENSE-2.0

# Google's Python Class
# http://code.google.com/edu/languages/google-python-class/

# Modified by Sanha Lee at SNU Software Platform Lab for
# SWPP fall 2018 lecture.

import sys
from babyname_parser import BabynameParser

"""
Parse an html file that contains the popular baby names in a year,
sort them and find the common popular names with their rank.

Here's what the expected results looks like:
    Common popular babynames in 1994 (Count: 85)
    Common babyname: male rank, female rank
    Addison: 554, 800
    Adrian: 98, 834
    Alex: 50, 581
    Alexis: 227, 18
    ...
"""


def main():
    # This command-line parsing code is provided.
    # Make a list of command line arguments, omitting the [0] element
    # which is the script itself.
    args = sys.argv[1:]

    if len(args) < 1:
        print('usage: python run.py filename')
        sys.exit(1)

    filename = args[0]
    parser = BabynameParser(filename)

    # Parse male-names and female-names from the file with the implemented parser.
    parsed_malenames = parser.parse(lambda rank_to_names_tuple: rank_to_names_tuple[:2])  # DONE: Parse the rank and male-name tuples with your lambda.
    parsed_femalenames = parser.parse(lambda rank_to_names_tuple: rank_to_names_tuple[:3:2])  # DONE: Parse the rank and female-name tuples with your lambda.

    # Find the common popular names.
    common_names = []
    # DONE: Fill the common_names with (common popular babyname: male-rank, female-rank) strings.
    for parsed_malename in parsed_malenames:
        for parsed_femalename in parsed_femalenames:
            if parsed_malename[1] == parsed_femalename[1]:
                common_names.append("{0}: {1}, {2}".format(parsed_malename[1], parsed_malename[0], parsed_femalename[0]))
                break
    # TODO: Sort the list in ascending alphabetical order.
    common_names.sort()
    # Print your result.
    print("Common popular babynames in {0} (Count: {1})".format(parser.year, str(len(common_names))))
    print("Common babyname: male rank, female rank")
    for common_name in common_names:
        print(common_name)


if __name__ == '__main__':
    main()
