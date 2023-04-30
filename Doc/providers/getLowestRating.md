# Get Lowest Rating

Used to get providers with rating lower than 2.

**URL** : `/api/v1/providers?rating[lte]=2/`

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
    "[providers]",
  },
}
```

## Error Response

**Code** : `400 BAD REQUEST`

**Content** :

```json
{ "message": "Error message" }
```
