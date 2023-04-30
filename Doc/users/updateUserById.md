# Get All Users

Used to get all users in our system.

**URL** : `/api/v1/users/:id`

**Method** : `PATCH`

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
  "results": 1,
  "requestedAt": "Date",
  "data": {
    "[user]",
  },
}
```

## Error Response

**Code** : `400 BAD REQUEST`

**Content** :

```json
{
  "message": "[Error Message]",
}
```
