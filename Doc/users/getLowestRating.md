# Get Five Lowest Rating

Used to get the lowest five rating users.

**URL** : `/api/v1/users?rating[lte]=2/`

**Method** : `GET`

**Auth required** : YES

**Data constraints**

```json
Must be an admin.
```

## Success Response

**Code** : `200 OK`

**Content example**

```json
{
  "status": "success",
  "results": 5,
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
