# Get All Users

Used to get all users in our system.

**URL** : `/api/v1/user/:id/`

**Method** : `GET`

**Auth required** : YES

**Data constraints**

```json
Must be authenticated
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
