package com.example.httpserver;

import java.sql.Timestamp;
import java.time.LocalDateTime;

public class Cookie {

    private String clientIpAddress;
    private String port;
    private String browserInformation;
    private String clientOperatingSystem;
    private String referrer;
    private String sessionId;
    private String cookie;
    private String date;

    public Cookie() {
    }

    public Cookie(String clientIpAddress, String port, String browserInformation, String clientOperatingSystem, String referrer, String sessionId, String cookie, String date) {
        this.clientIpAddress = clientIpAddress;
        this.port = port;
        this.browserInformation = browserInformation;
        this.clientOperatingSystem = clientOperatingSystem;
        this.referrer = referrer;
        this.sessionId = sessionId;
        this.cookie = cookie;
        this.date = date;
    }

    public String getClientIpAddress() {
        return clientIpAddress;
    }

    public void setClientIpAddress(String clientIpAddress) {
        this.clientIpAddress = clientIpAddress;
    }

    public String getPort() {
        return port;
    }

    public void setPort(String port) {
        this.port = port;
    }

    public String getBrowserInformation() {
        return browserInformation;
    }

    public void setBrowserInformation(String browserInformation) {
        this.browserInformation = browserInformation;
    }

    public String getClientOperatingSystem() {
        return clientOperatingSystem;
    }

    public void setClientOperatingSystem(String clientOperatingSystem) {
        this.clientOperatingSystem = clientOperatingSystem;
    }

    public String getReferrer() {
        return referrer;
    }

    public void setReferrer(String referrer) {
        this.referrer = referrer;
    }

    public String getSessionId() {
        return sessionId;
    }

    public void setSessionId(String sessionId) {
        this.sessionId = sessionId;
    }

    public String getCookie() {
        return cookie;
    }

    public void setCookie(String cookie) {
        this.cookie = cookie;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    @Override
    public String toString() {
        return "{" +
                "clientIpAddress='" + clientIpAddress + '\'' +
                ", port='" + port + '\'' +
                ", browserInformation='" + browserInformation + '\'' +
                ", clientOperatingSystem='" + clientOperatingSystem + '\'' +
                ", referrer='" + referrer + '\'' +
                ", sessionId='" + sessionId + '\'' +
                ", cookie='" + cookie + '\'' +
                ", date='" + date + '\'' +
                '}';
    }
}
