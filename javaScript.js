const puzzles = document.querySelectorAll(".puzzle")

puzzles[0].style.transform = "translate(299px, 182px)"
puzzles[1].style.transform = "translate(299px, 0px)"
puzzles[2].style.transform = "translate(0px, 364px)"
puzzles[3].style.transform = "translate(0px, 182px)"
puzzles[4].style.transform = "translate(0px, 0px)"
puzzles[5].style.transform = "translate(598px, 182px)"
puzzles[6].style.transform = "translate(598px, 0px)"
puzzles[7].style.transform = "translate(299px, 364px)"
puzzles[8].style.transform = "translate(598px, 364px)"


puzzles.forEach(e => draggable(e)) 


connect(puzzles[0], puzzles[1], 268, 151, "horizontal")
connect(puzzles[1], puzzles[2], 268, 151, "horizontal")
connect(puzzles[3], puzzles[4], 268, 151, "horizontal")
connect(puzzles[4], puzzles[5], 268, 151, "horizontal")
connect(puzzles[6], puzzles[7], 268, 151, "horizontal")
connect(puzzles[7], puzzles[8], 268, 151, "horizontal")
connect(puzzles[0], puzzles[3], 268, 151, "vertical")
connect(puzzles[3], puzzles[6], 268, 151, "vertical")
connect(puzzles[1], puzzles[4], 268, 151, "vertical")
connect(puzzles[4], puzzles[7], 268, 151, "vertical")
connect(puzzles[2], puzzles[5], 268, 151, "vertical")
connect(puzzles[5], puzzles[8], 268, 151, "vertical")

