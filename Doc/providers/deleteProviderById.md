# Delete Provider By ID

Used to delete a provider.

**URL** : `/api/v1/providers/:id/`

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
{ "message": "Error message" }
```
