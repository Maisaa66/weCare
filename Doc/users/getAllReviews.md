# Get All Reviews

Used to get all reviews.

**URL** : `/api/v1/reviews/`

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
  "requestedAt": "Date",
  "data": {
    "[reviews]",
  },
}
```

## Error Response

**Code** : `400 BAD REQUEST`

**Content** :

```json
{ "message": "Error message" }
```
