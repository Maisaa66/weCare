# Get User By ID

Used to get a user.

**URL** : `/api/v1/users/:id`

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
