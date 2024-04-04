export default defineEventHandler(() => (
    {
        "trip": {
            "tripDate": "2024-03-31",
            "trainType": "ICE",
            "vzn": "596",
            "actualPosition": 195824,
            "distanceFromLastStop": 13139,
            "totalDistance": 792104,
            "stopInfo": {
                "scheduledNext": "8000244",
                "actualNext": "8000244",
                "actualLast": "8000096",
                "actualLastStarted": "8000244",
                "finalStationName": "Berlin Hbf",
                "finalStationEvaNr": "8098160"
            },
            "stops": [{
                "station": {
                    "evaNr": "8000261",
                    "name": "München Hbf",
                    "code": null,
                    "geocoordinates": {"latitude": 48.140232, "longitude": 11.558335}
                },
                "timetable": {
                    "scheduledArrivalTime": null,
                    "actualArrivalTime": null,
                    "showActualArrivalTime": null,
                    "arrivalDelay": "",
                    "scheduledDepartureTime": 1711882500000,
                    "actualDepartureTime": 1711882548000,
                    "showActualDepartureTime": true,
                    "departureDelay": ""
                },
                "track": {"scheduled": "18", "actual": "18"},
                "info": {
                    "status": 0,
                    "passed": true,
                    "positionStatus": "passed",
                    "distance": 0,
                    "distanceFromStart": 0
                },
                "delayReasons": [{"code": "31", "text": "Bauarbeiten"}]
            }, {
                "station": {
                    "evaNr": "8004158",
                    "name": "München-Pasing",
                    "code": null,
                    "geocoordinates": {"latitude": 48.149852, "longitude": 11.461872}
                },
                "timetable": {
                    "scheduledArrivalTime": 1711882920000,
                    "actualArrivalTime": 1711882931000,
                    "showActualArrivalTime": true,
                    "arrivalDelay": "",
                    "scheduledDepartureTime": 1711883040000,
                    "actualDepartureTime": 1711883067000,
                    "showActualDepartureTime": true,
                    "departureDelay": ""
                },
                "track": {"scheduled": "10", "actual": "10"},
                "info": {
                    "status": 0,
                    "passed": true,
                    "positionStatus": "passed",
                    "distance": 7239,
                    "distanceFromStart": 7239
                },
                "delayReasons": [{"code": "31", "text": "Bauarbeiten"}]
            }, {
                "station": {
                    "evaNr": "8000013",
                    "name": "Augsburg Hbf",
                    "code": null,
                    "geocoordinates": {"latitude": 48.365441, "longitude": 10.88557}
                },
                "timetable": {
                    "scheduledArrivalTime": 1711884240000,
                    "actualArrivalTime": 1711884281000,
                    "showActualArrivalTime": true,
                    "arrivalDelay": "",
                    "scheduledDepartureTime": 1711884360000,
                    "actualDepartureTime": 1711884458000,
                    "showActualDepartureTime": true,
                    "departureDelay": "+1"
                },
                "track": {"scheduled": "1", "actual": "1"},
                "info": {
                    "status": 0,
                    "passed": true,
                    "positionStatus": "passed",
                    "distance": 48952,
                    "distanceFromStart": 56191
                },
                "delayReasons": [{"code": "31", "text": "Bauarbeiten"}]
            }, {
                "station": {
                    "evaNr": "8000170",
                    "name": "Ulm Hbf",
                    "code": null,
                    "geocoordinates": {"latitude": 48.399437, "longitude": 9.982227}
                },
                "timetable": {
                    "scheduledArrivalTime": 1711886340000,
                    "actualArrivalTime": 1711886785000,
                    "showActualArrivalTime": true,
                    "arrivalDelay": "+7",
                    "scheduledDepartureTime": 1711886460000,
                    "actualDepartureTime": 1711886982000,
                    "showActualDepartureTime": true,
                    "departureDelay": "+8"
                },
                "track": {"scheduled": "1", "actual": "1"},
                "info": {
                    "status": 0,
                    "passed": true,
                    "positionStatus": "passed",
                    "distance": 66838,
                    "distanceFromStart": 123029
                },
                "delayReasons": [{"code": "31", "text": "Bauarbeiten"}]
            }, {
                "station": {
                    "evaNr": "8000096",
                    "name": "Stuttgart Hbf",
                    "code": null,
                    "geocoordinates": {"latitude": 48.784084, "longitude": 9.181635}
                },
                "timetable": {
                    "scheduledArrivalTime": 1711888980000,
                    "actualArrivalTime": 1711889237000,
                    "showActualArrivalTime": true,
                    "arrivalDelay": "+4",
                    "scheduledDepartureTime": 1711889460000,
                    "actualDepartureTime": 1711889645000,
                    "showActualDepartureTime": true,
                    "departureDelay": "+3"
                },
                "track": {"scheduled": "10", "actual": "10"},
                "info": {
                    "status": 0,
                    "passed": true,
                    "positionStatus": "departed",
                    "distance": 72795,
                    "distanceFromStart": 195824
                },
                "delayReasons": [{"code": "31", "text": "Bauarbeiten"}]
            }, {
                "station": {
                    "evaNr": "8000244",
                    "name": "Mannheim Hbf",
                    "code": null,
                    "geocoordinates": {"latitude": 49.479354, "longitude": 8.468921}
                },
                "timetable": {
                    "scheduledArrivalTime": 1711892340000,
                    "actualArrivalTime": 1711892460000,
                    "showActualArrivalTime": true,
                    "arrivalDelay": "+2",
                    "scheduledDepartureTime": 1711892520000,
                    "actualDepartureTime": 1711892520000,
                    "showActualDepartureTime": true,
                    "departureDelay": ""
                },
                "track": {"scheduled": "2", "actual": "2"},
                "info": {
                    "status": 0,
                    "passed": false,
                    "positionStatus": "future",
                    "distance": 93116,
                    "distanceFromStart": 288940
                },
                "delayReasons": [{"code": "31", "text": "Bauarbeiten"}]
            }, {
                "station": {
                    "evaNr": "8000105",
                    "name": "Frankfurt(Main)Hbf",
                    "code": null,
                    "geocoordinates": {"latitude": 50.107145, "longitude": 8.663789}
                },
                "timetable": {
                    "scheduledArrivalTime": 1711894080000,
                    "actualArrivalTime": 1711894800000,
                    "showActualArrivalTime": true,
                    "arrivalDelay": "+12",
                    "scheduledDepartureTime": 1711894380000,
                    "actualDepartureTime": 1711895040000,
                    "showActualDepartureTime": true,
                    "departureDelay": "+11"
                },
                "track": {"scheduled": "9", "actual": "9"},
                "info": {
                    "status": 0,
                    "passed": false,
                    "positionStatus": "future",
                    "distance": 71215,
                    "distanceFromStart": 360155
                },
                "delayReasons": [{"code": "31", "text": "Bauarbeiten"}]
            }, {
                "station": {
                    "evaNr": "8000115",
                    "name": "Fulda",
                    "code": null,
                    "geocoordinates": {"latitude": 50.554723, "longitude": 9.683977}
                },
                "timetable": {
                    "scheduledArrivalTime": 1711900440000,
                    "actualArrivalTime": 1711900440000,
                    "showActualArrivalTime": true,
                    "arrivalDelay": "",
                    "scheduledDepartureTime": 1711900560000,
                    "actualDepartureTime": 1711900560000,
                    "showActualDepartureTime": true,
                    "departureDelay": ""
                },
                "track": {"scheduled": "6", "actual": "6"},
                "info": {
                    "status": 0,
                    "passed": false,
                    "positionStatus": "future",
                    "distance": 87891,
                    "distanceFromStart": 448046
                },
                "delayReasons": [{"code": "31", "text": "Bauarbeiten"}]
            }, {
                "station": {
                    "evaNr": "8010101",
                    "name": "Erfurt Hbf",
                    "code": null,
                    "geocoordinates": {"latitude": 50.9723561, "longitude": 11.0379928}
                },
                "timetable": {
                    "scheduledArrivalTime": 1711904820000,
                    "actualArrivalTime": 1711904820000,
                    "showActualArrivalTime": true,
                    "arrivalDelay": "",
                    "scheduledDepartureTime": 1711904940000,
                    "actualDepartureTime": 1711904940000,
                    "showActualDepartureTime": true,
                    "departureDelay": ""
                },
                "track": {"scheduled": "10", "actual": "10"},
                "info": {
                    "status": 0,
                    "passed": false,
                    "positionStatus": "future",
                    "distance": 105979,
                    "distanceFromStart": 554025
                },
                "delayReasons": [{"code": "31", "text": "Bauarbeiten"}]
            }, {
                "station": {
                    "evaNr": "8010159",
                    "name": "Halle(Saale)Hbf",
                    "code": null,
                    "geocoordinates": {"latitude": 51.477509, "longitude": 11.987085}
                },
                "timetable": {
                    "scheduledArrivalTime": 1711906800000,
                    "actualArrivalTime": 1711906800000,
                    "showActualArrivalTime": true,
                    "arrivalDelay": "",
                    "scheduledDepartureTime": 1711906920000,
                    "actualDepartureTime": 1711906920000,
                    "showActualDepartureTime": true,
                    "departureDelay": ""
                },
                "track": {"scheduled": "7", "actual": "8"},
                "info": {
                    "status": 0,
                    "passed": false,
                    "positionStatus": "future",
                    "distance": 86760,
                    "distanceFromStart": 640785
                },
                "delayReasons": [{"code": "31", "text": "Bauarbeiten"}]
            }, {
                "station": {
                    "evaNr": "8011113",
                    "name": "Berlin Südkreuz",
                    "code": null,
                    "geocoordinates": {"latitude": 52.475047, "longitude": 13.365319}
                },
                "timetable": {
                    "scheduledArrivalTime": 1711910760000,
                    "actualArrivalTime": 1711910760000,
                    "showActualArrivalTime": true,
                    "arrivalDelay": "",
                    "scheduledDepartureTime": 1711910880000,
                    "actualDepartureTime": 1711910880000,
                    "showActualDepartureTime": true,
                    "departureDelay": ""
                },
                "track": {"scheduled": "6", "actual": "6"},
                "info": {
                    "status": 0,
                    "passed": false,
                    "positionStatus": "future",
                    "distance": 145690,
                    "distanceFromStart": 786475
                },
                "delayReasons": [{"code": "31", "text": "Bauarbeiten"}]
            }, {
                "station": {
                    "evaNr": "8098160",
                    "name": "Berlin Hbf",
                    "code": null,
                    "geocoordinates": {"latitude": 52.525592, "longitude": 13.369545}
                },
                "timetable": {
                    "scheduledArrivalTime": 1711911120000,
                    "actualArrivalTime": 1711911120000,
                    "showActualArrivalTime": true,
                    "arrivalDelay": "",
                    "scheduledDepartureTime": null,
                    "actualDepartureTime": null,
                    "showActualDepartureTime": null,
                    "departureDelay": ""
                },
                "track": {"scheduled": "5", "actual": "5"},
                "info": {
                    "status": 0,
                    "passed": false,
                    "positionStatus": "future",
                    "distance": 5629,
                    "distanceFromStart": 792104
                },
                "delayReasons": [{"code": "31", "text": "Bauarbeiten"}]
            }]
        },
        "connection": {
            "trainType": null,
            "vzn": null,
            "trainNumber": null,
            "station": null,
            "timetable": null,
            "track": null,
            "info": null,
            "stops": null,
            "conflict": "NO_CONFLICT"
        },
        "active": null
    }
))
