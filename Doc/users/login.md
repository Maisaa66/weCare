# Login

Used to collect a Token for a registered User.

**URL** : `/api/v1/users/login`

**Method** : `POST`

**Auth required** : NO

**Data constraints**

```json
{
  "email": "[valid email address]",
  "password": "[password in plain text]"
}
```

**Data example**

```json
{
  "username": "ziadeleraky@weCare.com",
  "password": "abcd1234"
}
```

## Success Response

**Code** : `200 OK`

**Content example**

```json
{
  "status": "success",
  "message": "User Logged in successfully",
  "cookie": "[User Token]"
}
```

## Error Response

**Condition** : If 'email' and 'password' combination is wrong.

**Code** : `400 BAD REQUEST`

**Content** :

```json
Invalid email or password
```
