# Get All Users

Used to get all users in our system.

**URL** : `/api/v1/request/`

**Method** : `GET`

**Auth required** : YES

**Data constraints**

```json
Must be an admin to fetch the endpoint
```

## Success Response

**Code** : `200 OK`

**Content example**

```json
{
  "status": "success",
  "requestedAt": "Date",
  "data": {
    "[requests]",
  },
}
```

## Error Response

**Code** : `400 BAD REQUEST`

**Content** :

```json
{ "message": "Error message" }
```
