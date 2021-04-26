### Part 1a
    1. 20
    2. 20
    3. 20
    4. returns an error because 'let' variables declared in {} exist only in {}
    5. returns an error because we can't assign to a constant variable on line 7 since we already assigned it to be 0
    6. returns an error because of the same reason as 5
### Part 1b
    1. It will print 3, because i will be reppresent the length of the array 'prices'
    2. It will print 150 because it will calculate the discounted price of the last price which is (50% of the 300) 150
    3. It will print print 150 which is the last discounted price multiplied by 100 and divided by 100
    4. The function will return an array discounted which will contain the final prices of all 3 prices because we push to it everytime we loop on line 9
    5. line 12 will give an error because we refer to a let variable that we defined in for loop and it doesn't exist outside of a for loop
    6. line 13 will give an error because we refer to a let variable that we defined in for loop and it doesn't exist outside of a for loop
    7. line 14 will print 150 and it's fine because finalPrice is declared at the same level as when we call it
    8. This function will return the same as what I mentioned in question 4, there should be no error
    9. line 11 will print an error because we defined i in for loop and this let varibale doesn't exist outside of a for loop
    10. line 12 will print 3 which is the length of the array that we calculated on line 4
    11. This function will return the same as what I mentioned in question 4, there should be no error
    12. A) student.name
        B) student['Grad Year']
        C) student.greeting()
        D) student['Favorite Teacher'].name
        E) student.courseLoad[0]  
    13. A) It will print 32 because + will concatenate 3 and 2 as a string
        B) It will print 1 because 3 will be cast to integer 3
        C) It will print 3 because it will ad null to integer 3
        D) It will print 3null because it will concatenate string null to string 3
        E) It will print 4 because it will convert boolean to it equivalent 1 and add 3
        F) It will print 0 because equivalent of flase is 0 and null is 0
        G) It will print 3 undefined because it will concatenate 3 and undefiined
        H) It will print NaN which shows a failed operation on numbers
    14. A) true because '2' becomes number
        B) true because in dictionary compatison first char 2 is bigger than 1
        C) true because == compares the values themselves
        D) false because === checks types as well
        E) false because true will be an equivalent of 1
        F) true because Boolean(2) will convert to true so both values and types are equal
    15. == operator checks only the values of variables === operator is a strict operator so i checks both values and types of variables 

    17. The result of this function will be the modified array [2, 4, 6]. In function modifyArray, in for loop it will call a callbackfunction doSomething that will multiply 1 , 2 and 3 by 2 and push it to newArr which is the return of modifyArray
    19. 1 4 3 2