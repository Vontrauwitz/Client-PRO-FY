import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getSpecialties } from "../../slices/professionalsActions";
import {
  View,
  SafeAreaView,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import theme from "../../theme";
import { FontAwesome } from "@expo/vector-icons";
import { ButtonDating, ButtonQueries } from "../shared/Button";

export function CardPacient({
  id,
  first_name,
  last_name,
  country,
  specialty,
  navigation,
}) {
  return (
    <SafeAreaView>
      <View style={{ flexDirection: "row" }}>
        <View style={styles.container}>
          <View>
            <Image
              style={styles.image}
              source={require("../../assets/foto.jpg")}
            />
          </View>
          <View style={styles.description}>
            <Text style={styles.name}>
              {first_name} {last_name}
            </Text>
            <Text style={styles.speciality}>{specialty}</Text>
            <View style={{ flexDirection: "row" }}>
              <View>
                <Text style={styles.location}>{country}</Text>
                {/* <Text style={styles.phone}>{phone} */}
                {/* </Text> */}
                <View style={styles.star}>
                  <FontAwesome
                    style={{ paddingLeft: 5 }}
                    name="star-o"
                    size={15}
                    color="black"
                  />
                  <FontAwesome
                    style={{ paddingLeft: 5 }}
                    name="star-o"
                    size={15}
                    color="black"
                  />
                  <FontAwesome
                    style={{ paddingLeft: 5 }}
                    name="star-o"
                    size={15}
                    color="black"
                  />
                  <FontAwesome
                    style={{ paddingLeft: 5 }}
                    name="star-o"
                    size={15}
                    color="black"
                  />
                  <FontAwesome
                    style={{ paddingLeft: 5 }}
                    name="star-o"
                    size={15}
                    color="black"
                  />
                </View>
              </View>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("ProfessionalDetail", {
                    id: id,
                  });
                }}
                style={styles.btn}
              >
                <Text style={{ color: theme.colors.secondaryText }}>
                  Ver más {">"}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={{ marginLeft: 10, justifyContent: "center" }}>
          <ButtonDating
            color={theme.colors.secondaryText}
            text={"Seleccionar"}
            backgroundColor={theme.colors.primaryColor}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "space-evenly",
    flexDirection: "row",
    margin: 5,
    width: 320,
    height: 130,
    backgroundColor: "white",
    borderRadius: 10,
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,
    elevation: 14,
  },
  image: {
    height: 120,
    width: 100,
    marginLeft: 5,
    marginTop: 5,
  },
  description: {
    marginTop: 5,
    width: 200,
    height: 100,
  },
  name: {
    fontWeight: theme.fontWeights.bold,
    fontSize: theme.fontSize.primaryText,
  },
  speciality: {
    fontWeight: theme.fontWeights.normal,
    fontSize: theme.fontSize.secondaryText,
  },
  location: {
    fontWeight: theme.fontWeights.light,
    fontSize: theme.fontSize.secondaryText,
  },
  phone: {
    fontWeight: theme.fontWeights.light,
    fontSize: theme.fontSize.secondaryText,
  },
  star: {
    display: "flex",
    flexDirection: "row",
    paddingTop: 5,
  },
  btn: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: theme.colors.primaryColor,
    margin: 20,
    borderRadius: theme.borderRadius.borderRadiusBotton,
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,
    elevation: 14,
  },
});
