# Get Provider By ID

Used to get a provider.

**URL** : `/api/v1/providers/:id/`

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
    "[provider]",
  },
}
```

## Error Response

**Code** : `400 BAD REQUEST`

**Content** :

```json
{ "message": "Error message" }
```
