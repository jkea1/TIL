def wordSearch(board, word):
  answer = false

  for index, value in enumerate(word):
    def search(n, m):
      for x in range(len(board)):
        for y in range(len(board[0])):
          if value == board[x][y]:
            # 위
            if board[x-1][y] == word[index+1]:
              search(x-1, y)
    
    search(0,0)