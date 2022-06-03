import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Components/Home';
import Login from './Components/Login';
import Dashboard from './Components/Dashboard';
import AddJob from './Components/AddJob';
import SignUp from './Components/Signup';
import AddTest from './Components/AddTest';
import PastPapers from './Components/PastPapers';
import AddFile from './Components/AddFile';
import AddVideo from './Components/AddVideo';
import DiscussionForm from './Components/DiscussionForm';
import UploadAttachments from './Components/UploadAttachments';
import ViewJobs from './Components/ViewJobs';
import ViewTest from './Components/ViewTest';
import ViewPaper from './Components/ViewPaper';
import ViewApplicants from './Components/ViewApplicants';
import ForgotPassword from './Components/ForgotPassword';
import ViewFile from './Components/ViewFile';
import ViewVideo from './Components/ViewVideo';
import Videos from './Components/Videos';
import ApplicantsDetails from './Components/ApplicantsDetails';
import MainDashboard from './Components/MainDashboard';
import UserDashboard from './Components/UserDashboard'
import ViewDiscussion from './Components/ViewDiscussion';
import ResponseForm from './Components/ResponseForm'

import { store } from './store';
import { Provider } from 'react-redux'

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="ViewApplicant" component={ViewApplicants} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="ApplicantDetails" component={ApplicantsDetails} />
        <Stack.Screen name="ViewVideo" component={ViewVideo} />
        <Stack.Screen name="UploadAttachments" component={UploadAttachments} />   
        <Stack.Screen name="ViewFile" component={ViewFile} />
        <Stack.Screen name="Video" component={Videos} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="ViewPaper" component={ViewPaper} />
        <Stack.Screen name="ViewTest" component={ViewTest} />
        <Stack.Screen name="ViewJobs" component={ViewJobs} />
        <Stack.Screen name="DiscussionForm" component={DiscussionForm} />
        <Stack.Screen name="AddVideo" component={AddVideo} />
        <Stack.Screen name="AddFile" component={AddFile} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="UserDashboard" component={UserDashboard} />
        <Stack.Screen name="PastPapers" component={PastPapers} />
        <Stack.Screen name="Signup" component={SignUp} />
        <Stack.Screen name="AddJob" component={AddJob} />
        <Stack.Screen name="AddTest" component={AddTest} />
        <Stack.Screen name="ViewDiscussion" component={ViewDiscussion} />
        <Stack.Screen name="ResponseForm" component={ResponseForm} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default () => {
  return(
    <Provider store={store}>
      <App />
    </Provider>
  )
}