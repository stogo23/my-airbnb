// 
import { View, StyleSheet,ImageBackground, FlatList, Text } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';
import houseList from '@/assets/datas/datas-appartement.json';
import { sortRoutesWithInitial } from "expo-router/build/sortRoutes";

const Page = () => {
  console.log(houseList);

  return (
    <View style={styles.appContainer}>
      <View style={styles.greetingContainer}>
        <Text style={styles.greetingText}>Découvrir</Text>
        <AntDesign name="search1" size={30} color="black" />
      </View>

      <FlatList 
        data={houseList} 
        horizontal={true}
        contentContainerStyle={{gap:20}}
        renderItem={({ item }) => (
          <View style={styles.imageBlock}>
            <ImageBackground source={{uri: item.cover_image_url}} 
            resizeMode="cover"
            style={styles.ImageBackground}
            >
                <View style={{ flexDirection:"row"}}>
                <View style={ styles.tag }>
                <Text style={styles.tagText}>Enregistrer Nouvellement</Text>
                </View>
                </View>
            
            </ImageBackground>
              
              <View>
              <View>
                <Text>{item.location_city}</Text>

                 <View style={styles.tagContainer}></View>
              </View>
              </View>
            
          </View>
        )}
        keyExtractor={(item) => item.cover_image_url.toLowerCase().toString() + Math.floor(Math.random() *1000)  } 
      />
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
  },
  greetingText: {
    fontSize: 30,
    fontWeight: "600", // Utilisez "600" pour "semibold"
  },

  imageBlock:{
   width: 320
  },

  ImageBackground:{
    height:200,
    borderRadius:30,
    overflow: "hidden",
    padding:15,

  },

  tag: {
   padding:5,
   backgroundColor:"#4e5ac8",
   opacity: 0.9,
   borderRadius:30,
  },

  tagText:{
   color: "white",
   padding:4,
  },

  tagContainer:{
    backgroundColor: "grey",
    flexDirection:"row",
    alignItems: "center",
    gap: 5,
    borderRadius:5,
  },
});

export default Page;
