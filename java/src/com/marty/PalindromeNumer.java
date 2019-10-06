package com.marty;

public class PalindromeNumer {

    public static void main(String[] args) {
        System.out.println(isPalindrome(12321));
    }

    public static boolean isPalindrome(int x) {
        if (x < 0 || (x % 10 == 0 && x != 0)) {
            return false;
        }
        int reversedHalf = 0;
        while (x > reversedHalf) {
            reversedHalf = reversedHalf * 10 + x % 10;
            x /= 10;
        }
        boolean isEvenPalindrome = (x == reversedHalf);
        // if number had odd length, the middle character
        // would be same for both original and reversed
        // reversedHalf of the number and can be omitted
        boolean isOddPalindrome = (x == reversedHalf / 10);

        return isEvenPalindrome || isOddPalindrome;
    }
}
