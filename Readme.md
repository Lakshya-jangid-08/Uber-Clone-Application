# User Registration Guide

This guide will help you register a new user with an email, first name, last name, and password.

## API Endpoint

- **URL**: `/user/registration`
- **Method**: `POST`
- **Content-Type**: `application/json`

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
```

## Example Request

```bash
curl -X POST http://localhost:3000/user/registration \
-H "Content-Type: application/json" \
-d '{
  "Username": {
    "first_name": "John",
    "last_name": "Doe"
  },
  "Email": "john.doe@example.com",
  "Password": "yourpassword"
}'
```

## Response

### Success Response

- **Status**: `200 OK`
- **Body**:

```json
{
  "token": "your_generated_token",
  "user": {
    "_id": "user_id",
    "Username": {
      "first_name": "John",
      "last_name": "Doe"
    },
    "Email": "john.doe@example.com"
  }
}
```

### Error Responses

#### 400 Bad Request

- **Body**:

```json
{
  "message": "All fields are required"
}
```

#### 500 Internal Server Error

- **Body**:

```json
{
  "message": "An error occurred while registering the user"
}
```

## Notes

- Ensure that all fields are provided in the request body.
- The password should be at least 3 characters long.
- The email should be a valid email address.

For more details, refer to the `user.controller.js` and `user.service.js` files.

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
