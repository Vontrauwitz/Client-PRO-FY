import {
  Text,
  StyleSheet,
  View,
  Image,
  TextInput,
  ScrollView,
  Button,
} from "react-native";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import theme from "../../theme";
import { SelectList } from "react-native-dropdown-select-list";
import { ButtonDating, ButtonGenerateQuery } from "../shared/Button";
import { useForm, Controller } from "react-hook-form";
import { TouchableOpacity } from "react-native-gesture-handler";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
export function GenerateQuery({ navigation }) {
  const [text, onChangeText] = useState("");
  const [modalitie, setModalitie] = useState("");
  const [payment, setPayment] = useState("");
  const [render, setRender] = useState(false);

  const dispatch = useDispatch();
  const queries = useSelector((state) => state.queries.queries);
  const modalities = useSelector((state) => state.queries.modalities);
  const payments = useSelector((state) => state.queries.payments);
  const fechaActual = new Date();

  const {
    getValues,
    register,
    setValue,
    handleSubmit,
    watch,
    control,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      tipoConsulta: "",
      ModalidadConsulta: "",
      Fecha: fechaActual,
      Pago: "",
    },
  });
  const [date, setDate] = useState(fechaActual);
  console.log(getValues(["Fecha"])[0]);
  const onSubmit = (data) => {
    console.log("entramos");
    console.log(data);

    navigation.navigate('SignInScreen')
  };

  const onChange = (arg) => {
    return {
      value: arg.nativeEvent.text,
    };
  };
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1, paddingBottom: 300 }}>
      <View style={styles.container}>
        <Text style={styles.text}>¿Que tipo de consulta desea?</Text>

        <Controller
          control={control}
          name={"tipoConsulta"}
          render={({
            field: { onChange, onBlur, value },
            fieldState: { error },
          }) => (
            <>
              <View style={{ width: "100%", paddingVertical: 30 }}>
                <TextInput
                  multiline={true}
                  numberOfLines={4}
                  onChangeText={onChange}
                  style={styles.textInput}
                  placeholder="Describa su problema"
                />
              </View>
            </>
          )}
        />
        <View style={{ paddingVertical: 10 }}>
          <Text style={styles.text}>Modalidad de consulta:</Text>
          {modalities.length > 0 ? (
            <SelectList
              boxStyles={{ backgroundColor: "#A8A7A3" }}
              setSelected={(val) => setValue("ModalidadConsulta", val)}
              data={modalities}
              save="value"
              inputStyles={{ fontSize: 12 }}
            />
          ) : (
            <Text>Loading...</Text>
          )}
        </View>
        <DatePicker
          selected={date}
          showTimeSelect
          onChange={(date) => {
            setValue("Fecha", date);
            setDate(date);
          }}
        />
        <View style={{ paddingVertical: 15 }}>
          <Text style={styles.text}>Modo de pago:</Text>
          {payments.length > 0 ? (
            <SelectList
              name=""
              ModalidadConsulta
              boxStyles={{ backgroundColor: "#A8A7A3" }}
              data={payments}
              save="value"
              setSelected={(val) => setValue("Pago", val)}
              label="Categories"
              inputStyles={{ fontSize: 12 }}
            />
          ) : (
            <Text>Loading...</Text>
          )}
        </View>
        <View style={{ alignItems: "center" }}>
          <ButtonGenerateQuery
            navigation={navigation}
            text={"Elegir Profesional"}
            color={theme.colors.secondaryText}
            backgroundColor={theme.colors.primaryColor}
          />
        </View>
        <View style={styles.button}>
          <TouchableOpacity onPress={handleSubmit(onSubmit)} />
          <Text style={{ color: theme.colors.secondaryText }}>
            Generar Consulta
          </Text>
          <TouchableOpacity />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
  },
  textInput: {
    backgroundColor: "#A8A7A3",
    borderRadius: 10,
    margin: 25,
  },
  button: {
    marginTop: 40,
    color: "white",
    height: 40,
    backgroundColor: theme.colors.primaryColor,
    borderRadius: 10,
    justifyContent: "center",
    padding: 10,
  },
});
