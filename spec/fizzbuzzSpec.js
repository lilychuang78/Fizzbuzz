describe("number devided by 3 or 5", function() {
    beforeEach(function(){
        fizzbuzz = new FizzBuzz;
    });


    describe("enter number", function() {
        it("should exist", function() {
            expect(FizzBuzz).toBeDefined();
        });

        it("should return Fizzbuzz when fizzbuzz(15)", function() {
           var number = FizzBuzz(15)
            expect(number).toBe("FizzBuzz");
        });
        it("should return Fizz when FizzBuzz(3)", function() {
           var number = FizzBuzz(3)
            expect(number).toBe("Fizz");
        });
        it("should return Buzz when FizzBuzz(10)", function() {
           var number = FizzBuzz(10)
            expect(number).toBe("Buzz");
        });
    });
});