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

# Captain Registration Guide

This guide explains how to register a new captain using the provided API. Follow the instructions below to set up a new captain's details.

---

## API Endpoint

- **URL:** `/captain/register`
- **Method:** `POST`
- **Content-Type:** `application/json`

---

## Request Body

Provide the following details in the request body in JSON format:

```json
{
  "Captainname": {
    "first_name": "Jane",
    "last_name": "Doe"
  },
  "Email": "jane.doe@example.com",
  "Password": "yourpassword",
  "Vehicle": {
    "Color": "Red",
    "Plate": "XYZ123",
    "Capacity": 4,
    "VehicleType": "Car"
  }
}
```

### Fields Explanation:

- **Captainname:** 
  - `first_name`: The first name of the captain (e.g., "Jane").
  - `last_name`: The last name of the captain (e.g., "Doe").

- **Email:** The email address of the captain (e.g., "jane.doe@example.com").

- **Password:** A secure password for the captain's account.

- **Vehicle:**
  - `Color`: The color of the vehicle (e.g., "Red").
  - `Plate`: The vehicle's license plate number (e.g., "XYZ123").
  - `Capacity`: The seating capacity of the vehicle (e.g., 4).
  - `VehicleType`: The type of the vehicle (e.g., "Car").

---

## Example Request

```bash
curl -X POST \
  -H "Content-Type: application/json" \
  -d '{
    "Captainname": {
      "first_name": "Jane",
      "last_name": "Doe"
    },
    "Email": "jane.doe@example.com",
    "Password": "yourpassword",
    "Vehicle": {
      "Color": "Red",
      "Plate": "XYZ123",
      "Capacity": 4,
      "VehicleType": "Car"
    }
  }' \
  http://yourapiendpoint.com/captain/register
```

---

## Response

- On successful registration, the API will return a status code of `201 Created` along with the registered captain's details.
- In case of errors, an appropriate error message and status code (e.g., `400 Bad Request`) will be returned.

---

### Notes

- Ensure all required fields are included in the request body.
- Validate the email address and password format before making the request.
- The `Plate` field must be unique for each vehicle.
