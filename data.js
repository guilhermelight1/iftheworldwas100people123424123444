let data = [
  {
    "category": "Literacy",
    "subcategory": "are able to read & write",
    "position": "right",
    "percentage": 86
  },
  {
    "category": "Literacy",
    "subcategory": "are unable to read & write",
    "position": "left",
    "percentage": 14
  },
  {
    "category": "College",
    "subcategory": "have a college degree",
    "position": "right",
    "percentage": 7
  },
  {
    "category": "College",
    "subcategory": "do not have a college degree",
    "position": "left",
    "percentage": 93
  },
  {
    "category": "Internet",
    "subcategory": "can access the internet",
    "position": "right",
    "percentage": 30
  },
  {
    "category": "Internet",
    "subcategory": "cannot access the internet",
    "position": "left",
    "percentage": 70
  },
  {
    "category": "Phones",
    "subcategory": "have cell phones",
    "position": "right",
    "percentage": 75
  },
  {
    "category": "Phones",
    "subcategory": "do not have a cell phone",
    "position": "left",
    "percentage": 25
  },
  {
    "category": "Water",
    "subcategory": "have safe water",
    "position": "right",
    "percentage": 87
  },
  {
    "category": "Water",
    "subcategory": "do not have safe water",
    "position": "left",
    "percentage": 13
  },
  {
    "category": "Poverty",
    "subcategory": "live on less than 2 US dollars per day",
    "position": "left",
    "percentage": 48
  },
  {
    "category": "Poverty",
    "subcategory": "live on more than 2 US dollars per day",
    "position": "right",
    "percentage": 52
  },
  {
    "category": "Nutrition",
    "subcategory": "adequate or overweight",
    "position": "right",
    "percentage": 84
  },
  {
    "category": "Nutrition",
    "subcategory": "undernourished or starving",
    "position": "left",
    "percentage": 16
  },
  {
    "category": "Housing",
    "subcategory": "have no shelter",
    "position": "left",
    "percentage": 23
  },
  {
    "category": "Housing",
    "subcategory": "have a place to shelter",
    "position": "right",
    "percentage": 77
  }
 ]


 let peopleIcons = [
    {
      "part1": "m 46.004,21.672 c 5.975,0 10.836,-4.861 10.836,-10.836 C 56.84,4.861 51.979,0 46.004,0 40.029,0 35.169,4.861 35.169,10.836 c 0,5.975 4.86,10.836 10.835,10.836 z",
      "part2": "M 68.074,54.008 59.296,26.81 C 58.826,25.354 57.26,24.214 55.73,24.214 H 54.418 53.48 38.526 37.588 36.276 c -1.53,0 -3.096,1.14 -3.566,2.596 l -8.776,27.198 c -0.26,0.807 -0.152,1.623 0.297,2.24 0.449,0.617 1.193,0.971 2.041,0.971 h 2.25 c 1.53,0 3.096,-1.14 3.566,-2.596 l 2.5,-7.75 v 10.466 0.503 29.166 c 0,2.757 2.243,5 5,5 h 0.352 c 2.757,0 5,-2.243 5,-5 V 60.842 h 2.127 v 26.166 c 0,2.757 2.243,5 5,5 h 0.352 c 2.757,0 5,-2.243 5,-5 V 57.842 57.339 46.869 l 2.502,7.754 c 0.47,1.456 2.036,2.596 3.566,2.596 h 2.25 c 0.848,0 1.591,-0.354 2.041,-0.971 0.45,-0.617 0.556,-1.433 0.296,-2.24 z"  
    },
    {
      "part1": "m 49.437,19.672 c 5.424,0 9.836,-4.413 9.836,-9.836 C 59.273,4.413 54.861,0 49.437,0 c -5.423,0 -9.835,4.413 -9.835,9.836 0,5.423 4.411,9.836 9.835,9.836 z",
      "part2": "M 71.508,52.416 62.73,25.217 c -0.47,-1.456 -2.037,-2.596 -3.566,-2.596 h -2.127 c -0.031,0 -0.059,0.009 -0.09,0.01 -0.032,-0.001 -0.062,-0.01 -0.094,-0.01 h -14.83 c -0.058,0 -0.112,0.014 -0.169,0.017 -0.055,-0.003 -0.106,-0.017 -0.161,-0.017 h -1.654 c -1.53,0 -3.096,1.14 -3.566,2.596 l -8.777,27.198 c -0.26,0.807 -0.152,1.623 0.297,2.24 0.449,0.617 1.193,0.971 2.041,0.971 h 1.38 c 1.526,0 3.098,-1.135 3.579,-2.584 l 4.031,-12.159 v 6.562 c -0.678,0.403 -1.265,0.954 -1.616,1.572 l -6.617,11.684 c -0.414,0.73 -0.478,1.553 -0.175,2.258 0.302,0.705 0.942,1.226 1.757,1.43 l 7.232,1.809 v 29.005 c 0,2.206 1.794,4 4,4 h 0.976 c 2.206,0 4,-1.794 4,-4 V 68.348 c 0.34,0.033 0.699,0.052 1.069,0.052 0.472,0 0.925,-0.03 1.344,-0.083 v 26.886 c 0,2.206 1.794,4 4,4 h 0.976 c 2.206,0 4,-1.794 4,-4 V 66.08 l 6.542,-1.68 c 0.812,-0.208 1.45,-0.733 1.75,-1.44 0.3,-0.707 0.236,-1.53 -0.177,-2.259 L 61.468,49.017 C 61.118,48.398 60.53,47.848 59.852,47.445 V 40.56 l 4.336,12.505 c 0.499,1.437 2.08,2.562 3.6,2.562 h 1.382 c 0.848,0 1.591,-0.354 2.041,-0.971 0.449,-0.617 0.557,-1.434 0.297,-2.24 z"  
    },
 ]