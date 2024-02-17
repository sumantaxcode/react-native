import { View, Text, StyleSheet, FlatList, Button } from "react-native";
import React, { useMemo, useRef, useState } from "react";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { Stack } from "expo-router";
import appartments from "@assets/data/day5/appartments.json";
import CustomMarker from "@/components/day5/CustomMarker";
import AppartmentListItem from "@/components/day5/AppartmentListItem";
import BottomSheet, { BottomSheetFlatList } from "@gorhom/bottom-sheet";

const AirbnbScreen = () => {
  const [selectedAppartment, setSelectedAppartment] = useState(null);

  const [mapRegion, setMapRegion] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  const snapPoints = useMemo(() => [75, "25%", "50%", "90%"], []);
  const bottomSheetRef = useRef<BottomSheet>(null);

  const changeLatLong = (latitude: any, longitude: any) => {
    bottomSheetRef.current?.close();

    setMapRegion((prev) => {
      return {
        ...prev,
        latitude,
        longitude,
      };
    });
  };

  return (
    <View>
      <Stack.Screen options={{ headerShown: false }} />
      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        // initialRegion={mapRegion}
        region={mapRegion}
      >
        {appartments.map((appartment: any) => (
          <CustomMarker
            key={appartment.id}
            appartment={appartment}
            onPress={() => setSelectedAppartment(appartment)}
          />
        ))}
      </MapView>
      {/* Display Selected Appointment */}
      {selectedAppartment && (
        <View>
          <View style={{}}>
            <AppartmentListItem
              appointment={selectedAppartment}
              containerStyle={{
                position: "absolute",
                bottom: 100,
                right: 10,
                left: 10,
              }}
            />
          </View>
          <View
            style={{
              position: "absolute",
              bottom: 50,
              right: 10,
              left: 10,
            }}
          >
            <Button
              title="Open Modal"
              onPress={() => bottomSheetRef?.current?.expand()}
            />
          </View>
        </View>
      )}

      <BottomSheet
        ref={bottomSheetRef}
        index={1}
        snapPoints={snapPoints}
        // enablePanDownToClose
        // onChange={handleSheetChanges}
        enablePanDownToClose
        // detached={true}
      >
        <View style={{ flex: 1 }}>
          <Text style={styles.listTitle}>Over {appartments.length} places</Text>

          <BottomSheetFlatList
            data={appartments}
            contentContainerStyle={{ gap: 10, padding: 10 }}
            renderItem={({ item }) => (
              <AppartmentListItem
                appointment={item}
                changeLatLong={changeLatLong}
              />
            )}
          />
        </View>
      </BottomSheet>
    </View>
  );
};

const styles = StyleSheet.create({
  map: {
    width: "100%",
    height: "100%",
  },
  listTitle: {
    textAlign: "center",
    fontFamily: "InterBold",
    fontSize: 16,
    marginBottom: 15,
    marginVertical: 15,
  },
});
export default AirbnbScreen;
