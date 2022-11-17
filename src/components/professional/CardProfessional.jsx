import { Text, StyleSheet, View, Image, TouchableOpacity } from "react-native";
import theme from "../../theme";

export function CardProfessional({ navigation, query }) {
  
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row" }}>
        <Image
          style={styles.imageStyle}
          source={require("../../assets/foto.jpg")}
        />
        <View style={{ flexDirection: "column", alignItems: "center" }}>
          <Text
            style={{
              textAlign: "center",
              paddingTop: 10,
              fontWeight: "bold",
              fontSize: theme.fontSize.secondaryText,
            }}
          >
            {query.pacientName}
          </Text>
          <View>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("QueriesDetail", {
                  id: query.id,
                });
              }}
              style={styles.btn}
            >
              <Text style={{ color: "white" }}>Ver más {">"}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 280,
    height: 110,
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
  imageStyle: {
    height: 100,
    width: 100,
    zIndex: 1,
    marginLeft: 5,
    marginTop: 5,
  },
  btn: {
    paddingVertical: 10,
    paddingHorizontal: 30,
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
  text: {
    fontFamily: theme.fonts.main,
    fontSize: theme.fontSize.secondaryText,
  },
});
