import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  LayoutAnimation,
  Platform,
  UIManager,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { getProfessionals } from "../../slices/professionalsActions";
import { getQueries, deleteQuery } from "../../slices/queriesActions";
import { ButtonBlue, ButtonQueries } from "../shared/Button";
import theme from "../../theme";

// const Consultas=[
//                 {
//                     isExpanded:false,
//                     category_name:"Consulta 1",
//                     SubCAtegory:[
//                             {id:1, val:'datos 1 Consulta 1'},
//                             {id:2, val:'datos 2 Consulta 1'}
//                     ]
//                 },
//                 {
//                     isExpanded:false,
//                     category_name:"Consulta 2",
//                     SubCAtegory:[
//                             {id:3, val:'datos 1 Consulta 2'},
//                             {id:4, val:'datos 2 Consulta 2'}
//                     ]
//                 },
//                 {
//                     isExpanded:false,
//                     category_name:"Consulta 3",
//                     SubCAtegory:[
//                             {id:5, val:'datos 1 Consulta 3'},
//                             {id:6, val:'datos 2 Consulta 3'}
//                     ]
//                 }
//     ];

export function ListaConsultas({ navigation }) {
  const [multiSelect, setMultiSelect] = useState(false);
  const [render, setRender] = useState(false);

  // const [LIstaConsulta,setLIstaConsulta]=useState(Consultas);

  const queries = useSelector((state) => state.queries.queries);
  const professionals = useSelector(
    (state) => state.professionals.professionals
  );
  console.log(queries);
  const dispatch = useDispatch();

  useEffect(() => {
    if (professionals.length > 0) dispatch(getQueries(professionals));
  }, [professionals]);
  useEffect(() => {
    dispatch(getProfessionals());
  }, []);
  useEffect(() => {
    if (queries) setRender(true);
  }, [queries]);
  useEffect(() => {
    if (render) setRender(false);
  }, [render]);

  if (Platform.OS === "android") {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }

  // const upDateLayout=(index)=>{
  //         LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
  //         const array = []
  //         for (let i = 0; i < queries.length; i++) {
  //             let obj = queries[i]
  //             obj.isExpanded = false
  //             array.push(obj)
  //         }
  //         if(multiSelect){
  //             array[index]['isExpanded']=!array[index]['isExpanded']
  //         }else{
  //             array.map((value,placeIndex)=>(
  //                     placeIndex===index
  //                     ?(array[placeIndex]['isExpanded']=!array[placeIndex]['isExpanded'])
  //                     :(array[placeIndex]['isExpanded']=false)
  //             ) )
  //         }
  //         // setLIstaConsulta(array)
  // }

  const ExpandableComponent = (item) => {
    // const [layoutHeight,setLayoutHeight] = useState(0);
    // useEffect(()=>{
    //         if(item.item.isExpanded) setLayoutHeight(null);
    //         else setLayoutHeight(0);
    // },[item.item.isExpanded])
    return (
      <View style={{}}>
        <View style={{ padding: 10, flexDirection: "row" }}>
          <TouchableOpacity
            style={[styles.item, styles.btnQueries, styles.textQueries]}
            onPress={item.onPress}
          >
            <Text style={styles.itemText}>
              Consulta con el Dr. {item.item.doctorName}
            </Text>
          </TouchableOpacity>
          <View style={{ padding: 8 }}>
            <TouchableOpacity
              style={{ backgroundColor: "red" }}
              onPress={() => dispatch(deleteQuery(item.item.id))}
            >
              <Text
                style={{
                  textAlign: "center",
                  flexDirection: "column",
                  color: "white",
                }}
              >
                X
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* <View style={{ height: layoutHeight, overflow: 'hidden'}}> */}

        {/* <View style={{ height: '20', overflow: 'hidden'}}>
                        {
                                    <TouchableOpacity 
                                        style={styles.content} 
                                        title="Querie" 
                                        onPress={item.onPress}>
                                            <Text style={styles.text}>
                                                {item.item.description}
                                            </Text>
                                            <View style={styles.separator} />
                                    </TouchableOpacity>
                        }
                    </View> */}
      </View>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        {/* <View style={styles.header}> */}
        {/* <Text style={styles.titleText}>
                    LISTA DE CONSULTAS
                </Text>
                <TouchableOpacity 
                    onPress={()=>setMultiSelect(!multiSelect)}   
                >
                    <Text style={styles.headerButoon}>
                        {
                            multiSelect
                            ? 'Enable Single \n Expand'
                            : 'Enable multiple \n Expand'
                        }
                    </Text>
                </TouchableOpacity> */}
        {/* </View> */}
        <ScrollView>
          {queries?.map((item, key) => {
            return (
              <ExpandableComponent
                key={key}
                item={item}
                onPress={() =>
                  navigation.navigate("QueriesDetail", { id: `${item.id}` })
                }
                style={[
                  item.state[0] === "rejected"
                    ? styles.rejected
                    : item.state[0] === "resolved"
                    ? styles.resolved
                    : item.state[0] === "unresolved"
                    ? styles.unresolved
                    : styles.confirmed,
                ]}
                // onClickFunction={()=>{
                //     upDateLayout(key)
                //     }
                // }
              />
            );
          })}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    padding: 10,
  },
  headerButoon: {
    textAlign: "center",
  },
  titleText: {
    flex: 1,
    fontSize: 22,
    fontWeight: "bold",
  },
  item: {
    // backgroundColor:'orange',
    padding: 20,
  },
  itemText: {
    fontSize: 16,
    fontWeight: "500",
  },
  content: {
    paddingLeft: 10,
    paddingRight: 10,
    // backgroundColor:'#fff'
  },
  text: {
    fontSize: 16,
    padding: 10,
  },
  separator: {
    height: 0.5,
    backgroundColor: "#c8c8c8",
    width: "100%",
  },
  rejected: {
    backgroundColor: "red",
  },
  resolved: {
    backgroundColor: "blue",
  },
  unresolved: {
    backgroundColor: "yellow",
  },
  confirmed: {
    backgroundColor: "green",
  },
  btnQueries: {
    width: 200,
    height: 50,
    justifyContent: "center",
    borderRadius: theme.borderRadius.borderRadiusBotton,
  },

  textQueries: {
    color: "white",
    textAlign: "center",
  },
});
export default ListaConsultas;
