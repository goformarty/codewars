package com.marty;

import java.util.HashMap;
import java.util.Map;

/** Write a function that will return the count of
 * distinct case-insensitive alphabetic characters
 * and numeric digits that occur more than once
 * in the input string.
 *
 * The input string can be assumed to contain only alphabets
 * (both uppercase and lowercase) and numeric digits.
 *
 * Examples:
 * "abcde" -> 0 # no characters repeats more than once
 * "aabbcde" -> 2 # 'a' and 'b'
 * "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
 * "indivisibility" -> 1 # 'i' occurs six times
 * "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
 * "aA11" -> 2 # 'a' and '1'
 * "ABBA" -> 2 # 'A' and 'B' each occur twice
 */

public class CountingDuplicates {
    public static void main(String[] Args) {
        System.out.println(duplicateCount("aAbc11"));
    }
    public static int duplicateCount(String text) {
        int count = 0;
        Map<Character, Integer> map = new HashMap();

        for (int i = 0; i < text.length(); i++) {
            char c = Character.toLowerCase(text.charAt(i));
            map.put(c, map.getOrDefault(c, 0) + 1);
        }

        for (Map.Entry<Character, Integer> entry : map.entrySet()) {
            if (entry.getValue() > 1)
                count++;
        }
        return count;
    }
}
