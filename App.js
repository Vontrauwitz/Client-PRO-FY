// import React from 'react'
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { HamburgerMenu } from './src/components/main/HamburgerMenu'
import { OnBoard } from './src/components/main/OnBoard'
import { FormPacient } from './src/components/pacient/FormPacient'
import { FormProfessional } from './src/components/professional/FormProfessional'
import { HomePacient } from './src/components/pacient/HomePacient'
import { HomeProfessional } from './src/components/professional/HomeProfessional'
import { Provider } from 'react-redux'
import { store } from './src/store'
import { DatingStatuses } from './src/components/professional/DatingStatuses'
import { ProfessionalsList } from './src/components/pacient/ProfessionalsList'
import { QueriesHistorialPacientBasic } from './src/components/pacient/QueriesHistorialPacientBasic'
import { DatingStatusesBasic } from './src/components/professional/DatingStatusesBasic'
/* import { Loading } from './src/components/loading/Loading'; */
/* import { Queries } from './src/components/pacient/Queries' */
import { SignInScreen } from './src/components/SignIn/SignInScreen'
import { ListaConsultas } from './src/components/pacient/ListaConsultas'
import { QueriesDetail} from './src/components/pacient/QueriesDetail'
/* import { HomeProfessionalBasic } from './src/components/professional/HomeProfessionalBasic' */
import { ProfessionalDetail } from './src/components/pacient/ProfessionalDetail'
import { QueriesHistorialPacient } from './src/components/pacient/QueriesHistorialPacient'
import { PacientsList } from './src/components/professional/PacientsList'
import { GenerateQuery } from './src/components/pacient/GenerateQuery' 
import Toast from 'react-native-toast-message';
import { toastConfig }from './customNotificationConfig'
import {ConfirmEmailScreen} from './src/components/ConfirmEmailScreen/ConfirmEmailScreen'
const Stack = createStackNavigator()

export default function App() {

  return (
    // <React.StrictMode>
      <Provider store={store}>
        <NavigationContainer>
            <Stack.Navigator>
            <Stack.Screen
              name="OnBoard"
              component={OnBoard}/>
            <Stack.Screen
              name="HamburguerMenu"
              component={HamburgerMenu}/>
              <Stack.Screen
              name="SignInScreen"
              component={SignInScreen}/>
            <Stack.Screen
              name="FormPacient"
              component={FormPacient}/>
            <Stack.Screen
              name="HomePacient"
              component={HomePacient}/>
            <Stack.Screen
              name="FormProfessional"
              component={FormProfessional}/>
            <Stack.Screen
              name="HomeProfessional"
              component={HomeProfessional}/> 
            <Stack.Screen
              name="DatingStatuses"
              component={DatingStatuses}/>
            <Stack.Screen
              name="QueriesHistorialPacientBasic"
              component={QueriesHistorialPacientBasic}/>
            <Stack.Screen 
              name="DatingStatusesBasic"
              component={DatingStatusesBasic}/>
            <Stack.Screen
              name="ProfessionalsList"
              component={ProfessionalsList}/>
          {/*   <Stack.Screen
              name="Queries"
              component={Queries}/> */}
              <Stack.Screen
              name="QueriesHistorialPacient"
              component={QueriesHistorialPacient}/>  
              <Stack.Screen
              name="ProfessionalDetail"
              component={ProfessionalDetail}/>   
              <Stack.Screen
              name="GenerateQuery"
            component={GenerateQuery}/>   
              <Stack.Screen
              name="QueriesDetail"
            component={QueriesDetail}/>   
             {/*  component={GenerateQuery}/>  */}  
            <Stack.Screen
              name="PacientsList"
              component={PacientsList}/>   
            <Stack.Screen
              name="ListaConsultas"
              component={ListaConsultas}/>
          <Stack.Screen
              name="ConfirmEmailScreen"
              component={ConfirmEmailScreen}/> 
          </Stack.Navigator>  
          <Toast config={toastConfig} />
        </NavigationContainer>
      </Provider>
      // </React.StrictMode>
  );
}



