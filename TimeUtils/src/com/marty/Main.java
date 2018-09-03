package com.marty;

//Given time in seconds, return formatted string, as shown in following example:
//
//        ####Example: Input: 90061 sec
//
//        Output: 1 1 1 1
//
//        e.g
//
//        90061 sec: 1 1 1 1 (1 day, 1 hour, 1 min and 1 seconds)
//        93784 sec: 1 2 3 4 (1 day, 2 hours, 3 mins, 4 seconds)

public class Main {

    public static void main(String[] args) {
        System.out.println(convertTime(90062));
    }

    public static String convertTime(int timeDiff) {
        int days;
        int hours;
        int mins;
        int secs;

        days = timeDiff / (24 * 60 * 60);
        timeDiff = timeDiff - (days * 24 * 60 * 60);
        System.out.println(timeDiff);

        hours = timeDiff / (60 * 60);
        timeDiff -= (hours * timeDiff);

        mins = timeDiff / 60;
        timeDiff -= (mins * timeDiff);

        secs = timeDiff;
        String time = days + " " + hours + " " + mins + " " + secs;
        return time;

    }
}
