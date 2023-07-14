const apiaries = [
  {
    id: 1,
    name: 'Kane',
    latitude: 85.180384,
    longitude: -89.091192,
    gateway: 0,
    hives: [
      {
        id: 1,
        name: 'Roy',
        health: 2,
        battery: 17,
        samples: [
          {
            temperature: 36,
            umidity: 57,
            weight: 67,
            co2: 109,
            vibration: 0
          },
          {
            temperature: 33,
            umidity: 38,
            weight: 53,
            co2: 163,
            vibration: 0
          },
          {
            temperature: 35,
            umidity: 78,
            weight: 62,
            co2: 111,
            vibration: 0
          },
          {
            temperature: 35,
            umidity: 45,
            weight: 53,
            co2: 59,
            vibration: 0
          },
          {
            temperature: 32,
            umidity: 80,
            weight: 93,
            co2: 106,
            vibration: 0
          },
          {
            temperature: 34,
            umidity: 77,
            weight: 93,
            co2: 25,
            vibration: 0
          },
          {
            temperature: 33,
            umidity: 52,
            weight: 93,
            co2: 54,
            vibration: 0
          },
          {
            temperature: 34,
            umidity: 29,
            weight: 81,
            co2: 110,
            vibration: 0
          },
          {
            temperature: 37,
            umidity: 50,
            weight: 89,
            co2: 72,
            vibration: 1
          },
          {
            temperature: 34,
            umidity: 69,
            weight: 97,
            co2: 151,
            vibration: 0
          },
          {
            temperature: 35,
            umidity: 46,
            weight: 90,
            co2: 87,
            vibration: 0
          },
          {
            temperature: 36,
            umidity: 30,
            weight: 87,
            co2: 175,
            vibration: 0
          }
        ]
      },
      {
        id: 2,
        name: 'Reyes',
        health: 1,
        battery: 44,
        samples: [
          {
            temperature: 36,
            umidity: 27,
            weight: 52,
            co2: 32,
            vibration: 1
          },
          {
            temperature: 34,
            umidity: 24,
            weight: 81,
            co2: 161,
            vibration: 0
          },
          {
            temperature: 32,
            umidity: 78,
            weight: 65,
            co2: 69,
            vibration: 1
          },
          {
            temperature: 36,
            umidity: 72,
            weight: 89,
            co2: 193,
            vibration: 0
          },
          {
            temperature: 33,
            umidity: 67,
            weight: 62,
            co2: 182,
            vibration: 0
          },
          {
            temperature: 36,
            umidity: 76,
            weight: 67,
            co2: 164,
            vibration: 0
          },
          {
            temperature: 36,
            umidity: 57,
            weight: 54,
            co2: 78,
            vibration: 0
          },
          {
            temperature: 35,
            umidity: 73,
            weight: 99,
            co2: 71,
            vibration: 0
          },
          {
            temperature: 36,
            umidity: 32,
            weight: 64,
            co2: 45,
            vibration: 0
          },
          {
            temperature: 35,
            umidity: 21,
            weight: 61,
            co2: 54,
            vibration: 0
          },
          {
            temperature: 36,
            umidity: 67,
            weight: 88,
            co2: 127,
            vibration: 1
          },
          {
            temperature: 36,
            umidity: 37,
            weight: 61,
            co2: 58,
            vibration: 0
          }
        ]
      },
      {
        id: 3,
        name: 'Estes',
        health: 1,
        battery: 52,
        samples: [
          {
            temperature: 32,
            umidity: 21,
            weight: 84,
            co2: 131,
            vibration: 0
          },
          {
            temperature: 34,
            umidity: 60,
            weight: 71,
            co2: 29,
            vibration: 1
          },
          {
            temperature: 36,
            umidity: 72,
            weight: 87,
            co2: 77,
            vibration: 0
          },
          {
            temperature: 34,
            umidity: 28,
            weight: 70,
            co2: 25,
            vibration: 1
          },
          {
            temperature: 35,
            umidity: 28,
            weight: 85,
            co2: 121,
            vibration: 1
          },
          {
            temperature: 35,
            umidity: 21,
            weight: 87,
            co2: 169,
            vibration: 1
          },
          {
            temperature: 34,
            umidity: 39,
            weight: 58,
            co2: 35,
            vibration: 0
          },
          {
            temperature: 33,
            umidity: 79,
            weight: 96,
            co2: 151,
            vibration: 0
          },
          {
            temperature: 32,
            umidity: 29,
            weight: 52,
            co2: 57,
            vibration: 0
          },
          {
            temperature: 37,
            umidity: 43,
            weight: 58,
            co2: 116,
            vibration: 0
          },
          {
            temperature: 32,
            umidity: 41,
            weight: 96,
            co2: 102,
            vibration: 0
          },
          {
            temperature: 32,
            umidity: 54,
            weight: 64,
            co2: 154,
            vibration: 0
          }
        ]
      },
      {
        id: 4,
        name: 'Chan',
        health: 1,
        battery: 31,
        samples: [
          {
            temperature: 32,
            umidity: 67,
            weight: 79,
            co2: 139,
            vibration: 1
          },
          {
            temperature: 32,
            umidity: 45,
            weight: 55,
            co2: 192,
            vibration: 1
          },
          {
            temperature: 37,
            umidity: 58,
            weight: 90,
            co2: 85,
            vibration: 0
          },
          {
            temperature: 34,
            umidity: 33,
            weight: 87,
            co2: 123,
            vibration: 0
          },
          {
            temperature: 36,
            umidity: 27,
            weight: 57,
            co2: 86,
            vibration: 0
          },
          {
            temperature: 37,
            umidity: 28,
            weight: 74,
            co2: 122,
            vibration: 1
          },
          {
            temperature: 33,
            umidity: 53,
            weight: 64,
            co2: 35,
            vibration: 0
          },
          {
            temperature: 35,
            umidity: 35,
            weight: 65,
            co2: 185,
            vibration: 0
          },
          {
            temperature: 33,
            umidity: 57,
            weight: 99,
            co2: 111,
            vibration: 0
          },
          {
            temperature: 35,
            umidity: 67,
            weight: 64,
            co2: 32,
            vibration: 1
          },
          {
            temperature: 33,
            umidity: 68,
            weight: 95,
            co2: 41,
            vibration: 0
          },
          {
            temperature: 34,
            umidity: 64,
            weight: 79,
            co2: 126,
            vibration: 0
          }
        ]
      },
      {
        id: 5,
        name: 'Kinney',
        health: 2,
        battery: 2,
        samples: [
          {
            temperature: 35,
            umidity: 34,
            weight: 100,
            co2: 193,
            vibration: 1
          },
          {
            temperature: 35,
            umidity: 33,
            weight: 56,
            co2: 95,
            vibration: 1
          },
          {
            temperature: 32,
            umidity: 53,
            weight: 85,
            co2: 114,
            vibration: 0
          },
          {
            temperature: 32,
            umidity: 65,
            weight: 72,
            co2: 192,
            vibration: 1
          },
          {
            temperature: 32,
            umidity: 24,
            weight: 89,
            co2: 36,
            vibration: 1
          },
          {
            temperature: 34,
            umidity: 68,
            weight: 90,
            co2: 59,
            vibration: 1
          },
          {
            temperature: 34,
            umidity: 49,
            weight: 72,
            co2: 149,
            vibration: 1
          },
          {
            temperature: 37,
            umidity: 35,
            weight: 100,
            co2: 88,
            vibration: 0
          },
          {
            temperature: 32,
            umidity: 69,
            weight: 89,
            co2: 77,
            vibration: 0
          },
          {
            temperature: 35,
            umidity: 23,
            weight: 58,
            co2: 146,
            vibration: 1
          },
          {
            temperature: 37,
            umidity: 59,
            weight: 53,
            co2: 165,
            vibration: 0
          },
          {
            temperature: 35,
            umidity: 32,
            weight: 64,
            co2: 34,
            vibration: 0
          }
        ]
      },
      {
        id: 6,
        name: 'Montgomery',
        health: 2,
        battery: 79,
        samples: [
          {
            temperature: 33,
            umidity: 31,
            weight: 99,
            co2: 186,
            vibration: 1
          },
          {
            temperature: 36,
            umidity: 80,
            weight: 52,
            co2: 125,
            vibration: 0
          },
          {
            temperature: 36,
            umidity: 28,
            weight: 94,
            co2: 72,
            vibration: 1
          },
          {
            temperature: 34,
            umidity: 76,
            weight: 79,
            co2: 119,
            vibration: 0
          },
          {
            temperature: 33,
            umidity: 51,
            weight: 98,
            co2: 97,
            vibration: 1
          },
          {
            temperature: 36,
            umidity: 42,
            weight: 57,
            co2: 159,
            vibration: 1
          },
          {
            temperature: 36,
            umidity: 42,
            weight: 61,
            co2: 191,
            vibration: 1
          },
          {
            temperature: 35,
            umidity: 35,
            weight: 58,
            co2: 170,
            vibration: 0
          },
          {
            temperature: 36,
            umidity: 27,
            weight: 92,
            co2: 154,
            vibration: 0
          },
          {
            temperature: 34,
            umidity: 64,
            weight: 79,
            co2: 44,
            vibration: 0
          },
          {
            temperature: 36,
            umidity: 25,
            weight: 98,
            co2: 131,
            vibration: 1
          },
          {
            temperature: 36,
            umidity: 60,
            weight: 69,
            co2: 129,
            vibration: 0
          }
        ]
      },
      {
        id: 7,
        name: 'Randall',
        health: 2,
        battery: 62,
        samples: [
          {
            temperature: 37,
            umidity: 36,
            weight: 75,
            co2: 152,
            vibration: 1
          },
          {
            temperature: 35,
            umidity: 51,
            weight: 55,
            co2: 149,
            vibration: 0
          },
          {
            temperature: 32,
            umidity: 47,
            weight: 79,
            co2: 177,
            vibration: 1
          },
          {
            temperature: 34,
            umidity: 41,
            weight: 50,
            co2: 186,
            vibration: 0
          },
          {
            temperature: 32,
            umidity: 73,
            weight: 76,
            co2: 59,
            vibration: 1
          },
          {
            temperature: 35,
            umidity: 62,
            weight: 98,
            co2: 140,
            vibration: 1
          },
          {
            temperature: 34,
            umidity: 24,
            weight: 65,
            co2: 89,
            vibration: 1
          },
          {
            temperature: 34,
            umidity: 27,
            weight: 61,
            co2: 142,
            vibration: 1
          },
          {
            temperature: 32,
            umidity: 71,
            weight: 79,
            co2: 99,
            vibration: 1
          },
          {
            temperature: 37,
            umidity: 20,
            weight: 65,
            co2: 168,
            vibration: 0
          },
          {
            temperature: 34,
            umidity: 58,
            weight: 98,
            co2: 49,
            vibration: 1
          },
          {
            temperature: 34,
            umidity: 33,
            weight: 100,
            co2: 97,
            vibration: 1
          }
        ]
      },
      {
        id: 8,
        name: 'Perez',
        health: 0,
        battery: 99,
        samples: [
          {
            temperature: 37,
            umidity: 73,
            weight: 89,
            co2: 95,
            vibration: 0
          },
          {
            temperature: 35,
            umidity: 57,
            weight: 54,
            co2: 26,
            vibration: 1
          },
          {
            temperature: 37,
            umidity: 28,
            weight: 55,
            co2: 112,
            vibration: 1
          },
          {
            temperature: 32,
            umidity: 41,
            weight: 82,
            co2: 115,
            vibration: 1
          },
          {
            temperature: 34,
            umidity: 39,
            weight: 84,
            co2: 121,
            vibration: 1
          },
          {
            temperature: 37,
            umidity: 23,
            weight: 94,
            co2: 31,
            vibration: 1
          },
          {
            temperature: 32,
            umidity: 54,
            weight: 60,
            co2: 90,
            vibration: 0
          },
          {
            temperature: 36,
            umidity: 76,
            weight: 55,
            co2: 123,
            vibration: 0
          },
          {
            temperature: 34,
            umidity: 75,
            weight: 94,
            co2: 79,
            vibration: 1
          },
          {
            temperature: 37,
            umidity: 50,
            weight: 53,
            co2: 143,
            vibration: 1
          },
          {
            temperature: 34,
            umidity: 24,
            weight: 88,
            co2: 104,
            vibration: 0
          },
          {
            temperature: 37,
            umidity: 42,
            weight: 62,
            co2: 142,
            vibration: 1
          }
        ]
      },
      {
        id: 9,
        name: 'Chang',
        health: 1,
        battery: 85,
        samples: [
          {
            temperature: 37,
            umidity: 35,
            weight: 78,
            co2: 62,
            vibration: 0
          },
          {
            temperature: 34,
            umidity: 75,
            weight: 99,
            co2: 188,
            vibration: 1
          },
          {
            temperature: 34,
            umidity: 31,
            weight: 63,
            co2: 86,
            vibration: 0
          },
          {
            temperature: 33,
            umidity: 41,
            weight: 96,
            co2: 68,
            vibration: 1
          },
          {
            temperature: 36,
            umidity: 48,
            weight: 61,
            co2: 152,
            vibration: 0
          },
          {
            temperature: 32,
            umidity: 30,
            weight: 55,
            co2: 185,
            vibration: 1
          },
          {
            temperature: 35,
            umidity: 33,
            weight: 61,
            co2: 168,
            vibration: 1
          },
          {
            temperature: 33,
            umidity: 41,
            weight: 98,
            co2: 58,
            vibration: 1
          },
          {
            temperature: 33,
            umidity: 61,
            weight: 63,
            co2: 142,
            vibration: 1
          },
          {
            temperature: 37,
            umidity: 43,
            weight: 52,
            co2: 180,
            vibration: 1
          },
          {
            temperature: 36,
            umidity: 66,
            weight: 93,
            co2: 183,
            vibration: 1
          },
          {
            temperature: 33,
            umidity: 26,
            weight: 75,
            co2: 123,
            vibration: 0
          }
        ]
      },
      {
        id: 10,
        name: 'Kemp',
        health: 2,
        battery: 40,
        samples: [
          {
            temperature: 36,
            umidity: 55,
            weight: 67,
            co2: 108,
            vibration: 1
          },
          {
            temperature: 36,
            umidity: 62,
            weight: 100,
            co2: 25,
            vibration: 1
          },
          {
            temperature: 33,
            umidity: 60,
            weight: 79,
            co2: 43,
            vibration: 1
          },
          {
            temperature: 32,
            umidity: 48,
            weight: 79,
            co2: 117,
            vibration: 1
          },
          {
            temperature: 37,
            umidity: 23,
            weight: 79,
            co2: 67,
            vibration: 0
          },
          {
            temperature: 36,
            umidity: 69,
            weight: 75,
            co2: 173,
            vibration: 1
          },
          {
            temperature: 37,
            umidity: 78,
            weight: 65,
            co2: 165,
            vibration: 0
          },
          {
            temperature: 36,
            umidity: 80,
            weight: 80,
            co2: 182,
            vibration: 0
          },
          {
            temperature: 33,
            umidity: 59,
            weight: 62,
            co2: 137,
            vibration: 1
          },
          {
            temperature: 37,
            umidity: 60,
            weight: 85,
            co2: 142,
            vibration: 1
          },
          {
            temperature: 32,
            umidity: 22,
            weight: 87,
            co2: 164,
            vibration: 0
          },
          {
            temperature: 36,
            umidity: 56,
            weight: 96,
            co2: 26,
            vibration: 0
          }
        ]
      }
    ]
  },
  {
    id: 2,
    name: 'Baird',
    latitude: 85.921747,
    longitude: 12.954729,
    gateway: 1,
    hives: [
      {
        id: 1,
        name: 'Savage',
        health: 2,
        battery: 80,
        samples: [
          {
            temperature: 33,
            umidity: 28,
            weight: 65,
            co2: 88,
            vibration: 1
          },
          {
            temperature: 34,
            umidity: 36,
            weight: 96,
            co2: 166,
            vibration: 1
          },
          {
            temperature: 37,
            umidity: 65,
            weight: 50,
            co2: 190,
            vibration: 0
          },
          {
            temperature: 33,
            umidity: 71,
            weight: 55,
            co2: 36,
            vibration: 0
          },
          {
            temperature: 34,
            umidity: 28,
            weight: 60,
            co2: 121,
            vibration: 0
          },
          {
            temperature: 32,
            umidity: 70,
            weight: 92,
            co2: 44,
            vibration: 0
          },
          {
            temperature: 34,
            umidity: 46,
            weight: 64,
            co2: 142,
            vibration: 1
          },
          {
            temperature: 33,
            umidity: 43,
            weight: 62,
            co2: 99,
            vibration: 0
          },
          {
            temperature: 32,
            umidity: 23,
            weight: 72,
            co2: 142,
            vibration: 1
          },
          {
            temperature: 33,
            umidity: 68,
            weight: 97,
            co2: 183,
            vibration: 0
          },
          {
            temperature: 35,
            umidity: 73,
            weight: 88,
            co2: 27,
            vibration: 0
          },
          {
            temperature: 32,
            umidity: 27,
            weight: 56,
            co2: 41,
            vibration: 1
          }
        ]
      },
      {
        id: 2,
        name: 'Page',
        health: 0,
        battery: 43,
        samples: [
          {
            temperature: 34,
            umidity: 75,
            weight: 90,
            co2: 37,
            vibration: 0
          },
          {
            temperature: 35,
            umidity: 75,
            weight: 55,
            co2: 61,
            vibration: 0
          },
          {
            temperature: 33,
            umidity: 63,
            weight: 61,
            co2: 134,
            vibration: 1
          },
          {
            temperature: 32,
            umidity: 69,
            weight: 99,
            co2: 125,
            vibration: 0
          },
          {
            temperature: 35,
            umidity: 46,
            weight: 73,
            co2: 48,
            vibration: 0
          },
          {
            temperature: 36,
            umidity: 26,
            weight: 51,
            co2: 194,
            vibration: 0
          },
          {
            temperature: 34,
            umidity: 23,
            weight: 61,
            co2: 140,
            vibration: 0
          },
          {
            temperature: 33,
            umidity: 32,
            weight: 92,
            co2: 163,
            vibration: 1
          },
          {
            temperature: 37,
            umidity: 69,
            weight: 74,
            co2: 26,
            vibration: 1
          },
          {
            temperature: 34,
            umidity: 64,
            weight: 53,
            co2: 166,
            vibration: 1
          },
          {
            temperature: 34,
            umidity: 47,
            weight: 82,
            co2: 89,
            vibration: 1
          },
          {
            temperature: 33,
            umidity: 59,
            weight: 62,
            co2: 176,
            vibration: 0
          }
        ]
      },
      {
        id: 3,
        name: 'Lindsay',
        health: 1,
        battery: 30,
        samples: [
          {
            temperature: 35,
            umidity: 25,
            weight: 100,
            co2: 186,
            vibration: 1
          },
          {
            temperature: 37,
            umidity: 53,
            weight: 58,
            co2: 54,
            vibration: 0
          },
          {
            temperature: 32,
            umidity: 33,
            weight: 64,
            co2: 26,
            vibration: 1
          },
          {
            temperature: 37,
            umidity: 75,
            weight: 70,
            co2: 120,
            vibration: 0
          },
          {
            temperature: 34,
            umidity: 51,
            weight: 88,
            co2: 162,
            vibration: 0
          },
          {
            temperature: 35,
            umidity: 64,
            weight: 88,
            co2: 114,
            vibration: 0
          },
          {
            temperature: 34,
            umidity: 30,
            weight: 100,
            co2: 122,
            vibration: 1
          },
          {
            temperature: 34,
            umidity: 76,
            weight: 83,
            co2: 30,
            vibration: 1
          },
          {
            temperature: 35,
            umidity: 61,
            weight: 65,
            co2: 81,
            vibration: 1
          },
          {
            temperature: 32,
            umidity: 27,
            weight: 89,
            co2: 70,
            vibration: 1
          },
          {
            temperature: 36,
            umidity: 25,
            weight: 57,
            co2: 62,
            vibration: 1
          },
          {
            temperature: 33,
            umidity: 39,
            weight: 83,
            co2: 84,
            vibration: 1
          }
        ]
      },
      {
        id: 4,
        name: 'Dickerson',
        health: 1,
        battery: 32,
        samples: [
          {
            temperature: 37,
            umidity: 69,
            weight: 70,
            co2: 42,
            vibration: 1
          },
          {
            temperature: 34,
            umidity: 41,
            weight: 97,
            co2: 195,
            vibration: 0
          },
          {
            temperature: 32,
            umidity: 31,
            weight: 63,
            co2: 134,
            vibration: 0
          },
          {
            temperature: 35,
            umidity: 77,
            weight: 82,
            co2: 200,
            vibration: 1
          },
          {
            temperature: 32,
            umidity: 76,
            weight: 76,
            co2: 153,
            vibration: 1
          },
          {
            temperature: 33,
            umidity: 60,
            weight: 89,
            co2: 184,
            vibration: 0
          },
          {
            temperature: 32,
            umidity: 38,
            weight: 77,
            co2: 156,
            vibration: 1
          },
          {
            temperature: 35,
            umidity: 41,
            weight: 71,
            co2: 135,
            vibration: 0
          },
          {
            temperature: 37,
            umidity: 28,
            weight: 57,
            co2: 136,
            vibration: 0
          },
          {
            temperature: 32,
            umidity: 20,
            weight: 90,
            co2: 106,
            vibration: 0
          },
          {
            temperature: 32,
            umidity: 21,
            weight: 70,
            co2: 117,
            vibration: 1
          },
          {
            temperature: 36,
            umidity: 58,
            weight: 58,
            co2: 84,
            vibration: 0
          }
        ]
      },
      {
        id: 5,
        name: 'Kelly',
        health: 2,
        battery: 2,
        samples: [
          {
            temperature: 37,
            umidity: 67,
            weight: 63,
            co2: 131,
            vibration: 1
          },
          {
            temperature: 34,
            umidity: 24,
            weight: 73,
            co2: 128,
            vibration: 1
          },
          {
            temperature: 32,
            umidity: 49,
            weight: 73,
            co2: 87,
            vibration: 1
          },
          {
            temperature: 36,
            umidity: 71,
            weight: 99,
            co2: 39,
            vibration: 1
          },
          {
            temperature: 33,
            umidity: 37,
            weight: 55,
            co2: 32,
            vibration: 0
          },
          {
            temperature: 33,
            umidity: 27,
            weight: 72,
            co2: 26,
            vibration: 0
          },
          {
            temperature: 34,
            umidity: 64,
            weight: 86,
            co2: 97,
            vibration: 1
          },
          {
            temperature: 37,
            umidity: 60,
            weight: 72,
            co2: 179,
            vibration: 0
          },
          {
            temperature: 36,
            umidity: 34,
            weight: 69,
            co2: 76,
            vibration: 0
          },
          {
            temperature: 33,
            umidity: 53,
            weight: 59,
            co2: 131,
            vibration: 1
          },
          {
            temperature: 37,
            umidity: 49,
            weight: 62,
            co2: 44,
            vibration: 1
          },
          {
            temperature: 37,
            umidity: 53,
            weight: 94,
            co2: 122,
            vibration: 1
          }
        ]
      },
      {
        id: 6,
        name: 'Fuentes',
        health: 2,
        battery: 36,
        samples: [
          {
            temperature: 34,
            umidity: 47,
            weight: 61,
            co2: 70,
            vibration: 0
          },
          {
            temperature: 36,
            umidity: 72,
            weight: 86,
            co2: 183,
            vibration: 0
          },
          {
            temperature: 37,
            umidity: 43,
            weight: 83,
            co2: 108,
            vibration: 1
          },
          {
            temperature: 34,
            umidity: 55,
            weight: 71,
            co2: 107,
            vibration: 1
          },
          {
            temperature: 34,
            umidity: 52,
            weight: 99,
            co2: 67,
            vibration: 0
          },
          {
            temperature: 34,
            umidity: 79,
            weight: 100,
            co2: 73,
            vibration: 0
          },
          {
            temperature: 36,
            umidity: 78,
            weight: 69,
            co2: 93,
            vibration: 1
          },
          {
            temperature: 33,
            umidity: 50,
            weight: 96,
            co2: 78,
            vibration: 1
          },
          {
            temperature: 32,
            umidity: 22,
            weight: 99,
            co2: 173,
            vibration: 1
          },
          {
            temperature: 37,
            umidity: 51,
            weight: 73,
            co2: 103,
            vibration: 0
          },
          {
            temperature: 37,
            umidity: 66,
            weight: 62,
            co2: 107,
            vibration: 0
          },
          {
            temperature: 34,
            umidity: 58,
            weight: 98,
            co2: 145,
            vibration: 1
          }
        ]
      },
      {
        id: 7,
        name: 'Casey',
        health: 2,
        battery: 6,
        samples: [
          {
            temperature: 33,
            umidity: 72,
            weight: 84,
            co2: 84,
            vibration: 1
          },
          {
            temperature: 35,
            umidity: 53,
            weight: 88,
            co2: 187,
            vibration: 0
          },
          {
            temperature: 33,
            umidity: 66,
            weight: 62,
            co2: 188,
            vibration: 0
          },
          {
            temperature: 36,
            umidity: 35,
            weight: 65,
            co2: 50,
            vibration: 1
          },
          {
            temperature: 36,
            umidity: 75,
            weight: 51,
            co2: 63,
            vibration: 0
          },
          {
            temperature: 32,
            umidity: 24,
            weight: 97,
            co2: 133,
            vibration: 0
          },
          {
            temperature: 32,
            umidity: 61,
            weight: 72,
            co2: 181,
            vibration: 0
          },
          {
            temperature: 35,
            umidity: 77,
            weight: 67,
            co2: 103,
            vibration: 0
          },
          {
            temperature: 32,
            umidity: 73,
            weight: 94,
            co2: 28,
            vibration: 1
          },
          {
            temperature: 35,
            umidity: 58,
            weight: 90,
            co2: 121,
            vibration: 1
          },
          {
            temperature: 36,
            umidity: 63,
            weight: 72,
            co2: 167,
            vibration: 0
          },
          {
            temperature: 33,
            umidity: 31,
            weight: 70,
            co2: 86,
            vibration: 0
          }
        ]
      },
      {
        id: 8,
        name: 'Duran',
        health: 1,
        battery: 90,
        samples: [
          {
            temperature: 32,
            umidity: 59,
            weight: 98,
            co2: 45,
            vibration: 1
          },
          {
            temperature: 35,
            umidity: 74,
            weight: 55,
            co2: 124,
            vibration: 0
          },
          {
            temperature: 33,
            umidity: 34,
            weight: 79,
            co2: 62,
            vibration: 1
          },
          {
            temperature: 32,
            umidity: 50,
            weight: 59,
            co2: 48,
            vibration: 1
          },
          {
            temperature: 36,
            umidity: 63,
            weight: 72,
            co2: 154,
            vibration: 0
          },
          {
            temperature: 36,
            umidity: 22,
            weight: 68,
            co2: 44,
            vibration: 1
          },
          {
            temperature: 36,
            umidity: 52,
            weight: 54,
            co2: 25,
            vibration: 0
          },
          {
            temperature: 35,
            umidity: 27,
            weight: 68,
            co2: 191,
            vibration: 0
          },
          {
            temperature: 35,
            umidity: 56,
            weight: 82,
            co2: 101,
            vibration: 1
          },
          {
            temperature: 36,
            umidity: 57,
            weight: 70,
            co2: 154,
            vibration: 1
          },
          {
            temperature: 36,
            umidity: 33,
            weight: 96,
            co2: 184,
            vibration: 1
          },
          {
            temperature: 32,
            umidity: 29,
            weight: 54,
            co2: 45,
            vibration: 0
          }
        ]
      },
      {
        id: 9,
        name: 'Cote',
        health: 0,
        battery: 38,
        samples: [
          {
            temperature: 34,
            umidity: 24,
            weight: 81,
            co2: 124,
            vibration: 0
          },
          {
            temperature: 33,
            umidity: 25,
            weight: 82,
            co2: 92,
            vibration: 0
          },
          {
            temperature: 34,
            umidity: 62,
            weight: 79,
            co2: 91,
            vibration: 0
          },
          {
            temperature: 35,
            umidity: 54,
            weight: 57,
            co2: 40,
            vibration: 0
          },
          {
            temperature: 37,
            umidity: 75,
            weight: 77,
            co2: 91,
            vibration: 1
          },
          {
            temperature: 35,
            umidity: 48,
            weight: 87,
            co2: 131,
            vibration: 0
          },
          {
            temperature: 36,
            umidity: 47,
            weight: 75,
            co2: 114,
            vibration: 1
          },
          {
            temperature: 34,
            umidity: 57,
            weight: 99,
            co2: 141,
            vibration: 0
          },
          {
            temperature: 32,
            umidity: 79,
            weight: 89,
            co2: 195,
            vibration: 1
          },
          {
            temperature: 33,
            umidity: 29,
            weight: 61,
            co2: 134,
            vibration: 1
          },
          {
            temperature: 34,
            umidity: 44,
            weight: 67,
            co2: 121,
            vibration: 0
          },
          {
            temperature: 37,
            umidity: 50,
            weight: 58,
            co2: 96,
            vibration: 0
          }
        ]
      },
      {
        id: 10,
        name: 'Pugh',
        health: 0,
        battery: 29,
        samples: [
          {
            temperature: 32,
            umidity: 58,
            weight: 57,
            co2: 144,
            vibration: 1
          },
          {
            temperature: 32,
            umidity: 30,
            weight: 64,
            co2: 111,
            vibration: 1
          },
          {
            temperature: 33,
            umidity: 76,
            weight: 50,
            co2: 117,
            vibration: 0
          },
          {
            temperature: 37,
            umidity: 67,
            weight: 93,
            co2: 164,
            vibration: 1
          },
          {
            temperature: 33,
            umidity: 35,
            weight: 64,
            co2: 46,
            vibration: 1
          },
          {
            temperature: 37,
            umidity: 26,
            weight: 86,
            co2: 173,
            vibration: 0
          },
          {
            temperature: 33,
            umidity: 38,
            weight: 82,
            co2: 184,
            vibration: 1
          },
          {
            temperature: 37,
            umidity: 49,
            weight: 63,
            co2: 96,
            vibration: 0
          },
          {
            temperature: 34,
            umidity: 42,
            weight: 82,
            co2: 130,
            vibration: 1
          },
          {
            temperature: 35,
            umidity: 63,
            weight: 60,
            co2: 124,
            vibration: 1
          },
          {
            temperature: 32,
            umidity: 47,
            weight: 57,
            co2: 105,
            vibration: 1
          },
          {
            temperature: 34,
            umidity: 59,
            weight: 95,
            co2: 39,
            vibration: 0
          }
        ]
      }
    ]
  },
  {
    id: 3,
    name: 'Hale',
    latitude: 36.402031,
    longitude: 92.956366,
    gateway: 0,
    hives: [
      {
        id: 1,
        name: 'Phelps',
        health: 2,
        battery: 49,
        samples: [
          {
            temperature: 35,
            umidity: 49,
            weight: 84,
            co2: 132,
            vibration: 0
          },
          {
            temperature: 32,
            umidity: 62,
            weight: 57,
            co2: 119,
            vibration: 0
          },
          {
            temperature: 33,
            umidity: 21,
            weight: 78,
            co2: 119,
            vibration: 1
          },
          {
            temperature: 32,
            umidity: 66,
            weight: 64,
            co2: 185,
            vibration: 1
          },
          {
            temperature: 32,
            umidity: 48,
            weight: 73,
            co2: 94,
            vibration: 1
          },
          {
            temperature: 32,
            umidity: 71,
            weight: 98,
            co2: 77,
            vibration: 1
          },
          {
            temperature: 35,
            umidity: 78,
            weight: 50,
            co2: 89,
            vibration: 1
          },
          {
            temperature: 32,
            umidity: 67,
            weight: 87,
            co2: 124,
            vibration: 1
          },
          {
            temperature: 37,
            umidity: 79,
            weight: 95,
            co2: 26,
            vibration: 1
          },
          {
            temperature: 32,
            umidity: 26,
            weight: 97,
            co2: 131,
            vibration: 1
          },
          {
            temperature: 34,
            umidity: 78,
            weight: 57,
            co2: 147,
            vibration: 0
          },
          {
            temperature: 34,
            umidity: 73,
            weight: 79,
            co2: 119,
            vibration: 0
          }
        ]
      },
      {
        id: 2,
        name: 'Golden',
        health: 1,
        battery: 71,
        samples: [
          {
            temperature: 34,
            umidity: 36,
            weight: 67,
            co2: 113,
            vibration: 1
          },
          {
            temperature: 35,
            umidity: 44,
            weight: 65,
            co2: 112,
            vibration: 1
          },
          {
            temperature: 32,
            umidity: 33,
            weight: 94,
            co2: 178,
            vibration: 0
          },
          {
            temperature: 37,
            umidity: 70,
            weight: 67,
            co2: 119,
            vibration: 1
          },
          {
            temperature: 34,
            umidity: 29,
            weight: 73,
            co2: 174,
            vibration: 1
          },
          {
            temperature: 33,
            umidity: 64,
            weight: 97,
            co2: 173,
            vibration: 1
          },
          {
            temperature: 33,
            umidity: 27,
            weight: 57,
            co2: 89,
            vibration: 1
          },
          {
            temperature: 35,
            umidity: 34,
            weight: 81,
            co2: 125,
            vibration: 1
          },
          {
            temperature: 35,
            umidity: 51,
            weight: 76,
            co2: 159,
            vibration: 0
          },
          {
            temperature: 36,
            umidity: 39,
            weight: 66,
            co2: 30,
            vibration: 1
          },
          {
            temperature: 37,
            umidity: 79,
            weight: 95,
            co2: 198,
            vibration: 1
          },
          {
            temperature: 37,
            umidity: 79,
            weight: 62,
            co2: 36,
            vibration: 0
          }
        ]
      },
      {
        id: 3,
        name: 'Shaw',
        health: 1,
        battery: 2,
        samples: [
          {
            temperature: 32,
            umidity: 64,
            weight: 72,
            co2: 59,
            vibration: 1
          },
          {
            temperature: 36,
            umidity: 53,
            weight: 66,
            co2: 158,
            vibration: 0
          },
          {
            temperature: 37,
            umidity: 39,
            weight: 99,
            co2: 39,
            vibration: 1
          },
          {
            temperature: 34,
            umidity: 66,
            weight: 91,
            co2: 95,
            vibration: 1
          },
          {
            temperature: 36,
            umidity: 72,
            weight: 98,
            co2: 104,
            vibration: 1
          },
          {
            temperature: 33,
            umidity: 21,
            weight: 90,
            co2: 176,
            vibration: 0
          },
          {
            temperature: 33,
            umidity: 27,
            weight: 54,
            co2: 66,
            vibration: 0
          },
          {
            temperature: 35,
            umidity: 33,
            weight: 79,
            co2: 87,
            vibration: 1
          },
          {
            temperature: 35,
            umidity: 61,
            weight: 76,
            co2: 189,
            vibration: 1
          },
          {
            temperature: 33,
            umidity: 64,
            weight: 83,
            co2: 169,
            vibration: 0
          },
          {
            temperature: 36,
            umidity: 25,
            weight: 82,
            co2: 122,
            vibration: 1
          },
          {
            temperature: 33,
            umidity: 53,
            weight: 63,
            co2: 135,
            vibration: 0
          }
        ]
      },
      {
        id: 4,
        name: 'Ryan',
        health: 2,
        battery: 22,
        samples: [
          {
            temperature: 35,
            umidity: 22,
            weight: 75,
            co2: 80,
            vibration: 0
          },
          {
            temperature: 32,
            umidity: 69,
            weight: 84,
            co2: 87,
            vibration: 1
          },
          {
            temperature: 36,
            umidity: 72,
            weight: 98,
            co2: 104,
            vibration: 1
          },
          {
            temperature: 37,
            umidity: 43,
            weight: 93,
            co2: 190,
            vibration: 0
          },
          {
            temperature: 35,
            umidity: 38,
            weight: 78,
            co2: 95,
            vibration: 0
          },
          {
            temperature: 33,
            umidity: 33,
            weight: 83,
            co2: 151,
            vibration: 0
          },
          {
            temperature: 34,
            umidity: 63,
            weight: 79,
            co2: 141,
            vibration: 1
          },
          {
            temperature: 33,
            umidity: 37,
            weight: 71,
            co2: 54,
            vibration: 1
          },
          {
            temperature: 36,
            umidity: 55,
            weight: 78,
            co2: 96,
            vibration: 0
          },
          {
            temperature: 36,
            umidity: 49,
            weight: 82,
            co2: 194,
            vibration: 1
          },
          {
            temperature: 35,
            umidity: 77,
            weight: 65,
            co2: 151,
            vibration: 1
          },
          {
            temperature: 32,
            umidity: 33,
            weight: 78,
            co2: 34,
            vibration: 1
          }
        ]
      },
      {
        id: 5,
        name: 'Rich',
        health: 0,
        battery: 43,
        samples: [
          {
            temperature: 32,
            umidity: 23,
            weight: 70,
            co2: 174,
            vibration: 1
          },
          {
            temperature: 32,
            umidity: 53,
            weight: 58,
            co2: 149,
            vibration: 1
          },
          {
            temperature: 35,
            umidity: 35,
            weight: 80,
            co2: 93,
            vibration: 1
          },
          {
            temperature: 34,
            umidity: 79,
            weight: 80,
            co2: 163,
            vibration: 1
          },
          {
            temperature: 37,
            umidity: 27,
            weight: 71,
            co2: 125,
            vibration: 0
          },
          {
            temperature: 34,
            umidity: 79,
            weight: 89,
            co2: 93,
            vibration: 0
          },
          {
            temperature: 32,
            umidity: 64,
            weight: 54,
            co2: 95,
            vibration: 1
          },
          {
            temperature: 32,
            umidity: 57,
            weight: 66,
            co2: 75,
            vibration: 1
          },
          {
            temperature: 34,
            umidity: 37,
            weight: 57,
            co2: 152,
            vibration: 0
          },
          {
            temperature: 32,
            umidity: 59,
            weight: 72,
            co2: 78,
            vibration: 1
          },
          {
            temperature: 34,
            umidity: 60,
            weight: 62,
            co2: 68,
            vibration: 0
          },
          {
            temperature: 32,
            umidity: 46,
            weight: 72,
            co2: 171,
            vibration: 1
          }
        ]
      },
      {
        id: 6,
        name: 'Villarreal',
        health: 2,
        battery: 15,
        samples: [
          {
            temperature: 35,
            umidity: 54,
            weight: 51,
            co2: 171,
            vibration: 1
          },
          {
            temperature: 35,
            umidity: 71,
            weight: 98,
            co2: 86,
            vibration: 1
          },
          {
            temperature: 36,
            umidity: 24,
            weight: 54,
            co2: 32,
            vibration: 0
          },
          {
            temperature: 34,
            umidity: 62,
            weight: 56,
            co2: 34,
            vibration: 0
          },
          {
            temperature: 35,
            umidity: 43,
            weight: 83,
            co2: 153,
            vibration: 0
          },
          {
            temperature: 37,
            umidity: 73,
            weight: 62,
            co2: 117,
            vibration: 0
          },
          {
            temperature: 37,
            umidity: 48,
            weight: 82,
            co2: 189,
            vibration: 0
          },
          {
            temperature: 36,
            umidity: 61,
            weight: 100,
            co2: 105,
            vibration: 1
          },
          {
            temperature: 33,
            umidity: 79,
            weight: 100,
            co2: 76,
            vibration: 0
          },
          {
            temperature: 34,
            umidity: 60,
            weight: 94,
            co2: 196,
            vibration: 0
          },
          {
            temperature: 34,
            umidity: 24,
            weight: 61,
            co2: 111,
            vibration: 0
          },
          {
            temperature: 35,
            umidity: 69,
            weight: 83,
            co2: 137,
            vibration: 1
          }
        ]
      },
      {
        id: 7,
        name: 'Hamilton',
        health: 1,
        battery: 50,
        samples: [
          {
            temperature: 37,
            umidity: 57,
            weight: 55,
            co2: 92,
            vibration: 0
          },
          {
            temperature: 35,
            umidity: 34,
            weight: 80,
            co2: 151,
            vibration: 0
          },
          {
            temperature: 32,
            umidity: 55,
            weight: 75,
            co2: 27,
            vibration: 1
          },
          {
            temperature: 35,
            umidity: 63,
            weight: 96,
            co2: 199,
            vibration: 0
          },
          {
            temperature: 36,
            umidity: 72,
            weight: 59,
            co2: 181,
            vibration: 0
          },
          {
            temperature: 36,
            umidity: 34,
            weight: 69,
            co2: 83,
            vibration: 1
          },
          {
            temperature: 34,
            umidity: 68,
            weight: 98,
            co2: 108,
            vibration: 1
          },
          {
            temperature: 37,
            umidity: 66,
            weight: 63,
            co2: 188,
            vibration: 0
          },
          {
            temperature: 35,
            umidity: 67,
            weight: 95,
            co2: 66,
            vibration: 1
          },
          {
            temperature: 36,
            umidity: 58,
            weight: 66,
            co2: 45,
            vibration: 1
          },
          {
            temperature: 35,
            umidity: 31,
            weight: 98,
            co2: 120,
            vibration: 1
          },
          {
            temperature: 37,
            umidity: 56,
            weight: 57,
            co2: 28,
            vibration: 0
          }
        ]
      },
      {
        id: 8,
        name: 'Lopez',
        health: 2,
        battery: 90,
        samples: [
          {
            temperature: 37,
            umidity: 61,
            weight: 56,
            co2: 161,
            vibration: 0
          },
          {
            temperature: 32,
            umidity: 36,
            weight: 94,
            co2: 189,
            vibration: 1
          },
          {
            temperature: 33,
            umidity: 21,
            weight: 50,
            co2: 143,
            vibration: 1
          },
          {
            temperature: 33,
            umidity: 20,
            weight: 89,
            co2: 125,
            vibration: 1
          },
          {
            temperature: 32,
            umidity: 78,
            weight: 99,
            co2: 182,
            vibration: 1
          },
          {
            temperature: 37,
            umidity: 24,
            weight: 71,
            co2: 101,
            vibration: 0
          },
          {
            temperature: 35,
            umidity: 34,
            weight: 77,
            co2: 197,
            vibration: 0
          },
          {
            temperature: 33,
            umidity: 77,
            weight: 89,
            co2: 57,
            vibration: 1
          },
          {
            temperature: 35,
            umidity: 59,
            weight: 99,
            co2: 35,
            vibration: 1
          },
          {
            temperature: 33,
            umidity: 68,
            weight: 59,
            co2: 122,
            vibration: 1
          },
          {
            temperature: 35,
            umidity: 80,
            weight: 93,
            co2: 59,
            vibration: 1
          },
          {
            temperature: 33,
            umidity: 71,
            weight: 83,
            co2: 167,
            vibration: 0
          }
        ]
      },
      {
        id: 9,
        name: 'Abbott',
        health: 0,
        battery: 44,
        samples: [
          {
            temperature: 35,
            umidity: 62,
            weight: 82,
            co2: 99,
            vibration: 0
          },
          {
            temperature: 36,
            umidity: 24,
            weight: 92,
            co2: 52,
            vibration: 0
          },
          {
            temperature: 32,
            umidity: 73,
            weight: 93,
            co2: 74,
            vibration: 1
          },
          {
            temperature: 36,
            umidity: 40,
            weight: 60,
            co2: 138,
            vibration: 0
          },
          {
            temperature: 32,
            umidity: 78,
            weight: 93,
            co2: 195,
            vibration: 1
          },
          {
            temperature: 34,
            umidity: 56,
            weight: 100,
            co2: 82,
            vibration: 1
          },
          {
            temperature: 37,
            umidity: 28,
            weight: 99,
            co2: 58,
            vibration: 0
          },
          {
            temperature: 35,
            umidity: 23,
            weight: 87,
            co2: 63,
            vibration: 0
          },
          {
            temperature: 35,
            umidity: 68,
            weight: 65,
            co2: 112,
            vibration: 0
          },
          {
            temperature: 37,
            umidity: 64,
            weight: 54,
            co2: 89,
            vibration: 0
          },
          {
            temperature: 37,
            umidity: 71,
            weight: 50,
            co2: 117,
            vibration: 1
          },
          {
            temperature: 34,
            umidity: 69,
            weight: 62,
            co2: 125,
            vibration: 0
          }
        ]
      },
      {
        id: 10,
        name: 'Hill',
        health: 1,
        battery: 42,
        samples: [
          {
            temperature: 35,
            umidity: 28,
            weight: 75,
            co2: 146,
            vibration: 0
          },
          {
            temperature: 36,
            umidity: 74,
            weight: 85,
            co2: 90,
            vibration: 0
          },
          {
            temperature: 36,
            umidity: 46,
            weight: 55,
            co2: 167,
            vibration: 0
          },
          {
            temperature: 35,
            umidity: 62,
            weight: 52,
            co2: 149,
            vibration: 1
          },
          {
            temperature: 32,
            umidity: 65,
            weight: 95,
            co2: 79,
            vibration: 0
          },
          {
            temperature: 32,
            umidity: 28,
            weight: 56,
            co2: 185,
            vibration: 0
          },
          {
            temperature: 34,
            umidity: 59,
            weight: 60,
            co2: 190,
            vibration: 0
          },
          {
            temperature: 34,
            umidity: 42,
            weight: 52,
            co2: 38,
            vibration: 0
          },
          {
            temperature: 32,
            umidity: 36,
            weight: 56,
            co2: 102,
            vibration: 0
          },
          {
            temperature: 32,
            umidity: 56,
            weight: 83,
            co2: 101,
            vibration: 0
          },
          {
            temperature: 32,
            umidity: 65,
            weight: 86,
            co2: 140,
            vibration: 0
          },
          {
            temperature: 34,
            umidity: 58,
            weight: 89,
            co2: 73,
            vibration: 0
          }
        ]
      }
    ]
  },
  {
    id: 4,
    name: 'Walsh',
    latitude: 40.583161,
    longitude: 30.561957,
    gateway: 0,
    hives: [
      {
        id: 1,
        name: 'Lester',
        health: 1,
        battery: 90,
        samples: [
          {
            temperature: 33,
            umidity: 79,
            weight: 100,
            co2: 64,
            vibration: 1
          },
          {
            temperature: 36,
            umidity: 76,
            weight: 58,
            co2: 122,
            vibration: 0
          },
          {
            temperature: 32,
            umidity: 37,
            weight: 58,
            co2: 163,
            vibration: 1
          },
          {
            temperature: 35,
            umidity: 62,
            weight: 62,
            co2: 101,
            vibration: 0
          },
          {
            temperature: 33,
            umidity: 30,
            weight: 73,
            co2: 53,
            vibration: 1
          },
          {
            temperature: 36,
            umidity: 30,
            weight: 67,
            co2: 48,
            vibration: 0
          },
          {
            temperature: 33,
            umidity: 70,
            weight: 64,
            co2: 200,
            vibration: 0
          },
          {
            temperature: 37,
            umidity: 54,
            weight: 84,
            co2: 100,
            vibration: 0
          },
          {
            temperature: 37,
            umidity: 27,
            weight: 90,
            co2: 125,
            vibration: 0
          },
          {
            temperature: 35,
            umidity: 20,
            weight: 92,
            co2: 26,
            vibration: 1
          },
          {
            temperature: 33,
            umidity: 63,
            weight: 68,
            co2: 183,
            vibration: 0
          },
          {
            temperature: 36,
            umidity: 32,
            weight: 86,
            co2: 34,
            vibration: 0
          }
        ]
      },
      {
        id: 2,
        name: 'Wood',
        health: 1,
        battery: 47,
        samples: [
          {
            temperature: 36,
            umidity: 79,
            weight: 80,
            co2: 165,
            vibration: 0
          },
          {
            temperature: 32,
            umidity: 77,
            weight: 63,
            co2: 97,
            vibration: 1
          },
          {
            temperature: 37,
            umidity: 66,
            weight: 79,
            co2: 173,
            vibration: 1
          },
          {
            temperature: 32,
            umidity: 47,
            weight: 94,
            co2: 122,
            vibration: 1
          },
          {
            temperature: 36,
            umidity: 46,
            weight: 70,
            co2: 115,
            vibration: 0
          },
          {
            temperature: 37,
            umidity: 55,
            weight: 77,
            co2: 53,
            vibration: 0
          },
          {
            temperature: 37,
            umidity: 60,
            weight: 52,
            co2: 94,
            vibration: 1
          },
          {
            temperature: 32,
            umidity: 77,
            weight: 92,
            co2: 156,
            vibration: 0
          },
          {
            temperature: 36,
            umidity: 39,
            weight: 90,
            co2: 101,
            vibration: 1
          },
          {
            temperature: 34,
            umidity: 74,
            weight: 74,
            co2: 140,
            vibration: 1
          },
          {
            temperature: 37,
            umidity: 29,
            weight: 60,
            co2: 161,
            vibration: 0
          },
          {
            temperature: 36,
            umidity: 75,
            weight: 79,
            co2: 89,
            vibration: 1
          }
        ]
      },
      {
        id: 3,
        name: 'Valentine',
        health: 0,
        battery: 20,
        samples: [
          {
            temperature: 34,
            umidity: 59,
            weight: 90,
            co2: 52,
            vibration: 0
          },
          {
            temperature: 32,
            umidity: 47,
            weight: 53,
            co2: 35,
            vibration: 0
          },
          {
            temperature: 36,
            umidity: 52,
            weight: 100,
            co2: 110,
            vibration: 1
          },
          {
            temperature: 37,
            umidity: 29,
            weight: 57,
            co2: 57,
            vibration: 1
          },
          {
            temperature: 36,
            umidity: 29,
            weight: 98,
            co2: 95,
            vibration: 0
          },
          {
            temperature: 37,
            umidity: 74,
            weight: 74,
            co2: 139,
            vibration: 1
          },
          {
            temperature: 37,
            umidity: 50,
            weight: 52,
            co2: 41,
            vibration: 0
          },
          {
            temperature: 32,
            umidity: 76,
            weight: 99,
            co2: 151,
            vibration: 1
          },
          {
            temperature: 37,
            umidity: 53,
            weight: 63,
            co2: 61,
            vibration: 0
          },
          {
            temperature: 32,
            umidity: 58,
            weight: 85,
            co2: 148,
            vibration: 0
          },
          {
            temperature: 36,
            umidity: 79,
            weight: 61,
            co2: 46,
            vibration: 1
          },
          {
            temperature: 36,
            umidity: 44,
            weight: 68,
            co2: 38,
            vibration: 0
          }
        ]
      },
      {
        id: 4,
        name: 'Duke',
        health: 2,
        battery: 44,
        samples: [
          {
            temperature: 34,
            umidity: 59,
            weight: 92,
            co2: 150,
            vibration: 0
          },
          {
            temperature: 33,
            umidity: 64,
            weight: 81,
            co2: 83,
            vibration: 0
          },
          {
            temperature: 35,
            umidity: 40,
            weight: 91,
            co2: 172,
            vibration: 0
          },
          {
            temperature: 37,
            umidity: 80,
            weight: 77,
            co2: 37,
            vibration: 0
          },
          {
            temperature: 32,
            umidity: 78,
            weight: 67,
            co2: 72,
            vibration: 0
          },
          {
            temperature: 35,
            umidity: 59,
            weight: 78,
            co2: 56,
            vibration: 1
          },
          {
            temperature: 36,
            umidity: 63,
            weight: 90,
            co2: 187,
            vibration: 0
          },
          {
            temperature: 32,
            umidity: 77,
            weight: 62,
            co2: 72,
            vibration: 1
          },
          {
            temperature: 35,
            umidity: 77,
            weight: 74,
            co2: 145,
            vibration: 0
          },
          {
            temperature: 36,
            umidity: 70,
            weight: 98,
            co2: 53,
            vibration: 1
          },
          {
            temperature: 32,
            umidity: 38,
            weight: 69,
            co2: 64,
            vibration: 1
          },
          {
            temperature: 32,
            umidity: 56,
            weight: 94,
            co2: 152,
            vibration: 1
          }
        ]
      },
      {
        id: 5,
        name: 'Mercer',
        health: 1,
        battery: 20,
        samples: [
          {
            temperature: 32,
            umidity: 68,
            weight: 71,
            co2: 118,
            vibration: 1
          },
          {
            temperature: 33,
            umidity: 57,
            weight: 96,
            co2: 102,
            vibration: 1
          },
          {
            temperature: 32,
            umidity: 24,
            weight: 75,
            co2: 40,
            vibration: 1
          },
          {
            temperature: 36,
            umidity: 23,
            weight: 73,
            co2: 37,
            vibration: 0
          },
          {
            temperature: 34,
            umidity: 77,
            weight: 69,
            co2: 25,
            vibration: 1
          },
          {
            temperature: 33,
            umidity: 60,
            weight: 58,
            co2: 133,
            vibration: 0
          },
          {
            temperature: 37,
            umidity: 40,
            weight: 69,
            co2: 131,
            vibration: 1
          },
          {
            temperature: 34,
            umidity: 59,
            weight: 81,
            co2: 89,
            vibration: 1
          },
          {
            temperature: 35,
            umidity: 50,
            weight: 93,
            co2: 53,
            vibration: 0
          },
          {
            temperature: 37,
            umidity: 58,
            weight: 72,
            co2: 108,
            vibration: 1
          },
          {
            temperature: 35,
            umidity: 56,
            weight: 86,
            co2: 122,
            vibration: 1
          },
          {
            temperature: 33,
            umidity: 62,
            weight: 56,
            co2: 155,
            vibration: 0
          }
        ]
      },
      {
        id: 6,
        name: 'Fleming',
        health: 1,
        battery: 41,
        samples: [
          {
            temperature: 32,
            umidity: 42,
            weight: 69,
            co2: 147,
            vibration: 0
          },
          {
            temperature: 37,
            umidity: 75,
            weight: 67,
            co2: 81,
            vibration: 1
          },
          {
            temperature: 35,
            umidity: 20,
            weight: 83,
            co2: 168,
            vibration: 0
          },
          {
            temperature: 35,
            umidity: 21,
            weight: 58,
            co2: 103,
            vibration: 1
          },
          {
            temperature: 35,
            umidity: 71,
            weight: 98,
            co2: 81,
            vibration: 1
          },
          {
            temperature: 34,
            umidity: 64,
            weight: 53,
            co2: 181,
            vibration: 0
          },
          {
            temperature: 32,
            umidity: 45,
            weight: 88,
            co2: 178,
            vibration: 1
          },
          {
            temperature: 32,
            umidity: 30,
            weight: 69,
            co2: 130,
            vibration: 1
          },
          {
            temperature: 36,
            umidity: 60,
            weight: 68,
            co2: 196,
            vibration: 1
          },
          {
            temperature: 35,
            umidity: 56,
            weight: 65,
            co2: 68,
            vibration: 0
          },
          {
            temperature: 33,
            umidity: 69,
            weight: 79,
            co2: 128,
            vibration: 0
          },
          {
            temperature: 35,
            umidity: 52,
            weight: 90,
            co2: 48,
            vibration: 0
          }
        ]
      },
      {
        id: 7,
        name: 'Donovan',
        health: 0,
        battery: 64,
        samples: [
          {
            temperature: 34,
            umidity: 56,
            weight: 67,
            co2: 197,
            vibration: 0
          },
          {
            temperature: 35,
            umidity: 67,
            weight: 53,
            co2: 153,
            vibration: 0
          },
          {
            temperature: 33,
            umidity: 75,
            weight: 99,
            co2: 72,
            vibration: 0
          },
          {
            temperature: 36,
            umidity: 75,
            weight: 100,
            co2: 107,
            vibration: 0
          },
          {
            temperature: 32,
            umidity: 35,
            weight: 100,
            co2: 163,
            vibration: 0
          },
          {
            temperature: 32,
            umidity: 20,
            weight: 58,
            co2: 135,
            vibration: 1
          },
          {
            temperature: 33,
            umidity: 39,
            weight: 72,
            co2: 81,
            vibration: 1
          },
          {
            temperature: 35,
            umidity: 70,
            weight: 95,
            co2: 95,
            vibration: 0
          },
          {
            temperature: 35,
            umidity: 36,
            weight: 60,
            co2: 142,
            vibration: 1
          },
          {
            temperature: 37,
            umidity: 25,
            weight: 66,
            co2: 200,
            vibration: 1
          },
          {
            temperature: 34,
            umidity: 30,
            weight: 55,
            co2: 64,
            vibration: 1
          },
          {
            temperature: 36,
            umidity: 40,
            weight: 86,
            co2: 79,
            vibration: 1
          }
        ]
      },
      {
        id: 8,
        name: 'Camacho',
        health: 2,
        battery: 83,
        samples: [
          {
            temperature: 34,
            umidity: 50,
            weight: 91,
            co2: 160,
            vibration: 0
          },
          {
            temperature: 33,
            umidity: 77,
            weight: 79,
            co2: 120,
            vibration: 0
          },
          {
            temperature: 35,
            umidity: 45,
            weight: 57,
            co2: 42,
            vibration: 1
          },
          {
            temperature: 35,
            umidity: 69,
            weight: 87,
            co2: 85,
            vibration: 1
          },
          {
            temperature: 36,
            umidity: 71,
            weight: 71,
            co2: 108,
            vibration: 0
          },
          {
            temperature: 37,
            umidity: 67,
            weight: 90,
            co2: 146,
            vibration: 0
          },
          {
            temperature: 37,
            umidity: 23,
            weight: 63,
            co2: 146,
            vibration: 1
          },
          {
            temperature: 36,
            umidity: 53,
            weight: 61,
            co2: 37,
            vibration: 0
          },
          {
            temperature: 36,
            umidity: 59,
            weight: 58,
            co2: 37,
            vibration: 1
          },
          {
            temperature: 33,
            umidity: 65,
            weight: 94,
            co2: 63,
            vibration: 1
          },
          {
            temperature: 36,
            umidity: 56,
            weight: 56,
            co2: 106,
            vibration: 0
          },
          {
            temperature: 33,
            umidity: 31,
            weight: 99,
            co2: 122,
            vibration: 0
          }
        ]
      },
      {
        id: 9,
        name: 'Strickland',
        health: 2,
        battery: 3,
        samples: [
          {
            temperature: 33,
            umidity: 43,
            weight: 57,
            co2: 187,
            vibration: 0
          },
          {
            temperature: 36,
            umidity: 49,
            weight: 61,
            co2: 179,
            vibration: 0
          },
          {
            temperature: 35,
            umidity: 36,
            weight: 64,
            co2: 77,
            vibration: 0
          },
          {
            temperature: 37,
            umidity: 44,
            weight: 94,
            co2: 41,
            vibration: 0
          },
          {
            temperature: 33,
            umidity: 37,
            weight: 99,
            co2: 141,
            vibration: 0
          },
          {
            temperature: 33,
            umidity: 34,
            weight: 91,
            co2: 32,
            vibration: 0
          },
          {
            temperature: 32,
            umidity: 51,
            weight: 86,
            co2: 186,
            vibration: 1
          },
          {
            temperature: 35,
            umidity: 71,
            weight: 69,
            co2: 92,
            vibration: 0
          },
          {
            temperature: 35,
            umidity: 51,
            weight: 88,
            co2: 64,
            vibration: 1
          },
          {
            temperature: 33,
            umidity: 21,
            weight: 99,
            co2: 106,
            vibration: 0
          },
          {
            temperature: 36,
            umidity: 74,
            weight: 88,
            co2: 159,
            vibration: 0
          },
          {
            temperature: 35,
            umidity: 80,
            weight: 52,
            co2: 103,
            vibration: 0
          }
        ]
      },
      {
        id: 10,
        name: 'Foley',
        health: 0,
        battery: 6,
        samples: [
          {
            temperature: 37,
            umidity: 56,
            weight: 52,
            co2: 139,
            vibration: 1
          },
          {
            temperature: 34,
            umidity: 53,
            weight: 71,
            co2: 157,
            vibration: 1
          },
          {
            temperature: 36,
            umidity: 66,
            weight: 69,
            co2: 45,
            vibration: 1
          },
          {
            temperature: 36,
            umidity: 22,
            weight: 93,
            co2: 51,
            vibration: 0
          },
          {
            temperature: 35,
            umidity: 65,
            weight: 97,
            co2: 195,
            vibration: 1
          },
          {
            temperature: 35,
            umidity: 44,
            weight: 71,
            co2: 121,
            vibration: 1
          },
          {
            temperature: 33,
            umidity: 45,
            weight: 91,
            co2: 179,
            vibration: 1
          },
          {
            temperature: 34,
            umidity: 53,
            weight: 72,
            co2: 153,
            vibration: 0
          },
          {
            temperature: 35,
            umidity: 47,
            weight: 95,
            co2: 161,
            vibration: 0
          },
          {
            temperature: 34,
            umidity: 51,
            weight: 83,
            co2: 163,
            vibration: 1
          },
          {
            temperature: 34,
            umidity: 72,
            weight: 64,
            co2: 89,
            vibration: 1
          },
          {
            temperature: 35,
            umidity: 52,
            weight: 97,
            co2: 49,
            vibration: 1
          }
        ]
      }
    ]
  },
  {
    id: 5,
    name: 'Mcconnell',
    latitude: -58.271451,
    longitude: 141.783086,
    gateway: 0,
    hives: [
      {
        id: 1,
        name: 'Holder',
        health: 2,
        battery: 30,
        samples: [
          {
            temperature: 35,
            umidity: 69,
            weight: 77,
            co2: 172,
            vibration: 1
          },
          {
            temperature: 37,
            umidity: 31,
            weight: 79,
            co2: 143,
            vibration: 0
          },
          {
            temperature: 34,
            umidity: 65,
            weight: 90,
            co2: 108,
            vibration: 0
          },
          {
            temperature: 35,
            umidity: 79,
            weight: 50,
            co2: 187,
            vibration: 0
          },
          {
            temperature: 32,
            umidity: 65,
            weight: 65,
            co2: 36,
            vibration: 0
          },
          {
            temperature: 34,
            umidity: 41,
            weight: 96,
            co2: 155,
            vibration: 1
          },
          {
            temperature: 36,
            umidity: 78,
            weight: 96,
            co2: 79,
            vibration: 0
          },
          {
            temperature: 37,
            umidity: 29,
            weight: 65,
            co2: 138,
            vibration: 1
          },
          {
            temperature: 36,
            umidity: 24,
            weight: 91,
            co2: 81,
            vibration: 1
          },
          {
            temperature: 32,
            umidity: 57,
            weight: 78,
            co2: 60,
            vibration: 1
          },
          {
            temperature: 32,
            umidity: 69,
            weight: 80,
            co2: 104,
            vibration: 1
          },
          {
            temperature: 34,
            umidity: 77,
            weight: 51,
            co2: 63,
            vibration: 1
          }
        ]
      },
      {
        id: 2,
        name: 'Vargas',
        health: 1,
        battery: 74,
        samples: [
          {
            temperature: 32,
            umidity: 23,
            weight: 96,
            co2: 157,
            vibration: 0
          },
          {
            temperature: 36,
            umidity: 79,
            weight: 84,
            co2: 82,
            vibration: 0
          },
          {
            temperature: 32,
            umidity: 75,
            weight: 83,
            co2: 134,
            vibration: 1
          },
          {
            temperature: 33,
            umidity: 78,
            weight: 93,
            co2: 69,
            vibration: 0
          },
          {
            temperature: 37,
            umidity: 55,
            weight: 55,
            co2: 100,
            vibration: 1
          },
          {
            temperature: 34,
            umidity: 23,
            weight: 88,
            co2: 25,
            vibration: 0
          },
          {
            temperature: 35,
            umidity: 29,
            weight: 78,
            co2: 35,
            vibration: 1
          },
          {
            temperature: 32,
            umidity: 41,
            weight: 80,
            co2: 36,
            vibration: 1
          },
          {
            temperature: 33,
            umidity: 50,
            weight: 69,
            co2: 61,
            vibration: 0
          },
          {
            temperature: 37,
            umidity: 59,
            weight: 55,
            co2: 161,
            vibration: 1
          },
          {
            temperature: 35,
            umidity: 31,
            weight: 81,
            co2: 110,
            vibration: 0
          },
          {
            temperature: 36,
            umidity: 56,
            weight: 97,
            co2: 70,
            vibration: 0
          }
        ]
      },
      {
        id: 3,
        name: 'Burns',
        health: 1,
        battery: 7,
        samples: [
          {
            temperature: 37,
            umidity: 40,
            weight: 94,
            co2: 104,
            vibration: 0
          },
          {
            temperature: 37,
            umidity: 43,
            weight: 78,
            co2: 187,
            vibration: 0
          },
          {
            temperature: 37,
            umidity: 65,
            weight: 55,
            co2: 133,
            vibration: 0
          },
          {
            temperature: 34,
            umidity: 62,
            weight: 90,
            co2: 138,
            vibration: 1
          },
          {
            temperature: 36,
            umidity: 66,
            weight: 88,
            co2: 169,
            vibration: 0
          },
          {
            temperature: 35,
            umidity: 77,
            weight: 70,
            co2: 127,
            vibration: 1
          },
          {
            temperature: 35,
            umidity: 73,
            weight: 62,
            co2: 73,
            vibration: 1
          },
          {
            temperature: 35,
            umidity: 76,
            weight: 90,
            co2: 96,
            vibration: 1
          },
          {
            temperature: 36,
            umidity: 75,
            weight: 69,
            co2: 187,
            vibration: 0
          },
          {
            temperature: 36,
            umidity: 75,
            weight: 93,
            co2: 112,
            vibration: 1
          },
          {
            temperature: 35,
            umidity: 70,
            weight: 66,
            co2: 175,
            vibration: 0
          },
          {
            temperature: 36,
            umidity: 77,
            weight: 69,
            co2: 192,
            vibration: 1
          }
        ]
      },
      {
        id: 4,
        name: 'Perkins',
        health: 1,
        battery: 68,
        samples: [
          {
            temperature: 34,
            umidity: 70,
            weight: 62,
            co2: 30,
            vibration: 1
          },
          {
            temperature: 32,
            umidity: 64,
            weight: 55,
            co2: 154,
            vibration: 1
          },
          {
            temperature: 34,
            umidity: 65,
            weight: 84,
            co2: 48,
            vibration: 1
          },
          {
            temperature: 37,
            umidity: 36,
            weight: 56,
            co2: 190,
            vibration: 0
          },
          {
            temperature: 36,
            umidity: 63,
            weight: 76,
            co2: 174,
            vibration: 1
          },
          {
            temperature: 33,
            umidity: 69,
            weight: 57,
            co2: 50,
            vibration: 0
          },
          {
            temperature: 34,
            umidity: 40,
            weight: 93,
            co2: 151,
            vibration: 0
          },
          {
            temperature: 37,
            umidity: 79,
            weight: 86,
            co2: 161,
            vibration: 0
          },
          {
            temperature: 36,
            umidity: 50,
            weight: 65,
            co2: 39,
            vibration: 0
          },
          {
            temperature: 37,
            umidity: 70,
            weight: 86,
            co2: 80,
            vibration: 0
          },
          {
            temperature: 37,
            umidity: 31,
            weight: 71,
            co2: 95,
            vibration: 1
          },
          {
            temperature: 36,
            umidity: 21,
            weight: 95,
            co2: 87,
            vibration: 0
          }
        ]
      },
      {
        id: 5,
        name: 'Owens',
        health: 2,
        battery: 73,
        samples: [
          {
            temperature: 33,
            umidity: 45,
            weight: 95,
            co2: 148,
            vibration: 0
          },
          {
            temperature: 37,
            umidity: 32,
            weight: 79,
            co2: 74,
            vibration: 1
          },
          {
            temperature: 34,
            umidity: 64,
            weight: 63,
            co2: 193,
            vibration: 1
          },
          {
            temperature: 32,
            umidity: 60,
            weight: 55,
            co2: 139,
            vibration: 1
          },
          {
            temperature: 33,
            umidity: 25,
            weight: 76,
            co2: 93,
            vibration: 1
          },
          {
            temperature: 36,
            umidity: 71,
            weight: 79,
            co2: 142,
            vibration: 1
          },
          {
            temperature: 32,
            umidity: 72,
            weight: 99,
            co2: 171,
            vibration: 0
          },
          {
            temperature: 37,
            umidity: 36,
            weight: 53,
            co2: 180,
            vibration: 0
          },
          {
            temperature: 33,
            umidity: 38,
            weight: 96,
            co2: 102,
            vibration: 1
          },
          {
            temperature: 35,
            umidity: 77,
            weight: 97,
            co2: 28,
            vibration: 1
          },
          {
            temperature: 35,
            umidity: 79,
            weight: 54,
            co2: 130,
            vibration: 1
          },
          {
            temperature: 33,
            umidity: 24,
            weight: 87,
            co2: 171,
            vibration: 0
          }
        ]
      },
      {
        id: 6,
        name: 'Welch',
        health: 2,
        battery: 39,
        samples: [
          {
            temperature: 35,
            umidity: 31,
            weight: 77,
            co2: 104,
            vibration: 1
          },
          {
            temperature: 33,
            umidity: 41,
            weight: 69,
            co2: 153,
            vibration: 1
          },
          {
            temperature: 37,
            umidity: 35,
            weight: 87,
            co2: 178,
            vibration: 1
          },
          {
            temperature: 36,
            umidity: 30,
            weight: 50,
            co2: 199,
            vibration: 0
          },
          {
            temperature: 35,
            umidity: 22,
            weight: 58,
            co2: 179,
            vibration: 1
          },
          {
            temperature: 32,
            umidity: 46,
            weight: 87,
            co2: 41,
            vibration: 1
          },
          {
            temperature: 36,
            umidity: 52,
            weight: 51,
            co2: 156,
            vibration: 0
          },
          {
            temperature: 37,
            umidity: 32,
            weight: 99,
            co2: 120,
            vibration: 0
          },
          {
            temperature: 33,
            umidity: 31,
            weight: 60,
            co2: 44,
            vibration: 1
          },
          {
            temperature: 37,
            umidity: 44,
            weight: 79,
            co2: 97,
            vibration: 1
          },
          {
            temperature: 33,
            umidity: 57,
            weight: 94,
            co2: 183,
            vibration: 0
          },
          {
            temperature: 35,
            umidity: 25,
            weight: 58,
            co2: 133,
            vibration: 1
          }
        ]
      },
      {
        id: 7,
        name: 'Prince',
        health: 1,
        battery: 93,
        samples: [
          {
            temperature: 36,
            umidity: 48,
            weight: 99,
            co2: 70,
            vibration: 1
          },
          {
            temperature: 32,
            umidity: 29,
            weight: 59,
            co2: 69,
            vibration: 0
          },
          {
            temperature: 33,
            umidity: 75,
            weight: 72,
            co2: 192,
            vibration: 0
          },
          {
            temperature: 32,
            umidity: 53,
            weight: 88,
            co2: 49,
            vibration: 1
          },
          {
            temperature: 33,
            umidity: 58,
            weight: 87,
            co2: 55,
            vibration: 0
          },
          {
            temperature: 33,
            umidity: 62,
            weight: 62,
            co2: 29,
            vibration: 1
          },
          {
            temperature: 33,
            umidity: 33,
            weight: 51,
            co2: 135,
            vibration: 1
          },
          {
            temperature: 36,
            umidity: 25,
            weight: 83,
            co2: 44,
            vibration: 0
          },
          {
            temperature: 36,
            umidity: 76,
            weight: 59,
            co2: 103,
            vibration: 0
          },
          {
            temperature: 36,
            umidity: 74,
            weight: 71,
            co2: 166,
            vibration: 0
          },
          {
            temperature: 32,
            umidity: 37,
            weight: 99,
            co2: 60,
            vibration: 0
          },
          {
            temperature: 33,
            umidity: 48,
            weight: 53,
            co2: 52,
            vibration: 1
          }
        ]
      },
      {
        id: 8,
        name: 'Pearson',
        health: 1,
        battery: 9,
        samples: [
          {
            temperature: 32,
            umidity: 77,
            weight: 84,
            co2: 179,
            vibration: 1
          },
          {
            temperature: 33,
            umidity: 42,
            weight: 76,
            co2: 75,
            vibration: 0
          },
          {
            temperature: 36,
            umidity: 62,
            weight: 53,
            co2: 181,
            vibration: 1
          },
          {
            temperature: 32,
            umidity: 42,
            weight: 74,
            co2: 180,
            vibration: 1
          },
          {
            temperature: 37,
            umidity: 70,
            weight: 89,
            co2: 163,
            vibration: 1
          },
          {
            temperature: 32,
            umidity: 76,
            weight: 84,
            co2: 134,
            vibration: 0
          },
          {
            temperature: 35,
            umidity: 44,
            weight: 81,
            co2: 125,
            vibration: 1
          },
          {
            temperature: 34,
            umidity: 80,
            weight: 100,
            co2: 76,
            vibration: 1
          },
          {
            temperature: 33,
            umidity: 37,
            weight: 76,
            co2: 185,
            vibration: 0
          },
          {
            temperature: 35,
            umidity: 37,
            weight: 60,
            co2: 100,
            vibration: 0
          },
          {
            temperature: 35,
            umidity: 64,
            weight: 62,
            co2: 164,
            vibration: 0
          },
          {
            temperature: 32,
            umidity: 24,
            weight: 61,
            co2: 146,
            vibration: 1
          }
        ]
      },
      {
        id: 9,
        name: 'Leach',
        health: 0,
        battery: 30,
        samples: [
          {
            temperature: 34,
            umidity: 24,
            weight: 78,
            co2: 79,
            vibration: 1
          },
          {
            temperature: 33,
            umidity: 74,
            weight: 51,
            co2: 152,
            vibration: 1
          },
          {
            temperature: 32,
            umidity: 50,
            weight: 89,
            co2: 154,
            vibration: 0
          },
          {
            temperature: 35,
            umidity: 76,
            weight: 100,
            co2: 96,
            vibration: 1
          },
          {
            temperature: 37,
            umidity: 28,
            weight: 88,
            co2: 140,
            vibration: 1
          },
          {
            temperature: 37,
            umidity: 42,
            weight: 80,
            co2: 63,
            vibration: 0
          },
          {
            temperature: 34,
            umidity: 33,
            weight: 80,
            co2: 184,
            vibration: 0
          },
          {
            temperature: 34,
            umidity: 65,
            weight: 52,
            co2: 73,
            vibration: 1
          },
          {
            temperature: 32,
            umidity: 59,
            weight: 89,
            co2: 77,
            vibration: 0
          },
          {
            temperature: 35,
            umidity: 74,
            weight: 50,
            co2: 97,
            vibration: 0
          },
          {
            temperature: 37,
            umidity: 56,
            weight: 78,
            co2: 189,
            vibration: 0
          },
          {
            temperature: 33,
            umidity: 68,
            weight: 64,
            co2: 69,
            vibration: 1
          }
        ]
      },
      {
        id: 10,
        name: 'David',
        health: 1,
        battery: 81,
        samples: [
          {
            temperature: 33,
            umidity: 23,
            weight: 92,
            co2: 95,
            vibration: 1
          },
          {
            temperature: 37,
            umidity: 31,
            weight: 72,
            co2: 74,
            vibration: 0
          },
          {
            temperature: 36,
            umidity: 32,
            weight: 75,
            co2: 36,
            vibration: 1
          },
          {
            temperature: 36,
            umidity: 40,
            weight: 60,
            co2: 186,
            vibration: 1
          },
          {
            temperature: 34,
            umidity: 41,
            weight: 78,
            co2: 196,
            vibration: 1
          },
          {
            temperature: 34,
            umidity: 75,
            weight: 97,
            co2: 114,
            vibration: 1
          },
          {
            temperature: 37,
            umidity: 72,
            weight: 72,
            co2: 190,
            vibration: 1
          },
          {
            temperature: 36,
            umidity: 79,
            weight: 83,
            co2: 147,
            vibration: 1
          },
          {
            temperature: 37,
            umidity: 47,
            weight: 59,
            co2: 129,
            vibration: 0
          },
          {
            temperature: 37,
            umidity: 43,
            weight: 60,
            co2: 114,
            vibration: 0
          },
          {
            temperature: 37,
            umidity: 43,
            weight: 100,
            co2: 187,
            vibration: 0
          },
          {
            temperature: 36,
            umidity: 70,
            weight: 85,
            co2: 60,
            vibration: 1
          }
        ]
      }
    ]
  },
  {
    id: 6,
    name: 'Martin',
    latitude: -66.319963,
    longitude: -73.060811,
    gateway: 0,
    hives: [
      {
        id: 1,
        name: 'Callahan',
        health: 2,
        battery: 23,
        samples: [
          {
            temperature: 36,
            umidity: 47,
            weight: 71,
            co2: 170,
            vibration: 0
          },
          {
            temperature: 32,
            umidity: 53,
            weight: 84,
            co2: 35,
            vibration: 0
          },
          {
            temperature: 36,
            umidity: 38,
            weight: 73,
            co2: 126,
            vibration: 1
          },
          {
            temperature: 34,
            umidity: 71,
            weight: 78,
            co2: 60,
            vibration: 0
          },
          {
            temperature: 32,
            umidity: 38,
            weight: 55,
            co2: 102,
            vibration: 1
          },
          {
            temperature: 32,
            umidity: 33,
            weight: 64,
            co2: 29,
            vibration: 1
          },
          {
            temperature: 33,
            umidity: 38,
            weight: 81,
            co2: 114,
            vibration: 0
          },
          {
            temperature: 34,
            umidity: 52,
            weight: 74,
            co2: 92,
            vibration: 0
          },
          {
            temperature: 34,
            umidity: 38,
            weight: 52,
            co2: 139,
            vibration: 0
          },
          {
            temperature: 37,
            umidity: 44,
            weight: 83,
            co2: 35,
            vibration: 1
          },
          {
            temperature: 37,
            umidity: 31,
            weight: 74,
            co2: 193,
            vibration: 1
          },
          {
            temperature: 37,
            umidity: 37,
            weight: 73,
            co2: 128,
            vibration: 0
          }
        ]
      },
      {
        id: 2,
        name: 'Lynn',
        health: 1,
        battery: 20,
        samples: [
          {
            temperature: 33,
            umidity: 42,
            weight: 62,
            co2: 148,
            vibration: 1
          },
          {
            temperature: 37,
            umidity: 47,
            weight: 65,
            co2: 70,
            vibration: 1
          },
          {
            temperature: 35,
            umidity: 66,
            weight: 99,
            co2: 149,
            vibration: 0
          },
          {
            temperature: 37,
            umidity: 80,
            weight: 54,
            co2: 156,
            vibration: 0
          },
          {
            temperature: 33,
            umidity: 28,
            weight: 50,
            co2: 136,
            vibration: 0
          },
          {
            temperature: 33,
            umidity: 79,
            weight: 66,
            co2: 173,
            vibration: 1
          },
          {
            temperature: 32,
            umidity: 79,
            weight: 85,
            co2: 199,
            vibration: 1
          },
          {
            temperature: 32,
            umidity: 40,
            weight: 99,
            co2: 133,
            vibration: 0
          },
          {
            temperature: 33,
            umidity: 62,
            weight: 90,
            co2: 89,
            vibration: 1
          },
          {
            temperature: 33,
            umidity: 22,
            weight: 61,
            co2: 174,
            vibration: 1
          },
          {
            temperature: 33,
            umidity: 29,
            weight: 51,
            co2: 61,
            vibration: 0
          },
          {
            temperature: 35,
            umidity: 24,
            weight: 94,
            co2: 163,
            vibration: 0
          }
        ]
      },
      {
        id: 3,
        name: 'Joseph',
        health: 2,
        battery: 28,
        samples: [
          {
            temperature: 32,
            umidity: 35,
            weight: 67,
            co2: 164,
            vibration: 1
          },
          {
            temperature: 33,
            umidity: 60,
            weight: 75,
            co2: 101,
            vibration: 1
          },
          {
            temperature: 32,
            umidity: 57,
            weight: 67,
            co2: 72,
            vibration: 0
          },
          {
            temperature: 37,
            umidity: 65,
            weight: 91,
            co2: 47,
            vibration: 1
          },
          {
            temperature: 34,
            umidity: 36,
            weight: 55,
            co2: 113,
            vibration: 1
          },
          {
            temperature: 37,
            umidity: 38,
            weight: 98,
            co2: 40,
            vibration: 1
          },
          {
            temperature: 36,
            umidity: 35,
            weight: 68,
            co2: 76,
            vibration: 1
          },
          {
            temperature: 33,
            umidity: 60,
            weight: 90,
            co2: 140,
            vibration: 1
          },
          {
            temperature: 33,
            umidity: 21,
            weight: 94,
            co2: 160,
            vibration: 0
          },
          {
            temperature: 34,
            umidity: 44,
            weight: 81,
            co2: 89,
            vibration: 1
          },
          {
            temperature: 36,
            umidity: 40,
            weight: 78,
            co2: 126,
            vibration: 1
          },
          {
            temperature: 37,
            umidity: 47,
            weight: 55,
            co2: 37,
            vibration: 1
          }
        ]
      },
      {
        id: 4,
        name: 'Harper',
        health: 1,
        battery: 94,
        samples: [
          {
            temperature: 36,
            umidity: 24,
            weight: 73,
            co2: 169,
            vibration: 0
          },
          {
            temperature: 32,
            umidity: 21,
            weight: 76,
            co2: 141,
            vibration: 0
          },
          {
            temperature: 34,
            umidity: 60,
            weight: 60,
            co2: 171,
            vibration: 0
          },
          {
            temperature: 34,
            umidity: 41,
            weight: 86,
            co2: 71,
            vibration: 1
          },
          {
            temperature: 37,
            umidity: 61,
            weight: 54,
            co2: 142,
            vibration: 1
          },
          {
            temperature: 35,
            umidity: 44,
            weight: 100,
            co2: 119,
            vibration: 0
          },
          {
            temperature: 34,
            umidity: 69,
            weight: 66,
            co2: 44,
            vibration: 0
          },
          {
            temperature: 34,
            umidity: 62,
            weight: 59,
            co2: 117,
            vibration: 0
          },
          {
            temperature: 32,
            umidity: 37,
            weight: 53,
            co2: 180,
            vibration: 1
          },
          {
            temperature: 34,
            umidity: 66,
            weight: 88,
            co2: 104,
            vibration: 0
          },
          {
            temperature: 34,
            umidity: 65,
            weight: 58,
            co2: 42,
            vibration: 1
          },
          {
            temperature: 34,
            umidity: 40,
            weight: 59,
            co2: 118,
            vibration: 0
          }
        ]
      },
      {
        id: 5,
        name: 'William',
        health: 0,
        battery: 79,
        samples: [
          {
            temperature: 32,
            umidity: 24,
            weight: 85,
            co2: 182,
            vibration: 1
          },
          {
            temperature: 37,
            umidity: 48,
            weight: 65,
            co2: 75,
            vibration: 1
          },
          {
            temperature: 35,
            umidity: 60,
            weight: 75,
            co2: 82,
            vibration: 1
          },
          {
            temperature: 36,
            umidity: 61,
            weight: 87,
            co2: 52,
            vibration: 0
          },
          {
            temperature: 32,
            umidity: 48,
            weight: 63,
            co2: 172,
            vibration: 0
          },
          {
            temperature: 33,
            umidity: 51,
            weight: 97,
            co2: 108,
            vibration: 1
          },
          {
            temperature: 33,
            umidity: 32,
            weight: 76,
            co2: 65,
            vibration: 1
          },
          {
            temperature: 34,
            umidity: 57,
            weight: 97,
            co2: 89,
            vibration: 1
          },
          {
            temperature: 37,
            umidity: 74,
            weight: 81,
            co2: 129,
            vibration: 1
          },
          {
            temperature: 36,
            umidity: 47,
            weight: 99,
            co2: 160,
            vibration: 0
          },
          {
            temperature: 33,
            umidity: 24,
            weight: 64,
            co2: 58,
            vibration: 0
          },
          {
            temperature: 35,
            umidity: 80,
            weight: 56,
            co2: 104,
            vibration: 0
          }
        ]
      },
      {
        id: 6,
        name: 'Duffy',
        health: 2,
        battery: 62,
        samples: [
          {
            temperature: 33,
            umidity: 53,
            weight: 82,
            co2: 173,
            vibration: 1
          },
          {
            temperature: 37,
            umidity: 76,
            weight: 80,
            co2: 70,
            vibration: 1
          },
          {
            temperature: 35,
            umidity: 50,
            weight: 67,
            co2: 42,
            vibration: 1
          },
          {
            temperature: 34,
            umidity: 69,
            weight: 98,
            co2: 37,
            vibration: 0
          },
          {
            temperature: 32,
            umidity: 20,
            weight: 56,
            co2: 108,
            vibration: 0
          },
          {
            temperature: 35,
            umidity: 54,
            weight: 100,
            co2: 176,
            vibration: 0
          },
          {
            temperature: 37,
            umidity: 45,
            weight: 73,
            co2: 105,
            vibration: 0
          },
          {
            temperature: 34,
            umidity: 31,
            weight: 55,
            co2: 139,
            vibration: 1
          },
          {
            temperature: 35,
            umidity: 63,
            weight: 65,
            co2: 105,
            vibration: 1
          },
          {
            temperature: 32,
            umidity: 78,
            weight: 61,
            co2: 27,
            vibration: 0
          },
          {
            temperature: 33,
            umidity: 52,
            weight: 99,
            co2: 118,
            vibration: 1
          },
          {
            temperature: 34,
            umidity: 27,
            weight: 69,
            co2: 71,
            vibration: 0
          }
        ]
      },
      {
        id: 7,
        name: 'Flowers',
        health: 1,
        battery: 11,
        samples: [
          {
            temperature: 33,
            umidity: 64,
            weight: 83,
            co2: 70,
            vibration: 0
          },
          {
            temperature: 34,
            umidity: 22,
            weight: 62,
            co2: 107,
            vibration: 0
          },
          {
            temperature: 37,
            umidity: 52,
            weight: 73,
            co2: 128,
            vibration: 0
          },
          {
            temperature: 37,
            umidity: 41,
            weight: 81,
            co2: 75,
            vibration: 1
          },
          {
            temperature: 36,
            umidity: 44,
            weight: 62,
            co2: 177,
            vibration: 1
          },
          {
            temperature: 33,
            umidity: 76,
            weight: 64,
            co2: 119,
            vibration: 1
          },
          {
            temperature: 37,
            umidity: 36,
            weight: 83,
            co2: 56,
            vibration: 1
          },
          {
            temperature: 32,
            umidity: 73,
            weight: 80,
            co2: 85,
            vibration: 0
          },
          {
            temperature: 35,
            umidity: 69,
            weight: 78,
            co2: 180,
            vibration: 1
          },
          {
            temperature: 36,
            umidity: 72,
            weight: 95,
            co2: 38,
            vibration: 1
          },
          {
            temperature: 36,
            umidity: 57,
            weight: 85,
            co2: 152,
            vibration: 0
          },
          {
            temperature: 35,
            umidity: 37,
            weight: 78,
            co2: 93,
            vibration: 0
          }
        ]
      },
      {
        id: 8,
        name: 'Ayala',
        health: 0,
        battery: 34,
        samples: [
          {
            temperature: 34,
            umidity: 37,
            weight: 95,
            co2: 57,
            vibration: 0
          },
          {
            temperature: 36,
            umidity: 50,
            weight: 81,
            co2: 88,
            vibration: 0
          },
          {
            temperature: 36,
            umidity: 41,
            weight: 71,
            co2: 187,
            vibration: 1
          },
          {
            temperature: 34,
            umidity: 58,
            weight: 69,
            co2: 82,
            vibration: 0
          },
          {
            temperature: 34,
            umidity: 60,
            weight: 91,
            co2: 48,
            vibration: 1
          },
          {
            temperature: 35,
            umidity: 56,
            weight: 88,
            co2: 99,
            vibration: 1
          },
          {
            temperature: 36,
            umidity: 29,
            weight: 86,
            co2: 184,
            vibration: 0
          },
          {
            temperature: 32,
            umidity: 74,
            weight: 64,
            co2: 106,
            vibration: 1
          },
          {
            temperature: 35,
            umidity: 29,
            weight: 95,
            co2: 58,
            vibration: 1
          },
          {
            temperature: 36,
            umidity: 21,
            weight: 89,
            co2: 52,
            vibration: 1
          },
          {
            temperature: 32,
            umidity: 21,
            weight: 60,
            co2: 39,
            vibration: 1
          },
          {
            temperature: 32,
            umidity: 43,
            weight: 99,
            co2: 150,
            vibration: 1
          }
        ]
      },
      {
        id: 9,
        name: 'Marshall',
        health: 0,
        battery: 86,
        samples: [
          {
            temperature: 36,
            umidity: 38,
            weight: 62,
            co2: 147,
            vibration: 1
          },
          {
            temperature: 35,
            umidity: 42,
            weight: 69,
            co2: 191,
            vibration: 0
          },
          {
            temperature: 34,
            umidity: 68,
            weight: 62,
            co2: 125,
            vibration: 1
          },
          {
            temperature: 32,
            umidity: 31,
            weight: 75,
            co2: 35,
            vibration: 0
          },
          {
            temperature: 33,
            umidity: 75,
            weight: 64,
            co2: 194,
            vibration: 0
          },
          {
            temperature: 35,
            umidity: 35,
            weight: 98,
            co2: 153,
            vibration: 0
          },
          {
            temperature: 34,
            umidity: 49,
            weight: 56,
            co2: 113,
            vibration: 1
          },
          {
            temperature: 37,
            umidity: 59,
            weight: 61,
            co2: 100,
            vibration: 0
          },
          {
            temperature: 36,
            umidity: 74,
            weight: 72,
            co2: 148,
            vibration: 0
          },
          {
            temperature: 36,
            umidity: 75,
            weight: 65,
            co2: 190,
            vibration: 0
          },
          {
            temperature: 33,
            umidity: 50,
            weight: 83,
            co2: 192,
            vibration: 0
          },
          {
            temperature: 37,
            umidity: 59,
            weight: 77,
            co2: 123,
            vibration: 0
          }
        ]
      },
      {
        id: 10,
        name: 'Osborn',
        health: 1,
        battery: 74,
        samples: [
          {
            temperature: 35,
            umidity: 71,
            weight: 62,
            co2: 109,
            vibration: 1
          },
          {
            temperature: 36,
            umidity: 79,
            weight: 100,
            co2: 82,
            vibration: 1
          },
          {
            temperature: 36,
            umidity: 65,
            weight: 85,
            co2: 29,
            vibration: 1
          },
          {
            temperature: 36,
            umidity: 57,
            weight: 58,
            co2: 69,
            vibration: 1
          },
          {
            temperature: 33,
            umidity: 25,
            weight: 87,
            co2: 38,
            vibration: 0
          },
          {
            temperature: 36,
            umidity: 44,
            weight: 60,
            co2: 157,
            vibration: 1
          },
          {
            temperature: 36,
            umidity: 44,
            weight: 58,
            co2: 49,
            vibration: 0
          },
          {
            temperature: 36,
            umidity: 68,
            weight: 84,
            co2: 90,
            vibration: 1
          },
          {
            temperature: 34,
            umidity: 79,
            weight: 88,
            co2: 65,
            vibration: 1
          },
          {
            temperature: 32,
            umidity: 26,
            weight: 60,
            co2: 198,
            vibration: 1
          },
          {
            temperature: 34,
            umidity: 74,
            weight: 55,
            co2: 98,
            vibration: 0
          },
          {
            temperature: 36,
            umidity: 62,
            weight: 60,
            co2: 156,
            vibration: 1
          }
        ]
      }
    ]
  }
];

/**
 * [
  '{{repeat(5, 7)}}',
  {
    id: '{{index()+1}}',
    name: '{{surname()}}',
    latitude: '{{floating(-90.000001, 90)}}',
    longitude: '{{floating(-180.000001, 180)}}',
    gateway: '{{random(0, 1)}}',
    hives: [
      '{{repeat(10)}}',
      {
        id: '{{index()+1}}',
        name: '{{surname()}}',
        health: '{{random(0, 1, 2)}}',
        battery:  '{{integer(0,100)}}',
        samples: [
          '{{repeat(12)}}',
          {
            temperature: '{{integer(32,37)}}',
            umidity: '{{integer(20,80)}}',
            weight: '{{integer(50,100)}}',
            co2: '{{integer(25,200)}}',
            vibration: '{{random(0, 1)}}'
          }
        ]
      }
    ]
  }
]
 */

export default apiaries;
