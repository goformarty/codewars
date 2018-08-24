package com.marty;

// Given a number, write a function to output its reverse digits. (e.g. given 123 the answer is 321)

// Numbers should preserve their sign; i.e. a negative number should still be negative when reversed.

// Examples:
// 123 -> 321
// -345 -> -543
// 1000 -> 1

public class Main {

    public static void main(String[] args) {
        System.out.println(reverse(-134));
    }
    public static int reverse(int number) {

        int absNum = Math.abs(number);
        String numAsString = Integer.toString(absNum);

        StringBuilder sb = new StringBuilder();

        for(int i = numAsString.length() - 1; i>=0; i--) {
            sb.append(numAsString.charAt(i));
        }
        int finalNum = Integer.parseInt(sb.toString());
        if (number < 0) {
            return -finalNum;
        }
        return finalNum;
    }

}