package com.marty;

public class Main {

    public static void main(String[] args) {
        System.out.println(convertTime(90062));
    }

    private static String convertTime(int timeDiff) {
        int days = timeDiff / 24 / 60 / 60;
        timeDiff -= days * 24 * 60 * 60;

        int hours = timeDiff / 60 / 60;
        timeDiff -= hours * 60 * 60;

        int minutes = timeDiff / 60;
        timeDiff -= minutes * 60;

        int seconds = timeDiff;

        return Integer.toString(days) + ' ' + Integer.toString(hours) + ' ' + Integer.toString(minutes) + ' ' + Integer.toString(seconds);
    }
}
