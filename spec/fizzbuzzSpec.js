describe("number devided by 3 or 5", function() {
    beforeEach(function(){
        fizzbuzz = new fizzbuzz;
    });


    describe("enter number", function() {
        it("should exist", function() {
            expect(fizzbuzz).toBeDefined();
        });

        it("should return Fizzbuzz when fizzbuzz(15)", function() {
           var number = fizzbuzz(15)
            expect(number).toBe("Fizzbuzz");
        });
        it("should return Fizz when fizzbuzz(3)", function() {
           var number = fizzbuzz(3)
            expect(number).toBe("Fizz");
        });
        it("should return Buzz when fizzbuzz(10)", function() {
           var number = fizzbuzz(10)
            expect(number).toBe("Buzz");
        });
    });
});