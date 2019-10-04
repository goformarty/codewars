package com.marty;

public class GetTheMiddleCharacter {
    public static void main(String[] args) {
        System.out.println(getMiddle("abbc"));
    }

    public static String getMiddle(String word) {
        int length = word.length();
        if (length < 3) return word;

        int middle = length / 2;

        if (length % 2 == 0) return word.substring(middle-1, middle+1);

        return word.substring(middle, middle + 1);
    }
}
