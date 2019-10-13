package com.marty;

// https://leetcode.com/articles/duplicate-zeros/

/*
Given a fixed length array arr of integers, duplicate each occurrence of zero, shifting the remaining elements to the right.

Note that elements beyond the length of the original array are not written.

Do the above modifications to the input array in place, do not return anything from your function.

*/

import java.util.Arrays;

public class DuplicateZeroesInPlace {

    public static void main(String[] args) {
        duplicateZeroes(new int[]{1, 0, 3, 4, 0, 4, 5, 4, 0});
    }

    public static void duplicateZeroes(int[] arr) {
        int zeroesToDuplicate = 0;
        int length = arr.length - 1;

        // count zereos to duplicate
        for (int i = 0; i <= length - zeroesToDuplicate; i++) {
            if (arr[i] == 0) {
                if (i == length - zeroesToDuplicate) {
                    arr[length] = 0;
                    length--;
                    break;
                }
                zeroesToDuplicate++;
            }
        }

        int lastIndex = length - zeroesToDuplicate;
        for (int j = lastIndex; j >= 0; j--) {
            if (arr[j] == 0) {
                arr[j + zeroesToDuplicate] = 0;
                zeroesToDuplicate--;
            }
            arr[j + zeroesToDuplicate] = arr[j];
        }

        System.out.printf("final array is %s \n", Arrays.toString(arr));
    }
}
