# Get All Users

Used to get all users in our system.

**URL** : `/api/v1/users/:id`

**Method** : `DELETE`

**Auth required** : YES

**Data constraints**

```json
Must be authenticated
```

## Success Response

**Code** : `201 OK`

**Content example**

```json
{
  "status": "success"
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
