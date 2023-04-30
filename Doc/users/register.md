# Register

Used to create a User.

**URL** : `/api/v1/users/signup`

**Method** : `POST`

**Auth required** : NO

**Data constraints**

```json
{
  "email": "[Unique Email]",
  "password": "[password in plain text]",
  "firstName": "[firstName in plain text]",
  "lastName": "[lastName in plain text]",
  "phoneNum": "[phoneNum in plain text]",
  "gender": "[male or female]",
  "address": {
    "country": "[country in plain text]",
    "governate": "[governate in plain text]",
    "area": "[area in plain text]",
    "street": "[street in plain text]",
    "buildingNum": "[buildingNum in numbers]",
    "apartmentNum": "[apartmentNum in numbers]"
  },
  "nationalID": "./data/id.png"
}
```

**Data example**

```json
{
  "email": "ziadeleraky@weCare.com",
  "password": "abdc1234",
  "firstName": "Ziad",
  "lastName": "Eleraky",
  "phoneNum": "+201234567891",
  "gender": "male",
  "address": {
    "country": "Egypt",
    "governate": "Cairo",
    "area": "Zamalek",
    "street": "26th July St.",
    "buildingNum": "15",
    "apartmentNum": "4"
  },
  "nationalID": "./data/id.png",
  "profileImg": "https://randomuser.me/api/portraits/men/1.jpg"
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
    "email": "ziadeleraky@weCare.com",
    "firstName": "Ziad",
    "lastName": "Eleraky",
    "phoneNum": "+201234567891",
    "gender": "male",
    "address": {
      "country": "Egypt",
      "governate": "Cairo",
      "area": "Zamalek",
      "street": "26th July St.",
      "buildingNum": "15",
      "apartmentNum": "4"
    },
    "nationalID": "./data/id.png",
    "profileImg": "https://randomuser.me/api/portraits/men/1.jpg"
  },
  "cookie": "[User Token]",
}
```

## Error Response

**Condition** : If the required attribute is missing.

**Code** : `400 BAD REQUEST`

**Content** :

```json
Email is required
```
