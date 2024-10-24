import React from 'react'; 
import { View, StyleSheet, Text } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';
import AppartementList from '@/components/Home/AppartementList'; // Assurez-vous que le chemin est correct

const Page = () => {  // Définition correcte de la fonction Page
  return (
    <View style={styles.appContainer}>
      <View style={styles.greetingContainer}>
        <Text style={styles.greetingText}>Découvrir</Text>
        <AntDesign name="search1" size={30} color="black" />
      </View>
      <AppartementList />  {/* Utilisation correcte de AppartementList */}
    </View>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
  greetingContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 15,
    alignItems: "center",
    marginTop: 50,
    marginBottom: 30,
  },
  greetingText: {
    fontSize: 30,
    fontWeight: "600", 
  },
});

export default Page;  
