export default defineEventHandler(() => (
    // requiring a body of this format:
    // {"orderedAt":"2024-03-29T14:10:45.204Z","guest":{"seat":1,"coach":1,"finalStationEvaNr":"8010101"},"products":[{"ecmId":12692038,"productType":"ARTICLE"}]}
    {
        "id": "dd2544c9-2613-47a1-9a12-d7c9222da7a2",
        "createdAt": "2024-03-29T15:10:45.745638+01:00",
        "status": {
            "color": "transparent",
            "description": "Wir prüfen gerade Ihre Bestellung. Sie erhalten in Kürze eine Bestätigung.",
            "icon": "hourglas-24",
            "statusType": "OPEN"
        }
    }
))
