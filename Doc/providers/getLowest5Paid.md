# Get Five Lowest Paid

Used to get the lowest five paid providers.

**URL** : `/api/v1/providers?sort=hourlyRate&limit=5`

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
