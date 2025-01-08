# User Registration Guide

This guide will help you register a new user with an email, first name, last name, and password.

## API Endpoint

**URL:** `/user/registeration`  
**Method:** `POST`  
**Content-Type:** `application/json`

## Request Body

```json
{
    "Username": {
        "first_name": "John",
        "last_name": "Doe"
    },
    "Email": "john.doe@example.com",
    "Password": "yourpassword"
}