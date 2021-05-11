package com.example.httpserver;

import com.google.gson.Gson;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.io.*;
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;


@Service
public class CookieService {

    @Value("${url}")
    private String url;

    public void addCookie(final Cookie cookie){
        try {

            File file = new File(url);

            // if file doesnt exists, then create it
            if (!file.exists()) {
                file.createNewFile();
            }

            FileWriter fw = new FileWriter(file, true);
            BufferedWriter bw = new BufferedWriter(fw);

            Gson g = new Gson();
            Cookie s = g.fromJson(cookie.toString(), Cookie.class);
            System.out.println(s);

            bw.write(cookie.toString());
            bw.newLine();
            bw.flush();
            bw.close();

            System.out.println("Done");

        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    public List<Cookie> getAllCookies() {
        try {
            File myObj = new File(url);
            Scanner myReader = new Scanner(myObj);
            ArrayList<Cookie> cookies = new ArrayList<>();
            while (myReader.hasNextLine()) {
                String data = myReader.nextLine();
                Gson g = new Gson();
                Cookie s = g.fromJson(data, Cookie.class);

                cookies.add(s);
            }
            myReader.close();
            return cookies;
        } catch (Exception e) {
            System.out.println("An error occurred.");
            e.printStackTrace();
        }
        return new ArrayList<>();
    }
}
