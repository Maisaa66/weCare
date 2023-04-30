# Get All Providers

Used to get service providers in our system.

**URL** : `/api/v1/providers`

**Method** : `GET`

**Auth required** : NO

**Data constraints**

```json
No constraints
```

## Success Response

**Code** : `200 OK`

**Content example**

```json
{
  "status": "success",
  "results": 23,
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
