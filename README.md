
  # Chess   
  A console application to get all possible moves of selective pieces (King, Queen, Pawn) 
  
  # Approach
  Instead of dividing the problem by number of available, get all the movement patterns, so that they can be reused.
  Identified movement patterns:
  Rook, Bishop, Pawn, King.
  Movements of Queen are combinations of Rook and Bishop.
 
  ## Installation steps   
  Node Version used: v16.13.1 
  `npm install` `npm run start`
  
  ## Inputs and expected Output 
  The App is run in command line, and expects the input to be in the following manner:   
  ```Pawn, A2```

  Expected Output,
  Possible moves: A3
      
  ## Tests
  Run `npm run test` command to run the tests.
  
  I have tried to cover tests for getPossibleMoves function in Pattern class implementations and Piece class.