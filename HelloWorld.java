// Java Dummy code
/**
 * Provides a simple demonstration program with basic arithmetic operations.
 * 
 * <p>This class serves as an example of Java fundamentals, including method definitions and console output.
 */
public class HelloWorld {
    // Dummy method to add two numbers
    /**
     * Adds two integer numbers and returns their sum.
     * 
     * @param a the first integer to add
     * @param b the second integer to add
     * @return the sum of a and b
     */
    public static int addNumbers(int a, int b) {
        return a + b;
    }

    /**
     * Executes the program, printing a greeting and demonstrating the addNumbers method.
     * 
     * @param args command-line arguments (not used)
     */
    public static void main(String[] args) {
        System.out.println("Hello, World!");
        // Call the dummy method and print the result
        int sum = addNumbers(5, 7);
        System.out.println("The sum of 5 and 7 is: " + sum);
    }   
}