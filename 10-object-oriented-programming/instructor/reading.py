class Reading:
    """ A class representing an atmospheric pressure reading from a smartphone's barometer """

    def __init__(self, value, unit_of_measurement, model, latitude, longitude, altitude):
        self.value = value
        self.unit_of_measurement  = unit_of_measurement
        self.latitude = latitude
        self.longitude = longitude
        self.altitude = altitude
        self.model = model

    def __str__(self):
        return "Reading: {} at {}, {}".format(self.value, self.latitude, self.longitude)

    def to_mbar(self):
        if self.unit_of_measurement == 'mbar':
            return self.value
        elif self.unit_of_measurement == 'atm':
            return self.value * 1013.25

r1 = Reading(100, 'mbar', 'samsung galaxy 10', 43, -79, 75)
print(r1.to_mbar())