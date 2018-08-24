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
        System.out.println(reverse2(-1000));
        System.out.println(reverse3(-951));
    }

    private static int reverse(int number) {

        int absNum = Math.abs(number);
        String numAsString = Integer.toString(absNum);

        StringBuilder sb = new StringBuilder();

        for (int i = numAsString.length() - 1; i >= 0; i--) {
            sb.append(numAsString.charAt(i));
        }
        int finalNum = Integer.parseInt(sb.toString());
        return (number < 0) ? -finalNum : finalNum;
    }

    private static int reverse2(int number) {
        boolean negativeNumber = (number < 0) ? true : false;

        int reversedNumber = Integer.parseInt(new StringBuilder().append(Math.abs(number)).reverse().toString());

        return negativeNumber ? -reversedNumber : reversedNumber;
    }

    private static int reverse3(int number) {
        int reversedNumber = Integer.parseInt(new StringBuilder().append(Math.abs(number)).reverse().toString());
        return number < 0 ? -reversedNumber : reversedNumber;
    }
}
