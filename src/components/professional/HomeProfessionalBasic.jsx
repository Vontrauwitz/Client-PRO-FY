import {
  View,
  Image,
  Button,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import React from "react";
import { CardProfessional } from "./CardProfessional";
import theme from "../../theme";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProfessionals } from "../../slices/professionalsActions";
import IconAntDesign from "react-native-vector-icons/AntDesign";
export function HomeProfessionalBasic({ navigation }) {
  const changePage = (direction, name) => {
    navigation.navigate(direction, {
      name: name,
    });
  };
  const professionals = useSelector((state) => state.professionals);
  const dispatch = useDispatch();
  useEffect(() => console.log(professionals), [professionals]);
  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={{ flexGrow: 1, paddingBottom: 300 }}>
        <View>
          <TouchableOpacity
            style={{
              backgroundColor: theme.colors.primaryColor,
              justifyContent: "center",
            }}
            title="Formulario Profesional"
            onPress={() =>
              navigation.navigate("FormProfessional", {
                name: "FormProfessional",
              })
            }
          ></TouchableOpacity>

          <View style={styles.container}>
            <Text
              style={{ fontSize: theme.fontSize.secondaryText, paddingTop: 15 }}
            >
              Hola,
            </Text>
            <Text
              style={{
                fontSize: theme.fontSize.primaryText,
                paddingBottom: 10,
                paddingLeft: 10,
              }}
            >
              Juan Dominguéz
            </Text>
            <View style={styles.estrella}>
              <TouchableOpacity>
                <IconAntDesign name="staro" />
              </TouchableOpacity>
              <TouchableOpacity>
                <IconAntDesign name="staro" />
              </TouchableOpacity>
              <TouchableOpacity>
                <IconAntDesign name="staro" />
              </TouchableOpacity>
              <TouchableOpacity>
                <IconAntDesign name="staro" />
              </TouchableOpacity>
              <TouchableOpacity>
                <IconAntDesign name="staro" />
              </TouchableOpacity>
              <TouchableOpacity>
                <IconAntDesign name="staro" />
              </TouchableOpacity>
            </View>
            <Text
              style={{
                fontSize: theme.fontSize.secondaryText,
                paddingVertical: 15,
              }}
            >
              Consulta del dia de hoy:
            </Text>
            <View style={{ paddingVertical: 10 }}>
              <CardProfessional
                navigation={navigation}
                /*  onpress={changePage(
                    "DatingStatusesBasic",
                    "DatingStatusesBasic"
                    )} */
              />
            </View>
            <View style={{ paddingVertical: 10 }}>
              <CardProfessional />
            </View>
            <View>
              <Text
                style={{
                  fontSize: theme.fontSize.secondaryText,
                  paddingVertical: 15,
                }}
              >
                Proximas Consultas:
              </Text>
              <View style={{ paddingVertical: 10 }}>
                <CardProfessional />
              </View>
              <View style={{ paddingVertical: 10, marginBottom: 10 }}>
                <CardProfessional />
              </View>
            </View>

            <Button
            title="Listado de Pacientes"
            onPress={() =>
              navigation.navigate("PacientsList", { name: "PacientsList" })
            }
            />

            <View style={{ paddingTop: 15 }}>
              <Text style={{ fontSize: theme.fontSize.secondaryText }}>
                Consultas de los Pacientes:
              </Text>
            </View>

            <View style={styles.containerComments}>
              <ScrollView horizontal={true}>
                <Image
                  source={{ uri: "https://reactjs.org/logo-og.png" }}
                  style={{ width: 400, height: 400 }}
                />
                <Image
                  source={{ uri: "https://reactjs.org/logo-og.png" }}
                  style={{ width: 400, height: 400 }}
                />
                <Image
                  source={{ uri: "https://reactjs.org/logo-og.png" }}
                  style={{ width: 400, height: 400 }}
                />
                <Image
                  source={{ uri: "https://reactjs.org/logo-og.png" }}
                  style={{ width: 400, height: 400 }}
                />
              </ScrollView>
              <View
                style={{ flexDirection: "row", paddingTop: 15, margin: 15 }}
              >
                <TextInput
                  style={styles.input}
                  placeholder="Responder Consultas"
                />

                <View style={{ justifyContent: "space-around" }}>
                  <TouchableOpacity style={styles.btn}>
                    <Text style={{ textAlign: "center" }}>Responder</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.containerComments}>
            <ScrollView>
              <View style={styles.comments}>
                <Text>COMENTARIOS</Text>
                <Text>COMENTARIOS</Text>
                <Text>COMENTARIOS</Text>
                <Text>COMENTARIOS</Text>
                <Text>COMENTARIOS</Text>
                <Text>COMENTARIOS</Text>
                <Text>COMENTARIOS</Text>
                <Text>COMENTARIOS</Text>
                <Text>COMENTARIOS</Text>
                <Text>COMENTARIOS</Text>
                <Text>COMENTARIOS</Text>
              </View>
            </ScrollView>
            <View
              style={{ textAlign: "center", width: 200, paddingBottom: 50 }}
            >
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("DatingStatusesBasic", {
                    name: "DatingStatusesBasic",
                  })
                }
                style={styles.btn}
              >
                <Text style={{ textAlign: "center" }}>Estado de Consultas</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 25,
  },
  containerComments: {
    width: "100%",
    height: 300,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
    borderRadius: 10,
    marginVertical: 40,
  },
  comments: {
    paddingBottom: 40,
    borderColor: "red",
    margin: 20,
  },
  btn: {
    backgroundColor: theme.colors.primaryColor,
    padding: theme.padding.padding10,
    borderRadius: theme.borderRadius.borderRadiusBotton,
    justifyContent: "flex-start",
  },
  input: {
    backgroundColor: theme.colors.secondaryText,
    width: "70%",
    padding: theme.padding.padding10,
    borderColor: "grey",
  },
  estrella: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
});
