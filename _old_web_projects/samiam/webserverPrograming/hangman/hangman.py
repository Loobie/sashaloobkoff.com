######################################### Hangman in Python                    ## Sasha Loobkoff                       ## 11/4/02                              ## CS 116 - Web Server Programming      ## Dean Nevins                          #########################################import string# open words.txt file and create array named wordsf=open("E:/Python/hangman/words.txt", "r")words = string.split(f.read(),"\n")f.close()# open display.txt file and create array named displayf=open("E:/Python/hangman/display.txt", "r")display = string.split(f.read(),"$")f.close() game = 0guessedLetters = ''reply = ''while ( (string.lower(raw_input("\nWould you like to play a game of hangman?\n"))) == 'y'):    print "\nGreat let's play.\n"    word = words[game]    length = len(word)    # create display word    displayWord = ['_']    for i in range(length - 1):        displayWord.append(' _')        wrong = 0    right = 0    while( (right < length) and (wrong < 7) ):        # display word and gallows        # print word        for i in range(length):            print displayWord[i],        print "\n"        print display[wrong]        guessedLetters = guessedLetters + reply        print "Previous guesses:\n",guessedLetters, "\n"        reply = string.lower(raw_input("Please enter a letter...\n"))        print "\n"        # check guess        for j in range(length):            if (reply == word[j]):                found = "true"                displayWord[j] = reply                right = right + 1        # if guess is incorrect, increment wrong        # and display another body part        if (found != "true"):            wrong = wrong + 1                    # reset found flag            found = "false"    # give results               if (right == length):        print "Congratulations, you win!\nThe word was", word    else:        print "Sorry Charlie, you lose.\nThe word was", word        print display[wrong],        print "\n"    # increment game such that new word is chosen        game = game + 1        # reinitialize variables    guessedLetters = ''    reply = ''else:    print "Be that way then."