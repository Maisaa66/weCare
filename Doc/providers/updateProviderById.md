# Update Provider By ID

Used to update a provider.

**URL** : `/api/v1/providers/:id/`

**Method** : `PATCH`

**Auth required** : YES

**Data constraints**

```json
Must be authenticated
```

**Data example**

```json
{
  "firstName": "Ziad",
  "lastName": "Eleraky"
}
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
