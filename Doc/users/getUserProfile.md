# Get User Profile

Used to get a user profile.

**URL** : `/api/v1/profile/:id/`

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
{ "message": "Error message" }
```
