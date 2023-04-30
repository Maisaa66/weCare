# Get All Users

Used to get all users in our system.

**URL** : `/api/v1/users`

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
  "results": 52,
  "requestedAt": "Date",
  "data": {
    "[users]",
  },
}
```

## Error Response

**Code** : `400 BAD REQUEST`

**Content** :

```json
{ "message": "Error message" }
```
